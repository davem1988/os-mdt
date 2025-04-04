"use client";
import * as React from "react";

interface FileUploadPreviewProps {
  files: string[];
  onAddFile: (fileName: string) => void;
  onRemoveFile: (files: any[]) => void;
}

const FileUploadPreview: React.FC<FileUploadPreviewProps> = ({
  files,
  onAddFile,
  onRemoveFile,
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

  const handleRemoveFile = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    const newFiles = files.filter((_, fileIdx) => fileIdx !== index);
    onRemoveFile(newFiles);
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
        <div className="flex gap-5 justify-between items-start px-2 pt-2 pb-5 mt-1.5 max-w-full text-xs whitespace-nowrap rounded-md bg-stone-900 w-[180px] h-[110px] max-h-[110px] overflow-x-auto">
          <ul className="w-full">
            {files.map((file, index) => (
              <li key={index} className="mt-2.5 bg-[#4444445e] p-1 rounded flex justify-between">
                {file}
                <button 
                  className="self-end" 
                  aria-label="Close modal" 
                  onClick={(e) => handleRemoveFile(index, e)}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/872927278c6d40e4bb42cad9868a24a5/77492e6a47f180eb332d1831a823702616c51cb2?placeholderIfAbsent=true"
                    alt="Close"
                    className="object-contain rounded-full aspect-[1.07] w-[17px]"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUploadPreview;
