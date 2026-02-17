"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    title: "Associate Software Engineer",
    company: "Mercurial Minds",
    period: "May 2023 - Present",
    location: "Islamabad, Pakistan",
    description:
      "Working on enterprise-level mobile applications using Flutter. Led development of ZONG HRMS and contributed to JAZZ Tamasha video streaming platform.",
    achievements: [
      "Developed ZONG HRMS app using Provider architecture with WSO2 integration",
      "Contributed to JAZZ Tamasha video streaming platform serving millions of users",
      "Built SCO SIM Verification app using Kotlin/Android native",
      "Implemented complex state management solutions",
    ],
    technologies: ["Flutter", "Dart", "Provider", "Kotlin", "WSO2", "Firebase"],
  },
  {
    title: "Flutter Intern",
    company: "kaiRiz Technologies",
    period: "Mar 2023 - May 2023",
    location: "Islamabad, Pakistan",
    description:
      "Gained hands-on experience in Flutter development and mobile app architecture patterns.",
    achievements: [
      "Learned enterprise development practices",
      "Worked on real-world Flutter projects",
      "Improved skills in state management and clean architecture",
    ],
    technologies: ["Flutter", "Dart", "GetX", "REST APIs"],
  },
  {
    title: "Flutter Intern",
    company: "DEVUPIX",
    period: "Oct 2022 - Dec 2022",
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

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="experience" className="section bg-[#0a0a0a]" ref={ref}>
      <div className="container mx-auto px-5">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-[#1a1a1a]">
            <motion.div
              className="w-full bg-gradient-to-b from-[#0066FF] to-[#00D4FF]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#0066FF] border-4 border-[#0a0a0a] z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.5 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#0066FF]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`ml-8 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
                whileHover={{ y: -5 }}
              >
                <div className="bg-[#111] rounded-3xl border border-[rgba(255,255,255,0.06)] hover:border-[#0066FF]/30 transition-all" style={{ padding: "36px" }}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between" style={{ gap: "20px", marginBottom: "24px" }}>
                    <div>
                      <h3 className="text-2xl font-bold text-white" style={{ marginBottom: "8px" }}>
                        {exp.title}
                      </h3>
                      <p className="text-[#00D4FF] font-medium text-lg">{exp.company}</p>
                    </div>
                    <span className="bg-[#0066FF]/10 rounded-xl text-[#0066FF] text-sm font-medium border border-[#0066FF]/20" style={{ padding: "10px 18px" }}>
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 flex items-center text-sm" style={{ gap: "12px", marginBottom: "20px" }}>
                    <i className="fas fa-map-marker-alt text-[#0066FF]" />
                    {exp.location}
                  </p>

                  <p className="text-gray-300" style={{ marginBottom: "24px", lineHeight: "1.8" }}>{exp.description}</p>

                  {/* Achievements */}
                  <ul style={{ marginBottom: "24px" }}>
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                        className="text-gray-400 text-sm flex items-start"
                        style={{ gap: "12px", lineHeight: "1.8", marginBottom: "12px" }}
                      >
                        <i className="fas fa-check-circle text-[#00D4FF]" style={{ marginTop: "4px" }} />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap" style={{ gap: "12px" }}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#1a1a1a] rounded-xl text-sm text-gray-400 border border-[rgba(255,255,255,0.06)]"
                        style={{ padding: "10px 18px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
