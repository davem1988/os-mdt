import Providers from "@/components/providers";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from 'react'
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_RESOURCE_NAME,
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	function HomeFallback() {
		return <>placeholder</>
	}

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} p-0 m-0`}>
				<Providers>
				<Suspense fallback={<HomeFallback />}>
				<div className="w-full h-full p-0 m-0 flex justify-center items-center">
					<Image src="/background_tablet.png" alt="background" width={1000} height={800} className="absolute top-[10%] left-[24%]"/>
					{children}
				</div>
        		</Suspense>
				</Providers>
			</body>
		</html>
	);
}
