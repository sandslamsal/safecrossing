import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { foundationMissionStatement, heroHighlights } from "@/data/site-content";
import { getAssetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-14 sm:pt-20 lg:px-8 lg:pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top_left,rgba(90,142,67,0.18),transparent_42%),radial-gradient(circle_at_78%_14%,rgba(31,77,120,0.16),transparent_36%),linear-gradient(180deg,rgba(246,241,232,0.9),rgba(246,241,232,0.98))]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.01fr_0.99fr] lg:items-center">
        <div className="max-w-xl reveal-up">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-secondary">Bridge access for communities at risk</p>
          <h1 className="font-heading text-shadow-soft text-balance text-5xl leading-[0.96] tracking-[-0.06em] text-ink sm:text-6xl xl:text-[4.7rem]">
            No child should cross a river without a bridge.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted sm:text-lg">{foundationMissionStatement}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="mt-8 grid gap-3 text-sm text-muted sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border/70 bg-white/78 p-4 shadow-[0_18px_42px_rgba(31,77,120,0.08)] backdrop-blur"
              >
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-sm leading-6">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-border/70 bg-white/88 p-6 shadow-[0_24px_65px_rgba(31,77,120,0.12)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Safe Crossing Foundation</p>
            <div className="mt-4 rounded-[1.6rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(31,77,120,0.03),rgba(90,142,67,0.05))] px-4 py-7 sm:py-8">
              <Logo variant="hero" asLink={false} priority />
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">
              The mark reflects the real danger behind the mission and the hope a safe bridge can bring.
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Future field imagery</p>
              <p className="font-heading mt-3 text-xl leading-tight tracking-[-0.03em] text-ink sm:text-2xl">
                Documentary photography can later show the rivers, terrain, and daily journeys this work is meant to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
