"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./section-wrapper";
import { experienceData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="mb-2 text-sm font-medium tracking-widest text-indigo-500 uppercase">
        Experience
      </h2>
      <h3 className="mb-8 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Where I&apos;ve worked
      </h3>

      <div className="relative flex flex-col gap-8">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-16px)] w-px bg-zinc-200 dark:bg-zinc-800 md:block" />

        {experienceData.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative flex gap-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10 mt-1 hidden md:block">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
                <Briefcase size={16} className="text-indigo-500" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-indigo-500">{exp.company}</p>
                </div>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                  {exp.period}
                </span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {exp.description}
              </p>
              <ul className="flex flex-col gap-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
