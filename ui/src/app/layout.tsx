"use client"

import Providers from "@/components/providers";
import { useSelector } from "react-redux";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from 'react'
import Image from "next/image";
import { RootState } from "@/state/store";
import { useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const searchParams = useSearchParams();

	if (!searchParams.get("preview")) return null;

	function HomeFallback() {
		return <>placeholder</>
	}

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} p-0 m-0`}>
				<Providers>
				<Suspense fallback={<HomeFallback />}>
					<Image src="/background_tablet.png" alt="background" width={1000} height={800} className="absolute top-[10%] left-[24%] -z-10"/>
					{children}
        		</Suspense>
				</Providers>
			</body>
		</html>
	);
}
