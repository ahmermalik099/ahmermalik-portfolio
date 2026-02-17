"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
  image?: string;
  color: string;
  technologies: string[];
  featured?: boolean;
  professional?: boolean;
  activeUsers?: number;
}

const projects = [
  {
    id: 1,
    title: "ZONG HRMS",
    category: "Professional",
    description:
      "Enterprise HRMS application for ZONG employees with attendance tracking, leave management, and employee self-service features. Serving thousands of employees.",
    icon: "fas fa-building",
    color: "#0066FF",
    technologies: ["Flutter", "Provider", "WSO2", "REST APIs"],
    featured: true,
    professional: true,
  },
  {
    id: 2,
    title: "JAZZ Tamasha",
    category: "Professional",
    description:
      "Video streaming platform serving millions of users with live TV, movies, dramas, and original content. High-performance streaming infrastructure.",
    icon: "fas fa-play-circle",
    color: "#FF6B6B",
    technologies: ["Flutter", "Bloc", "Video Player", "Firebase"],
    featured: true,
    professional: true,
  },
  {
    id: 3,
    title: "SCO SIM Verification",
    category: "Professional",
    description:
      "Native Android application for SIM card verification and registration using biometric authentication and government APIs.",
    icon: "fas fa-sim-card",
    color: "#4CAF50",
    technologies: ["Kotlin", "Android", "MVVM", "REST APIs"],
    professional: true,
  },
  {
    id: 4,
    title: "HostelLite",
    category: "Professional",
    description:
      "Hostel management system for students with room booking, meal tracking, complaint management, and real-time notifications.",
    icon: "fas fa-hotel",
    color: "#9C27B0",
    technologies: ["Flutter", "GetX", "Firebase", "Cloud Functions"],
    professional: true,
  },
  {
    id: 5,
    title: "EzDental",
    category: "Personal",
    description:
      "AI-powered dental health application using machine learning for cavity detection from dental X-rays with high accuracy predictions.",
    icon: "fas fa-tooth",
    color: "#00D4FF",
    technologies: ["Flutter", "TensorFlow Lite", "ML", "Firebase"],
    featured: true,
  },
  {
    id: 6,
    title: "Hello Neighbor",
    category: "Personal",
    description:
      "Social networking app for local communities to connect, share events, help each other, and build stronger neighborhoods.",
    icon: "fas fa-users",
    color: "#FF9800",
    technologies: ["Flutter", "Firebase", "Maps", "Chat"],
  },
  {
    id: 7,
    title: "Movies App",
    category: "Personal",
    description:
      "Movie discovery app with TMDB integration, personalized watchlists, recommendations, trailers, and detailed movie information.",
    icon: "fas fa-film",
    color: "#E91E63",
    technologies: ["Flutter", "TMDB API", "Bloc", "Caching"],
  },
  {
    id: 8,
    title: "Attendance System",
    category: "Personal",
    description:
      "QR-based attendance tracking system for educational institutions with analytics dashboard, reports, and real-time monitoring.",
    icon: "fas fa-qrcode",
    color: "#607D8B",
    technologies: ["Flutter", "QR Code", "Firebase", "Charts"],
  },
  {
    id: 9,
    title: "Shapes",
    category: "Professional",
    description:
      "Group chats with AI and collaborative workflows — iOS app (Swift).",
    icon: "fas fa-shapes",
    image: "/images/shapes-icon.svg",
    color: "#FFB86B",
    technologies: ["Swift", "SwiftUI", "CoreML", "CloudKit"],
    featured: true,
    activeUsers: 12500,
  },
  {
    id: 10,
    title: "Modish",
    category: "Professional",
    description:
      "AI-driven fashion assistant — iOS app (Swift) with style recommendations.",
    icon: "fas fa-tshirt",
    image: "/images/modish-icon.svg",
    color: "#8A63E6",
    technologies: ["Swift", "CoreML", "UIKit", "Combine"],
    activeUsers: 8200,
  },
  {
    id: 11,
    title: "LoopDSP iOS",
    category: "Professional",
    description:
      "In-progress: iOS app for loopdsp.com — audio tools and looping workflows.",
    icon: "fas fa-microphone",
    image: "/images/loopdsp-icon.svg",
    color: "#00E1A1",
    technologies: ["Swift", "AudioKit", "DSP", "AVFoundation"],
    professional: true,
  },
];

