import type { DonationTier } from "@/data/site-content";

import { ButtonLink } from "@/components/button-link";

type DonationCardProps = {
  tier: DonationTier;
};

export function DonationCard({ tier }: DonationCardProps) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.85rem] border p-6 shadow-[0_22px_55px_rgba(31,77,120,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_68px_rgba(31,77,120,0.14)] ${
        tier.featured ? "border-primary/30 bg-primary text-white" : "border-border/70 bg-white/92 text-ink"
      }`}
    >
      <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${tier.featured ? "text-white/70" : "text-secondary"}`}>{tier.title}</p>
      <p className="font-heading mt-4 text-6xl tracking-[-0.06em]">{tier.amount}</p>
      <p className={`mt-5 text-sm leading-7 ${tier.featured ? "text-white/82" : "text-muted"}`}>{tier.description}</p>
      <p className={`mt-5 rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${tier.featured ? "border-white/15 bg-white/10 text-white" : "border-primary/10 bg-primary/5 text-primary"}`}>
        {tier.impact}
      </p>
      <div className="mt-6">
        <ButtonLink href="#donation-integration" variant={tier.featured ? "secondary" : "primary"} className={tier.featured ? "border-white/20 bg-white text-primary hover:bg-white/95" : ""}>
          Choose this level
        </ButtonLink>
      </div>
    </div>
  );
}
