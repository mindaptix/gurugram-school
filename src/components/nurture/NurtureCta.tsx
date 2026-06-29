"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { nurtureCta } from "@/data/nurture-content";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function NurtureCta() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-28"
    >
      <motion.div
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-[980px] text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="nurture-serif text-[36px] font-semibold text-[#05224a] sm:text-[48px]"
        >
          {nurtureCta.headline}
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[640px] text-[17px] leading-8 text-[#4b5563]">
          {nurtureCta.subtext}
        </motion.p>

        <motion.div variants={staggerContainer(0.08, 0.2)} className="mt-10 flex flex-wrap justify-center gap-3">
          {nurtureCta.buttons.map((btn, i) => (
            <motion.a
              key={btn.label}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={btn.href}
              className={`inline-flex min-h-[54px] items-center justify-center rounded-full px-8 text-[12px] font-black uppercase tracking-[0.14em] ${
                i === 0
                  ? "bg-[#006b37] text-white shadow-[0_18px_44px_rgba(0,107,55,0.28)]"
                  : i === 1
                    ? "bg-[#ffd400] text-[#05224a]"
                    : "border-2 border-[#05224a] text-[#05224a]"
              }`}
            >
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="nurture-serif mx-auto mt-16 max-w-[800px] text-[22px] font-medium italic leading-[1.5] text-[#006b37] sm:text-[26px]"
        >
          &ldquo;{nurtureCta.closingThought}&rdquo;
        </motion.p>
      </motion.div>
    </section>
  );
}
