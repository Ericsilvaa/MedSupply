// import React from "react";
// import Image from "next/image";
// import { File } from "lucide-react";
// import { extractFileType } from "@/utils/chatUtils";
// import { XIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { PiFileAudio } from "react-icons/pi";
// // import { SiMicrosoftexcel } from "react-icons/si";
// import { ImFilePdf } from "react-icons/im";

// interface FilePreviewListProps {
//   itemsArray: { file: File | null }[];
//   fileUrls: string[];
//   selectedFileIndex: number;
//   handleRemoveClick: (index: number) => void;
//   handleFileSelect: (index: number, file: File) => void;
// }

// const FilePreviewList = ({
//   itemsArray,
//   fileUrls,
//   handleRemoveClick,
//   selectedFileIndex,
//   handleFileSelect,
// }: FilePreviewListProps) => {
//   return (
//     <div className="h-auto w-full items-center justify-center gap-2 overflow-x-auto scrollbar">
//       <div
//         className={cn(
//           "flex h-full w-max items-center justify-center gap-2 px-2 py-2",
//         )}
//       >
//         {itemsArray &&
//           itemsArray.map((item, index) => {
//             const fileType = extractFileType(item.file?.type, 0);
//             const fileType1 = extractFileType(item.file?.type, 1);

//             return (
//               <div key={index} className="cursor-pointer">
//                 <div
//                   className={cn(
//                     "relative h-[3.25rem] w-[3.25rem] rounded-md",
//                     selectedFileIndex === index &&
//                       "ring-2 ring-orange-light dark:ring-orange-dark",
//                   )}
//                 >
//                   <div className="absolute -right-1 -top-1 z-5 flex size-5 items-center justify-center rounded-full bg-secondary-light dark:bg-secondary-dark">
//                     <div className="z-5 flex size-4 items-center justify-center rounded-full bg-primary-dark dark:bg-primary-light">
//                       <XIcon
//                         onClick={() => handleRemoveClick(index)}
//                         className="size-3 text-white hover:text-[#FF0404] dark:text-primary-dark dark:hover:text-[#FF0404]"
//                       />
//                     </div>
//                   </div>
//                   {fileType === "image" && (
//                     <Image
//                       className="h-[3.25rem] w-[3.25rem] rounded-md object-cover"
//                       src={fileUrls[index]}
//                       alt={`Selected ${index}`}
//                       width={52}
//                       height={52}
//                       onClick={() => handleFileSelect(index, item.file as File)}
//                     />
//                   )}
//                   {fileType === "video" && (
//                     <video
//                       className="h-[3.25rem] w-[3.25rem] rounded-md object-cover"
//                       onClick={() => handleFileSelect(index, item.file as File)}
//                       src={fileUrls[index]}
//                     />
//                   )}
//                   {["application", "text"].includes(fileType) && (
//                     <div
//                       className="flex h-[3.25rem] w-[3.25rem] cursor-pointer items-center justify-center rounded-md bg-primary-light p-1.5 text-gray-300 dark:bg-primary-dark dark:text-color-dark"
//                       onClick={() => handleFileSelect(index, item.file as File)}
//                     >
//                       {/* {fileType1 ===
//                         "vnd.openxmlformats-officedocument.spreadsheetml.sheet" && (
//                         <SiMicrosoftexcel className="size-6 text-[#0fa37f]" />
//                       )} */}
//                       {fileType1 === "pdf" && (
//                         <ImFilePdf className="size-6 text-[#e01518]" />
//                       )}
//                       {fileType1 !== "pdf" &&
//                         fileType1 !==
//                           "vnd.openxmlformats-officedocument.spreadsheetml.sheet" && (
//                           <File size={24} />
//                         )}
//                     </div>
//                   )}
//                   {fileType === "audio" && (
//                     <div
//                       className="flex h-[3.25rem] w-[3.25rem] cursor-pointer items-center justify-center rounded-md bg-primary-light p-1.5 text-gray-300 dark:bg-primary-dark dark:text-color-dark"
//                       onClick={() => handleFileSelect(index, item.file as File)}
//                     >
//                       <PiFileAudio size={24} />
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default FilePreviewList;

// import React from "react";
// import Image from "next/image";
// import { File as FileIcon } from "lucide-react";
// import { PiFileAudio } from "react-icons/pi";
// import { ImFilePdf } from "react-icons/im";
// import { XIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { extractFileType } from "@/utils/chatUtils";

// interface FilePreviewListProps {
//   itemsArray: { file: File | null }[];
//   fileUrls: string[];
//   selectedFileIndex: number;
//   handleRemoveClick: (index: number) => void;
//   handleFileSelect: (index: number, file: File | null) => void;
//   isAsset?: boolean; // novo prop
// }

// const FilePreviewList = ({
//   itemsArray,
//   fileUrls,
//   selectedFileIndex,
//   handleRemoveClick,
//   handleFileSelect,
//   isAsset = false,
// }: FilePreviewListProps) => {
//   return (
//     <div className="h-auto w-full items-center justify-center gap-2 overflow-x-auto scrollbar">
//       <div className="flex h-full w-max items-center justify-center gap-2 px-2 py-2">
//         {itemsArray.map((item, index) => {
//           const file = item.file;
//           const fileType = extractFileType(file?.type, 0);
//           const fileSubtype = extractFileType(file?.type, 1);
//           const fileUrl = fileUrls[index];

//           const isSelected = selectedFileIndex === index;
//           const handleClick = () => handleFileSelect(index, file);

//           const imagePreview = (
//             <Image
//               className="h-[3.25rem] w-[3.25rem] rounded-md object-cover"
//               src={fileUrl}
//               alt={`Preview ${index}`}
//               width={52}
//               height={52}
//               onClick={() => handleFileSelect(index, isAsset ? null : file)}
//             />
//           );

