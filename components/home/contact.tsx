'use client';

import { toast } from '@/components/ui/toast';
import { sendMessage } from '@/lib/actions';
import { cn } from '@/lib/utils';
import { useActionState } from 'react';

export default function Contact() {
  const [{ key }, formAction, isPending] = useActionState(
    async (prev: { key: number }, formData: FormData) => {
      const name = String(formData.get('full_name'));
      const email = String(formData.get('email'));
      const phone = String(formData.get('phone'));
      const message = String(formData.get('message'));
      const honeyPot = String(formData.get('contact_honey'));
      if (honeyPot || !name.trim() || !email.trim() || !message.trim()) return prev;

      const data = await sendMessage({ name, email, phone, message });

      if (!data.success) {
        toast.add({
          type: 'error',
          title: 'Error sending message',
          description: data.message || 'Oops... Something went wrong. Please try again later.',
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
    },
    { key: 0 }
  );

  return (
    <section className="relative bg-gray-100 lg:mt-16 dark:bg-gray-900">
      <div className="lg:relative">
        <div className="h-full w-full bg-gray-900 py-4 lg:hidden">
          <img
            src="/images/web-dev-laptop.png"
            alt="Web development graphic"
            width={1280}
            height={1104}
            loading="lazy"
          />
        </div>
        <div className="relative hidden h-80 w-full bg-gray-900 sm:h-96 lg:absolute lg:inset-y-0 lg:left-0 lg:block lg:h-full lg:w-1/2 lg:rounded-tr-3xl">
          <img
            src="/images/web-dev-laptop.png"
            alt="Web development graphic"
            width={1280}
            height={1104}
            loading="lazy"
            className="absolute top-0 right-0 h-full w-full max-w-7xl rounded-tr-3xl bg-gray-900 object-contain object-right py-8"
          />
        </div>
        <div id="contact" className="mx-auto w-full max-w-7xl py-8 text-left">
          <div className="px-4 sm:px-6 lg:ml-auto lg:w-1/2">
            <div className="">
              <h2 className="mt-2 mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Contact
                </span>
              </h2>
              <h3 className="mt-2 mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Send me a message
              </h3>
              <form key={key} className="grid grid-cols-1 gap-y-6" action={formAction}>
                <input type="hidden" name="contact_honey" id="contact_honey" />
                <div>
                  <label htmlFor="full_name" className="mb-2 block text-gray-700 dark:text-white">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-300"
                    placeholder="Tim Cook"
                    required
                  />
                </div>
                <div className="w-full space-y-6 md:flex md:grow md:space-y-0 md:space-x-6">
                  <div className="w-full">
                    <label htmlFor="email" className="mb-2 block text-gray-700 dark:text-gray-100">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-300"
                      placeholder="tim@apple.com"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="phone" className="mb-2 block text-gray-700 dark:text-gray-100">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-300"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-gray-700 dark:text-gray-100">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-300"
                    placeholder="What would you like to say?"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isPending}
                    className={cn(
                      'inline-flex items-center rounded-md bg-linear-to-r from-green-400 to-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm filter hover:brightness-110 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none',
                      isPending && 'pointer-events-none'
                    )}
                  >
                    {isPending ? (
                      <svg
                        className="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
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
                        className="mr-3 -ml-1 h-5 w-5"
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
