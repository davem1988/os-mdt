"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import FileUploadPreview from "../FileUploadPreview";
import { useModal } from "@/state/ModalContext";
import InfractionsBox from "../InfractionsBox";
import OfficersBox from "../OfficersBox";
import { nuiCallback } from "@/lib/nuiCallback";

const NewInfractionModal = (citizen: any, initialOfficers: any[]) => {
  const { isOpen, type, openModal, closeModal } = useModal();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const [finesAmount, setFinesAmount] = useState<number>(0);
  const [jailTime, setJailTime] = useState<number>(0);
  const [officers, setOfficers] = useState<any[]>([]);
  const [infractions, setInfractions] = useState<any[]>([])

  useEffect(() => {
    setOfficers(initialOfficers);
  }, [])

  const handleInfractionsChanges = (amount: number, jail: number, allInfractions: any) => {
    setFinesAmount(amount);
    setJailTime(jail);
    setInfractions(allInfractions)
  }

  const handleOfficersChanges = (allOfficers: any) => {
    setOfficers(allOfficers);
  }

  const handleAddFile = (newFile: string) => {
    setFiles([...files, newFile]);
  };

  const handleRemoveFile = (newFiles: any[]) => {
    setFiles(newFiles);
  };

  const handleSubmit = () => {

    console.log(citizen)
    const dataToSend = {
      citizen: citizen,
      title: title,
      description: description,
      files: files,
      finesAmount: finesAmount,
      jailTime: jailTime,
      officers: officers,
      infractions: infractions
    }

    console.log(dataToSend)

    nuiCallback("/createNewInfraction", {dataToSend}, (result: any) => {
      console.log(result)
    });
  }

  return (
    <section
      className="absolute left-[25%] -top-[10%] rounded-none w-[800px] z-[1]"
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
                  className="text-base font-semibold max-md:ml-2.5 ml-2.5"
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

                  <FileUploadPreview files={files} onAddFile={handleAddFile} onRemoveFile={handleRemoveFile} />
                </form>
              </div>
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-10">
                <button className="self-end" aria-label="Close modal" onClick={closeModal}>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/872927278c6d40e4bb42cad9868a24a5/77492e6a47f180eb332d1831a823702616c51cb2?placeholderIfAbsent=true"
                    alt="Close"
                    className="object-contain rounded-none aspect-[1.07] w-[31px]"
                  />
                </button>
                <div className="flex gap-5 justify-between mt-16 max-md:mt-10">
                  <InfractionsBox onDroppedChanges={handleInfractionsChanges}/>
                  <OfficersBox onDroppedChanges={handleOfficersChanges} officersList={officers}/>
                </div>
                <div className="w-[170px] h-[150px] mt-2 text-xs flex flex-col">
                  <p className="mb-2">Amende Max: {`$${finesAmount}`}</p>
                  <p>Peine Max: {jailTime} Mois (minutes)</p>
                   
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between items-start mt-5 ml-3.5 w-full text-white whitespace-nowrap max-w-[596px] max-md:max-w-full">
          <p className="self-end mt-6 text-xs">*obligatoire</p>
          <div className="flex gap-5 self-start text-sm text-center">
            {/* <button
              type="button"
              className="px-10 py-2.5 bg-yellow-700 rounded-md max-md:px-5"
              aria-label="Modifier l'infraction"
            >
              Modifier
            </button> */}
            <button
              type="button"
              className="px-6 py-2 bg-lime-700 rounded-md max-md:px-5"
              aria-label="Sauvegarder l'infraction"
              onClick={handleSubmit}
            >
              Sauvegarder
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInfractionModal;
