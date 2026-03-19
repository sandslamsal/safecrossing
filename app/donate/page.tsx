import type { Metadata } from "next";
import Image from "next/image";

import { CTABanner } from "@/components/cta-banner";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import {
  donationUses,
  monthlyGivingReasons
} from "@/data/site-content";
import { getAssetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Donate"
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Give so children and communities can cross with safety instead of fear."
        description="Every gift helps support the listening, planning, engineering, and long-term care required to turn a dangerous crossing into safer daily life."
        imageSrc="/images/hero-crossing.svg"
        imageAlt="Placeholder illustration of a child-focused river crossing landscape"
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/90 p-3 shadow-[0_24px_65px_rgba(31,77,120,0.1)]">
            {/* Placeholder image: replace with future documentary photography or real field imagery tied to donor storytelling. */}
            <Image
              src={getAssetPath("/images/bridge-community.svg")}
              alt="Placeholder illustration showing the promise of safe bridge access for a rural community"
              width={1200}
              height={900}
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="What Donations Support"
              title="Giving supports much more than a single structure."
              description="Responsible crossing work includes listening, planning, local partnership, technical review, and long-term stewardship. The donation page is built to explain that clearly."
            />
            <ul className="mt-8 space-y-4">
              {donationUses.map((item) => (
                <li key={item} className="rounded-[1.4rem] border border-border/70 bg-white/88 px-5 py-4 text-sm leading-7 text-muted shadow-[0_18px_46px_rgba(31,77,120,0.08)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/10 bg-[linear-gradient(135deg,rgba(31,77,120,0.08),rgba(90,142,67,0.12))] p-8 shadow-[0_24px_60px_rgba(31,77,120,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Monthly Giving</p>
          <h2 className="font-heading mt-4 text-5xl leading-tight tracking-[-0.05em] text-ink">
            Recurring support can sustain the work between visible milestones.
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {monthlyGivingReasons.map((reason) => (
              <p key={reason} className="rounded-[1.5rem] border border-white/60 bg-white/72 px-5 py-4 text-sm leading-7 text-muted">
                {reason}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="donation-integration" className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-dashed border-primary/20 bg-white/75 p-8 shadow-[0_20px_52px_rgba(31,77,120,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Donation Integration Placeholder</p>
          <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.04em] text-ink">
            Stripe or PayPal donation module will live here
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            This section is intentionally reserved for a future payment provider, embedded donation form, or campaign-specific fundraising module.
          </p>
          {/* Connect this section to Stripe, PayPal, or a nonprofit fundraising platform before launch. */}
        </div>
      </section>

      <CTABanner
        title="Give with confidence, then stay connected to the mission."
        description="The donation experience is designed to support immediate giving now and more advanced fundraising journeys as the foundation grows."
        primaryHref="/contact"
        primaryLabel="Talk to Our Team"
        secondaryHref="/projects"
        secondaryLabel="Explore Projects"
      />
    </>
  );
}
