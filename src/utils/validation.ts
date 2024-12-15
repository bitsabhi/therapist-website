// src/utils/validation.ts
import { z } from 'zod';

export const bookingFormSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be less than 50 characters'),

    email: z.string()
        .email('Invalid email address'),

    phone: z.string()
        .regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),

    mode: z.enum(['Online', 'In-clinic']),

    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message must be less than 500 characters')
        .optional()
});
