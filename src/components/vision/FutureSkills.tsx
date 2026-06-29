"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { futureSkills } from "@/data/vision-content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function FutureSkills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="vision-future-section relative overflow-hidden bg-[#03192e] px-5 py-24 text-white sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,107,55,0.35),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(255,212,0,0.12),transparent_28%)]" />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#006b37]/20"
        animate={{ rotate: 360, scale: [1, 1.04, 1] }}
        transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
      />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-[900px] text-center"
      >
        <h2 className="vision-serif text-[36px] font-semibold leading-[1.08] sm:text-[48px] lg:text-[58px]">
          {futureSkills.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-[17px] leading-8 text-white/72">
          {futureSkills.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08, 0.12)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto mt-16 grid max-w-[1100px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
      >
        {futureSkills.skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={fadeUp}
            animate={{
              y: [0, -10 - (index % 3) * 2, 0],
            }}
            transition={{
              y: { duration: 3.5 + (index % 4) * 0.4, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(255,212,0,0.35)" }}
            className="vision-skill-orb group relative flex aspect-square flex-col items-center justify-center rounded-full border border-[#006b37]/40 bg-[#05224a]/60 p-4 text-center backdrop-blur-md"
          >
            <motion.span
              className="absolute inset-2 rounded-full border border-[#ffd400]/20"
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.15 }}
            />
            <span className="relative text-[13px] font-bold uppercase tracking-[0.12em] text-white sm:text-[14px]">
              {skill}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
