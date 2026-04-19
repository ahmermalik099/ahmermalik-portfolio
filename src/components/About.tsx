"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "2+", label: "Years Experience", icon: "fas fa-calendar-alt" },
  { number: "15+", label: "Projects Completed", icon: "fas fa-project-diagram" },
  { number: "10+", label: "Happy Clients", icon: "fas fa-smile" },
  { number: "30+", label: "Skills Mastered", icon: "fas fa-code" },
];

const education = [
  {
    icon: "fas fa-university",
    degree: "Bachelor of Computer Science",
    institution: "Air University",
    location: "Islamabad",
    year: "2024",
    color: "#0066FF",
  },
  {
    icon: "fas fa-graduation-cap",
    degree: "HSSC – Pre-Engineering",
    institution: "OPF College H-8/4",
    location: "Islamabad",
    year: "2019",
    color: "#00D4FF",
  },
  {
    icon: "fas fa-school",
    degree: "Matric (SSC)",
    institution: "Army Public School Westridge-3",
    location: "Rawalpindi",
    year: "2017",
    color: "#FF6B6B",
  },
];

const highlights = [
  {
    icon: "fas fa-mobile-alt",
    title: "Mobile Development",
    description: "Building cross-platform apps with Flutter & Dart for iOS and Android",
    color: "#0066FF",
  },
  {
    icon: "fas fa-layer-group",
    title: "Clean Architecture",
    description: "Writing maintainable, scalable, and testable code with best practices",
    color: "#00D4FF",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces with attention to detail",
    color: "#FF6B6B",
  },
  {
    icon: "fas fa-rocket",
    title: "Performance",
    description: "Optimizing apps for speed, efficiency, and smooth user experience",
    color: "#4CAF50",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="section" ref={ref} style={{ background: "#0a0a0a" }}>
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: "80px" }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed" style={{ marginTop: "32px" }}>
            Get to know more about my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 items-start"
          style={{ gap: "48px" }}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Introduction Card */}
            <div className="bg-[#111] rounded-3xl border border-[rgba(255,255,255,0.06)]" style={{ padding: "44px" }}>
              <div className="flex items-center" style={{ gap: "24px", marginBottom: "32px" }}>
                <div className="rounded-2xl bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20 flex items-center justify-center" style={{ width: "80px", height: "80px" }}>
                  <i className="fas fa-user-tie text-3xl gradient-text" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ marginBottom: "6px" }}>Ahmer Malik</h3>
                  <p className="text-[#00D4FF] font-medium text-lg">Flutter Developer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-loose text-base" style={{ marginBottom: "24px" }}>
                I&apos;m a passionate <span className="text-white font-semibold">Flutter developer</span> based in
                <span className="text-white font-semibold"> Islamabad, Pakistan</span>. With over
                <span className="text-[#00D4FF] font-bold"> 2+ years</span> of experience in mobile app development,
                I specialize in creating beautiful, high-performance cross-platform applications.
              </p>

              <p className="text-gray-400 leading-loose text-base" style={{ marginBottom: "24px" }}>
                My journey in software development started with a curiosity about how
                mobile apps work. Today, I&apos;ve worked on various projects ranging from
                enterprise HRMS systems to video streaming platforms, always focusing on
                delivering exceptional user experiences.
              </p>

              <p className="text-gray-400 leading-loose text-base" style={{ marginBottom: "40px" }}>
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge with the
                developer community.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[rgba(255,255,255,0.06)]" style={{ gap: "24px", paddingTop: "40px" }}>
                <div className="flex items-center" style={{ gap: "20px" }}>
                  <div className="rounded-xl bg-[#0066FF]/10 flex items-center justify-center" style={{ width: "52px", height: "52px", flexShrink: 0 }}>
                    <i className="fas fa-map-marker-alt text-lg text-[#0066FF]" />
                  </div>
                  <span className="text-gray-300 text-base">Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center" style={{ gap: "20px" }}>
                  <div className="rounded-xl bg-[#00D4FF]/10 flex items-center justify-center" style={{ width: "52px", height: "52px", flexShrink: 0 }}>
                    <i className="fas fa-envelope text-lg text-[#00D4FF]" />
                  </div>
                  <span className="text-gray-300 text-base">ahmermalik099@gmail.com</span>
                </div>
                <div className="flex items-center" style={{ gap: "20px" }}>
                  <div className="rounded-xl bg-[#4CAF50]/10 flex items-center justify-center" style={{ width: "52px", height: "52px", flexShrink: 0 }}>
                    <i className="fas fa-briefcase text-lg text-[#4CAF50]" />
                  </div>
                  <span className="text-gray-300 text-base">Open to opportunities</span>
                </div>
                <div className="flex items-center" style={{ gap: "20px" }}>
                  <div className="rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center" style={{ width: "52px", height: "52px", flexShrink: 0 }}>
                    <i className="fas fa-graduation-cap text-lg text-[#FF6B6B]" />
                  </div>
                  <span className="text-gray-300 text-base">BS Computer Science</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "20px" }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#111] rounded-2xl text-center border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all group"
                  style={{ padding: "28px" }}
                >
                  <div className="rounded-xl bg-gradient-to-br from-[#0066FF]/15 to-[#00D4FF]/15 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform" style={{ width: "60px", height: "60px", marginBottom: "18px" }}>
                    <i className={`${stat.icon} text-xl text-[#00D4FF]`} />
                  </div>
                  <div className="text-3xl font-bold gradient-text" style={{ marginBottom: "10px" }}>{stat.number}</div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: "28px" }}
          >
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-[#111] rounded-3xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all group relative overflow-hidden"
                style={{ padding: "40px" }}
              >
                {/* Background Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: highlight.color }}
                />

                <motion.div
                  className="rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform relative z-10"
                  style={{ background: `${highlight.color}15`, width: "64px", height: "64px", marginBottom: "28px" }}
                  whileHover={{ rotate: 5 }}
                >
                  <i className={`${highlight.icon} text-2xl`} style={{ color: highlight.color }} />
                </motion.div>
                <h3 className="text-xl font-semibold text-white relative z-10" style={{ marginBottom: "16px" }}>
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-base relative z-10" style={{ lineHeight: "1.8", paddingRight: "20px" }}>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: "100px" }}
        >
          <div className="text-center" style={{ marginBottom: "60px" }}>
            <h2 className="section-title">
              My <span className="gradient-text">Education</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed" style={{ marginTop: "24px" }}>
              The academic foundation that shaped my journey in computer science
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "28px" }}
          >
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-[#111] rounded-3xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all group relative overflow-hidden"
                style={{ padding: "36px" }}
              >
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ background: edu.color }}
                />

                <div className="flex items-start justify-between relative z-10" style={{ marginBottom: "24px" }}>
                  <div
                    className="rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: `${edu.color}15`, width: "60px", height: "60px" }}
                  >
                    <i className={`${edu.icon} text-2xl`} style={{ color: edu.color }} />
                  </div>
                  <span
                    className="text-sm font-semibold rounded-full"
                    style={{
                      color: edu.color,
                      background: `${edu.color}15`,
                      padding: "6px 14px",
                    }}
                  >
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white relative z-10" style={{ marginBottom: "10px" }}>
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-base relative z-10" style={{ marginBottom: "8px" }}>
                  {edu.institution}
                </p>
                <p className="text-gray-500 text-sm relative z-10 flex items-center" style={{ gap: "8px" }}>
                  <i className="fas fa-map-marker-alt text-xs" />
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
