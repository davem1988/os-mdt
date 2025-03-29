import React, { useState } from "react";

const Navbar: React.FC = () => {
  // Track selected item using state
  const [selectedItem, setSelectedItem] = useState<number | null>(0);

  // A function to handle item selection
  const handleSelection = (index: number) => {
    setSelectedItem(index);
  };

  return (
    <nav className="flex flex-col items-center px-4 pt-5 pb-11 max-w-full text-sm text-center text-white rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[114px] backdrop-blur-sm" aria-label="Main Navigation">
      <div className={`flex flex-col px-4 py-0.5 transition-all duration-300 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-zinc-200/10 cursor-pointer ${selectedItem === 0 ? "self-stretch whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-zinc-200/10 " : "self-stretch whitespace-nowrap rounded-md"}`}
        onClick={() => handleSelection(0)}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84261f3c7ee01b13d6462c6a881bc14cdae468c4?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Home icon"
        />
        <span className="self-start">Accueil</span>
      </div>

      {/* Records item */}
      <div
        className={`flex flex-col items-center mt-6 transition-all duration-300 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]  hover:bg-zinc-200/10 cursor-pointer ${
          selectedItem === 1 ? "self-stretch whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-zinc-200/10 " : "self-stretch whitespace-nowrap rounded-md"
        }`}
        onClick={() => handleSelection(1)}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b29c9566b2305cfaac1ea5d9fc908322319cb52?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Records icon"
        />
        <span className="z-10 -mt-1">Casiers</span>
      </div>

      {/* Divider item */}
      <div className={`flex flex-col items-center mt-3 transition-all duration-300 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-zinc-200/10 cursor-pointer ${selectedItem === 2 ? "self-stretch whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-zinc-200/10 " : "self-stretch whitespace-nowrap rounded-md"}`}
        onClick={() => handleSelection(2)}
      >
        <img
          src="/plate.png"
          className="object-contain self-stretch mt-4 w-full aspect-[1.17] max-md:mx-2.5"
          alt="Navigation divider"
        />
        <span className="-mt-5">Vehicles</span>
      </div>

      {/* Dispatch item */}
      <div
        className={`flex flex-col items-center mt-7 pt-2 transition-all duration-300 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-zinc-200/10 cursor-pointer ${
          selectedItem === 3 ? "self-stretch whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-zinc-200/10 " : "self-stretch whitespace-nowrap rounded-md"
        }`}
        onClick={() => handleSelection(3)}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/697929b35a5fbc1d603b9e8442712c8a57839b5a?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Dispatch icon"
        />
        <span className="mt-1">Dispatch</span>
      </div>

      {/* Staff item */}
      <div
        className={`flex flex-col items-center mt-5 pt-2 transition-all duration-300 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-zinc-200/10 cursor-pointer ${
          selectedItem === 4 ? "self-stretch whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-zinc-200/10 " : "self-stretch whitespace-nowrap rounded-md"
        }`}
        onClick={() => handleSelection(4)}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab0539f881516640ae316ebeb6a3fe17a0406f8?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Staff icon"
        />
        <span className="mt-1">Effectifs</span>
      </div>

      {/* Command Staff item */}
      <div
        className={`flex flex-col items-center mt-5 transition-all duration-300 hover:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-zinc-200/10 cursor-pointer ${
          selectedItem === 5 ? "self-stretch whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-zinc-200/10 " : "self-stretch whitespace-nowrap rounded-md"
        }`}
        onClick={() => handleSelection(5)}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8846f9ffe2b0cd06003edb37a1733077408b3c32?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Command staff icon"
        />
        <span>Etat Major</span>
      </div>
    </nav>
  );
};

export default Navbar;
