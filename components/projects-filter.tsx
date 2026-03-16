"use client";

import { startTransition, useDeferredValue, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project, ProjectFilter } from "@/data/site-content";
import { projectFilters } from "@/data/site-content";

type ProjectsFilterProps = {
  projects: Project[];
};

export function ProjectsFilter({ projects }: ProjectsFilterProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const deferredFilter = useDeferredValue(activeFilter);

  const visibleProjects = deferredFilter === "All" ? projects : projects.filter((project) => project.status === deferredFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => {
              startTransition(() => {
                setActiveFilter(filter);
              });
            }}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-primary bg-primary text-white shadow-[0_18px_40px_rgba(26,63,97,0.16)]"
                : "border-border bg-white text-muted hover:border-primary/20 hover:text-ink"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">{visibleProjects.length} project placeholders currently in view.</p>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={`${project.name}-${project.location}`} project={project} />
        ))}
      </div>
    </div>
  );
}

