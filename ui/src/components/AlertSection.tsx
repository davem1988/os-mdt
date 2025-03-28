import React from "react";
import { Alert } from "@/lib/types";

interface AlertsSectionProps {
  alerts: Alert[];
}

const AlertsSection: React.FC<AlertsSectionProps> = ({ alerts }) => {
  return (
    <section className="flex flex-col" aria-labelledby="alerts-section-title">
      <h2
        id="alerts-section-title"
        className="self-start mt-6 text-base text-center text-white"
      >
        Dernières alertes
      </h2>
      <div
        className="flex gap-3 px-2.5 py-2.5 text-xs rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] h-[320px] backdrop-blur-sm"
        role="log"
        aria-live="polite"
      >
        <div className="grow shrink-0 w-fit pr-2 min-h-[140px] overflow-y-auto scroll-smooth">
          {alerts.map((alert, index) => (
            <div
              key={`alert-${index}`}
              className="relative flex gap-1 justify-between px-2.5 py-2 rounded-md text-white mb-2"
            >
              {/* Fix: Background overlay with pointer-events-none */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#787878] to-[#DEDEDE] opacity-[30%] z-1 pointer-events-none"></div>
          
              <div className="flex flex-col z-2">
                <h3 className="text-sm font-bold text-white">{alert.title}</h3>
                <p className="text-white max-md:mr-2">{alert.location}</p>
                <time className="self-start font-light text-white">
                  {alert.timeAgo}
                </time>
              </div>
          
              {/* Fix: Ensure the button has high z-index */}
              <button className="z-50 font-bold text-center cursor-pointer">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b716b2fb0a5a9fb774971c8fb5a231335e0bc49a?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                  className="object-contain shrink-0 my-auto aspect-square w-[26px] cursor-pointer"
                  alt="Respond icon"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlertsSection;
