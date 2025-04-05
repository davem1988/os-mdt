"use client"

import store from "@/state/store";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import EventListener from "./eventListener";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<ThemeProvider defaultTheme="light" attribute="class">
			<Provider store={store}>
				<DndProvider backend={HTML5Backend}>
					<EventListener>{children}</EventListener>
				</DndProvider>
			</Provider>
		</ThemeProvider>
	);
}
