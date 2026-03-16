import Image from "next/image";

import type { Project } from "@/data/site-content";

type ProjectCardProps = {
  project: Project;
};

const statusStyles = {
  Planned: "border-[#d7c39d] bg-[#f8eedb] text-[#7a6638]",
  "In Progress": "border-secondary/20 bg-secondary/10 text-secondary",
  Completed: "border-primary/15 bg-primary/10 text-primary"
} as const;

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-border/70 bg-white/90 shadow-[0_22px_58px_rgba(31,77,120,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_68px_rgba(31,77,120,0.14)]">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex grow flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">{project.focus}</span>
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}>{project.status}</span>
        </div>
        <h3 className="font-heading mt-4 text-3xl leading-tight tracking-[-0.03em] text-ink">{project.name}</h3>
        <p className="mt-2 text-sm font-medium text-muted">{project.location}</p>
        <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
      </div>
    </article>
  );
}
