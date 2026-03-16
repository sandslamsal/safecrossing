import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { foundationMissionStatement, heroHighlights } from "@/data/site-content";
import { getAssetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-20 lg:px-8 lg:pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(90,142,67,0.18),transparent_42%),radial-gradient(circle_at_78%_14%,rgba(31,77,120,0.16),transparent_36%),linear-gradient(180deg,rgba(246,241,232,0.9),rgba(246,241,232,0.98))]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <div className="max-w-2xl reveal-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-secondary">Engineering access into dignity</p>
          <h1 className="font-heading text-shadow-soft text-balance text-6xl leading-none tracking-[-0.06em] text-ink sm:text-7xl xl:text-[5.5rem]">
            No child should have to risk a river to reach school.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">{foundationMissionStatement}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/donate" withArrow>
              Donate Now
            </ButtonLink>
            <ButtonLink href="/about#mission" variant="secondary">
              Our Mission
            </ButtonLink>
            <ButtonLink href="/get-involved" variant="ghost">
              Get Involved
            </ButtonLink>
          </div>
          <div className="mt-8 max-w-xl rounded-[1.8rem] border border-primary/10 bg-white/78 p-5 shadow-[0_20px_48px_rgba(31,77,120,0.08)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Founded by Dr. Sandesh Lamsal</p>
            <p className="mt-3 text-sm leading-7 text-muted">
              A Nepal-born structural and bridge engineer with a Ph.D. in structural engineering and professional bridge engineering experience in the United States.
            </p>
          </div>
          <div className="mt-10 grid gap-4 text-sm text-muted sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.6rem] border border-border/70 bg-white/76 p-4 shadow-[0_18px_48px_rgba(31,77,120,0.08)] backdrop-blur"
              >
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 leading-6">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-border/70 bg-white/86 p-6 shadow-[0_24px_65px_rgba(31,77,120,0.12)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Foundation Mark</p>
            <div className="mt-5 rounded-[1.6rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(31,77,120,0.03),rgba(90,142,67,0.05))] px-4 py-6">
              <Logo variant="hero" asLink={false} priority />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              The logo honors the lived danger behind the mission: schoolchildren crossing above moving water where a safe bridge should already exist.
            </p>
          </div>

          <div className="relative rounded-[2rem] border border-border/70 bg-white/84 p-3 shadow-[0_28px_70px_rgba(31,77,120,0.14)] backdrop-blur">
            {/* Placeholder image: replace with documentary-style field photography when available. */}
            <Image
              src={getAssetPath("/images/hero-crossing.svg")}
              alt="Documentary-style placeholder showing children near a dangerous mountain river crossing"
              width={1200}
              height={1100}
              priority
              className="aspect-[5/6] w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.5rem] border border-white/60 bg-white/88 p-5 shadow-[0_16px_40px_rgba(31,77,120,0.12)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Why it matters</p>
              <p className="font-heading mt-3 text-2xl leading-tight tracking-[-0.03em] text-ink">
                Safe crossing protects school access, healthcare access, and everyday human dignity.
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                The goal is not only to span a river, but to remove a daily barrier that has quietly shaped what a community can reach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
