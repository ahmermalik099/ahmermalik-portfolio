"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

interface Project {
  id: number;
  title: string;
  category: "Professional" | "Personal";
  description: string;
  icon: string;
  image?: string;
  color: string;
  technologies: string[];
  featured?: boolean;
  activeUsers?: number;
}

const projects: Project[] = [
  {
    id: 2,
    title: "JAZZ Tamasha",
    category: "Professional",
    description:
      "Video streaming platform serving millions of users with live TV, movies, dramas, and original content. High-performance streaming infrastructure.",
    icon: "fas fa-play",
    color: "#E0556B",
    technologies: ["Flutter", "Bloc", "Video Player", "Firebase"],
    featured: true,
    activeUsers: 1000000,
  },
  {
    id: 1,
    title: "ZONG HRMS",
    category: "Professional",
    description:
      "Enterprise HRMS application for ZONG employees with attendance tracking, leave management, and employee self-service features.",
    icon: "fas fa-building",
    color: "#4E85BF",
    technologies: ["Flutter", "Provider", "WSO2", "REST APIs"],
    featured: true,
    activeUsers: 15000,
  },
  {
    id: 9,
    title: "Shapes",
    category: "Professional",
    description: "Group chats with AI and collaborative workflows — iOS app built with SwiftUI.",
    icon: "fas fa-shapes",
    image: "/images/shapes-icon.svg",
    color: "#FFB86B",
    technologies: ["Swift", "SwiftUI", "CoreML", "CloudKit"],
    featured: true,
    activeUsers: 12500,
  },
  {
    id: 5,
    title: "EzDental",
    category: "Personal",
    description:
      "AI-powered dental health app using ML for cavity detection from dental X-rays with high-accuracy predictions.",
    icon: "fas fa-tooth",
    color: "#5FD4C4",
    technologies: ["Flutter", "TensorFlow Lite", "ML", "Firebase"],
    featured: true,
  },
  {
    id: 3,
    title: "SCO SIM Verification",
    category: "Professional",
    description:
      "Native Android app for SIM card verification and registration using biometric authentication and government APIs.",
    icon: "fas fa-sim-card",
    color: "#7FB069",
    technologies: ["Kotlin", "Android", "MVVM", "REST APIs"],
    activeUsers: 5000,
  },
  {
    id: 10,
    title: "Modish",
    category: "Professional",
    description: "AI-driven fashion assistant — iOS app with personalised style recommendations.",
    icon: "fas fa-shirt",
    image: "/images/modish-icon.svg",
    color: "#8A63E6",
    technologies: ["Swift", "CoreML", "UIKit", "Combine"],
    activeUsers: 8200,
  },
  {
    id: 11,
    title: "LoopDSP iOS",
    category: "Professional",
    description: "In-progress iOS app for loopdsp.com — audio tools and looping workflows.",
    icon: "fas fa-microphone",
    image: "/images/loopdsp-icon.svg",
    color: "#00E1A1",
    technologies: ["Swift", "AudioKit", "DSP", "AVFoundation"],
  },
  {
    id: 4,
    title: "HostelLite",
    category: "Professional",
    description:
      "Hostel management system with room booking, meal tracking, complaint management, and real-time notifications.",
    icon: "fas fa-hotel",
    color: "#B06AB3",
    technologies: ["Flutter", "GetX", "Firebase", "Cloud Functions"],
  },
  {
    id: 6,
    title: "Hello Neighbor",
    category: "Personal",
    description:
      "Social networking app for local communities to connect, share events, and build stronger neighborhoods.",
    icon: "fas fa-users",
    color: "#F0A04B",
    technologies: ["Flutter", "Firebase", "Maps", "Chat"],
  },
  {
    id: 7,
    title: "Movies App",
    category: "Personal",
    description:
      "Movie discovery app with TMDB integration, personalised watchlists, recommendations, and trailers.",
    icon: "fas fa-film",
    color: "#E0556B",
    technologies: ["Flutter", "TMDB API", "Bloc", "Caching"],
  },
  {
    id: 8,
    title: "Attendance System",
    category: "Personal",
    description:
      "QR-based attendance tracking for educational institutions with analytics dashboard and real-time monitoring.",
    icon: "fas fa-qrcode",
    color: "#6C8CD5",
    technologies: ["Flutter", "QR Code", "Firebase", "Charts"],
  },
];

