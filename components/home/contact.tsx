'use client';

import { toast } from '@/components/ui/toast';
import { sendMessage } from '@/lib/actions';
import { useActionState } from 'react';

const fieldClass =
  'block w-full rounded-md border-input px-4 py-3 shadow-sm placeholder:text-gray-500 focus:border-ring focus:ring-ring dark:bg-background dark:text-gray-100 dark:placeholder:text-muted-foreground';
const labelClass = 'mb-2 block text-muted-foreground dark:text-gray-100';

type FormState = { key: number };

async function submitMessage(prev: FormState, formData: FormData): Promise<FormState> {
  const name = String(formData.get('full_name'));
  const email = String(formData.get('email'));
  const phone = String(formData.get('phone'));
  const message = String(formData.get('message'));
  const honeyPot = String(formData.get('contact_honey'));
  if (honeyPot || !name.trim() || !email.trim() || !message.trim()) return prev;

  const result = await sendMessage({ name, email, phone, message });

  if (!result.success) {
    toast.add({
      type: 'error',
      title: 'Error sending message',
      description: result.message || 'Oops... Something went wrong. Please try again later.',
    });
    return prev;
  }

  toast.add({
    type: 'success',
    title: 'Message sent',
    description:
      'Thank you! I have received your message and will get back to you as soon as possible.',
  });
  return { key: prev.key + 1 };
}

export default function Contact() {
  const [{ key }, formAction, isPending] = useActionState(submitMessage, { key: 0 });

  return (
    <section className="relative bg-muted lg:mt-16 dark:bg-background">
      <div className="bg-gray-900 py-4 lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2 lg:rounded-tr-3xl lg:py-0">
        <img
          src="/images/web-dev-laptop.png"
          alt="Web development graphic"
          width={1280}
          height={1104}
          loading="lazy"
          className="w-full lg:absolute lg:top-0 lg:right-0 lg:h-full lg:max-w-7xl lg:rounded-tr-3xl lg:object-contain lg:object-right lg:py-8"
        />
      </div>
      <div id="contact" className="mx-auto max-w-7xl py-8">
        <div className="px-4 sm:px-6 lg:ml-auto lg:w-1/2">
          <h2 className="mt-2 mb-4 w-fit bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
            Contact
          </h2>
          <h3 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Send me a message
          </h3>
          <form key={key} className="grid gap-y-6" action={formAction}>
            <input type="hidden" name="contact_honey" id="contact_honey" />
            <div>
              <label htmlFor="full_name" className={labelClass}>
                Full name
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autoComplete="name"
                className={fieldClass}
                placeholder="Tim Cook"
                required
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="tim@apple.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="Optional"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={fieldClass}
                placeholder="What would you like to say?"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-3 justify-self-start rounded-md bg-linear-to-r from-green-400 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:brightness-110 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-hidden disabled:pointer-events-none"
            >
              {isPending ? (
                <svg
                  className="-ml-1 size-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                <svg
                  className="-ml-1 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              )}
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
