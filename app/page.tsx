import Image from "next/image";

import {
  BridgeIcon,
  CommunityIcon,
  ResilienceIcon,
  SchoolIcon
} from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { CTABanner } from "@/components/cta-banner";
import { FounderStory } from "@/components/founder-story";
import { Hero } from "@/components/hero";
import { ImpactStats } from "@/components/impact-stats";
import { SectionTitle } from "@/components/section-title";
import {
  featuredPilotProject,
  founderStoryPreview,
  helpPrograms,
  impactStats,
  whyWeExist
} from "@/data/site-content";
import { getAssetPath } from "@/lib/asset-path";

const programIcons = {
  bridge: BridgeIcon,
  school: SchoolIcon,
  community: CommunityIcon,
  resilience: ResilienceIcon
} as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="why-we-exist" className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Why We Exist"
              title="A river crossing should never decide who gets education, healthcare, or safety."
              description="Safe Crossing Foundation exists for communities where access still depends on dangerous improvisation instead of reliable infrastructure."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted">
              {whyWeExist.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/90 p-3 shadow-[0_24px_65px_rgba(31,77,120,0.1)]">
              {/* Placeholder image: replace with documentary-style field photography of a rural community and bridge access. */}
              <Image
                src={getAssetPath("/images/bridge-community.svg")}
                alt="Placeholder illustration of a rural community connected by a safe pedestrian bridge"
                width={1200}
                height={900}
                className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.7rem] border border-border/70 bg-white/88 p-5 shadow-[0_20px_48px_rgba(31,77,120,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">School Access</p>
                <p className="font-heading mt-3 text-2xl leading-tight tracking-[-0.03em] text-ink">
                  Children should arrive ready to learn, not exhausted by danger.
                </p>
              </div>
              <div className="rounded-[1.7rem] border border-border/70 bg-white/88 p-5 shadow-[0_20px_48px_rgba(31,77,120,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Community Dignity</p>
                <p className="font-heading mt-3 text-2xl leading-tight tracking-[-0.03em] text-ink">
                  Safe movement keeps families connected to care, work, and one another.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Impact Snapshot"
            title="A mission framed with measurable need"
            description="These launch-phase figures are placeholders for future reporting and are designed to show donors, partners, and volunteers how the foundation can communicate progress with clarity."
            align="center"
          />
          <div className="mt-10">
            <ImpactStats stats={impactStats} />
          </div>
        </div>
      </section>

      <section id="how-we-help" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="How We Help"
            title="We support safer crossings through engineering, partnership, and long-term care."
            description="Each part of the work matters: technical planning, school access, community collaboration, and stewardship beyond the first build."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {helpPrograms.map((program) => {
              const Icon = programIcons[program.icon];

              return (
                <article
                  key={program.title}
                  className="group rounded-[1.85rem] border border-border/70 bg-white/90 p-6 shadow-[0_20px_52px_rgba(31,77,120,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(31,77,120,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading mt-6 text-3xl leading-tight tracking-[-0.03em] text-ink">{program.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{program.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FounderStory content={founderStoryPreview} compact showCta />

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.2rem] border border-border/70 bg-white/90 p-8 shadow-[0_28px_70px_rgba(31,77,120,0.1)] lg:grid-cols-[1.03fr_0.97fr] lg:items-center lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">Featured Project</p>
            <h2 className="font-heading mt-4 text-5xl leading-tight tracking-[-0.05em] text-ink">{featuredPilotProject.name}</h2>
            <p className="mt-3 text-sm font-medium text-muted">{featuredPilotProject.location}</p>
            <span className="mt-4 inline-flex rounded-full border border-[#d7c39d] bg-[#f8eedb] px-3 py-1 text-xs font-semibold text-[#7a6638]">
              {featuredPilotProject.status}
            </span>
            <p className="mt-6 text-base leading-8 text-muted">{featuredPilotProject.summary}</p>
            <p className="mt-5 text-base leading-8 text-muted">{featuredPilotProject.description}</p>
            <ul className="mt-6 space-y-4">
              {featuredPilotProject.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-[1.4rem] border border-primary/10 bg-primary/5 px-5 py-4 text-sm leading-7 text-primary">
                  {outcome}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/projects">Explore Projects</ButtonLink>
              <ButtonLink href="/donate" variant="secondary">
                Support the Pilot
              </ButtonLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.9rem] border border-border/70 bg-surface p-3">
            {/* Placeholder image: replace with pilot bridge renders, site photography, or engineering visuals later. */}
            <Image
              src={getAssetPath(featuredPilotProject.image)}
              alt={featuredPilotProject.imageAlt}
              width={1200}
              height={900}
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <CTABanner
        title="Help turn engineering expertise into safer daily life."
        description="Whether you give, partner, or volunteer, your support can help move a dangerous crossing toward a durable, dignified solution."
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/get-involved"
        secondaryLabel="Get Involved"
      />
    </>
  );
}
