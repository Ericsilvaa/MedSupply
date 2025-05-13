import React, {
  ChangeEvent,
  RefObject,
  KeyboardEvent,
  SetStateAction,
  useMemo,
} from "react";
import useAttendanceStore from "@/store/useAttendanceStore";
import dynamic from "next/dynamic";
import { Editor as IEditor } from "@tiptap/react";
import { Control, FieldErrors } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Messages, OriginalMessage } from "@/models/issues";
import { ChatMessagesRepliedTypes } from "../../messages/ChatMessagesRepliedTypes";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AssetAttachmentType } from "@/utils/templates/assets";

const Editor = dynamic(() => import("@/components/editor/Editor"), {
  ssr: false,
});

const ChatQuickAnswersCommand = dynamic(
  () => import("@/components/attendance/chat/inputs/ChatQuickAnswersCommand"),
  {
    ssr: false,
  },
);

interface MessageInputProps {
  message: string;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyPress: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  handleChangeMessage: (value: string) => void;
  startAnswers: boolean;
  inputRef: RefObject<HTMLTextAreaElement>;
  editorRef: RefObject<IEditor | null>;
  control: Control<
    {
      message: string;
    },
    any
  >;
  errors: FieldErrors<{
    message: string;
  }>;
  isMessageSent: boolean;
  setIsMessageSent: (value: SetStateAction<boolean>) => void;
  replyMessage: Messages | null;
  handleClearReplyToMessage: () => void;
  paused: boolean;
  onSelect?: (data: {
    file_key?: string | null;
    has_attach?: AssetAttachmentType;
    url?: string;
  }) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  message,
  handleInputChange,
  handleKeyPress,
  handleChangeMessage,
  startAnswers,
  inputRef,
  editorRef,
  control,
  errors,
  isMessageSent,
  setIsMessageSent,
  replyMessage,
  handleClearReplyToMessage,
  paused,
  onSelect,
}) => {
  const currentIssue = useAttendanceStore((state) => state.currentIssue);

  const isInactive = currentIssue?.inactive;

  const memoChannel = useMemo(
    () => currentIssue?.channel,
    [currentIssue?.channel],
  );

  const isDisabled = currentIssue?.status === "bot" || paused || isInactive;

  return (
    <div key="input" className="relative w-full">
      {memoChannel !== "email" && (
        <ChatQuickAnswersCommand
          startAnswers={startAnswers}
          message={message}
          textAreaRef={inputRef}
          onChange={handleChangeMessage}
          onSelect={onSelect}
        />
      )}
      {replyMessage && (
        <div className="mb-1 rounded-[0.65rem] bg-secondary-light ring-4 ring-primary-light dark:bg-secondary-dark dark:ring-primary-dark">
          <div className="flex justify-between rounded-[0.65rem] border-l-4 border-orange-light p-0.5 pl-2">
            {/* Ajustar props */}
            <ChatMessagesRepliedTypes
              message={replyMessage as unknown as OriginalMessage}
            />
            <button type="button" onClick={handleClearReplyToMessage}>
              <IoIosCloseCircleOutline className="h-5 w-5 text-[#FF0404]" />
            </button>
          </div>
        </div>
      )}
      {memoChannel === "email" && (
        <Editor
          id="message"
          name="message"
          mutableRefObject={editorRef}
          ref={editorRef}
          control={control}
          errors={errors}
          value={message}
          defaultValue={message}
          onContentChange={handleChangeMessage}
          setIsMessageSent={setIsMessageSent}
          isMessageSent={isMessageSent}
          isMention
          isActiveMenuBar={false}
          required={false}
          isChat
          isHTML
        />
      )}
      {memoChannel !== "email" && (
        <Textarea
          autoComplete="off"
          value={message?.replace(/<[^>]*>?/gm, "")}
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          defaultValue={message}
          name="message"
          aria-label="input-message"
          placeholder=""
          disabled={isDisabled}
          className={
            paused || isInactive
              ? "max-h-24 w-full cursor-not-allowed resize-none opacity-40"
              : "max-h-24 w-full resize-none"
          }
        ></Textarea>
      )}
    </div>
  );
};

export default React.memo(MessageInput);
