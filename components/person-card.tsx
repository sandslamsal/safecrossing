import Image from "next/image";

import type { TeamMember } from "@/data/site-content";
import { getAssetPath } from "@/lib/asset-path";

type PersonCardProps = {
  member: TeamMember;
  featured?: boolean;
};

export function PersonCard({ member, featured = false }: PersonCardProps) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-[2rem] border border-border/70 bg-white/92 shadow-[0_24px_60px_rgba(31,77,120,0.08)] lg:grid lg:grid-cols-[0.4fr_0.6fr]">
        <div className="border-b border-border/70 bg-surface p-4 lg:border-b-0 lg:border-r">
          <Image
            src={getAssetPath(member.photo)}
            alt={member.photoAlt}
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="p-7 lg:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">{member.category}</p>
          <h2 className="font-heading mt-4 text-4xl leading-tight tracking-[-0.04em] text-ink sm:text-5xl">{member.name}</h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.28em] text-muted">{member.role}</p>
          <p className="mt-6 text-base leading-8 text-muted">{member.shortBio}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {member.fullStory.map((section) => (
              <section key={section.title} className="rounded-[1.5rem] border border-border/70 bg-surface px-5 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-secondary">{section.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-border/70 bg-white/90 shadow-[0_20px_52px_rgba(31,77,120,0.08)]">
      <div className="border-b border-border/70 bg-surface p-4">
        <Image
          src={getAssetPath(member.photo)}
          alt={member.photoAlt}
          width={1200}
          height={1500}
          className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
        />
      </div>
      <div className="flex grow flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">{member.category}</p>
        <h3 className="font-heading mt-4 text-3xl leading-tight tracking-[-0.03em] text-ink">{member.name}</h3>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-muted">{member.role}</p>
        <p className="mt-5 text-sm leading-7 text-muted">{member.shortBio}</p>

        {member.fullStory.length ? (
          <details className="mt-6 rounded-[1.4rem] border border-primary/10 bg-primary/5 px-4 py-4">
            <summary className="cursor-pointer list-none text-sm font-semibold text-primary">Read more</summary>
            <div className="mt-4 space-y-4">
              {member.fullStory.map((section) => (
                <section key={section.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-secondary">{section.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">{section.content}</p>
                </section>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </article>
  );
}
