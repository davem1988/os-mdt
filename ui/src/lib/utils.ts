export function formatDateToFrench(dateStr: string): string {
    const months = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    const [year, month, day] = dateStr.split("-").map(Number);
    return `${day} ${months[month - 1]} ${year}`;
}

