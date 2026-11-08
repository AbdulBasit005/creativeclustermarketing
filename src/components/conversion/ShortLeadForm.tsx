"use client";

import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

import { Button } from "@/components/ui/Button";
import { site } from "@/constants/site";
import { submitWeb3Form } from "@/lib/web3forms";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full border border-taupe/40 bg-ivory px-3 py-2.5 text-sm text-espresso placeholder:text-taupe focus:border-gold focus:outline-none";

type ShortLeadFormProps = {
  source: string;
  className?: string;
  submitLabel?: string;
};

export function ShortLeadForm({
  source,
  className,
  submitLabel = "Request a call back",
}: ShortLeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) {
      setStatus("done");
      return;
    }

    setStatus("loading");
    try {
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const result = await submitWeb3Form({
        name,
        email,
        phone,
        subject: `Strategy call request — ${source}`,
        message: `${name} requested a strategy call from ${source}. Phone: ${phone}`,
        from_name: name,
        source,
      });
      if (result.success) {
        setStatus("done");
        if (typeof window !== "undefined") {
          // GA4 + Meta booking assist event
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const w = window as any;
          w.gtag?.("event", "generate_lead", { event_category: source });
          w.fbq?.("track", "Lead", { content_name: source });
        }
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className={cn("border border-gold bg-espresso p-6 text-sm text-ivory", className)}
      >
        Thanks — we&apos;ll follow up shortly. Or{" "}
        <a href={site.ctaHref} className="text-gold underline">
          book a time now
        </a>
        .
      </p>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-3", className)}
      noValidate
      data-form="short-lead"
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input
        name="name"
        type="text"
        required
        autoComplete="name"
        placeholder="Name"
        className={inputClasses}
        aria-label="Name"
      />
      <input
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className={inputClasses}
        aria-label="Email"
      />
      <input
        name="phone"
        type="tel"
        autoComplete="tel"
        placeholder="Phone"
        className={inputClasses}
        aria-label="Phone"
      />
      {status === "error" ? (
        <p role="alert" className="text-xs text-coral">
          Something went wrong — call us at {site.phone} or try again.
        </p>
      ) : null}
      <Button type="submit" size="md" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          submitLabel
        )}
      </Button>
    </form>
  );
}
