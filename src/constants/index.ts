// src/constants/index.ts
export const CONTACT_INFO = {
    phone: '+91 98111 65038',
    email: 'pathak.kshama@gmail.com',
    location: 'Miracles Mediclinic Sec 56, Gurugram',
    mapLink: 'https://g.co/kgs/Qch3M6K',
    hours: '9:00 AM - 5:00 PM'
} as const;

export const SERVICES = [
    { id: '1', name: 'Marriage Counseling' },
    { id: '2', name: 'Depression & Anxiety' },
    { id: '3', name: 'Parenting Counseling' },
    { id: '4', name: 'Corporate Counseling' },
    { id: '5', name: 'Student Counseling' },
    { id: '6', name: 'Stress Management' }
] as const;
