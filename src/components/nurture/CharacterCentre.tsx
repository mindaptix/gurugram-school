"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { characterCentre } from "@/data/nurture-content";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

export function CharacterCentre() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#f5f0e6] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 48 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="nurture-serif mx-auto max-w-[980px] text-center text-[32px] font-semibold leading-[1.15] text-[#05224a] sm:text-[42px] lg:text-[50px]"
      >
        {characterCentre.headline}
      </motion.h2>

      <motion.div
        variants={staggerContainer(0.08, 0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto mt-16 flex max-w-[1100px] flex-wrap justify-center gap-5"
      >
        {characterCentre.values.map((value) => (
          <motion.div
            key={value}
            variants={scaleIn}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 40px rgba(255,212,0,0.35)",
              borderColor: "#ffd400",
            }}
            className="grid h-28 w-28 place-items-center rounded-full border-2 border-[#006b37]/30 bg-white p-3 text-center shadow-[0_16px_40px_rgba(5,34,74,0.08)] sm:h-32 sm:w-32"
          >
            <span className="text-[12px] font-black uppercase tracking-[0.08em] text-[#006b37] sm:text-[13px]">
              {value}
            </span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto mt-14 max-w-[720px] text-center text-[18px] font-medium italic leading-8 text-[#4b5563]"
      >
        {characterCentre.closing}
      </motion.p>
    </section>
  );
}
