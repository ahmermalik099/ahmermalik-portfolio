"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "Meta Front End Developer",
    issuer: "Meta",
    icon: "fab fa-meta",
    color: "#0668E1",
    link: "#",
  },
  {
    id: 2,
    title: "Python Problem Solving",
    issuer: "HackerRank",
    icon: "fab fa-hackerrank",
    color: "#00EA64",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App Development",
    issuer: "PSEB IT Industry",
    icon: "fas fa-mobile-alt",
    color: "#0066FF",
    link: "#",
  },
  {
    id: 4,
    title: "Git & GitHub",
    issuer: "Coursera",
    icon: "fab fa-git-alt",
    color: "#F05032",
    link: "#",
  },
  {
    id: 5,
    title: "Supervised Machine Learning",
    issuer: "Coursera",
    icon: "fas fa-brain",
    color: "#00D4FF",
    link: "#",
  },
  {
    id: 6,
    title: "Programming with JavaScript",
    issuer: "Coursera",
    icon: "fab fa-js-square",
    color: "#F7DF1E",
    link: "#",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="section bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Professional certifications and courses I&apos;ve completed
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto" style={{ gap: "32px" }}>
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 20px 40px ${cert.color}20`,
              }}
              className="group relative bg-[#111] rounded-3xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all overflow-hidden"
              style={{ padding: "40px", minHeight: "280px" }}
            >
              {/* Background Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ background: cert.color }}
              />

              {/* Icon */}
              <motion.div
                className="rounded-2xl flex items-center justify-center relative z-10"
                style={{ background: `${cert.color}15`, width: "72px", height: "72px", marginBottom: "28px" }}
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <i
                  className={`${cert.icon} text-4xl`}
                  style={{ color: cert.color }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white group-hover:text-[#00D4FF] transition-colors relative z-10" style={{ marginBottom: "16px" }}>
                {cert.title}
              </h3>
              <p className="text-gray-400 text-base flex items-center relative z-10" style={{ gap: "12px" }}>
                <i className="fas fa-building text-sm" />
                {cert.issuer}
              </p>

              {/* Decorative Line */}
              <motion.div
                className="absolute bottom-0 left-0 rounded-full"
                style={{ background: cert.color, height: "4px" }}
                initial={{ width: 0 }}
                animate={isInView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-base">
            <i className="fas fa-graduation-cap mr-3 text-[#0066FF]" />
            Always learning and expanding my skill set
          </p>
        </motion.div>
      </div>
    </section>
  );
}
