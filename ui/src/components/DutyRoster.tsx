import React from "react";
import { DutyOfficer } from "@/lib/types";

interface DutyRosterProps {
  officers: DutyOfficer[];
}

const DutyRoster: React.FC<DutyRosterProps> = ({ officers }) => {
  return (
    <section
      className="flex gap-3 items-start px-2.5 py-2.5 text-sm text-center rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
      aria-labelledby="duty-roster-title"
    >
      <div className="grow shrink-0 basis-0 w-fit">
        {officers.map((officer, index) => (
          <div
            key={`officer-${index}`}
            className="flex gap-5 justify-between px-2 py-2.5 w-full rounded-md"
          >
            <div className="flex gap-3">
              <div className="grow font-bold">{officer.rank}</div>
              <div>{officer.name}</div>
            </div>
            <div>{officer.unit}</div>
          </div>
        ))}
      </div>
      <div
        className="flex shrink-0 w-1 rounded-md bg-zinc-400 bg-opacity-10 h-[250px]"
        role="presentation"
      />
    </section>
  );
};

export default DutyRoster;
