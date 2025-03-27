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

	if (!display && !searchParams.get("preview")) return null;

/* 	const getPlayerCount = () => {
		nuiCallback("/getPlayerCount", {}, (result: number) => {
			setPlayerCount(result);
		});
	}; */

	return (
		<main className="flex items-center justify-center min-h-screen w-screen z-50">
			<AppLayout/>
			
		</main>
	);
}
