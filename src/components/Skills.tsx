"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skillsData: Record<string, Skill[]> = {
  "Flutter & Dart": [
    { name: "Dart", level: 95, icon: "fas fa-bullseye" },
    { name: "Flutter", level: 95, icon: "fas fa-mobile-screen" },
    { name: "Flutter Widgets", level: 90, icon: "fas fa-cubes" },
    { name: "Custom Painters", level: 85, icon: "fas fa-paint-brush" },
    { name: "Animations", level: 88, icon: "fas fa-film" },
    { name: "Platform Channels", level: 80, icon: "fas fa-plug" },
  ],
  "State Management": [
    { name: "Provider", level: 90, icon: "fas fa-database" },
    { name: "Bloc / Cubit", level: 88, icon: "fas fa-layer-group" },
    { name: "GetX", level: 85, icon: "fas fa-bolt" },
    { name: "Riverpod", level: 82, icon: "fas fa-stream" },
  ],
  "Backend & Database": [
    { name: "Firebase", level: 88, icon: "fas fa-fire" },
    { name: "REST APIs", level: 90, icon: "fas fa-server" },
    { name: "SQLite", level: 85, icon: "fas fa-database" },
    { name: "GraphQL", level: 75, icon: "fas fa-diagram-project" },
    { name: "Hive / ObjectBox", level: 82, icon: "fas fa-box" },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 90, icon: "fab fa-git-alt" },
    { name: "CI / CD", level: 80, icon: "fas fa-infinity" },
    { name: "Jira / Trello", level: 85, icon: "fab fa-trello" },
  ],
  "Other Skills": [
    { name: "UI / UX Design", level: 85, icon: "fas fa-palette" },
    { name: "Material Design", level: 88, icon: "fas fa-shapes" },
    { name: "Cupertino (iOS)", level: 85, icon: "fab fa-apple" },
    { name: "Unit Testing", level: 80, icon: "fas fa-vial" },
    { name: "App / Play Store", level: 85, icon: "fas fa-store" },
  ],
};

const categories = ["All", ...Object.keys(skillsData)];

function levelLabel(level: number) {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Learning";
}

export default function Skills() {
  const [active, setActive] = useState("All");

  const skills =
    active === "All" ? Object.values(skillsData).flat() : skillsData[active] ?? [];

  return (
    <section id="skills" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Toolbox"
          title={
            <>
              Skills & <span className="font-display italic">expertise</span>
            </>
          }
          subtitle="The technologies and tools I reach for to bring ideas to life."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs transition-colors sm:text-sm ${
                active === c
                  ? "bg-stroke/60 text-text-primary"
                  : "text-muted hover:bg-stroke/40 hover:text-text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="rounded-2xl border border-stroke bg-surface p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-stroke bg-bg">
                      <i className={`${skill.icon} text-text-primary/70`} />
                    </div>
                    <div>
                      <h3 className="text-sm text-text-primary">{skill.name}</h3>
                      <span className="text-xs text-muted">{levelLabel(skill.level)}</span>
                    </div>
                  </div>
                  <span className="font-display text-2xl italic accent-text">{skill.level}</span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-stroke/60">
                  <motion.div
                    className="accent-gradient h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.02, ease: "easeOut" }}
                    style={{ boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)" }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
