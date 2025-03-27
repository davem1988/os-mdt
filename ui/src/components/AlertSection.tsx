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
        className="flex gap-3 px-2.5 py-2.5 text-xs rounded-xl bg-zinc-300 bg-opacity-10 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        role="log"
        aria-live="polite"
      >
        <div className="grow shrink-0 self-start basis-0 w-fit">
          {alerts.map((alert, index) => (
            <div
              key={`alert-${index}`}
              className="flex gap-5 justify-between py-1.5 pr-4 pl-1.5 rounded-md"
            >
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-white">{alert.title}</h3>
                <p className="text-white max-md:mr-2">{alert.location}</p>
                <time className="self-start font-light text-white">
                  {alert.timeAgo}
                </time>
              </div>
              <button aria-label={`Respond to ${alert.title} alert`}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b716b2fb0a5a9fb774971c8fb5a231335e0bc49a?placeholderIfAbsent=true&apiKey=872927278c6d40e4bb42cad9868a24a5"
                  className="object-contain shrink-0 my-auto aspect-square w-[26px]"
                  alt="Respond icon"
                />
              </button>
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 w-1 rounded-md bg-zinc-400 bg-opacity-10 h-[250px]"
          role="presentation"
        />
      </div>
    </section>
  );
};

export default AlertsSection;
