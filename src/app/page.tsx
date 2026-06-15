"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  LoadingScreen,
  Navbar,
  Hero,
  Tools,
  Projects,
  About,
  Experience,
  Skills,
  Certifications,
  Contact,
} from "@/components";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Lock scroll while the loading screen is visible
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="min-h-screen bg-bg">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tools />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
