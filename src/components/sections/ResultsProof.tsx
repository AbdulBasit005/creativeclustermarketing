import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeResults } from "@/content/caseStudies";

export function ResultsProof() {
  return (
    <section className="bg-espresso py-24 text-ivory">
      <Container>
        <SectionHeading
          onDark
          eyebrow="results in numbers"
          title="Proof before the pitch"
          description="A sample of outcomes from recent niche work — full stories on Case Studies."
        />
        <ul className="mt-14 grid gap-10 md:grid-cols-3">
          {homeResults.map((result) => (
            <li key={result.client} className="border-t border-ivory/15 pt-8">
              <p className="font-display text-display font-bold text-gold">
                {result.value}
              </p>
              <p className="mt-3 text-body text-sand">{result.label}</p>
              <p className="mt-4 text-sm uppercase tracking-wide text-taupe">
                {result.client}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
