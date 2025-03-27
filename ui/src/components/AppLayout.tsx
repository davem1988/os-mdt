"use client";

import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import SearchSection from "./SearchSection";
import DutyRoster from "./DutyRoster";
import AlertsSection from "@/components/AlertSection";
import { DutyOfficer, Alert, OfficerInfo } from "@/lib/types";

const AppLayout: React.FC = () => {
  // Mock data for the components
  const officerInfo: OfficerInfo = {
    rank: "Sergent 02",
    name: "John Doe",
  };

  const currentDateTime = "Jeudi 27/03/2025 - 02:22";

  const dutyOfficers: DutyOfficer[] = [
    { rank: "SGT 02", name: "John Doe", unit: "Adam" },
    { rank: "SGT 02", name: "John Doe", unit: "Tango" },
    { rank: "SGT 02", name: "John Doe", unit: "Mary" },
    { rank: "SGT 02", name: "John Doe", unit: "PDP" },
  ];

  const recentAlerts: Alert[] = [
    {
      title: "Braquage Fleeca",
      location: "Vinewood Boulevard",
      timeAgo: "Il y a 10 minutes",
    },
    {
      title: "Car jacking",
      location: "Harwick Avenue",
      timeAgo: "Il y a 15 minutes",
    },
    {
      title: "Braquage ATM",
      location: "Legion Square",
      timeAgo: "Il y a 25 minutes",
    },
  ];

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
        <Header officerInfo={officerInfo} currentDateTime={currentDateTime} />

        {/* Main content area with navbar and content sections */}
        <div className="flex relative flex-wrap gap-10 mt-1.5 w-full max-md:max-w-full">
          {/* Navigation sidebar */}
          <Navbar />

          {/* Main content area */}
          <div className="flex-auto max-md:max-w-full">
            <div className="flex gap-2 max-md:flex-col">
              {/* Search and results section */}
              <div className="w-[67%] max-md:ml-0 max-md:w-full">
                <SearchSection />
              </div>

              {/* Duty roster and alerts section */}
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full text-white max-md:mt-5">
                  <DutyRoster officers={dutyOfficers} />
                  <AlertsSection alerts={recentAlerts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
