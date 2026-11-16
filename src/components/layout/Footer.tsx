"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { site } from "@/constants/site";
import { serviceCategories } from "@/content/services";
import { submitWeb3Form } from "@/lib/web3forms";

/* Brand icons were removed from lucide-react v1, so these are inline SVGs. */
const brandIconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
  className: "h-5 w-5",
} as const;

function FacebookIcon() {
  return (
    <svg {...brandIconProps}>
      <path d="M13.5 21v-7h2.5l.5-3h-3V9.1c0-.9.3-1.6 1.7-1.6H16.6V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9V11H8v3h2.5v7h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...brandIconProps}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.1.4 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.1.4-2.3.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.4-.4-1.1-.4-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.1-.4 2.3-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 0 5.7.1 4.8.3 4 .6c-.8.3-1.5.7-2.2 1.4C1.1 2.7.7 3.4.4 4.2.1 5 0 5.9 0 7.2 0 8.5 0 8.9 0 12s0 3.5.1 4.8c.1 1.3.3 2.2.6 3 .3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.7.5 3 .6 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.3-.1 2.2-.3 3-.6.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.3-.3-2.2-.6-3-.3-.8-.7-1.5-1.4-2.2C20.3 1.3 19.6.9 18.8.6 18 .3 17.1.1 15.8 0 14.5 0 14.1 0 12 0z" />
      <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 4.1a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg {...brandIconProps}>
      <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.2 8.4h3.6V22H1.2V8.4zm6.5 0h3.4v1.9h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V22h-3.6v-6.7c0-1.6 0-3.7-2.2-3.7s-2.6 1.7-2.6 3.5V22H7.7V8.4z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg {...brandIconProps}>
      <path d="M19.6 6.7a4.8 4.8 0 0 1-3.5-1.6 4.8 4.8 0 0 1-1.2-3.1h-3.2v13.2a2.9 2.9 0 1 1-2-2.7V9.2a6 6 0 1 0 5.2 6V8.9a7.9 7.9 0 0 0 4.7 1.5V7.2c-.6 0-1.3-.2-2-.5z" />
    </svg>
  );
}

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "failed" | "success">(
    "idle",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await submitWeb3Form({
        email: email.trim(),
        name: "Newsletter subscriber",
        subject: "Newsletter signup",
        message: `${email.trim()} subscribed to the Creative Clusters newsletter.`,
        from_name: "Website Newsletter",
      });
      if (result.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("failed");
      }
    } catch {
      setStatus("failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-ivory/15 bg-espresso text-ivory">
      {/* Oversized watermark wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap font-display text-[18vw] font-bold leading-none text-ivory/[0.04]"
      >
        Creative Clusters
      </p>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.7fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label={site.name} className="inline-block">
              <Image
                src="/logos/logo-footer.png"
                alt={site.name}
                width={800}
                height={402}
                className="h-auto w-52"
              />
            </Link>
            <p className="mt-4 font-display text-sm font-medium text-gold">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand">
              {site.description}
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic text-sand">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {site.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.phoneHref} className="hover:text-ivory">
                  {site.phone}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={site.emailHref} className="break-all hover:text-ivory">
                  {site.email}
                </a>
              </p>
            </address>
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand transition-colors hover:text-gold"
              >
                <FacebookIcon />
              </a>
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand transition-colors hover:text-gold"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand transition-colors hover:text-gold"
              >
                <LinkedinIcon />
              </a>
              <a
                href={site.social.tiktok}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand transition-colors hover:text-gold"
              >
                <TiktokIcon />
              </a>
            </div>
          </div>

          {/* Services — all categories from services.md */}
          <nav aria-label="Services">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-sm text-sand transition-colors hover:text-ivory"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Company
            </h2>
            <ul className="mt-5 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">
              Newsletter
            </h2>
            <p className="mt-5 text-sm text-sand">
              Join our newsletter to stay informed about new tips, tutorials,
              projects, products, investments!
            </p>
            <form onSubmit={onSubscribe} className="mt-5" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <div className="flex">
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setStatus("idle");
                  }}
                  placeholder="you@example.com"
                  className="h-11 w-full border border-ivory/15 bg-transparent px-4 text-sm text-ivory placeholder:text-taupe focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 shrink-0 bg-coral px-5 font-display text-xs font-semibold uppercase tracking-wide text-ivory transition-colors hover:bg-coral-deep disabled:opacity-70"
                >
                  {isSubmitting ? "Sending…" : "Subscribe"}
                </button>
              </div>
              {status === "error" && (
                <p role="alert" className="mt-2 text-xs text-coral">
                  Please enter a valid email address.
                </p>
              )}
              {status === "failed" && (
                <p role="alert" className="mt-2 text-xs text-coral">
                  Something went wrong — please try again.
                </p>
              )}
              {status === "success" && (
                <p role="status" className="mt-2 text-xs text-gold">
                  Thanks — you&apos;re on the list!
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 text-xs text-taupe sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ivory">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
