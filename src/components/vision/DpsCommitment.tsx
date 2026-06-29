"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { dpsCommitment } from "@/data/vision-content";
import { scaleIn, staggerContainer } from "@/lib/motion";

export function DpsCommitment() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#f5f0e6] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="vision-serif mx-auto max-w-[900px] text-center text-[36px] font-semibold leading-[1.1] text-[#05224a] sm:text-[48px] lg:text-[56px]"
      >
        &ldquo;{dpsCommitment.quote}&rdquo;
      </motion.h2>

      <div className="relative mx-auto mt-20 max-w-[900px]">
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 900 280"
          fill="none"
          aria-hidden="true"
        >
          <motion.path
            d="M120 140 H380 M520 140 H780 M450 60 V220"
            stroke="#006b37"
            strokeWidth="2"
            strokeDasharray="8 8"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.35 } : {}}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </svg>

        <motion.div
          variants={staggerContainer(0.12, 0.25)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {dpsCommitment.pillars.map((pillar, index) => (
            <motion.div
              key={pillar}
              variants={scaleIn}
              whileHover={{ y: -8, scale: 1.03 }}
              className="vision-pillar-card relative rounded-[24px] bg-white p-8 text-center shadow-[0_18px_50px_rgba(5,34,74,0.08)]"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#006b37] text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="vision-serif mt-5 text-[24px] font-semibold text-[#05224a]">{pillar}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
