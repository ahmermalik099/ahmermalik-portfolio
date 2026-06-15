"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "15+", label: "Projects Shipped" },
  { number: "1M+", label: "Users Reached" },
  { number: "30+", label: "Skills Mastered" },
];

const highlights = [
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Development",
    description: "Cross-platform apps with Flutter & Dart for iOS and Android.",
  },
  {
    icon: "fas fa-layer-group",
    title: "Clean Architecture",
    description: "Maintainable, scalable, and testable code with best practices.",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI / UX Detail",
    description: "Beautiful, intuitive interfaces with obsessive attention to nuance.",
  },
  {
    icon: "fas fa-rocket",
    title: "Performance",
    description: "Apps optimised for speed, efficiency, and buttery interactions.",
  },
];

const education = [
  {
    degree: "BS Computer Science",
    institution: "Air University",
    location: "Islamabad",
    year: "2024",
  },
  {
    degree: "HSSC — Pre-Engineering",
    institution: "OPF College H-8/4",
    location: "Islamabad",
    year: "2019",
  },
  {
    degree: "Matric (SSC)",
    institution: "Army Public School Westridge-3",
    location: "Rawalpindi",
    year: "2017",
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function About() {
  return (
    <section id="about" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              Building thoughtful <span className="font-display italic">software</span>
            </>
          }
          subtitle="Get to know the journey, the craft, and what drives me as a developer."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Intro card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-stroke bg-surface p-8 md:p-10 lg:col-span-7"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-stroke bg-bg">
                <span className="font-display text-xl italic accent-text">AM</span>
              </div>
              <div>
                <h3 className="text-xl text-text-primary">Ahmer Malik</h3>
                <p className="text-sm text-muted">Flutter Developer · Islamabad, PK</p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>
                I&apos;m a passionate{" "}
                <span className="text-text-primary">Flutter developer</span> based in Islamabad,
                Pakistan. With over <span className="text-text-primary">2+ years</span> of experience,
                I specialise in beautiful, high-performance cross-platform applications.
              </p>
              <p>
                My work spans enterprise HRMS systems to video streaming platforms serving millions —
                always focused on delivering exceptional user experiences and clean, maintainable code.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-stroke pt-8 text-sm sm:grid-cols-2">
              {[
                { icon: "fas fa-map-marker-alt", label: "Islamabad, Pakistan" },
                { icon: "fas fa-envelope", label: "ahmermalik099@gmail.com" },
                { icon: "fas fa-briefcase", label: "Open to opportunities" },
                { icon: "fas fa-graduation-cap", label: "BS Computer Science" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-muted">
                  <i className={`${item.icon} text-xs text-text-primary/60`} />
                  <span className="truncate">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-5">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-3xl border border-stroke bg-surface p-6 transition-colors hover:border-white/20"
              >
                <i className={`${h.icon} text-xl accent-text`} />
                <h4 className="mt-4 text-base text-text-primary">{h.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE }}
              viewport={{ once: true, margin: "-60px" }}
              className="rounded-3xl border border-stroke bg-surface p-6 text-center"
            >
              <div className="font-display text-4xl italic accent-text md:text-5xl">{s.number}</div>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Education"
            title={
              <>
                Academic <span className="font-display italic">foundation</span>
              </>
            }
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-3xl border border-stroke bg-surface p-7 transition-colors hover:border-white/20"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl border border-stroke bg-bg">
                    <i className="fas fa-graduation-cap text-text-primary/60" />
                  </div>
                  <span className="rounded-full border border-stroke px-3 py-1 text-xs text-muted">
                    {edu.year}
                  </span>
                </div>
                <h4 className="text-lg text-text-primary">{edu.degree}</h4>
                <p className="mt-1 text-sm text-muted">{edu.institution}</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted">
                  <i className="fas fa-map-marker-alt text-[10px]" />
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
