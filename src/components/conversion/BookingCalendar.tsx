import { site } from "@/constants/site";

/**
 * Embeds Calendly/Cal.com when NEXT_PUBLIC_BOOKING_URL is set.
 * Uses a simple iframe so we avoid third-party script weight on first paint.
 */
export function BookingCalendar() {
  const url = site.bookingUrl;
  const embedSrc = url.includes("?")
    ? `${url}&hide_gdpr_banner=1`
    : `${url}?hide_gdpr_banner=1`;

  return (
    <div className="overflow-hidden border border-taupe/40 bg-ivory">
      <iframe
        title="Book a free 20-minute strategy call"
        src={embedSrc}
        className="h-[700px] w-full border-0"
        loading="lazy"
        data-booking="calendar"
      />
      <p className="border-t border-taupe/30 px-4 py-3 text-xs text-taupe">
        Calendar not loading?{" "}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-crimson underline"
          data-cta="book-strategy-call-external"
        >
          Open the booking page
        </a>
        .
      </p>
    </div>
  );
}
