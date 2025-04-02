"use client";
import * as React from "react";

interface FileUploadPreviewProps {
  files: string[];
  onAddFile: (fileName: string) => void;
}

const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({
  files,
  onAddFile,
}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      // In a real application, you would handle file uploads here
      // For this demo, we'll just add the filename to the list
      onAddFile(fileList[0].name);
    }
  };

  return (
    <div className="mt-2.5">
      <div className="flex gap-1 text-xs items-center">
        <button
          type="button"
          onClick={handleFileButtonClick}
          aria-label="Ajouter des photos ou documents"
          className="flex items-center"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/872927278c6d40e4bb42cad9868a24a5/e02c1109a201691bd33847cb42faf6e338c89192?placeholderIfAbsent=true"
            alt=""
            className="object-contain shrink-0 w-8 aspect-square"
          />
          <span className="my-auto basis-auto">Photos / Documents</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,.pdf,.doc,.docx"
          aria-label="Télécharger des fichiers"
        />
      </div>

      {files.length > 0 && (
        <div className="flex gap-5 justify-between items-start px-2 pt-2 pb-5 mt-1.5 max-w-full text-xs whitespace-nowrap rounded-md bg-stone-900 w-[180px]">
          <ul className="mt-1 w-full">
            {files.map((file, index) => (
              <li key={index} className={index > 0 ? "mt-2.5" : ""}>
                {file}
              </li>
            ))}
          </ul>
          <div className="flex shrink-0 w-1 rounded-md bg-zinc-400 bg-opacity-30 h-[69px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
        </div>
      )}
    </div>
  );
};

export default FileUploadPreview;
