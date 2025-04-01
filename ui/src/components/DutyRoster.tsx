import React from "react";
import { DutyOfficer } from "@/lib/types";

interface DutyRosterProps {
  players: any[];
}

const DutyRoster: React.FC<DutyRosterProps> = ({ players }) => {
  return (
    <section
      className="flex gap-3 items-start px-2.5 py-2.5 text-sm text-center rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[280px] backdrop-blur-sm"
      aria-labelledby="duty-roster-title"
    >
      <div className="grow shrink-0 w-fit pr-2 max-h-[260px] overflow-y-auto scroll-smooth">
        {players.map((officer, index) => (
          <div
            key={`officer-${index}`}
            className="relative flex gap-1 justify-between px-2.5 py-2 rounded-md text-white mb-2"
          >
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#787878] to-[#DEDEDE] opacity-[30%]"></div>
            <div className="flex gap-3">
              <div className="grow font-bold">{officer.PlayerData.job.grade.name}</div>
              <div>{`${officer.PlayerData.charinfo.firstname} ${officer.PlayerData.charinfo.lastname}`}</div>
            </div>
            <div>{officer.PlayerData.metadata.callsign}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DutyRoster;
