"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { useState } from "react";
import { nuiCallback } from "@/lib/nuiCallback";
import { useSearchParams } from "next/navigation";
import AppLayout from "@/components/AppLayout";

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
			<AppLayout>
				{/* <div className="flex flex-col items-center justify-center">
					<button
						className="px-5 py-2 text-white transition-all ease-in-out bg-blue-500 rounded-md hover:scale-105"
						onClick={() => getPlayerCount()}
					>
						Get Player Count
					</button>
					<p>
						Player Count: {playerCount || <strong>Click button to load</strong>}
					</p>
				</div> */}
				<iframe style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="800" height="450" src="https://embed.figma.com/design/L73aUAcMpdI0l1qV7CjNNT/solaris_mdt?node-id=1-2&embed-host=share" allowFullScreen></iframe>
			</AppLayout>
			
		</main>
	);
}
