// Type definitions for the Police Management Dashboard components

export interface OfficerInfo {
    rank: string;
    name: string;
}

export interface Vehicle {
    name: string;
}

export interface Infraction {
    type: string;
}

export interface CitizenInfo {
    fullName: string;
    birthDate: string;
    infractions: Infraction[];
    vehicles: Vehicle[];
    photoUrl: string;
}

export interface DutyOfficer {
    rank: string;
    name: string;
    unit: string;
}

export interface Alert {
    title: string;
    location: string;
    timeAgo: string;
}
  