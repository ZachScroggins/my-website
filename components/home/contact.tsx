'use client';

import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast';
import { sendMessage } from '@/lib/actions';
import { contactSchema, type ContactValues } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

const fieldClass =
  'h-auto rounded-md bg-background px-4 py-3 text-base shadow-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-ring md:text-base dark:bg-background dark:placeholder:text-muted-foreground';
const labelClass = 'text-base font-normal text-muted-foreground dark:text-foreground';

const defaultValues: ContactValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  contactHoney: '',
};

export default function Contact() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  async function onSubmit(values: ContactValues) {
    const result = await sendMessage(values);

    if (!result.success) {
      for (const [field, message] of Object.entries(result.fieldErrors ?? {})) {
        form.setError(field as keyof ContactValues, { message });
      }
      toast.add({
        type: 'error',
        title: 'Error sending message',
        description: result.message || 'Oops... Something went wrong. Please try again later.',
      });
      return;
    }

    toast.add({
      type: 'success',
      title: 'Message sent',
      description:
        'Thank you! I have received your message and will get back to you as soon as possible.',
    });
    form.reset();
  }

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
          <form noValidate onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup className="gap-6">
              <input type="hidden" id="contact_honey" {...form.register('contactHoney')} />
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="full_name" className={labelClass}>
                      Full name
                    </FieldLabel>
                    <Input
                      {...field}
                      id="full_name"
                      autoComplete="name"
                      className={fieldClass}
                      placeholder="Tim Cook"
                      aria-invalid={fieldState.invalid}
                      required
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email" className={labelClass}>
                        Email
                      </FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        type="email"
                        autoComplete="email"
                        className={fieldClass}
                        placeholder="tim@apple.com"
                        aria-invalid={fieldState.invalid}
                        required
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phone" className={labelClass}>
                        Phone
                      </FieldLabel>
                      <Input
                        {...field}
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        className={fieldClass}
                        placeholder="Optional"
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </div>
              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="message" className={labelClass}>
                      Message
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id="message"
                      rows={4}
                      className={`${fieldClass} field-sizing-fixed min-h-0`}
                      placeholder="What would you like to say?"
                      aria-invalid={fieldState.invalid}
                      required
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="h-auto gap-3 self-start rounded-md border-0 bg-transparent bg-linear-to-r from-chart-1 to-chart-3 px-6 py-3 text-base text-white shadow-sm hover:bg-transparent hover:brightness-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:opacity-100"
              >
                {form.formState.isSubmitting ? (
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
              </Button>
            </FieldGroup>
          </form>
        </div>
      </div>
    </section>
  );
}
