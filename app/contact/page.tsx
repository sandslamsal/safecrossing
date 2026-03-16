import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import {
  GlobeIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon
} from "@/components/icons";
import { PageHeader } from "@/components/page-header";
import { SectionTitle } from "@/components/section-title";
import { contactDetails, socialLinks } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact"
};

const contactCards = [
  {
    title: "Email",
    value: contactDetails.email,
    icon: MailIcon
  },
  {
    title: "Phone",
    value: contactDetails.phone,
    icon: PhoneIcon
  },
  {
    title: "Address",
    value: contactDetails.address,
    icon: LocationIcon
  },
  {
    title: "Regional Coordination",
    value: contactDetails.regionalOffice,
    icon: GlobeIcon
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Reach out to start a thoughtful conversation."
        description="Whether you are exploring a partnership, donor opportunity, volunteer role, or project discussion, this contact page is ready to become the foundation's central outreach hub."
        imageSrc="/images/mountain-map.svg"
        imageAlt="Placeholder illustration representing mountain terrain and regional access routes"
      />

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-5">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <article key={card.title} className="rounded-[1.7rem] border border-border/70 bg-white/90 p-6 shadow-[0_20px_52px_rgba(31,77,120,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-secondary">{card.title}</p>
                  <p className="mt-3 text-base leading-7 text-ink">{card.value}</p>
                </article>
              );
            })}
          </div>

          <ContactForm
            title="Send a message"
            description="Use this placeholder form for general inquiries, media outreach, partnerships, volunteer interest, or donor conversations."
          />
        </div>
      </section>

      <section className="px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] border border-border/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(31,77,120,0.08)]">
            <SectionTitle
              eyebrow="Map Placeholder"
              title="Future office map or regional presence panel"
              description="This section can later host a live map, a Nepal field coordination panel, or a visual showing project geography."
            />
            <div className="mt-8 rounded-[1.8rem] border border-dashed border-primary/20 bg-[linear-gradient(180deg,rgba(31,77,120,0.04),rgba(90,142,67,0.08))] px-6 py-12">
              <p className="text-center text-sm font-medium uppercase tracking-[0.28em] text-secondary">Map integration placeholder</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/70 bg-white/90 p-8 shadow-[0_24px_60px_rgba(31,77,120,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Social Links</p>
            <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.04em] text-ink">Stay connected as the foundation grows.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex rounded-full border border-border bg-surface px-4 py-3 text-sm font-medium text-muted transition hover:-translate-y-0.5 hover:border-primary/20 hover:text-ink"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-muted">
              These are placeholder links for future official channels, campaign updates, and supporter storytelling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
