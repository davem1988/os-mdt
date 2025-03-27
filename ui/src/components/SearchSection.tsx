"use client";

import React, { useState } from "react";
import { CitizenInfo } from "@/lib/types";

interface SearchSectionProps {
  initialCitizen?: CitizenInfo;
}

const SearchSection: React.FC<SearchSectionProps> = ({ initialCitizen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCitizen, setSelectedCitizen] = useState<
    CitizenInfo | undefined
  >(initialCitizen);

  // Mock search results for demonstration
  const searchResults = [
    "John Doe de la Cruz",
    "John Doe de la Cruz",
    "John Doe de la Cruz",
    "John Doe de la Cruz",
  ];

  // Mock citizen data
  const citizenData: CitizenInfo = initialCitizen || {
    fullName: "John Doe de la Cruz",
    birthDate: "01/02/2000",
    infractions: [{ type: "Braquage" }, { type: "Agression" }, { type: "Agression sur agent" }],
    vehicles: [{ name: "Sultan RS" }, { name: "Jugular de voyou" }, { name: "Jugular de voyou" }],
    photoUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/44a3c9b9b797cb2a1016de92aeb9f8b1f8d86bd9?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5",
  };

  return (
    <section
      className="grow py-5 pr-7 pl-3.5 w-full rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5 max-md:mt-5 max-md:max-w-full max-h-[645px] backdrop-blur-sm"
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
              placeholder="tapez un nom, n° de plaque,..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <div className="flex gap-2 px-1.5 py-2 mt-6 rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="flex flex-col self-start mt-2.5 w-full text-sm text-white">
                <h3 className="self-start ml-2.5">{searchResults[0]}</h3>
                <div className="flex gap-5 justify-between px-2 py-1 mt-2.5 rounded-2xl border border-solid bg-zinc-300 bg-opacity-10 border-zinc-300">
                  <div>{searchResults[1]}</div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/36fdf04ba2ea9281954d0dea3b4a736738549ced?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                    className="object-contain shrink-0 aspect-square w-[18px]"
                    alt="Select icon"
                  />
                </div>
                <div className="flex flex-col items-start pr-11 pl-2.5 mt-2 max-md:pr-5">
                  <div>{searchResults[2]}</div>
                  <div className="mt-3">{searchResults[3]}</div>
                </div>
              </div>
              <div className="pb-80 rounded-md bg-zinc-400 bg-opacity-10 max-md:pb-24">
                <div className="flex shrink-0 rounded-md bg-zinc-400 bg-opacity-30 h-[118px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Results column */}
        <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-9">
            <div className="flex gap-4">
              <div className="flex flex-col items-start py-3 pr-28 pl-3 rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:pr-5">
                <h3 className="text-sm font-bold text-white">
                  {citizenData.fullName}
                </h3>
                <p className="mt-3.5 text-sm text-white">
                  Né le {citizenData.birthDate}
                </p>
                <div className="flex gap-3.5 items-start mt-1.5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/db1d3d168e616c0b68807a39cfc3cea7742a7504?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                    className="object-contain shrink-0 w-6 aspect-square"
                    alt="Edit icon"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e28ffea699768e63b2898d487f493b29d4b8acc3?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                    className="object-contain shrink-0 aspect-square w-[22px]"
                    alt="Delete icon"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/852f3762e9c032d7497e89fe47f27aefa71025bb?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                    className="object-contain shrink-0 self-stretch aspect-square w-[25px]"
                    alt="Info icon"
                  />
                </div>
              </div>
              <img
                src={citizenData.photoUrl}
                className="object-cover shrink-0 rounded-md aspect-[0.9] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[89px]"
                alt={`Photo of ${citizenData.fullName}`}
              />
            </div>

            <h3 className="self-start mt-4 text-sm text-white">Infractions</h3>
            <div className="flex gap-2 px-2.5 pt-3.5 pb-9 text-sm text-white rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-h-[170px]">
            <div className="grow shrink-0 w-fit pr-2 min-h-[140px] overflow-y-auto scroll-smooth">
                {citizenData.infractions.map((infraction, index) => (
                  <div
                  key={`infraction-${index}`}
                  className="relative flex gap-5 justify-between px-2.5 py-5 rounded-md text-white mb-2"
                >
                  {/* Background with transparency */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#787878] to-[#DEDEDE] opacity-[30%]"></div>
                  
                  {/* Content with full opacity */}
                  <div>{infraction.type}</div>
                  <button
                    className="font-bold text-center"
                    aria-label={`Consulter ${infraction.type}`}
                  >
                    Consulter
                  </button>
                </div>
                ))}
              </div>
            </div>

            <h3 className="self-start mt-4 text-sm text-white">Véhicules</h3>
            <div className="flex gap-2 px-2.5 pt-3.5 pb-9 text-sm text-white rounded-md bg-purple-950 bg-opacity-30 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-h-[170px]">
              <div className="grow shrink-0 w-fit pr-2 min-h-[140px] overflow-y-auto scroll-smooth">
                {/* Set a fixed max-height to keep the container from growing */}
                {citizenData.vehicles.map((vehicle, index) => (
                  <div
                    key={`vehicle-${index}`}
                    className="relative flex gap-5 justify-between px-2.5 py-5 rounded-md text-white mb-2"
                  >
                    {/* Background with transparency */}
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#787878] to-[#DEDEDE] opacity-[30%]"></div>
                
                    {/* Content with full opacity */}
                    <div>{vehicle.name}</div>
                    <button
                      className="font-bold text-center"
                      aria-label={`Consulter ${vehicle.name}`}
                    >
                      Consulter
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button className="self-center px-3.5 py-1 mt-6 max-w-full text-sm text-center text-white bg-yellow-600 rounded-md w-[121px]">
              Modifier casier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
