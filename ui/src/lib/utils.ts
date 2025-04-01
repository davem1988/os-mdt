import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDisplay, updateOfficers } from "../state/reducers/app";

export function formatDateToFrench(dateStr: string): string {
    const months = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    const [year, month, day] = dateStr.split("-").map(Number);
    return `${day} ${months[month - 1]} ${year}`;
}

const useNuiListener = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === "app/setDisplay") {
                dispatch(setDisplay(event.data.data)); // Use `data` field sent from Lua
            } else if (event.data?.type === "app/updateOfficers") {
                dispatch(updateOfficers(event.data.data));
            }
        };

        window.addEventListener("message", handleMessage);

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [dispatch]);

    return null;
};

export default useNuiListener;

