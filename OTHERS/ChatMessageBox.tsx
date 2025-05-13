"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useAttendanceStore from "@/store/useAttendanceStore";
import MessageButton from "./message/MessageButton";
import useAgentStore from "@/store/useAgentStore";
import MessageInput from "./message/MessageInput";
import MessagePickers from "./message/MessagePickers";
import useFileHandler from "@/hooks/useFileHandler";
import FilePreviewList from "./FilePreviewList";
import useModalForm from "@/hooks/useModalForm";
import dynamic from "next/dynamic";
import { MESSAGE_ORIGIN, MESSAGE_TYPE } from "@/constants/chatConstants";
import { newMessage, readMessage } from "@/services/mainApi/issues";
import { Editor as IEditor } from "@tiptap/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useShallow } from "zustand/react/shallow";
import { showToast } from "@/components/toast/ShowToast";
import { Messages } from "@/models/issues";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  AssetAttachmentType,
  isValidAttachmentType,
} from "@/utils/templates/assets";

const ChatAudioRecorder = dynamic(
  () => import("@/components/attendance/chat/inputs/ChatAudioRecorder"),
  { ssr: false },
);

interface ChatMEssageBoxProps {
  replyMessage: Messages | null;
  handleClearReplyToMessage: () => void;
}

interface AssetItem {
  file: null;
  file_key: string;
  url: string;
  has_attach: AssetAttachmentType;
}

