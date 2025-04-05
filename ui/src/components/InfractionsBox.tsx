"use client"

import React, { useState, useEffect } from 'react'
import DraggableLabel from './DraggableLabel'
import infractionsList from '../Infractions.json'

const ItemTypes = {
    INFRACTION: "infraction",
};

interface InfractionsBoxProps {
    onDroppedChanges: (totalAmount: number, totalJail: number, allInfractions: any) => void;
}

const InfractionsBox = ({ onDroppedChanges }: InfractionsBoxProps) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResult, setSearchResult] = useState<any[]>([]);
    const [infractions, setInfractions] = useState<any>();
    const [droppedInfractions, setDroppedInfractions] = useState<any[]>([]);
    const [amount, setAmount] = useState<number>(0);
    const [jailTime, setJailTime] = useState<number>(0);

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "infraction",
        drop: (item: any) => {
          setDroppedInfractions((prev) => [...prev, item]);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
    }));

    useEffect(() => {
        const preventDefaults = (e: Event) => {
          e.preventDefault();
        };
      
        window.addEventListener("dragover", preventDefaults);
        window.addEventListener("drop", preventDefaults);
      
        return () => {
          window.removeEventListener("dragover", preventDefaults);
          window.removeEventListener("drop", preventDefaults);
        };
    }, []);

    useEffect(() => {
        let totalAmount = 0;
        let totalTime = 0;
        droppedInfractions.forEach((infraction) => {
            totalAmount += infraction.amount;
            totalTime += infraction.jailTime;
        })
        setAmount(totalAmount);
        setJailTime(totalTime);
        onDroppedChanges(totalAmount, totalTime, droppedInfractions);
    }, [droppedInfractions])


    useEffect(() => {
        setInfractions(Object.entries(infractionsList));
    }, [])

    useEffect(() => {
        const filteredInfractions = Object.entries(infractionsList).map(([category, infractionsArray]: any) => {
            if (!Array.isArray(infractionsArray)) {
                return { category, infractions: [] }
            };
    
            return {

                category,
            
                infractions: infractionsArray.filter((infraction: any) => {
            
                    return infraction.name.toLowerCase().includes(searchQuery.toLowerCase());
            
                })
            
            };
            
        });
    
        // Remove categories that have no matching infractions
        const finalResults = filteredInfractions.filter((cat: { infractions: any[] }) => cat.infractions.length > 0);
        setSearchResult(finalResults);
    }, [searchQuery])

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log("DROPPED");
        const data = e.dataTransfer.getData("text/plain");
        if (data) {
            const droppedInfraction = JSON.parse(data);
            setDroppedInfractions((prev) => [...prev, droppedInfraction])
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        console.log("DRAG OVER DROPZONE");
    }
    
    
    const handleRemoveInfraction = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDroppedInfractions((prev) => prev.filter((_, i) => i !== index));
    }

    const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Ajoute ceci
        console.log("DRAG ENTER DROPZONE");
    }
      
    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault(); // Ajoute ceci
        console.log("DRAG LEAVE DROPZONE");
    }

  return (
    <div className='relative p-[2px] w-[160px] text-sm italic font-thin text-[#e9e9e9] mt-3'>
        Infractions
        {/* <div className='absolute inset-0 bg-gradient-to-l from-orange-400 to-stone-900 rounded-md mask mask-border h-[91.8%] top-5 w-[109%]'></div> */}
        
        <div className='relative w-[110%] h-[92%] p-2 bg-stone-900 rounded-md flex flex-col items-center pb-2 z-[2]'>
            <input onChange={(e) => setSearchQuery(e.target.value)} type="text" id='infractionSearch' className='w-[105%] h-4 rounded-sm bg-[rgb(15,15,15)] text-[9px] placeholder:font-thin  pl-2 placeholder:text-[#353535] focus:outline-none text-[#d6d6d6]' placeholder='rechercher infraction'/>
            <div className="bg-[rgb(15,15,15)] w-[105%] h-[76px] mt-[6px] rounded-sm p-1 pb-1 overflow-auto">
                {searchQuery && searchResult.length > 0 && 
                    searchResult.map((category, index) => {
                        return (
                            <div key={index}>
                                {category.infractions.map((infraction: any, infIndex: number) => (
                                    <DraggableLabel key={infIndex} type="infraction" name={infraction.name} description={infraction.description} amount={infraction.amount} jailTime={infraction.jailTime} />
                                ))}
                            </div>
                        ) 
                    })
                }
                <div 
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  className="w-[200px] h-[200px] bg-green-500"
                >
                  DROP HERE
                </div>
            </div>
            <div 
              ref={drop} // ✅ c'est ici que la magie se fait maintenant
              className={`bg-[rgb(15,15,15)] w-[105%] h-[100px] mt-[6px] pr-[10px] rounded-sm p-1 overflow-y-auto overflow-x-hidden z-[2] border ${isOver ? 'border-green-500' : 'border-red-500'}`}
            >
              {droppedInfractions.map((infraction, idx) => (
                <div key={idx} onContextMenu={(e) => handleRemoveInfraction(idx, e)} className="w-[105%] rounded-lg bg-green-700 h-[19px] text-[10px] not-italic font-[25] font-sans pl-2 pr-2 pb-[1px] flex justify-start items-center text-[#b4b4b4] mt-1">
                  {infraction.name} - ${infraction.amount}
                </div>
              ))}
            </div>
        </div>
      
    </div>
  )
}

export default InfractionsBox
