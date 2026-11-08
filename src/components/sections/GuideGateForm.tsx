"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { submitWeb3Form } from "@/lib/web3forms";

const inputClasses =
  "w-full border border-taupe/40 bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-taupe focus:border-gold focus:outline-none";

export function GuideGateForm() {
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
      const result = await submitWeb3Form({
        name: name || email,
        email,
        subject: "Neuromarketing guide download",
        message: `${email} requested the neuromarketing guide.`,
        from_name: name || "Guide download",
        source: "neuromarketing-guide",
      });
      if (result.success) {
        setStatus("done");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        w.gtag?.("event", "generate_lead", { event_category: "guide_download" });
        w.fbq?.("track", "Lead", { content_name: "neuromarketing-guide" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="border border-gold bg-espresso p-8 text-ivory"
      >
        <p className="font-display text-h3 font-bold text-gold">
          Check your inbox
        </p>
        <p className="mt-3 text-sand">
          Your guide link is on the way. While you wait,{" "}
          <a href="/contact" className="text-gold underline">
            book a free strategy call
          </a>
          .
        </p>
        {/* Placeholder PDF path — replace with real asset in /public/guides */}
        <a
          href="/resources/neuromarketing-guide/read"
          className="mt-6 inline-block text-sm font-medium text-gold underline"
        >
          Read the guide now
        </a>
      </div>
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
        placeholder="Name"
        className={inputClasses}
        aria-label="Name"
      />
      <input
        name="email"
        type="email"
        required
        placeholder="Email address"
        className={inputClasses}
        aria-label="Email address"
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
            Sending…
          </>
        ) : (
          "Get the free guide"
        )}
      </Button>
    </form>
  );
}
