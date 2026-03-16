import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { CTABanner } from "@/components/cta-banner";
import {
  DonateIcon,
  PartnerIcon,
  SponsorIcon,
  VolunteerIcon
} from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { faqItems, involvementOptions } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Get Involved"
};

const involvementIcons = {
  volunteer: VolunteerIcon,
  partner: PartnerIcon,
  sponsor: SponsorIcon,
  donate: DonateIcon
} as const;

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="There are meaningful ways to support safer crossings at every stage."
        description="Whether you bring time, technical knowledge, institutional partnership, or direct funding, this page is designed to make the next step feel clear and credible."
        imageSrc="/images/school-route.svg"
        imageAlt="Placeholder illustration of children walking a rural route toward school"
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Ways To Help"
            title="Four strong entry points into the mission"
            description="The site is structured to welcome early supporters now while remaining ready for future volunteer systems, partner workflows, and donor journeys."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {involvementOptions.map((option) => {
              const Icon = involvementIcons[option.icon];

              return (
                <article
                  key={option.title}
                  className="rounded-[1.9rem] border border-border/70 bg-white/90 p-7 shadow-[0_22px_58px_rgba(31,77,120,0.08)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h2 className="font-heading mt-6 text-4xl leading-tight tracking-[-0.04em] text-ink">{option.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{option.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
                    {option.points.map((point) => (
                      <li key={point} className="rounded-[1.2rem] border border-border/60 bg-surface px-4 py-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <ContactForm
            title="Tell us how you would like to help"
            description="Use this placeholder form to express interest in volunteering, sponsoring, partnering, or supporting a campaign."
            submitLabel="Send involvement inquiry"
            subjectOptions={["Volunteer", "Partner", "Sponsor", "Donate", "General Inquiry"]}
          />

          <div className="space-y-6">
            <div className="rounded-[1.9rem] border border-border/70 bg-white/90 p-7 shadow-[0_22px_58px_rgba(31,77,120,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Why involvement matters</p>
              <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.04em] text-ink">
                Safer crossings take more than funding alone.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted">
                Strong nonprofit work also depends on trusted relationships, technical input, communications support, and patient partners who understand the human stakes behind infrastructure.
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-border/30 bg-primary px-7 py-7 text-white shadow-[0_22px_58px_rgba(31,77,120,0.16)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">Future workflows this page can support</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/82">
                <li>Volunteer applications and skill matching</li>
                <li>Institutional partnership intake and follow-up</li>
                <li>Sponsorship packages for pilot and project phases</li>
                <li>Campaign-specific donor and partner journeys</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Helpful answers for future supporters"
            description="These FAQs are written to sound human, credible, and ready for expansion into a fuller supporter help center."
            align="center"
          />
          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group rounded-[1.6rem] border border-border/70 bg-white/92 px-6 py-5 shadow-[0_18px_46px_rgba(31,77,120,0.08)]">
                <summary className="font-heading cursor-pointer list-none text-2xl leading-tight tracking-[-0.03em] text-ink">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Every supporter helps widen the path toward safety."
        description="Bring your skills, your institution, or your resources into the mission and help communities move from risk to reliable access."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/donate"
        secondaryLabel="Donate"
      />
    </>
  );
}
