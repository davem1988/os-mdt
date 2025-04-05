"use client"

import React from 'react'
import { useDrag } from 'react-dnd';

interface DraggableLabelProps {
  type: "infraction" | "officer",
  infractionType?: "minor" | "major" | "criminal" | "road",
  name: string,
  description?: string,
  amount?: number,
  jailTime?: number,
  gradeName?: string,
  callsign?: string
}

const DraggableLabel = ({ type, name, description, amount, jailTime, gradeName, callsign }: DraggableLabelProps) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: type === "infraction" ? "infraction" : "officer",
    item: type === "infraction"
      ? { name, description, amount, jailTime }
      : { name, gradeName, callsign },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [name, description, amount, jailTime]);

  const baseStyle = "w-[100%] rounded-lg h-[19px] text-[10px] font-sans pl-2 pb-[1px] flex justify-start items-center text-[#b4b4b4] mt-1 hover:cursor-grab active:cursor-grabbing";

  if (type === "infraction") {
    return (
      <div ref={drag} className={`${baseStyle} bg-blue-900 opacity-${isDragging ? '50' : '100'}`}>
        {name} - ${amount}
      </div>
    );
  }

  return (
    <div ref={drag} className={`${baseStyle} bg-blue-900`}>
      {gradeName} {callsign} - {name}
    </div>
  );
};

export default DraggableLabel;
