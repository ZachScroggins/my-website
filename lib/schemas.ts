import * as z from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(1, 'Please enter your name.').max(100, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .min(1, 'Please enter your email.')
    .max(254, 'Email is too long.')
    .pipe(z.email('Please enter a valid email address.')),
  phone: z.string().trim().max(30, 'Phone number is too long.'),
  message: z
    .string()
    .trim()
    .min(1, 'Please enter a message.')
    .max(5000, 'Message must be at most 5000 characters.'),
  contactHoney: z.string().max(0),
});

export type ContactValues = z.infer<typeof contactSchema>;
