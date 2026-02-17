"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactInfo = [
  {
    icon: "fas fa-envelope",
    label: "Email",
    value: "ahmermalik099@gmail.com",
    link: "mailto:ahmermalik099@gmail.com",
    color: "#0066FF",
  },
  {
    icon: "fas fa-phone",
    label: "Phone",
    value: "(+92) 345-5553444",
    link: "tel:+923455553444",
    color: "#00D4FF",
  },
  {
    icon: "fas fa-map-marker-alt",
    label: "Location",
    value: "Islamabad, Pakistan",
    link: "#",
    color: "#FF6B6B",
  },
];

const socialLinks = [
  { icon: "fab fa-github", url: "https://github.com/ahmermalik099", label: "GitHub" },
  { icon: "fab fa-linkedin-in", url: "https://linkedin.com/in/ahmer-malik-478836256", label: "LinkedIn" },
  // { icon: "fab fa-twitter", url: "https://twitter.com/ahmermalik", label: "Twitter" },
  { icon: "fab fa-instagram", url: "https://instagram.com/ahmer._.malik", label: "Instagram" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section bg-[#0f0f0f]" ref={ref}>
      <div className="container mx-auto px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-5">
                Let&apos;s Work Together
              </h3>
              <p className="text-gray-400 leading-loose text-base">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Whether you have a
                question or just want to say hi, I&apos;ll try my best to get
                back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center bg-[#111] rounded-2xl border border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,102,255,0.3)] transition-all group"
                  style={{ gap: "24px", padding: "24px" }}
                >
                  <div
                    className="rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: `${info.color}15`, width: "60px", height: "60px" }}
                  >
                    <i className={`${info.icon} text-2xl`} style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm" style={{ marginBottom: "6px" }}>{info.label}</p>
                    <p className="text-white font-medium text-lg">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white" style={{ marginBottom: "24px" }}>
                Follow Me
              </h4>
              <div className="flex" style={{ gap: "16px" }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-xl bg-[#111] border border-[rgba(255,255,255,0.06)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-all"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className={`${social.icon} text-xl`} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
