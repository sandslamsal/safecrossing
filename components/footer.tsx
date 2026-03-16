import Link from "next/link";

import { Logo } from "@/components/logo";
import {
  foundationMissionStatement,
  navigationLinks,
  socialLinks
} from "@/data/site-content";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/70 bg-[#ece5d9] px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.25fr_0.75fr_0.95fr]">
        <div className="max-w-xl">
          <Logo variant="footer" className="drop-shadow-[0_16px_30px_rgba(31,77,120,0.08)]" />
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.32em] text-secondary">Safe Crossing Foundation</p>
          <p className="mt-4 text-lg leading-8 text-muted">{foundationMissionStatement}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink">Quick Links</h2>
          <ul className="mt-5 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="text-sm font-semibold text-primary transition hover:text-[#183f62]">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-ink">Stay Connected</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Sign up for future field updates, project milestones, and ways to support safer crossings.
          </p>
          {/* Replace this placeholder signup with your newsletter provider or CRM form before launch. */}
          <form action="#" method="post" className="mt-6 space-y-3">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-border bg-white/92 px-4 py-3 text-sm text-ink outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/10"
            />
            <button
              type="submit"
              className="inline-flex rounded-full border border-primary bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#183f62] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Join newsletter
            </button>
          </form>
          <ul className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="inline-flex rounded-full border border-border bg-white/88 px-4 py-2 text-sm text-muted transition hover:-translate-y-0.5 hover:border-primary/20 hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; 2026 Safe Crossing Foundation. All rights reserved.</p>
        <p>Built to grow into future donation, newsletter, and supporter systems.</p>
      </div>
    </footer>
  );
}
