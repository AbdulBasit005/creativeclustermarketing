"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { submitWeb3Form } from "@/lib/web3forms";

const inputClasses =
  "w-full border border-taupe/40 bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-taupe focus:border-gold focus:outline-none";

export function ReferralForm() {
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
      const referrerName = String(data.get("referrerName") || "");
      const referrerEmail = String(data.get("referrerEmail") || "");
      const businessName = String(data.get("businessName") || "");
      const contactName = String(data.get("contactName") || "");
      const contactEmail = String(data.get("contactEmail") || "");
      const contactPhone = String(data.get("contactPhone") || "");
      const result = await submitWeb3Form({
        name: referrerName,
        email: referrerEmail,
        subject: "Referral program submission",
        message: `Referrer: ${referrerName} <${referrerEmail}>\nReferral business: ${businessName}\nContact: ${contactName} <${contactEmail}> ${contactPhone}`,
        from_name: referrerName,
        source: "referral-program",
      });
      if (result.success) {
        setStatus("done");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        w.gtag?.("event", "generate_lead", { event_category: "referral" });
        w.fbq?.("track", "Lead", { content_name: "referral" });
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
        className="border border-gold bg-espresso p-10 text-ivory"
      >
        Referral received — thank you. We&apos;ll follow up with you as it
        progresses.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />
      <h2 className="font-display text-h3 font-bold text-espresso">
        Your details
      </h2>
      <input
        name="referrerName"
        required
        placeholder="Your name"
        className={inputClasses}
        aria-label="Your name"
      />
      <input
        name="referrerEmail"
        type="email"
        required
        placeholder="Your email"
        className={inputClasses}
        aria-label="Your email"
      />
      <h2 className="pt-4 font-display text-h3 font-bold text-espresso">
        Who should we meet?
      </h2>
      <input
        name="businessName"
        required
        placeholder="Business name"
        className={inputClasses}
        aria-label="Business name"
      />
      <input
        name="contactName"
        required
        placeholder="Contact name"
        className={inputClasses}
        aria-label="Contact name"
      />
      <input
        name="contactEmail"
        type="email"
        required
        placeholder="Contact email"
        className={inputClasses}
        aria-label="Contact email"
      />
      <input
        name="contactPhone"
        type="tel"
        placeholder="Contact phone"
        className={inputClasses}
        aria-label="Contact phone"
      />
      {status === "error" ? (
        <p role="alert" className="text-sm text-coral">
          Something went wrong — please try again.
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Submit referral"
        )}
      </Button>
    </form>
  );
}
