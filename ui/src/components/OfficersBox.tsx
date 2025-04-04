"use client"

import React, { useState, useEffect } from 'react'
import DraggableLabel from './DraggableLabel'
import officersList from '../Officers.json'

interface OfficersBoxProps {
    onDroppedChanges: (allOfficers: any) => void;
}

const OfficersBox = ({onDroppedChanges}: OfficersBoxProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [officers, setOfficers] = useState<any>()
    const [droppedOfficers, setDroppedOfficers] = useState<any[]>([])

    useEffect(() => {
        onDroppedChanges(droppedOfficers);
    }, [droppedOfficers])


    useEffect(() => {
        setOfficers(Object.entries(officersList));
    }, [])

    useEffect(() => {
        const filteredOfficers = Object.entries(officersList)
        .filter(([_, officer]: any) => 
            officer.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map(([key, officer]) => ({ key, officer })); // Optional: Format result
        
        setSearchResult(filteredOfficers);
    }, [searchQuery, officersList]);
    

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        if (data) {
            const DroppedOfficers = JSON.parse(data);
            setDroppedOfficers((prev) => [...prev, DroppedOfficers])
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }
    
    
    const handleRemoveInfraction = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDroppedOfficers((prev) => prev.filter((_, i) => i !== index));
    }

  return (
    <div className='relative p-[2px] w-[160px] text-sm italic font-thin text-[#e9e9e9] mr-5 mt-3'>
        Agents Présents
        <div className='absolute inset-0 bg-gradient-to-l from-orange-400 to-stone-900 rounded-md mask mask-border h-[91.8%] top-5 w-[109%]'></div>
        <div className='relative w-[110%] h-[92%] p-2 bg-stone-900 rounded-md z-10 flex flex-col items-center pb-2'>
            <input onChange={(e) => setSearchQuery(e.target.value)} type="text" id='officerSearch' className='w-[105%] h-4 rounded-sm bg-[rgb(15,15,15)] text-[9px] placeholder:font-thin  pl-2 placeholder:text-[#353535] focus:outline-none text-[#d6d6d6]' placeholder='rechercher agent'/>
            <div className="bg-[rgb(15,15,15)] w-[105%] h-[76px] mt-[6px] rounded-sm p-1 pb-1 overflow-auto">
                {searchQuery && searchResult.length > 0 && 
                    searchResult.map((officer, index) => {
                        return (
                            <div key={index}>
                                <DraggableLabel type="officer" name={officer.officer.name} gradeName={officer.officer.gradeName} callsign={officer.officer.callsign} />
                            </div>
                        ) 
                    })
                }
                
            </div>
            <div onDrop={handleDrop} onDragOver={handleDragOver} className="bg-[rgb(15,15,15)] w-[105%] h-[100px] mt-[6px] pr-[10px] rounded-sm p-1 overflow-y-auto overflow-x-hidden">
                {droppedOfficers.map((officer, idx) => (
                    <div key={idx} onContextMenu={(e) => handleRemoveInfraction(idx, e)} className="w-[105%] rounded-lg bg-green-700 h-[19px] text-[10px] not-italic font-[25] font-sans pl-2 pr-2 pb-[1px] flex justify-start items-center text-[#b4b4b4] mt-1">
                     {`${officer.gradeName} ${officer.callsign}`} - {officer.name}
                  </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default OfficersBox
