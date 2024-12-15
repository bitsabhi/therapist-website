// src/types/index.ts
export interface ContactInfo {
    phone: string;
    email: string;
    location: string;
    mapLink: string;
    hours: string;
}

export interface ServiceInfo {
    id: string;
    name: string;
    description?: string;
}

export interface BookingFormData {
    name: string;
    email: string;
    phone: string;
    mode: 'Online' | 'In-clinic';
    message: string;
    digiDoc?: string;
}
