import Image from "next/image";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function PageHeader({ eyebrow, title, description, imageSrc, imageAlt }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-16 sm:pt-20 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top_left,rgba(90,142,67,0.14),transparent_48%),radial-gradient(circle_at_top_right,rgba(31,77,120,0.12),transparent_42%)]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-secondary">{eyebrow}</p>
          <h1 className="font-heading text-balance text-5xl leading-tight tracking-[-0.05em] text-ink sm:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-muted">{description}</p>
        </div>
        <div className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-white/80 p-3 shadow-[0_28px_70px_rgba(31,77,120,0.12)] backdrop-blur transition duration-500 hover:-translate-y-1">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,142,67,0.10),transparent_48%)]" />
          {/* Placeholder image: replace with documentary-style photography or project imagery when available. */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={900}
            className="relative aspect-[5/4] w-full rounded-[1.5rem] object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
