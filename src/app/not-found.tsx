import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center bg-espresso text-ivory">
      <Container>
        <p className="font-display text-display font-bold text-gold">404</p>
        <h1 className="mt-4 font-display text-h2 font-bold">
          This page wandered off the brief.
        </h1>
        <p className="mt-4 max-w-md text-sand">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
