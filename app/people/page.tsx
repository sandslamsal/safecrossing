import type { Metadata } from "next";

import { CTABanner } from "@/components/cta-banner";
import { PageHeader } from "@/components/page-header";
import { PersonCard } from "@/components/person-card";
import { SectionTitle } from "@/components/section-title";
import {
  founderProfile,
  peoplePageIntro,
  teamMembers
} from "@/data/site-content";

export const metadata: Metadata = {
  title: "People"
};

const futureTeamMembers = teamMembers.filter((member) => member.category === "Future Team");
const advisorsAndVolunteers = teamMembers.filter((member) => member.category === "Advisors & Volunteers");

export default function PeoplePage() {
  return (
    <>
      <PageHeader
        eyebrow="People"
        title="The people behind Safe Crossing Foundation"
        description="Meet the founder, future team members, and the advisors or volunteers who can help shape the mission with care over time."
        imageSrc="/images/mountain-map.svg"
        imageAlt="Placeholder illustration representing connection across mountainous communities"
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-border/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(31,77,120,0.08)]">
          <SectionTitle eyebrow="Our People" title={peoplePageIntro.title} description={peoplePageIntro.description} />
        </div>
      </section>

      <section id="founder" className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Founder"
            title="A bridge engineer whose mission began with Nepal"
            description="The fuller story lives here so donors and partners can understand the bridge motivation behind the foundation without crowding the homepage."
          />
          <div className="mt-10">
            <PersonCard member={founderProfile} featured />
          </div>
        </div>
      </section>

      <section id="team" className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Future Team"
            title="Roles the organization is designed to grow into"
            description="These placeholders show how future staff can be added cleanly as the organization grows."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {futureTeamMembers.map((member) => (
              <PersonCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section id="advisors" className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Advisors & Volunteers"
            title="A future network of guidance, expertise, and support"
            description="Advisors and volunteers can help extend the foundation's technical strength, relationships, and responsiveness."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {advisorsAndVolunteers.map((member) => (
              <PersonCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Help build the partnerships behind safer crossings."
        description="Support the foundation as a donor, advisor, volunteer, or future collaborator."
        primaryHref="/get-involved"
        primaryLabel="Get Involved"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
