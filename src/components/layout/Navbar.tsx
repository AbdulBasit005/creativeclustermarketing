"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { navLinks, site } from "@/constants/site";
import { serviceCategories } from "@/content/services";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrollY = useScrollPosition();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLLIElement>(null);
  const solid = scrollY > 80;

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid || mobileOpen
          ? "bg-espresso border-b border-ivory/15"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-6"
      >
        <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
          <Image
            src="/logos/logo-main.png"
            alt={site.name}
            width={736}
            height={800}
            priority
            className="h-12 w-auto"
          />
          <span className="hidden font-display text-lg font-bold tracking-tight text-ivory sm:block">
            {site.shortName}
            <span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <li key={link.href} ref={megaRef} className="relative">
                <button
                  type="button"
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaOpen((o) => !o)}
                  className="flex items-center gap-1 text-sm font-medium text-ivory/90 transition-colors hover:text-gold"
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      megaOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full mt-4 w-[720px] -translate-x-1/2 border border-ivory/15 bg-espresso p-6 shadow-2xl"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {serviceCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            href={`/services/${cat.slug}`}
                            className="group flex items-start gap-3 p-3 transition-colors hover:bg-crimson/40"
                          >
                            <cat.icon
                              className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-medium text-ivory/90 group-hover:text-ivory">
                              {cat.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-ivory/15 pt-4">
                        <Link
                          href="/services"
                          className="text-sm font-medium text-gold hover:underline"
                        >
                          View all services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-gold",
                    pathname === link.href ? "text-gold" : "text-ivory/90"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-ivory lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <X className="h-7 w-7" aria-hidden="true" />
          ) : (
            <Menu className="h-7 w-7" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-20 z-40 overflow-y-auto bg-espresso lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
              className="flex flex-col gap-2 px-6 py-8"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 font-display text-3xl font-bold text-ivory hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <Button asChild size="lg">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
