"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { visionCta } from "@/data/vision-content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function VisionCta() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-[74px] lg:py-28"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-[1080px] text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="vision-serif text-[36px] font-semibold text-[#05224a] sm:text-[48px]"
        >
          {visionCta.headline}
        </motion.h2>

        <motion.div
          variants={staggerContainer(0.08, 0.2)}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {visionCta.buttons.map((button, i) => (
            <motion.a
              key={button.label}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={button.href}
              className={`inline-flex min-h-[54px] items-center justify-center rounded-full px-8 text-[12px] font-black uppercase tracking-[0.14em] transition ${
                i === 0
                  ? "bg-[#006b37] text-white shadow-[0_18px_44px_rgba(0,107,55,0.28)]"
                  : i === 1
                    ? "border-2 border-[#05224a] text-[#05224a]"
                    : "bg-[#ffd400] text-[#05224a]"
              }`}
            >
              {button.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06, 0.35)}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visionCta.trust.map((item) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="rounded-[16px] border border-[#05224a]/8 bg-[#fffdf7] px-4 py-5 text-[13px] font-bold uppercase tracking-[0.1em] text-[#006b37]"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
