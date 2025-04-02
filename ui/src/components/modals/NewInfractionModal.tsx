"use client";
import * as React from "react";
import { useState } from "react";
import FileUploadPreview from "../FileUploadPreview";

const NewEntryModal: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<string[]>([
    "photo_coffre.png",
    "photo_coffre.png",
  ]);

  const handleAddFile = (newFile: string) => {
    setFiles([...files, newFile]);
  };

  return (
    <section
      className="absolute rounded-none max-w-[757px]"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="py-2.5 pr-4 pl-px w-full rounded-md border border-white border-solid bg-purple-950 bg-opacity-90 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-white max-md:mt-10">
                <h2
                  id="modal-title"
                  className="text-base font-semibold max-md:ml-2.5"
                >
                  Nouvelle infraction
                </h2>
                <div className="flex shrink-0 h-0.5 rounded-none w-[174px]" />
                <form className="flex flex-col items-start self-stretch pl-3.5 mt-5 w-full text-sm">
                  <label htmlFor="title" className="font-semibold">
                    Titre*
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Braquage, agression,..."
                    className="px-2 py-2.5 max-w-full text-xs rounded-md bg-stone-900 text-neutral-400 w-[255px] max-md:pr-5"
                  />

                  <label htmlFor="description" className="mt-2 font-semibold">
                    Description*
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Merci de rédiger de manière claire et lisible"
                    className="self-stretch px-2.5 pt-2 pb-44 text-xs rounded-md bg-stone-900 text-neutral-400 max-md:pr-5 max-md:pb-28 w-full resize-none"
                  />

                  <FileUploadPreview files={files} onAddFile={handleAddFile} />
                </form>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <button className="self-end" aria-label="Close modal">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/872927278c6d40e4bb42cad9868a24a5/77492e6a47f180eb332d1831a823702616c51cb2?placeholderIfAbsent=true"
                    alt="Close"
                    className="object-contain rounded-none aspect-[1.07] w-[31px]"
                  />
                </button>
                <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/872927278c6d40e4bb42cad9868a24a5/54cf85ae05a4f47691dbae5257f3cb356e6a26d9?placeholderIfAbsent=true"
                    alt="Decorative image"
                    className="object-contain shrink-0 max-w-full rounded-none aspect-[0.51] w-[158px]"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/872927278c6d40e4bb42cad9868a24a5/895718cf358ae3a6446e843a27d85fa6ea1dd0cb?placeholderIfAbsent=true"
                    alt="Decorative image"
                    className="object-contain shrink-0 self-start max-w-full rounded-none aspect-[0.61] w-[152px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-5 ml-3.5 w-full text-white whitespace-nowrap max-w-[596px] max-md:max-w-full">
          <p className="self-end mt-6 text-xs">*obligatoire</p>
          <div className="flex gap-5 self-start text-sm text-center">
            <button
              type="button"
              className="px-10 py-2.5 bg-yellow-700 rounded-md max-md:px-5"
              aria-label="Modifier l'infraction"
            >
              Modifier
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-lime-700 rounded-md max-md:px-5"
              aria-label="Sauvegarder l'infraction"
            >
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEntryModal;
