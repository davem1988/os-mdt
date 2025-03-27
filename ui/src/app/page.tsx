"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useState } from "react";
import { nuiCallback } from "@/lib/nuiCallback";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const searchParams = useSearchParams();
	const display = useSelector((state: RootState) => state.app.display);
	const [playerCount, setPlayerCount] = useState<number>(0);

	if (!display && !searchParams.get("preview")) return null;

	const getPlayerCount = () => {
		nuiCallback("/getPlayerCount", {}, (result: number) => {
			setPlayerCount(result);
		});
	};

	return (
		<main className="flex flex-col items-center justify-center min-h-screen w-screen z-50">
			<div className="container">
				<div className="flex flex-col items-center justify-center">
					<button
						className="px-5 py-2 text-white transition-all ease-in-out bg-blue-500 rounded-md hover:scale-105"
						onClick={() => getPlayerCount()}
					>
						Get Player Count
					</button>
					<p>
						Player Count: {playerCount || <strong>Click button to load</strong>}
					</p>
				</div>
			</div>
			
		</main>
	);
}
