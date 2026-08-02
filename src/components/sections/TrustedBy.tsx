import { Container } from "@/components/ui/Container";
import { LogoMarquee } from "@/components/ui/LogoMarquee";
import { clientLogos } from "@/constants/clients";

export function TrustedBy() {
  return (
    <section className="border-b border-taupe/30 bg-ivory py-16 md:py-20">
      <Container>
        <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.25em] text-taupe">
          Trusted by ambitious brands
        </p>
      </Container>
      <LogoMarquee logos={clientLogos} duration={40} className="mt-12" />
    </section>
  );
}