//           const videoPreview = (
//             <video
//               className="h-[3.25rem] w-[3.25rem] rounded-md object-cover"
//               src={fileUrl}
//               onClick={handleClick}
//             />
//           );

//           const fileIconPreview = (
//             <div
//               className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-md bg-primary-light p-1.5 text-gray-300 dark:bg-primary-dark dark:text-color-dark"
//               onClick={handleClick}
//             >
//               {fileSubtype === "pdf" ? (
//                 <ImFilePdf className="size-6 text-[#e01518]" />
//               ) : (
//                 <FileIcon size={24} />
//               )}
//             </div>
//           );

//           const audioPreview = (
//             <div
//               className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-md bg-primary-light p-1.5 text-gray-300 dark:bg-primary-dark dark:text-color-dark"
//               onClick={handleClick}
//             >
//               <PiFileAudio size={24} />
//             </div>
//           );

//           return (
//             <div key={index} className="cursor-pointer">
//               <div
//                 className={cn(
//                   "relative h-[3.25rem] w-[3.25rem] rounded-md",
//                   isSelected &&
//                     "ring-2 ring-orange-light dark:ring-orange-dark",
//                 )}
//               >
//                 {/* Remover arquivo */}
//                 <div className="absolute -right-1 -top-1 z-10">
//                   <div className="flex size-5 items-center justify-center rounded-full bg-secondary-light dark:bg-secondary-dark">
//                     <div className="flex size-4 items-center justify-center rounded-full bg-primary-dark dark:bg-primary-light">
//                       <XIcon
//                         onClick={() => handleRemoveClick(index)}
//                         className="size-3 text-white hover:text-[#FF0404] dark:text-primary-dark dark:hover:text-[#FF0404]"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Previews */}
//                 {fileUrl &&
//                   (isAsset
//                     ? imagePreview
//                     : fileType === "image"
//                       ? imagePreview
//                       : fileType === "video"
//                         ? videoPreview
//                         : fileType === "audio"
//                           ? audioPreview
//                           : fileIconPreview)}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default React.memo(FilePreviewList);

import React from "react";
import Image from "next/image";
import { File } from "lucide-react";
import { extractFileType } from "@/utils/chatUtils";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { PiFileAudio } from "react-icons/pi";
import { ImFilePdf } from "react-icons/im";

interface FilePreviewListProps {
  itemsArray: { file: File | null }[];
  fileUrls: string[];
  selectedFileIndex: number;
  handleRemoveClick: (index: number) => void;
  handleFileSelect: (index: number, file: File | null) => void;
}

const FilePreviewList = ({
  itemsArray,
  fileUrls,
  selectedFileIndex,
  handleRemoveClick,
  handleFileSelect,
}: FilePreviewListProps) => {
  return (
    <div className="h-auto w-full items-center justify-center gap-2 overflow-x-auto scrollbar">
      <div className="flex h-full w-max items-center justify-center gap-2 px-2 py-2">
        {itemsArray.map((item, index) => {
          const file = item.file;
          const fileType = extractFileType(file?.type, 0);
          const fileSubtype = extractFileType(file?.type, 1);
          const isAsset = file === null;
          const url = fileUrls[index];

          const commonClasses = cn(
            "relative h-[3.25rem] w-[3.25rem] rounded-md",
            selectedFileIndex === index &&
              "ring-2 ring-orange-light dark:ring-orange-dark",
          );

          return (
            <div key={index} className="cursor-pointer">
              <div className={commonClasses}>
                <div className="absolute -right-1 -top-1 z-5 flex size-5 items-center justify-center rounded-full bg-secondary-light dark:bg-secondary-dark">
                  <div className="z-5 flex size-4 items-center justify-center rounded-full bg-primary-dark dark:bg-primary-light">
                    <XIcon
                      onClick={() => handleRemoveClick(index)}
                      className="size-3 text-white hover:text-[#FF0404] dark:text-primary-dark dark:hover:text-[#FF0404]"
                    />
                  </div>
                </div>

                {url && (
                  <>
                    {/* 🖼️ Asset ou imagem */}
                    {(isAsset || fileType === "image") && (
                      <Image
                        className="h-[3.25rem] w-[3.25rem] rounded-md object-cover"
                        src={url}
                        alt={`Preview ${index}`}
                        width={52}
                        height={52}
                        onClick={() => handleFileSelect(index, file)}
                      />
                    )}

                    {/* 🎥 Vídeo */}
                    {!isAsset && fileType === "video" && (
                      <video
                        className="h-[3.25rem] w-[3.25rem] rounded-md object-cover"
                        src={url}
                        onClick={() => handleFileSelect(index, file)}
                      />
                    )}

                    {/* 📄 Documento ou texto */}
                    {!isAsset &&
                      ["application", "text"].includes(fileType!) && (
                        <div
                          className="flex h-[3.25rem] w-[3.25rem] cursor-pointer items-center justify-center rounded-md bg-primary-light p-1.5 text-gray-300 dark:bg-primary-dark dark:text-color-dark"
                          onClick={() => handleFileSelect(index, file)}
                        >
                          {fileSubtype === "pdf" ? (
                            <ImFilePdf className="size-6 text-[#e01518]" />
                          ) : (
                            <File size={24} />
                          )}
                        </div>
                      )}

                    {/* 🔊 Áudio */}
                    {!isAsset && fileType === "audio" && (
                      <div
                        className="flex h-[3.25rem] w-[3.25rem] cursor-pointer items-center justify-center rounded-md bg-primary-light p-1.5 text-gray-300 dark:bg-primary-dark dark:text-color-dark"
                        onClick={() => handleFileSelect(index, file)}
                      >
                        <PiFileAudio size={24} />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilePreviewList;
