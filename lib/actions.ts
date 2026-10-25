'use server';

import { contactSchema, type ContactValues } from '@/lib/schemas';
import { BirdClient } from '@messagebird/sdk';
import * as z from 'zod';

const bird = new BirdClient({ apiKey: process.env.BIRD_API_KEY! });

type SendMessageResult =
  | { success: true }
  | {
      success: false;
      message: string;
      fieldErrors?: Partial<Record<keyof ContactValues, string>>;
    };

export async function sendMessage(values: ContactValues): Promise<SendMessageResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors = Object.fromEntries(
      Object.entries(z.flattenError(parsed.error).fieldErrors).map(([field, errors]) => [
        field,
        errors?.[0],
      ])
    );
    return { success: false, message: 'Please correct the highlighted fields.', fieldErrors };
  }

  const { name, email, phone, message } = parsed.data;

  const { error } = await bird.email
    .send({
      from: { email: 'contact-form@zachscroggins.com', name: 'Contact Form' },
      to: [process.env.MY_EMAIL_ADDRESS!],
      subject: 'New message from contact form',
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, message].join('\n\n'),
    })
    .safe();

  if (error) {
    console.error({ error });
    return { success: false, message: error.message };
  }

  return { success: true };
}
