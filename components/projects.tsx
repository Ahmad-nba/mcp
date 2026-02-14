"use client";

import ProjectCard from "./project-card";
import SectionWrapper from "./section-wrapper";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-indigo-500 uppercase">
        Projects
      </h2>
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Things I&apos;ve built
      </h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
