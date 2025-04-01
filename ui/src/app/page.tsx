"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useEffect, useState } from "react";
import { nuiCallback } from "@/lib/nuiCallback";
import { useSearchParams } from "next/navigation";
import AppLayout from "@/components/AppLayout";
import SearchSection from "@/components/SearchSection"
import DutyRoster from "@/components/DutyRoster";
import AlertsSection from "@/components/AlertSection";
import { DutyOfficer, Alert, OfficerInfo } from "@/lib/types";
import useNuiListener from "@/lib/utils";

export default function Home() {
  useNuiListener();
  const searchParams = useSearchParams();
  const display = useSelector((state: RootState) => state.app.display);
  const [playerData, setPlayerData] = useState(null);
  const [players, setPlayers] = useState<any[]>([]);
  const [officers, setOfficers] = useState<any[]>([]);
  const [vehicles, setVehicles] = useState(null);
  const [dutyOfficers, setDutyOfficers] = useState<any[]>([]);
  const updatedOfficers = useSelector((state: RootState) => state.app.officers);
  

  const recentAlerts: Alert[] = [
    // Dummy data
  ];

  const getPlayerData = () => {
    nuiCallback("/getPlayerData", {}, (result: any) => {
      setPlayerData(result);
    });
  };

  const getAllPlayers = () => {
    nuiCallback("/getAllPlayers", {}, (result: any) => {
      setPlayers(result || []); // Ensure it's always an array
    });
  };

  const getAllOfficers = () => {
    nuiCallback("/getAllOfficers", {}, (result: any) => {
      console.log("Officers Result", result)
      setOfficers(result || []); // Ensure it's always an array
    });
  };

  const getAllVehicles = () => {
    nuiCallback("/getAllVehicles", {}, (result: any) => {
      setVehicles(result);
    });
  };

  useEffect(() => {
    getPlayerData();
    getAllPlayers();
    getAllVehicles();
    getAllOfficers();
  
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        getAllOfficers();
      }
    };
  
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const policeOnDuty = (officers || []).filter((player) => {
      if (!player.PlayerData.job) return false; // Ensure job exists
  
      let job;
      try {
        job = player.PlayerData.job; // Parse job JSON string
      } catch (error) {
        console.error("Error parsing job JSON:", error);
        return false;
      }
  
      return job.name === "police" && job.onduty === true;
    });
  
    setDutyOfficers(policeOnDuty);
  }, [players]);

  useEffect(() => {
    console.log('Officers changed')
    if(updatedOfficers.length > 0) {
      console.log(updatedOfficers)
      setOfficers(updatedOfficers);
    }
  }, [updatedOfficers]);

  if (!display && !searchParams.get("preview")) return null;

  return (
    <main className="flex items-center justify-center min-h-screen w-screen z-50 mt-10">
      <AppLayout>
        <div className="flex-auto max-md:max-w-full">
          <div className="flex gap-2 max-md:flex-col">
            {/* Search and results section */}
            <div className="w-[67%] max-md:ml-0 max-md:w-full">
              <h2 className="self-start mt-[-27px] mb-1 text-base text-start max-md:mt-[-25px]">
                Rechercher un citoyen
              </h2>
              <SearchSection players={players} vehicles={vehicles} />
            </div>

            {/* Duty roster and alerts section */}
            <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full text-white max-md:mt-5">
                <h2 className="self-start mt-[-23px] text-start max-md:mt-[-23px]">
                  En service
                </h2>
                <DutyRoster players={dutyOfficers} />
                <AlertsSection alerts={recentAlerts} />
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </main>
  );
}
