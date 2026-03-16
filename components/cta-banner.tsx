import { ButtonLink } from "@/components/button-link";

type CTABannerProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTABanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CTABannerProps) {
  return (
    <section className="px-6 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.1rem] border border-primary/10 bg-[linear-gradient(135deg,#1f4d78_0%,#27587d_42%,#4e7d3d_100%)] px-8 py-10 text-white shadow-[0_28px_65px_rgba(31,77,120,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/65">Take action</p>
          <h2 className="font-heading mt-4 text-balance text-4xl tracking-[-0.04em] sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">{description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
          <ButtonLink href={primaryHref} variant="secondary" className="border-white/12 bg-white text-primary hover:bg-white/95">
            {primaryLabel}
          </ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="ghost" className="border-white/15 text-white hover:bg-white/10 hover:text-white">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
