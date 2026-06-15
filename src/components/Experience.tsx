"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Mercurial Minds",
    period: "May 2024 — Present",
    location: "Islamabad, Pakistan",
    description:
      "Building enterprise-level mobile applications with Flutter. Led ZONG HRMS and contributed to JAZZ Tamasha, a streaming platform serving millions.",
    achievements: [
      "Developed ZONG HRMS using Provider architecture with WSO2 integration",
      "Contributed to JAZZ Tamasha video streaming serving millions of users",
      "Built SCO SIM Verification with native Kotlin/Android",
      "Implemented complex state-management solutions",
    ],
    technologies: ["Flutter", "Dart", "Provider", "Kotlin", "WSO2", "Firebase"],
  },
  {
    title: "Flutter Intern",
    company: "kaiRiz Technologies",
    period: "Mar 2023 — May 2023",
    location: "Islamabad, Pakistan",
    description:
      "Gained hands-on experience in Flutter development and mobile app architecture patterns.",
    achievements: [
      "Learned enterprise development practices",
      "Worked on real-world Flutter projects",
      "Improved state management and clean architecture skills",
    ],
    technologies: ["Flutter", "Dart", "GetX", "REST APIs"],
  },
  {
    title: "Flutter Intern",
    company: "DEVUPIX",
    period: "Oct 2022 — Dec 2022",
    location: "Remote",
    description:
      "Started my journey in Flutter development, building foundational skills in mobile app development.",
    achievements: [
      "Built first production-ready Flutter applications",
      "Learned fundamental concepts of mobile development",
      "Developed UI/UX skills with Flutter widgets",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "UI/UX"],
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Resume"
          title={
            <>
              Work <span className="font-display italic">experience</span>
            </>
          }
          subtitle="My professional journey and the contributions along the way."
        />

        <div ref={ref} className="relative mt-14 pl-8 md:pl-0">
          {/* Timeline track (left rail) */}
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-stroke md:left-[calc(50%-0.5px)]">
            <motion.div
              className="accent-gradient absolute inset-x-0 top-0 h-full origin-top"
              style={{ scaleY: lineScale }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative md:flex md:items-start ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <span className="absolute -left-8 top-2 grid h-4 w-4 place-items-center rounded-full border-4 border-bg md:left-1/2 md:-translate-x-1/2">
                  <span className="accent-gradient h-4 w-4 rounded-full" />
                </span>

                {/* Card */}
                <div className="md:w-[calc(50%-2rem)]">
                  <div className="rounded-3xl border border-stroke bg-surface p-7 transition-colors hover:border-white/20">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg text-text-primary">{exp.title}</h3>
                        <p className="mt-1 text-sm accent-text">{exp.company}</p>
                      </div>
                      <span className="rounded-full border border-stroke px-3 py-1 text-xs text-muted">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mb-2 flex items-center gap-2 text-xs text-muted">
                      <i className="fas fa-map-marker-alt text-[10px]" />
                      {exp.location}
                    </p>

                    <p className="mb-5 text-sm leading-relaxed text-muted">{exp.description}</p>

                    <ul className="mb-5 space-y-2">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-3 text-sm text-muted">
                          <i className="fas fa-check mt-1 text-[10px] accent-text" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-stroke bg-bg px-3 py-1 text-xs text-text-primary/70"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
