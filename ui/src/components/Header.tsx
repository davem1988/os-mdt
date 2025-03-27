import React from "react";
import { OfficerInfo } from "@/lib/types";

interface HeaderProps {
  officerInfo: any;
  currentDateTime: string;
}

const Header: React.FC<HeaderProps> = ({ officerInfo, currentDateTime }) => {
  return (
    <header className="relative w-full max-md:mr-1 max-md:max-w-full" aria-label="Dashboard Header">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left column with officer info */}
        <div className="w-3/5 max-md:ml-0 max-md:w-full">
          <div className="relative grow max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[21%] max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/abee3d43e857db06b3cc4241d949b949b06fe020?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                  className="object-contain shrink-0 max-w-full rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[114px] max-md:mt-10 mb-10"
                  alt="LSPD Logo"
                />
              </div>
              <div className="ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col w-full text-white max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-2.5 px-2.5 py-4 text-xl rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6abad82a2ccf8af787eae50d937454e31dd6260?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                      className="object-contain shrink-0 w-7 aspect-square"
                      alt="Officer badge"
                    />
                    <div className="flex-auto my-auto w-[366px]">
                      <span className="font-bold">{officerInfo ? `${officerInfo?.job.grade.name} ${officerInfo?.metadata.callsign}` : "Commandant 12"}</span> - {officerInfo?.charinfo.lastname || "Tony Benetti"}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column with date and map */}
        <div className="ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex relative flex-col mt-2.5 w-full text-center text-white max-md:mt-10">
            <div className="flex gap-5 justify-between text-xl">
              <time className="my-auto" dateTime="2025-03-27T02:22:00">
                {currentDateTime}
              </time>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/847514727f420b96318b8f51782cae58d578d4ee?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                className="object-contain shrink-0 rounded-none aspect-[0.95] w-[41px]"
                alt="Weather icon"
              />
            </div>
            <div className="flex gap-3 items-start self-start ml-6 max-md:ml-2.5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cb78e2fba4cf99f1cca33c873519c172d2a65e6?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                className="object-contain shrink-0 aspect-square w-[43px]"
                alt="Map icon"
              />
              <div className="flex flex-col mt-3.5">
                <button className="text-base" aria-label="View map">
                  Consulter la carte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
