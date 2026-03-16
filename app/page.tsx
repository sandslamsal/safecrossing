import Image from "next/image";

import {
  BridgeIcon,
  CommunityIcon,
  ResilienceIcon,
  SchoolIcon
} from "@/components/icons";
import { ButtonLink } from "@/components/button-link";
import { CTABanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { SectionTitle } from "@/components/section-title";
import {
  featuredPilotProject,
  founderHomepageSummary,
  helpPrograms,
  founderProfile,
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

      <section id="why-we-exist" className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Why Safe Crossing Matters"
              title="A bridge can change what a community can safely reach."
              description={whyWeExist}
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/90 p-3 shadow-[0_24px_65px_rgba(31,77,120,0.1)]">
            {/* Placeholder image: replace with documentary-style field photography of a rural community and bridge access. */}
            <Image
              src={getAssetPath("/images/bridge-community.svg")}
              alt="Placeholder illustration of a rural community connected by a safe pedestrian bridge"
              width={1200}
              height={900}
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            />
            <div className="border-t border-border/60 px-4 py-5 sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">A practical humanitarian need</p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                Safe access is not abstract. It changes the risk a family carries every time a river stands between home and the rest of daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-help" className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="How We Help"
            title="Focused support for safer crossings"
            description="Each part of the work is designed to move one dangerous route toward a durable, trusted solution."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {helpPrograms.map((program) => {
              const Icon = programIcons[program.icon];

              return (
                <article
                  key={program.title}
                  className="group rounded-[1.85rem] border border-border/70 bg-white/90 p-5 shadow-[0_20px_52px_rgba(31,77,120,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(31,77,120,0.14)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading mt-5 text-2xl leading-tight tracking-[-0.03em] text-ink">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{program.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 overflow-hidden rounded-[2.1rem] border border-border/70 bg-white/90 p-7 shadow-[0_28px_70px_rgba(31,77,120,0.1)] lg:grid-cols-[0.34fr_0.66fr] lg:items-center lg:p-9">
          <div className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-surface p-3">
            <Image
              src={getAssetPath(founderProfile.photo)}
              alt={founderProfile.photoAlt}
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div>
            <SectionTitle
              eyebrow="Our Founder"
              title="A bridge engineer turning lived awareness into action."
              description={founderHomepageSummary}
            />
            <div className="mt-6">
              <ButtonLink href="/people#founder" variant="secondary">
                Read the Full Story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2.1rem] border border-border/70 bg-white/90 p-7 shadow-[0_28px_70px_rgba(31,77,120,0.1)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:p-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">Featured Pilot Project</p>
            <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.05em] text-ink sm:text-[3rem]">{featuredPilotProject.name}</h2>
            <p className="mt-3 text-sm font-medium text-muted">{featuredPilotProject.location}</p>
            <span className="mt-4 inline-flex rounded-full border border-[#d7c39d] bg-[#f8eedb] px-3 py-1 text-xs font-semibold text-[#7a6638]">
              {featuredPilotProject.status}
            </span>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              {featuredPilotProject.summary} {featuredPilotProject.description}
            </p>
            <div className="mt-7">
              <ButtonLink href="/projects">View the Pilot Project</ButtonLink>
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
        title="Help fund safer crossings with practical, lasting impact."
        description="Your support can help move a dangerous river route toward a bridge a community can trust."
        primaryHref="/donate"
        primaryLabel="Donate Now"
        secondaryHref="/get-involved"
        secondaryLabel="Get Involved"
      />
    </>
  );
}
