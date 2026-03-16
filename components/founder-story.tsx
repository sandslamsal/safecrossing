import { ButtonLink } from "@/components/button-link";
import { Logo } from "@/components/logo";
import { SectionTitle } from "@/components/section-title";
import type { FounderStoryContent } from "@/data/site-content";

type FounderStoryProps = {
  content: FounderStoryContent;
  compact?: boolean;
  showCta?: boolean;
};

export function FounderStory({ content, compact = false, showCta = false }: FounderStoryProps) {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2.2rem] border border-border/70 bg-white/90 p-8 shadow-[0_28px_70px_rgba(31,77,120,0.1)] lg:grid-cols-[1.04fr_0.96fr] lg:items-start lg:p-10">
        <div>
          <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.intro} />
          <div className="mt-8 space-y-5 text-base leading-8 text-muted">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {showCta ? (
            <div className="mt-8">
              <ButtonLink href="/about#founder-story" variant="secondary">
                Read the full story
              </ButtonLink>
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="rounded-[1.9rem] border border-primary/10 bg-[linear-gradient(180deg,rgba(31,77,120,0.05),rgba(90,142,67,0.07))] p-6">
            <Logo variant={compact ? "card" : "hero"} asLink={false} />
            <blockquote className="font-heading mt-5 text-3xl leading-tight tracking-[-0.04em] text-ink">
              "{content.quote}"
            </blockquote>
          </div>

          <div className="rounded-[1.9rem] border border-border/70 bg-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Why this leadership matters</p>
            <ul className="mt-5 space-y-3">
              {content.credentials.map((credential) => (
                <li key={credential} className="rounded-[1.3rem] border border-primary/10 bg-white px-4 py-3 text-sm leading-6 text-muted">
                  {credential}
                </li>
              ))}
            </ul>
          </div>

          <div className={`grid gap-4 ${compact ? "sm:grid-cols-2" : ""}`}>
            {content.journey.map((step) => (
              <article key={step.title} className="rounded-[1.6rem] border border-border/70 bg-white p-5 shadow-[0_18px_46px_rgba(31,77,120,0.06)]">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">{step.title}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
