"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { graduateProfile } from "@/data/nurture-content";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const positions = [
  "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
  "right-0 top-1/2 -translate-y-1/2 translate-x-2",
  "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
  "left-0 top-1/2 -translate-y-1/2 -translate-x-2",
  "top-[12%] right-[8%]",
];

export function GraduateProfile() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="nurture-serif mx-auto max-w-[900px] text-center text-[36px] font-semibold text-[#05224a] sm:text-[48px] lg:text-[56px]"
      >
        {graduateProfile.title}
      </motion.h2>

      <div className="relative mx-auto mt-20 h-[520px] max-w-[720px] sm:h-[580px]">
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 720 580"
          aria-hidden="true"
        >
          {graduateProfile.attributes.map((_, i) => {
            const cx = 360;
            const cy = 290;
            const angles = [-90, 18, 90, 162, 234];
            const rad = (angles[i] * Math.PI) / 180;
            const x2 = cx + Math.cos(rad) * 180;
            const y2 = cy + Math.sin(rad) * 180;
            return (
              <motion.line
                key={i}
                x1={cx}
                y1={cy}
                x2={x2}
                y2={y2}
                stroke="#006b37"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.8 }}
              />
            );
          })}
        </svg>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-4 border-[#ffd400] bg-[#05224a] text-center shadow-[0_24px_70px_rgba(5,34,74,0.22)] sm:h-48 sm:w-48"
        >
          <span className="nurture-serif px-3 text-[15px] font-semibold leading-tight text-white sm:text-[17px]">
            {graduateProfile.center}
          </span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.35)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute inset-0"
        >
          {graduateProfile.attributes.map((attr, i) => (
            <motion.div
              key={attr}
              variants={fadeUp}
              className={`absolute ${positions[i]} max-w-[160px] rounded-[18px] border border-[#006b37]/15 bg-white px-4 py-3 text-center shadow-[0_16px_40px_rgba(5,34,74,0.08)] sm:max-w-[180px]`}
            >
              <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#006b37] sm:text-[14px]">
                {attr}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