const categories = ["All", "Professional", "Personal"] as const;
const bentoSpans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

function formatUsers(n: number) {
  if (n >= 1_000_000) return `${Math.round(n / 100_000) / 10}M`;
  if (n >= 1000) return `${Math.round(n / 100) / 10}k`;
  return `${n}`;
}

function CardArt({ project, big }: { project: Project; big?: boolean }) {
  return (
    <>
      {/* Tinted gradient wash */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `radial-gradient(120% 120% at 75% 15%, ${project.color}38 0%, ${project.color}10 40%, transparent 70%)`,
        }}
      />
      {/* Halftone dots */}
      <div className="halftone absolute inset-0 opacity-[0.12]" />
      {/* Watermark icon */}
      <div className="absolute -right-4 -top-6 select-none">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            aria-hidden
            className={`object-contain opacity-90 transition-transform duration-700 group-hover:scale-110 ${big ? "h-28 w-28" : "h-20 w-20"}`}
          />
        ) : (
          <i
            className={`${project.icon} transition-transform duration-700 group-hover:scale-110 ${big ? "text-[7rem]" : "text-[5rem]"}`}
            style={{ color: `${project.color}33` }}
          />
        )}
      </div>
      {/* Bottom scrim so text is always legible */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg via-bg/85 to-transparent" />
    </>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const rest = projects.filter((p) => !p.featured);
  const filtered = activeCategory === "All" ? rest : rest.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Featured <span className="font-display italic">projects</span>
            </>
          }
          subtitle="A selection of products I've shipped — from enterprise apps serving millions to personal experiments."
        />

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {featured.map((project, i) => (
            <motion.button
              key={project.id}
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl border border-stroke bg-surface p-6 text-left transition-colors hover:border-white/20 md:min-h-[340px] ${bentoSpans[i]}`}
            >
              <CardArt project={project} big />

              {/* Top badges */}
              <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between">
                <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-text-primary/80 backdrop-blur-sm">
                  {project.category}
                </span>
                {project.activeUsers && (
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-text-primary/80 backdrop-blur-sm">
                    <i className="fas fa-user text-[9px]" />
                    {formatUsers(project.activeUsers)}
                  </span>
                )}
              </div>

              {/* Bottom content */}
              <div className="relative z-10">
                <h3 className="font-display text-3xl italic text-text-primary md:text-4xl">{project.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-text-primary/90">
                  View project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Filter + grid for the rest */}
        <div className="mt-16">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-full px-4 py-2 text-xs transition-colors sm:text-sm ${
                  activeCategory === c
                    ? "bg-stroke/60 text-text-primary"
                    : "text-muted hover:bg-stroke/40 hover:text-text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.button
                  key={project.id}
                  layout
                  onClick={() => setSelected(project)}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group relative flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl border border-stroke bg-surface p-5 text-left transition-colors hover:border-white/20"
                >
                  <CardArt project={project} />

                  <div className="absolute inset-x-5 top-5 z-10 flex items-center justify-between">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 backdrop-blur-sm"
                      style={{ background: `${project.color}1f` }}
                    >
                      <i className={`${project.icon} text-sm`} style={{ color: project.color }} />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted">{project.category}</span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-lg text-text-primary">{project.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">{project.description}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-surface p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="grid h-16 w-16 place-items-center rounded-2xl border border-white/10"
                    style={{ background: `${selected.color}1f` }}
                  >
                    {selected.image ? (
                      <img src={selected.image} alt={selected.title} className="h-9 w-9 object-contain" />
                    ) : (
                      <i className={`${selected.icon} text-2xl`} style={{ color: selected.color }} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl italic text-text-primary">{selected.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{selected.category}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-stroke text-muted transition-colors hover:text-text-primary"
                  aria-label="Close"
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              <p className="text-sm leading-relaxed text-muted">{selected.description}</p>

              {selected.activeUsers && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-stroke px-3 py-1.5 text-xs text-muted">
                  <i className="fas fa-user text-[10px]" />
                  {formatUsers(selected.activeUsers)} active users
                </p>
              )}

              <div className="mt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Built with</p>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-stroke bg-bg px-3 py-1.5 text-xs text-text-primary/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
