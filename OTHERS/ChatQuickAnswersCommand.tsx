import React, { useCallback, useEffect, useRef, useState } from "react";
import { getAllQuickAnswers } from "@/services/mainApi/templates";
import { useDebouncedCallback } from "use-debounce";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getAssetById } from "@/services/mainApi/assets";
import { AssetAttachmentType } from "@/utils/templates/assets";

type ICommand = {
  id: number;
  name: string;
  message: string;
  asset_id?: number;
  has_attach?: AssetAttachmentType;
};

const normalizedMessage = (message: string) =>
  message
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[!?.,]/g, "");

interface ChatQuickAnswersCommandProps {
  startAnswers: boolean;
  message: string;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  onChange: (value: string) => void;
  onSelect?: (data: {
    file_key?: string | null;
    has_attach?: AssetAttachmentType;
    url?: string;
  }) => void;
}

const ChatQuickAnswersCommand = ({
  startAnswers,
  message,
  textAreaRef,
  onChange,
  onSelect,
}: ChatQuickAnswersCommandProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [commands, setCommands] = useState<any[]>([]);
  console.log("🚀 ~ commands:", commands);
  const [filteredCommands, setFilteredCommands] = useState<any[]>([]);
  const [highlightedCommandIndex, setHighlightedCommandIndex] =
    useState<number>(0);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    (async () => {
      const quickAnswersReq = await getAllQuickAnswers();
      const answers = quickAnswersReq.data.templates;
      setCommands(answers);
    })();
  }, []);

  const debouncedFilter = useDebouncedCallback((query: string) => {
    const filtered = commands.filter((command) =>
      normalizedMessage(command.message.toLowerCase()).startsWith(query),
    );
    setFilteredCommands(filtered);
    setHighlightedCommandIndex(0);
  }, 100);

  useEffect(() => {
    const shouldOpen = message?.startsWith("@") || startAnswers;
    setIsDropdownOpen(shouldOpen && filteredCommands.length > 0);
    if (shouldOpen) {
      debouncedFilter(message.slice(1));
    }
    if (textAreaRef.current && shouldOpen) {
      setTimeout(() => {
        textAreaRef.current!.focus();
        setIsDropdownOpen(true);
      }, 100);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message, startAnswers, textAreaRef]);

  // const handleSelectCommand = useCallback(
  //   (commandMessage: string) => {
  //     const atSymbolIndex = message.lastIndexOf("@");
  //     const newMessage = message.slice(0, atSymbolIndex + 1) + commandMessage;
  //     onChange(newMessage);
  //     setIsDropdownOpen(false);
  //     setFilteredCommands([]);
  //   },
  //   [onChange, message],
  // );

  const handleSelectCommand = useCallback(
    async (command: ICommand) => {
      const atSymbolIndex = message.lastIndexOf("@");
      const newMessage =
        message.slice(0, atSymbolIndex + 1) + (command.message || "");
      onChange(newMessage);

      // Sempre enviar o texto da mensagem
      let fileKey: string | undefined;
      let url: string | undefined;

      if (
        command.asset_id &&
        command.has_attach &&
        command.has_attach !== "none"
      ) {
        try {
          const response = await getAssetById(command.asset_id);
          console.log("🚀 ~ response:", response);
          if (response.success && response.data) {
            fileKey = response.data.file_key;
            url = response.data.signed_url;
          } else {
            console.error("Erro ao buscar asset", response.error);
          }
        } catch (error) {
          console.error("Erro ao buscar asset:", error);
        }
      }

      // Notifica o ChatMessageBox com ou sem asset
      onSelect?.({
        file_key: fileKey,
        has_attach: command.has_attach,
        url,
      });

      setIsDropdownOpen(false);
      setFilteredCommands([]);
    },
    [message, onChange, onSelect],
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isDropdownOpen) {
        if (e.key === "Enter" && filteredCommands.length > 0) {
          e.preventDefault();
          handleSelectCommand(
            filteredCommands[highlightedCommandIndex].message,
          );
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          setHighlightedCommandIndex((prevIndex) =>
            prevIndex < filteredCommands.length - 1 ? prevIndex + 1 : 0,
          );
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setHighlightedCommandIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : filteredCommands.length - 1,
          );
        }
      }
    },
    [
      filteredCommands,
      highlightedCommandIndex,
      isDropdownOpen,
      handleSelectCommand,
    ],
  );

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDropdownOpen, handleKeyDown]);

  if (filteredCommands.length === 0) return null;

  return (
    <Popover open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <PopoverTrigger className="absolute bottom-9 left-20 sm:left-48 xl:left-60">
        <p className="hidden">clique</p>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="absolute -left-[12.6rem] -top-36 z-50 h-32 w-96 overflow-auto rounded-t-md border-none bg-primary-light p-1 text-base shadow-none scrollbar dark:bg-primary-dark sm:-left-[18.3rem] sm:w-[28rem] md:w-[36rem] lg:-left-[18.4rem] xl:-left-[21.4rem] 2xl:w-[55rem]"
      >
        {filteredCommands.length > 0 ? (
          filteredCommands.map((command, index) => (
            <div
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              aria-label="Resposta rápida"
              key={command.id}
              // onMouseDown={(e) => {
              //   e.preventDefault();
              //   handleSelectCommand(command.message);
              // }}
              onMouseDown={(e) => {
                e.preventDefault();
                handleSelectCommand(command);
              }}
              className={`flex w-full cursor-pointer items-start justify-start px-0 py-0.5 text-blue-600 hover:bg-secondary-light focus:bg-secondary-light focus:text-blue-600 focus:outline-none dark:hover:bg-secondary-dark dark:focus:bg-secondary-dark dark:focus:text-blue-600 ${
                highlightedCommandIndex === index
                  ? "bg-secondary-light dark:bg-secondary-dark"
                  : ""
              }`}
            >
              <div className="w-full truncate">
                <span className="font-bold underline">{`${command.name} `}</span>
                <span className="text-sm font-semibold">
                  {`~ ${command.message}`}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Nenhum resultado encontrado
          </p>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default React.memo(ChatQuickAnswersCommand);
