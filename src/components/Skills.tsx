"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skillsData: Record<string, Skill[]> = {
  "Flutter & Dart": [
    { name: "Dart", level: 95, icon: "fab fa-dart-lang" },
    { name: "Flutter", level: 95, icon: "fab fa-flutter" },
    { name: "Flutter Widgets", level: 90, icon: "fas fa-cubes" },
    { name: "Custom Painters", level: 85, icon: "fas fa-paint-brush" },
    { name: "Animations", level: 88, icon: "fas fa-film" },
    { name: "Platform Channels", level: 80, icon: "fas fa-plug" },
  ],
  "State Management": [
    { name: "Provider", level: 90, icon: "fas fa-database" },
    { name: "Bloc/Cubit", level: 88, icon: "fas fa-layer-group" },
    { name: "GetX", level: 85, icon: "fas fa-bolt" },
    { name: "Riverpod", level: 82, icon: "fas fa-stream" },
    // { name: "Redux", level: 75, icon: "fas fa-exchange-alt" },
    // { name: "MobX", level: 70, icon: "fas fa-sync" },
  ],
  "Backend & Database": [
    { name: "Firebase", level: 88, icon: "fas fa-fire" },
    { name: "REST APIs", level: 90, icon: "fas fa-server" },
    { name: "SQLite", level: 85, icon: "fas fa-database" },
    { name: "GraphQL", level: 75, icon: "fas fa-project-diagram" },
    { name: "Hive/ObjectBox", level: 82, icon: "fas fa-box" },
    // { name: "Cloud Functions", level: 78, icon: "fas fa-cloud" },
  ],
  "Tools & DevOps": [
    { name: "Git & GitHub", level: 90, icon: "fab fa-git-alt" },
    // { name: "Android Studio", level: 90, icon: "fab fa-android" },
    // { name: "VS Code", level: 92, icon: "fas fa-code" },
    // { name: "Figma", level: 85, icon: "fab fa-figma" },
    { name: "CI/CD", level: 80, icon: "fas fa-infinity" },
    { name: "Jira/Trello", level: 85, icon: "fab fa-trello" },
  ],
  "Other Skills": [
    { name: "UI/UX Design", level: 85, icon: "fas fa-palette" },
    { name: "Material Design", level: 88, icon: "fas fa-shapes" },
    { name: "Cupertino (iOS)", level: 85, icon: "fab fa-apple" },
    { name: "Unit Testing", level: 80, icon: "fas fa-vial" },
    // { name: "Integration Testing", level: 78, icon: "fas fa-clipboard-check" },
    { name: "App Store/Play Store", level: 85, icon: "fas fa-store" },
  ],
};

const categories = [
  { id: "all", label: "All Skills", icon: "fas fa-th-large" },
  { id: "Flutter & Dart", label: "Flutter & Dart", icon: "fab fa-flutter" },
  { id: "State Management", label: "State Management", icon: "fas fa-layer-group" },
  { id: "Backend & Database", label: "Backend & DB", icon: "fas fa-database" },
  { id: "Tools & DevOps", label: "Tools & DevOps", icon: "fas fa-tools" },
  { id: "Other Skills", label: "Other Skills", icon: "fas fa-star" },
];

function getSkillColor(level: number): string {
  if (level >= 90) return "#00D4FF";
  if (level >= 80) return "#0066FF";
  if (level >= 70) return "#5E9FFF";
  return "#7DB3FF";
}

function getSkillLabel(level: number): string {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Learning";
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getFilteredSkills = (): Skill[] => {
    if (activeCategory === "all") {
      return Object.values(skillsData).flat();
    }
    return skillsData[activeCategory] || [];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="section" ref={ref} style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 100%)" }}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Technologies and tools I use to bring ideas to life. Continuously learning and improving.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center"
          style={{ gap: "16px", marginBottom: "64px" }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-xl font-semibold text-sm transition-all flex items-center ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg shadow-blue-500/25"
                  : "bg-[#161616] text-gray-400 hover:text-white border-2 border-[rgba(255,255,255,0.1)] hover:border-[#0066FF]/50"
              }`}
              style={{ padding: "14px 24px", gap: "12px" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={category.icon} />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "28px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#131313] rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all group relative overflow-hidden"
                style={{ padding: "32px" }}
              >
                {/* Background Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: getSkillColor(skill.level) }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between" style={{ marginBottom: "24px" }}>
                    <div className="flex items-center" style={{ gap: "18px" }}>
                      <div
                        className="rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: `${getSkillColor(skill.level)}15`, width: "56px", height: "56px" }}
                      >
                        <i
                          className={`${skill.icon} text-2xl`}
                          style={{ color: getSkillColor(skill.level) }}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg group-hover:text-[#00D4FF] transition-colors" style={{ marginBottom: "4px" }}>
                          {skill.name}
                        </h3>
                        <span
                          className="text-sm font-medium"
                          style={{ color: getSkillColor(skill.level) }}
                        >
                          {getSkillLabel(skill.level)}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-3xl font-bold"
                      style={{ color: getSkillColor(skill.level) }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-[#1f1f1f] rounded-full overflow-hidden relative" style={{ height: "12px" }}>
                    <motion.div
                      className="h-full rounded-full relative"
                      style={{
                        background: `linear-gradient(90deg, ${getSkillColor(skill.level)}, ${getSkillColor(skill.level)}99)`,
                      }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.2 + index * 0.02,
                        ease: "easeOut" as const,
                      }}
                    >
                      {/* Shimmer */}
                      <div className="progress-shimmer" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ marginTop: "80px", gap: "28px" }}
        >
          {[
            { label: "Total Skills", value: Object.values(skillsData).flat().length + "+", icon: "fas fa-code" },
            { label: "Expert Level", value: Object.values(skillsData).flat().filter(s => s.level >= 90).length, icon: "fas fa-star" },
            { label: "Advanced Level", value: Object.values(skillsData).flat().filter(s => s.level >= 80 && s.level < 90).length, icon: "fas fa-chart-line" },
            { label: "Always Learning", value: "∞", icon: "fas fa-graduation-cap" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#131313] rounded-2xl border border-[rgba(255,255,255,0.06)] text-center hover:border-[rgba(0,102,255,0.3)] transition-all"
              style={{ padding: "36px" }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 flex items-center justify-center mx-auto" style={{ width: "68px", height: "68px", marginBottom: "24px" }}>
                <i className={`${stat.icon} text-2xl gradient-text`} />
              </div>
              <div className="text-4xl font-bold gradient-text" style={{ marginBottom: "12px" }}>{stat.value}</div>
              <div className="text-gray-400 text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
