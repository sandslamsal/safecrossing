import type { Metadata } from "next";
import Image from "next/image";

import { CTABanner } from "@/components/cta-banner";
import { PageHeader } from "@/components/page-header";
import { ProjectsFilter } from "@/components/projects-filter";
import { SectionTitle } from "@/components/section-title";
import { featuredPilotProject, projects } from "@/data/site-content";
import { getAssetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Projects"
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Projects shaped around real routes, local need, and practical engineering."
        description="This project library is structured for launch today and ready to expand later into a deeper database of field updates, donor reporting, and community stories."
        imageSrc="/images/project-pilot.svg"
        imageAlt="Placeholder illustration of a pilot bridge project concept"
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.2rem] border border-border/70 bg-white/90 p-8 shadow-[0_28px_70px_rgba(31,77,120,0.1)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">Featured Nepal Pilot</p>
            <h2 className="font-heading mt-4 text-5xl leading-tight tracking-[-0.05em] text-ink">{featuredPilotProject.name}</h2>
            <p className="mt-3 text-sm font-medium text-muted">{featuredPilotProject.location}</p>
            <span className="mt-4 inline-flex rounded-full border border-[#d7c39d] bg-[#f8eedb] px-3 py-1 text-xs font-semibold text-[#7a6638]">
              {featuredPilotProject.status}
            </span>
            <p className="mt-6 text-base leading-8 text-muted">{featuredPilotProject.description}</p>
            <ul className="mt-6 space-y-4">
              {featuredPilotProject.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-[1.4rem] border border-primary/10 bg-primary/5 px-5 py-4 text-sm leading-7 text-primary">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border border-border/70 bg-surface p-3">
            {/* Placeholder image: replace with pilot-specific photography, renderings, or site imagery later. */}
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

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Project Library"
            title="Browse project placeholders by current status"
            description="Each card is structured to support location details, status tracking, a short project description, and future visual updates."
          />
          <div className="mt-10">
            <ProjectsFilter projects={projects} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Fund a pilot, strengthen a route, or help prepare the next safe crossing."
        description="Project pages are designed to grow into transparent, donor-friendly records of real community access work."
        primaryHref="/donate"
        primaryLabel="Fund a Project"
        secondaryHref="/contact"
        secondaryLabel="Discuss Partnerships"
      />
    </>
  );
}
