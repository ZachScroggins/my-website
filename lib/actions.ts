'use server';

import { BirdClient } from '@messagebird/sdk';

const bird = new BirdClient({ apiKey: process.env.BIRD_API_KEY! });

export async function sendMessage({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const { error } = await bird.email
    .send({
      from: { email: 'contact-form@zachscroggins.com', name: 'Contact Form' },
      to: [`${process.env.MY_EMAIL_ADDRESS}`],
      subject: 'New message from contact form',
      text: `
Name: ${name}
    
Email: ${email}
    
Phone: ${phone}
          
${message}
        `,
    })
    .safe();

  if (error) {
    console.error({ error });
    return { success: false, message: error.message };
  }

  return { success: true };
}
