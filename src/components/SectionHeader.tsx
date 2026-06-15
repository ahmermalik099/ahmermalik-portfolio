"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: EASE }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col gap-5 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
        <div className={`mb-5 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-stroke" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted">{eyebrow}</span>
          {align === "center" && <span className="h-px w-8 bg-stroke" />}
        </div>
        <h2 className="text-4xl tracking-tight text-text-primary md:text-5xl">{title}</h2>
        {subtitle && <p className="mt-4 max-w-md text-sm text-muted md:text-base">{subtitle}</p>}
      </div>
      {action}
    </motion.div>
  );
}