const categories = [
  { id: "All", label: "All Projects", icon: "fas fa-th-large" },
  { id: "Professional", label: "Professional", icon: "fas fa-briefcase" },
  { id: "Personal", label: "Personal", icon: "fas fa-user" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section" ref={ref} style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)" }}>
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            A showcase of my work, from enterprise applications serving millions to personal experiments
          </p>
        </motion.div>

        {/* Category Filter */}
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
                  : "bg-[#161616] text-gray-400 hover:text-white border-2 border-[rgba(255,255,255,0.1)] hover:border-[rgba(0,102,255,0.3)]"
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

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gap: "28px" }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#111] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all"
              >
                {/* Project Header/Image */}
                <div
                  className="relative h-44 overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}05 100%)` }}
                >
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 rounded-2xl flex items-center justify-center overflow-hidden"
                      style={{ background: `${project.color}20` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {project.image ? (
                        <img src={project.image} alt={project.title} className="w-20 h-20 object-contain" />
                      ) : (
                        <i
                          className={`${project.icon} text-5xl`}
                          style={{ color: project.color }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <span className="bg-[#0066FF] text-white text-xs font-semibold rounded-full flex items-center gap-1.5" style={{ padding: "6px 14px" }}>
                        <i className="fas fa-star text-[10px]" />
                        Featured
                      </span>
                    )}
                    {project.activeUsers && project.activeUsers > 10000 && (
                      <span className="bg-[#00D4FF] text-white text-xs font-semibold rounded-full flex items-center gap-1.5" style={{ padding: "6px 14px" }}>
                        <i className="fas fa-user" />
                        {Math.round(project.activeUsers / 100) / 10}k
                      </span>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className="text-xs font-semibold rounded-full"
                      style={{
                        padding: "6px 14px",
                        background: project.professional ? "rgba(0, 212, 255, 0.15)" : "rgba(255, 107, 107, 0.15)",
                        color: project.professional ? "#00D4FF" : "#FF6B6B",
                        border: `1px solid ${project.professional ? "rgba(0, 212, 255, 0.3)" : "rgba(255, 107, 107, 0.3)"}`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div style={{ padding: "28px" }}>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors" style={{ marginBottom: "14px" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2" style={{ marginBottom: "20px", lineHeight: "1.7" }}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap" style={{ gap: "10px", marginBottom: "20px" }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-lg text-xs text-gray-500"
                        style={{ padding: "8px 14px" }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-gray-600" style={{ padding: "8px 14px" }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#0066FF]/10 to-[#00D4FF]/10 border border-[#0066FF]/30 text-[#00D4FF] rounded-xl text-sm font-medium hover:from-[#0066FF] hover:to-[#00D4FF] hover:text-white hover:border-transparent transition-all flex items-center justify-center"
                    style={{ padding: "14px", gap: "10px" }}
                  >
                    <i className="fas fa-eye text-xs" />
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0, 0, 0, 0.8)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#111] rounded-3xl border border-[rgba(255,255,255,0.1)] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              style={{ padding: "40px" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between" style={{ marginBottom: "32px" }}>
                <div className="flex items-center" style={{ gap: "20px" }}>
                  <div
                    className="rounded-2xl flex items-center justify-center overflow-hidden"
                    style={{ background: `${selectedProject.color}20`, width: "72px", height: "72px" }}
                  >
                    {selectedProject.image ? (
                      <img src={selectedProject.image} alt={selectedProject.title} className="w-12 h-12 object-contain" />
                    ) : (
                      <i className={`${selectedProject.icon} text-4xl`} style={{ color: selectedProject.color }} />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white" style={{ marginBottom: "8px" }}>
                      {selectedProject.title}
                    </h3>
                    <span
                      className="text-sm font-medium rounded-full"
                      style={{
                        background: selectedProject.professional ? "rgba(0, 212, 255, 0.15)" : "rgba(255, 107, 107, 0.15)",
                        color: selectedProject.professional ? "#00D4FF" : "#FF6B6B",
                        padding: "6px 16px",
                      }}
                    >
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.1)] transition-all"
                  style={{ width: "44px", height: "44px" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-times text-lg" />
                </motion.button>
              </div>

              {/* Description */}
              <div style={{ marginBottom: "32px" }}>
                <h4 className="text-white font-semibold" style={{ marginBottom: "12px" }}>About this project</h4>
                <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div style={{ marginBottom: "32px" }}>
                <h4 className="text-white font-semibold" style={{ marginBottom: "16px" }}>Technologies Used</h4>
                <div className="flex flex-wrap" style={{ gap: "12px" }}>
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#1a1a1a] border border-[rgba(255,255,255,0.08)] rounded-xl text-gray-300 text-sm font-medium"
                      style={{ padding: "12px 20px" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="w-full btn-primary justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
