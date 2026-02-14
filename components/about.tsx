"use client";

import SectionWrapper from "./section-wrapper";
import { aboutData, siteConfig } from "@/lib/data";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-indigo-500 uppercase">
        About Me
      </h2>
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Get to know me
      </h3>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Bio */}
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            {aboutData.bio}
          </p>
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
            <MapPin size={14} />
            {siteConfig.location}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {aboutData.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
