import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col items-center px-4 pt-5 pb-11 max-w-full text-sm text-center text-white rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[114px] backdrop-blur-sm" aria-label="Main Navigation">
      <div className="flex flex-col self-stretch px-3.5 py-0.5 whitespace-nowrap rounded-md shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/84261f3c7ee01b13d6462c6a881bc14cdae468c4?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Home icon"
        />
        <span className="self-start">Accueil</span>
      </div>

      <div className="flex flex-col items-center mt-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b29c9566b2305cfaac1ea5d9fc908322319cb52?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Records icon"
        />
        <span className="z-10 -mt-1">Casiers</span>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f72f37103ad94d5a04760fe80a0efab90bc51a?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
        className="object-contain self-stretch mt-7 w-full aspect-[1.17] max-md:mx-2.5"
        alt="Navigation divider"
      />

      <div className="flex flex-col items-center mt-7">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/697929b35a5fbc1d603b9e8442712c8a57839b5a?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Dispatch icon"
        />
        <span className="mt-1">Dispatch</span>
      </div>

      <div className="flex flex-col items-center mt-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ab0539f881516640ae316ebeb6a3fe17a0406f8?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-contain aspect-square w-[53px]"
          alt="Staff icon"
        />
        <span className="mt-1">Effectifs</span>
      </div>

      <div className="flex flex-col items-center mt-5">
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