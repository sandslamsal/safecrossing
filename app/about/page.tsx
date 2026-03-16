import type { Metadata } from "next";
import Image from "next/image";

import { CTABanner } from "@/components/cta-banner";
import { FounderStory } from "@/components/founder-story";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import {
  aboutStory,
  accessPillars,
  coreValues,
  founderStoryFull,
  milestones,
  organizationStory,
  teamMembers,
  whySafeCrossingMatters
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Safe Crossing Foundation"
        title="Safe crossing is a humanitarian need, not a luxury."
        description="We exist to help children and rural communities move through everyday life with greater safety, dignity, and access, beginning in Nepal and growing outward over time."
        imageSrc="/images/bridge-community.svg"
        imageAlt="Placeholder illustration of a bridge connecting a rural mountain community"
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <SectionTitle title={aboutStory.title} description={aboutStory.description} />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted">
              {organizationStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/90 p-3 shadow-[0_24px_65px_rgba(31,77,120,0.1)]">
            {/* Placeholder image: replace with documentary-style photography that reflects the organization's real field context. */}
            <Image
              src="/images/hero-crossing.svg"
              alt="Placeholder illustration of children near a dangerous river crossing"
              width={1200}
              height={900}
              className="aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="mission" className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(31,77,120,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Mission</p>
            <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.04em] text-ink">{aboutStory.mission}</h2>
          </div>
          <div className="rounded-[2rem] border border-border/30 bg-primary px-8 py-8 text-white shadow-[0_24px_60px_rgba(31,77,120,0.16)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Vision</p>
            <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.04em]">{aboutStory.vision}</h2>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Core Values"
            title="The work must be compassionate, technically serious, and accountable to the people it serves."
            description="These values guide how the foundation chooses projects, builds trust, communicates with donors, and works alongside communities."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-[1.8rem] border border-border/70 bg-white/90 p-6 shadow-[0_20px_52px_rgba(31,77,120,0.08)]"
              >
                <h3 className="font-heading text-3xl leading-tight tracking-[-0.03em] text-ink">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div id="founder-story">
        <FounderStory content={founderStoryFull} />
      </div>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="Why Safe Crossing Matters"
              title="Unsafe access affects education, healthcare, dignity, and rural opportunity all at once."
              description="The absence of a bridge changes much more than a route. It changes what people can reliably reach, how secure they feel, and how much risk becomes normal."
            />
            <div className="mt-8 space-y-5 text-base leading-8 text-muted">
              {whySafeCrossingMatters.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {accessPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-[1.7rem] border border-border/70 bg-white/88 p-5 shadow-[0_18px_46px_rgba(31,77,120,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{pillar.title}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Milestones"
            title="Placeholder markers for the foundation's early trajectory"
            description="These timeline blocks help the site communicate progress, readiness, and future ambition while the organization continues to develop."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <article key={milestone.year} className="rounded-[1.7rem] border border-border/70 bg-white/92 p-6 shadow-[0_20px_52px_rgba(31,77,120,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">{milestone.year}</p>
                <h3 className="font-heading mt-4 text-3xl leading-tight tracking-[-0.03em] text-ink">{milestone.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Team"
            title="Leadership and team structure ready to grow"
            description="This homepage-ready team section balances current clarity with room for future advisors, local staff, and program leadership profiles."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => {
              const initials = member.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2);

              return (
                <article key={member.name} className="rounded-[1.8rem] border border-border/70 bg-white/90 p-6 shadow-[0_20px_52px_rgba(31,77,120,0.08)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary">{initials}</div>
                  <h3 className="font-heading mt-5 text-3xl leading-tight tracking-[-0.03em] text-ink">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-secondary">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-muted">{member.bio}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Help build a foundation that communities can trust."
        description="Support the next chapter of Safe Crossing Foundation through partnership, giving, or shared expertise."
        primaryHref="/get-involved"
        primaryLabel="Get Involved"
        secondaryHref="/donate"
        secondaryLabel="Donate"
      />
    </>
  );
}
