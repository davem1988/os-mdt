"use client";

import React, { useState, useMemo, useEffect } from "react";
import { CitizenInfo } from "@/lib";
import { formatDateToFrench } from "@/lib";
import Image from "next/image";
import { useModal } from "@/state/ModalContext";

interface SearchSectionProps {
  initialCitizen?: CitizenInfo;
  players: any;
  vehicles: any;
}

const SearchSection: React.FC<SearchSectionProps> = ({ initialCitizen, players, vehicles }) => {
  const { isOpen, type, openModal, closeModal } = useModal();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCitizen, setSelectedCitizen] = useState<any>(null);
  const [selectedCharinfo, setSelectedCharinfo] = useState<any>(null);
  const [playerInfractions, setPlayerInfractions] = useState<any[]>([]);
  const [playerVehicles, setPlayerVehicles] = useState<any[]>([]);

  useEffect(() => {
    const savedCitizen = localStorage.getItem("selectedCitizen");
    if (savedCitizen) {
      const parsedCitizen = JSON.parse(savedCitizen);
      console.log(parsedCitizen)
      setSelectedCitizen(parsedCitizen);
      setSelectedCharinfo(JSON.parse(parsedCitizen.charinfo));
    }
  }, []);

  const handleSelectCitizen = (player: any) => {
    const charinfo = JSON.parse(player.charinfo);
    setSelectedCitizen(player);
    setSelectedCharinfo(charinfo);

    // Sauvegarder dans localStorage
    localStorage.setItem("selectedCitizen", JSON.stringify(player));
  };

  

  // Filter players and vehicles based on search query
  const filteredPlayers = useMemo(() => {
    return players?.filter((player: any) => {
      // Parse the charinfo string into an object
      const charinfo = JSON.parse(player.charinfo);
      const fullName = `${charinfo.firstname} ${charinfo.lastname}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, players]);

  const filteredVehicles = useMemo(() => {
    return vehicles?.filter((vehicle: any) =>
      vehicle.plate.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, vehicles]);

  return (
    <section
      className="grow py-5 pr-7 pl-3.5 w-full rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:mt-5 max-md:max-w-full h-[650px] backdrop-blur-sm"
      aria-labelledby="search-section-title"
    >
      <div className="flex gap-5 max-md:flex-col">
        {/* Search column */}
        <div className="w-[44%] max-md:ml-0 max-md:w-full">
          <div className="w-full max-md:mt-9">
            <label htmlFor="citizen-search" className="sr-only">
              Rechercher un citoyen
            </label>
            <input
              id="citizen-search"
              type="text"
              className="px-2 py-2.5 w-full text-sm rounded-md bg-zinc-300 text-neutral-400 max-md:pr-5"
              placeholder="tapez un nom, n° de plaque..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="flex gap-1 px-1.5 py-2 mt-6 rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col self-start mt-3 w-full text-sm text-white">
                {/* Only render if searchQuery is not empty */}
                {searchQuery ? (
                  <>
                    {/* Display players based on the search query */}
                    {filteredPlayers && filteredPlayers.length > 0 && filteredPlayers.map((player: any, index: any) => {
                      const charinfo = JSON.parse(player.charinfo);
                      return selectedCitizen && charinfo.firstname == selectedCharinfo.firstname && charinfo.lastname == selectedCharinfo.lastname ? (
                        <div 
                          key={index} 
                          className="flex items-center rounded-xl bg-zinc-300 bg-opacity-20 mt-2"
                          onClick={() => handleSelectCitizen(player)}
                        >
                          <h3 className="self-start ml-2.5 pt-2.5 pb-2.5 cursor-pointer">
                            {charinfo.firstname} {charinfo.lastname}
                          </h3>
                        </div>
                      ) : (
                        <div 
                          key={index} 
                          className="flex items-center rounded-xl hover:bg-zinc-300 hover:bg-opacity-10 mt-2" 
                          onClick={() => handleSelectCitizen(player)}
                        >
                          <h3 className="self-start ml-2.5 pt-2.5 pb-2.5 cursor-pointer">
                            {charinfo.firstname} {charinfo.lastname}
                          </h3>
                        </div>
                      );
                    })}

                    {/* Display vehicles based on the search query */}
                    {filteredVehicles && filteredVehicles.length > 0 && filteredVehicles.map((vehicle: any, index: any) => (
                      <div className="rounded-xl hover:bg-zinc-300 bg-opacity-10" key={index} onClick={() => console.log(`Selected vehicle: ${vehicle.plate}`)}>
                        <h3 className="self-start ml-2.5 pt-1 pb-2.5 cursor-pointer">{vehicle.plate}</h3>
                      </div>
                    ))}
                  </>
                ): (<div className="text-center">Veuillez effectuer une recherche...</div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Results column */}
        {selectedCitizen ? (<div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          {/* Render citizen details */}
          <div className="flex flex-col w-full max-md:mt-9">
            <div className="flex gap-4 w-[100%]">
              <div className="w-[75%] flex flex-col items-start py-3 pr-28 pl-3 rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5">
                <h3 className="text-sm font-bold text-white">{selectedCitizen ? `${selectedCharinfo.firstname} ${selectedCharinfo.lastname}` : 'No Data'}</h3>
                <p className="mt-3.5 text-sm text-white">{selectedCitizen ? `Né le ${formatDateToFrench(selectedCharinfo.birthdate)}` : 'No Data'}</p>
              </div>
              <img
                src={selectedCitizen && selectedCitizen.photoUrl ? selectedCitizen.photoUrl : 'https://static.vecteezy.com/system/resources/thumbnails/003/780/897/small/silhouette-of-anonymous-man-with-question-mark-in-mugshot-or-police-lineup-background-vector.jpg'}
                className="object-cover shrink-0 rounded-md aspect-[0.9] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[89px]"
                alt={`Mugshot`}
              />
            </div>

            {/* Render infractions */}
            <h3 className="self-start mt-4 text-sm text-white">Infractions</h3>
            <div className="flex gap-2 px-2.5 pt-3.5 pb-5 text-sm text-white rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-h-[170px]">
              <div className="grow shrink-0 w-fit pr-2 min-h-[140px] overflow-y-auto scroll-smooth">
                {playerInfractions.length > 0 ? (playerInfractions.map((infraction, index) => (
                  <div key={`infraction-${index}`} className="relative flex gap-5 justify-between px-2.5 py-5 rounded-md text-white mb-2">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#787878] to-[#DEDEDE] opacity-[30%]"></div>
                    <div>{infraction.type}</div>
                    <button className="font-bold text-center cursor-pointer z-20">Consulter</button>
                  </div>
                ))): (<div className="h-full flex items-center justify-center">Aucune infraction au dossier</div>)}
              </div>
            </div>

            <button onClick={() => openModal("newInfraction")}className="self-center px-3.5 py-1 mt-6 w-[40%] text-sm text-center text-white bg-yellow-600 rounded-md hover:bg-yellow-700 transition-all duration-300">
              Nouvelle Infraction
            </button>

            {/* Render vehicles */}
            <h3 className="self-start mt-4 text-sm text-white">Véhicules</h3>
            <div className="flex gap-2 px-2.5 pt-3.5 pb-5 text-sm text-white rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-h-[170px]">
              <div className="grow shrink-0 w-fit pr-2 min-h-[140px] overflow-y-auto scroll-smooth">
                {playerVehicles.length > 0 ? (playerVehicles.map((vehicle, index) => (
                  <div key={`vehicle-${index}`} className="relative flex gap-5 justify-between px-2.5 py-5 rounded-md text-white mb-2">
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#787878] to-[#DEDEDE] opacity-[30%]"></div>
                    <div>{vehicle.name}</div>
                    <button className="font-bold text-center cursor-pointer z-20">Consulter</button>
                  </div>
                ))): (<div className="h-full flex items-center justify-center">Aucun véhicle enregistré</div>)}
              </div>
            </div>

            <button className="self-center px-3.5 py-1 mt-6 w-[40%] text-sm text-center text-white bg-yellow-600 rounded-md hover:bg-yellow-700 transition-all duration-300">
              Modifier casier
            </button>
          </div>
        </div>) : (
          <div className="flex flex-col gap-10 justify-center items-center w-[50%] h-[500px]">
            <h3>Selectionnez un citoyen </h3>
            <Image src="/user.png" width={75} height={75} alt="no user"/>
          </div>)}
      </div>
    </section>
  );
};

export default SearchSection;