const ChatMessageBox = ({
  replyMessage,
  handleClearReplyToMessage,
}: ChatMEssageBoxProps) => {
  const currentIssue = useAttendanceStore(
    useShallow((state) => state.currentIssue),
  );
  const itemsArray = useModalForm((state) => state.itemsArray);
  const paused = useAgentStore((state) => state.paused);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [startRecording, setStartRecording] = useState<boolean>(false);
  const [reviewText, setReviewText] = useState<boolean>(false);
  const [startAnswers, setStartAnswers] = useState<boolean>(false);
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [fileKey, setFileKey] = useState<string | null>(null);
  const [hasAttach, setHasAttach] = useState<string>("none");
  const [assetItems, setAssetItems] = useState<AssetItem[]>([]);

  const inputRef = useRef<HTMLTextAreaElement | any>(null);
  const editorRef = useRef<IEditor | null>(null);

  const messageSchema = z.object({
    message: z.string(),
  });

  type messageType = z.infer<typeof messageSchema>;

  const {
    control,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<messageType>({
    resolver: zodResolver(messageSchema),
    mode: "onBlur",
  });

  const message = watch("message");

  useEffect(() => {
    if (currentIssue?.id) {
      setValue("message", "");
    }
  }, [currentIssue?.id, setValue]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (event.target.value.startsWith("@")) {
        setStartAnswers(true);
      } else {
        setStartAnswers(false);
      }
      setValue("message", event.target.value);
    },
    [setValue],
  );

  const sendMessage = useCallback(
    async ({ message }: messageType) => {
      if (!currentIssue || message.trim() === "") return;

      try {
        const body =
          replyMessage && replyMessage.type === "text"
            ? `--------------- \n ${replyMessage.content}\n --------------- \n *${message}*`
            : message;

        const payload = {
          body,
          issue_id: currentIssue?.id,
          origin: MESSAGE_ORIGIN.AGENT,
          type: MESSAGE_TYPE.TEXT,
          file_key: fileKey,
          has_attach: hasAttach,
          caption: null,
          contacts: null,
        };

        if (currentIssue.total_unread > 0) {
          await readMessage(currentIssue.id);
        }
        const res = await newMessage(currentIssue?.id!, payload);
        if (res.status !== 200) {
          showToast({ type: "error", message: `${res.statusText}!` });
        } else {
          setIsMessageSent(true);
          handleClearReplyToMessage();
          if (editorRef.current) {
            setValue("message", "");
            reset();
          }
          setFileKey(null);
          setHasAttach("none");
          setAssetItems([]);
        }
      } catch (error) {
        showToast({ type: "error", message: "Erro ao enviar mensagem!" });
      }
    },
    [currentIssue, replyMessage, fileKey, hasAttach],
  );

  const handleThumbsUp = useCallback(async () => {
    sendMessage({ message: "👍" });
    setValue("message", "");
  }, [sendMessage, setValue]);

  const handleSend = useCallback(async () => {
    if (message === "" || isSending) return;

    setIsSending(true);

    try {
      const newMessage = message.trim();
      await sendMessage({ message: newMessage });
      setValue("message", "");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    } finally {
      setIsSending(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, sendMessage, isSending]);

  const handleKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter" && !event.shiftKey && !startAnswers) {
        event.preventDefault();
        setStartAnswers(false);
        handleSend();
        if (itemsArray && itemsArray?.length > 0) {
          HandleSendFiles();
        }
      } else if (event.key === "Enter" && event.shiftKey && startAnswers) {
        event.preventDefault();
        setStartAnswers(false);
        setValue("message", message + "\n");
        if (itemsArray && itemsArray?.length > 0) {
          HandleSendFiles();
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleSend, startAnswers],
  );

  const handleCancelRecording = useCallback(() => {
    setStartRecording(false);
  }, []);

  const handleChangeMessage = useCallback(
    (value: string) => {
      if (value.startsWith("@")) {
        setValue("message", value.replace("@", ""));
      } else {
        setValue("message", value);
      }
      setStartAnswers(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [setValue],
  );

  // const handleSelectQuickAnswer = useCallback(
  //   (data: {
  //     file_key?: string | null;
  //     has_attach?: AssetAttachmentType;
  //     url?: string;
  //   }) => {
  //     setFileKey(data.file_key || null);
  //     setHasAttach(data.has_attach || "none");

  //     if (data.file_key && data.url && data.has_attach) {
  //       const newItem: AssetItem = {
  //         file: null,
  //         file_key: data.file_key,
  //         url: data.url,
  //         has_attach: data.has_attach,
  //       };
  //       setAssetItems((prev) => [...prev, newItem]);
  //     }
  //   },
  //   [],
  // );

  const handleSelectQuickAnswer = useCallback(
    (data: { file_key?: string | null; has_attach?: string; url?: string }) => {
      const { file_key, has_attach, url } = data;

      const validHasAttach: AssetAttachmentType = isValidAttachmentType(
        has_attach,
      )
        ? has_attach
        : "none";

      setFileKey(file_key ?? null);
      setHasAttach(validHasAttach);

      if (file_key && url && isValidAttachmentType(has_attach)) {
        const newAsset: AssetItem = {
          file: null,
          file_key,
          url,
          has_attach: validHasAttach,
        };

        setAssetItems((prev) => [...prev, newAsset]);
      }
    },
    [],
  );

  const {
    selectedFile,
    fileComments,
    selectedIndex,
    fileUrls,
    handleFileSelect,
    handleRemoveClick,
    handleCommentChange,
    HandleSendFiles,
    hasItems,
  } = useFileHandler({
    currentIssue,
    itemsArray,
    setValue,
  });

  return (
    <>
      {startRecording && (
        <ChatAudioRecorder handleCancelRecording={handleCancelRecording} />
      )}
      {!startRecording && currentIssue?.channel !== "phone" && (
        <div className="absolute bottom-0 flex w-full items-center justify-evenly gap-2 rounded-[0.625rem] bg-primary-light p-2 dark:bg-primary-dark">
          <MessagePickers
            message={message}
            handleChangeMessage={handleChangeMessage}
            setReviewText={setReviewText}
            startAnswers={startAnswers}
            setStartRecording={setStartRecording}
            setStartAnswers={setStartAnswers}
          />
          <div className="flex w-full flex-col overflow-hidden rounded-[0.65rem] bg-secondary-light dark:bg-secondary-dark">
            {hasItems && (
              <FilePreviewList
                itemsArray={itemsArray as unknown as { file: File | null }[]}
                fileUrls={fileUrls}
                selectedFileIndex={selectedIndex!}
                handleRemoveClick={handleRemoveClick}
                handleFileSelect={handleFileSelect}
              />
            )}
            {selectedFile !== null ? (
              <input
                type="text"
                className="flex h-[40px] min-h-[40px] w-full items-center justify-center rounded-[0.65rem] border-none bg-secondary-light px-3 text-sm text-color-light shadow-sm placeholder:text-color-light focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-secondary-dark dark:text-color-dark dark:placeholder:text-color-dark"
                value={fileComments[selectedIndex!] || ""}
                onChange={(e) =>
                  handleCommentChange(selectedIndex!, e.target.value)
                }
              />
            ) : (
              <MessageInput
                message={message}
                handleInputChange={handleInputChange}
                handleKeyPress={handleKeyPress}
                handleChangeMessage={handleChangeMessage}
                startAnswers={startAnswers}
                inputRef={inputRef}
                editorRef={editorRef}
                control={control}
                errors={errors}
                isMessageSent={isMessageSent}
                setIsMessageSent={setIsMessageSent}
                replyMessage={replyMessage}
                handleClearReplyToMessage={handleClearReplyToMessage}
                paused={paused}
                onSelect={handleSelectQuickAnswer}
              />
            )}
          </div>
          <div>
            <MessageButton
              message={message}
              handleSend={handleSend}
              handleThumbsUp={handleThumbsUp}
              HandleSendFiles={HandleSendFiles}
              paused={paused}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(ChatMessageBox);
