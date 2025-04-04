import Providers from "@/components/providers";
import { ModalProvider } from "@/state/ModalContext";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from 'react'


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
			<body className={`${inter.className} p-0 m-0 overflow-hidden`}>
				<Providers>
					<Suspense fallback={<HomeFallback />}>
						<ModalProvider>
							{children}
						</ModalProvider>
        			</Suspense>
				</Providers>
			</body>
		</html>
	);
}
