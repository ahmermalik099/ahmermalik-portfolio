"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const roles = [
  "Flutter Developer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const socialLinks = [
   { icon: "fab fa-github", url: "https://github.com/ahmermalik099", label: "GitHub" },
  { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ahmer-malik-478836256", label: "LinkedIn" },
  // { icon: "fab fa-twitter", url: "https://twitter.com/ahmermalik", label: "Twitter" },
  { icon: "fab fa-instagram", url: "https://instagram.com/ahmer._.malik", label: "Instagram" },
];

const techStack = [
  { icon: "fab fa-flutter", color: "#02569B", name: "Flutter" },
  { icon: "fas fa-fire", color: "#FFCA28", name: "Firebase" },
  { icon: "fab fa-android", color: "#3DDC84", name: "Android" },
  { icon: "fab fa-apple", color: "#ffffff", name: "iOS" },
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Glow */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0066FF]/15 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Secondary Glow */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00D4FF]/15 rounded-full blur-[150px]"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.1)_0%,transparent_60%)]" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 mb-8"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] animate-pulse" />
              <span className="text-[#00D4FF] font-medium text-sm">Available for work</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Ahmer Malik</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-10 min-h-[40px] md:min-h-[48px]"
            >
              <span className="text-[#0066FF]">{displayText}</span>
              <span className="typing-cursor" />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base md:text-lg max-w-xl mb-12 leading-loose mx-auto lg:mx-0"
            >
              Passionate Flutter Developer with <span className="text-white font-medium">2+ years</span> of experience
              in building beautiful, high-performance cross-platform mobile applications.
              Specialized in <span className="text-white font-medium">state management</span>,
              <span className="text-white font-medium"> UI/UX design</span>, and
              <span className="text-white font-medium"> clean architecture</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fas fa-paper-plane" />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <i className="fas fa-briefcase" />
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#141414] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  title={social.label}
                >
                  <i className={`${social.icon} text-xl`} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Section */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Rotating Gradient Border */}
              <motion.div
                className="absolute -inset-3 rounded-full opacity-60"
                style={{
                  background: "conic-gradient(from 0deg, #0066FF, #00D4FF, #0066FF, #00D4FF, #0066FF)",
                  filter: "blur(20px)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-[#111] border-4 border-[#0a0a0a]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20" />
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-32 h-32 md:w-40 md:h-40 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>

              {/* Tech Stack Floating Icons */}
              {techStack.map((tech, index) => {
                const positions = [
                  { top: "-10px", right: "10%" },
                  { top: "20%", right: "-15px" },
                  { bottom: "20%", left: "-15px" },
                  { bottom: "-10px", left: "10%" },
                ];
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-[#141414] rounded-xl flex items-center justify-center border border-[rgba(255,255,255,0.1)] shadow-lg"
                    style={positions[index]}
                    animate={{
                      y: [0, index % 2 === 0 ? -8 : 8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.2 }}
                    title={tech.name}
                  >
                    <i className={`${tech.icon} text-xl sm:text-2xl`} style={{ color: tech.color }} />
                  </motion.div>
                );
              })}

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#141414] rounded-full border border-[rgba(255,255,255,0.1)] shadow-lg flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <span className="text-3xl font-bold gradient-text">2+</span>
                <span className="text-gray-400 text-base">Years Exp.</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-2.5 bg-current rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
