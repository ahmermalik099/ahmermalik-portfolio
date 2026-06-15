"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const certifications = [
  { id: 1, title: "Meta Front End Developer", issuer: "Meta", icon: "fab fa-meta", link: "#" },
  { id: 2, title: "Python Problem Solving", issuer: "HackerRank", icon: "fab fa-hackerrank", link: "#" },
  { id: 3, title: "Mobile App Development", issuer: "PSEB IT Industry", icon: "fas fa-mobile-alt", link: "#" },
  { id: 4, title: "Git & GitHub", issuer: "Coursera", icon: "fab fa-git-alt", link: "#" },
  { id: 5, title: "Supervised Machine Learning", issuer: "Coursera", icon: "fas fa-brain", link: "#" },
  { id: 6, title: "Programming with JavaScript", issuer: "Coursera", icon: "fab fa-js", link: "#" },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Credentials"
          title={
            <>
              Certifications & <span className="font-display italic">courses</span>
            </>
          }
          subtitle="Professional certifications and courses I've completed along the way."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="group relative overflow-hidden rounded-3xl border border-stroke bg-surface p-7 transition-colors hover:border-white/20"
            >
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-stroke bg-bg">
                <i className={`${cert.icon} text-2xl text-text-primary/70`} />
              </div>
              <h3 className="text-base text-text-primary transition-colors group-hover:text-white">{cert.title}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                <i className="fas fa-building text-xs" />
                {cert.issuer}
              </p>
              {/* Bottom accent line */}
              <span className="accent-gradient absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-muted"
        >
          <i className="fas fa-graduation-cap mr-2" />
          Always learning and expanding my skill set.
        </motion.p>
      </div>
    </section>
  );
}
