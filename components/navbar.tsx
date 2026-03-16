"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/button-link";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { navigationLinks } from "@/data/site-content";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/45 bg-background/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8" aria-label="Primary navigation">
        <Logo variant="nav" />

        <div className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink href="/donate" size="sm" className="shadow-[0_16px_34px_rgba(31,77,120,0.18)]">
            Donate Now
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white/88 text-ink transition hover:border-primary/20 hover:text-primary md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-border/60 bg-white/95 px-6 py-5 backdrop-blur md:hidden">
          <div className="mx-auto max-w-7xl space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  pathname === link.href ? "bg-primary/8 text-primary" : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/donate" className="w-full justify-center">
              Donate Now
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
