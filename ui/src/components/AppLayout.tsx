"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { OfficerInfo } from "@/lib/types";
import { nuiCallback } from "@/lib/nuiCallback";

const AppLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
  // Mock data for the components
  const [playerData, setPlayerData] = useState(null);

  const currentDateTime = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Europe/Paris',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
  }).format(new Date()).replace(',', '').replace(/\//g, '-');

  const getPlayerData = () => {
    nuiCallback("/getPlayerData", {}, (result: any) => {
      setPlayerData(result);
    });
  };

  useEffect(() => {
    getPlayerData();
  }, [])

  return (
    <main className="overflow-hidden">
      <div className="flex relative flex-col px-20 py-20 w-[1500px] h-screen max-md:px-5 max-md:max-w-full">
        {/* Background image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c669c88b590aee7252ff996f2d275c1e4270cd95?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
          className="object-full absolute inset-0 w-[1500px] h-[955px]"
          alt="Dashboard background"
          aria-hidden="true"
        />

        {/* Header section */}
        <Header officerInfo={playerData} currentDateTime={currentDateTime} />

        {/* Main content area with navbar and content sections */}
        <div className="flex relative flex-wrap gap-10 mt-1.5 w-full max-md:max-w-full">
          {/* Navigation sidebar */}
          <Navbar />

          {/* Main content area */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
