"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { submitWeb3Form } from "@/lib/web3forms";

const inputClasses =
  "w-full border border-taupe/40 bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-taupe focus:border-gold focus:outline-none";

export function WebinarForm() {
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
      const name = String(data.get("name") || "");
      const email = String(data.get("email") || "");
      const business = String(data.get("business") || "");
      const result = await submitWeb3Form({
        name,
        email,
        subject: "Webinar registration",
        message: `${name} (${business}) registered for the neuromarketing webinar. Email: ${email}`,
        from_name: name,
        source: "webinar",
      });
      if (result.success) {
        setStatus("done");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        w.gtag?.("event", "generate_lead", { event_category: "webinar" });
        w.fbq?.("track", "Lead", { content_name: "webinar" });
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
      <p role="status" className="border border-gold bg-espresso p-8 text-ivory">
        You&apos;re registered. We&apos;ll email the join details. Want to talk
        sooner?{" "}
        <a href="/contact" className="text-gold underline">
          Book a strategy call
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />
      <input
        name="name"
        required
        placeholder="Name"
        className={inputClasses}
        aria-label="Name"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email"
        className={inputClasses}
        aria-label="Email"
      />
      <input
        name="business"
        placeholder="Business / niche"
        className={inputClasses}
        aria-label="Business or niche"
      />
      {status === "error" ? (
        <p role="alert" className="text-sm text-coral">
          Something went wrong — please try again.
        </p>
      ) : null}
      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Registering…
          </>
        ) : (
          "Register for the webinar"
        )}
      </Button>
    </form>
  );
}
