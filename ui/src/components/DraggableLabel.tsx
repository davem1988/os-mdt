import React from 'react'

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

const DraggableLabel = ({type, infractionType, name, description, amount, jailTime, gradeName, callsign }: DraggableLabelProps) => {

  if(type == "infraction"){
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      const dataToDrag = {
        name,
        description,
        amount,
        jailTime
      }
      e.dataTransfer.setData("text/plain", JSON.stringify(dataToDrag));
      e.dataTransfer.effectAllowed = "move";
    }
  
    return (
      <div draggable onDragStart={handleDragStart} className="w-[100%] rounded-lg bg-blue-900 h-[19px] text-[10px] not-italic font-[25] font-sans pl-2 pb-[1px] flex justify-start items-center text-[#b4b4b4] mt-1 hover:cursor-grab active:cursor-grabbing">
        {name} - {`$${amount}`}
      </div>
    )
  } else if (type == "officer") {
    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      const dataToDrag = {
        name,
        gradeName,
        callsign,
      }
      e.dataTransfer.setData("text/plain", JSON.stringify(dataToDrag));
      e.dataTransfer.effectAllowed = "move";
    }
  
    return (
      <div draggable onDragStart={handleDragStart} className="w-[100%] rounded-lg bg-blue-900 h-[19px] text-[10px] not-italic font-[25] font-sans pl-2 pb-[1px] flex justify-start items-center text-[#b4b4b4] mt-1 hover:cursor-grab active:cursor-grabbing">
        {gradeName} {callsign} - {name}
      </div>
    )
  }

  
}

export default DraggableLabel


