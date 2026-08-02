"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { submitContactForm } from "@/lib/actions";
import {
  contactCategories,
  contactSchema,
  type ContactFormData,
} from "@/schemas/contact";

/* The current site uses a multi-step form; this is the simplified single-step
   redesign. A multi-step wizard is an optional future enhancement. */

const inputClasses =
  "w-full border border-taupe/40 bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-taupe focus:border-gold focus:outline-none";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-coral">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { category: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    const result = await submitContactForm(data);
    if (result.ok) {
      setSubmitted(true);
    } else {
      setServerError("Something went wrong — please try again.");
    }
  };

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-gold bg-espresso p-12 text-center text-ivory"
      >
        <p className="font-display text-h2 font-bold text-gold">
          It&apos;s done! Let&apos;s work
        </p>
        <p className="mt-4 text-sand">
          Thanks for reaching out — we&apos;ll get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-espresso">
            Your Name <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            className={inputClasses}
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-espresso">
            Your Email <span className="text-coral">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            className={inputClasses}
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-espresso">
          Subject <span className="text-coral">*</span>
        </label>
        <input
          id="subject"
          type="text"
          aria-invalid={!!errors.subject}
          className={inputClasses}
          {...register("subject")}
        />
        <FieldError message={errors.subject?.message} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className="mb-2 block text-sm font-medium text-espresso">
            Category <span className="text-coral">*</span>
          </label>
          <select
            id="category"
            aria-invalid={!!errors.category}
            className={inputClasses}
            {...register("category")}
          >
            <option value="" disabled>
              Choose a service category…
            </option>
            {contactCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <FieldError message={errors.category?.message} />
        </div>
        <div>
          <label htmlFor="fieldOfWork" className="mb-2 block text-sm font-medium text-espresso">
            Your Field of Work
          </label>
          <input
            id="fieldOfWork"
            type="text"
            className={inputClasses}
            {...register("fieldOfWork")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-espresso">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          {...register("message")}
        />
      </div>

      {serverError && (
        <p role="alert" className="text-sm text-coral">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
