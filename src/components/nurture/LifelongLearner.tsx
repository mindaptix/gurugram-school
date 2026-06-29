"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { lifelongLearner } from "@/data/nurture-content";
import { fadeUp } from "@/lib/motion";

export function LifelongLearner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="mx-auto max-w-[900px] text-center"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">
          {lifelongLearner.subheading}
        </p>
        <h2 className="nurture-serif mt-4 text-[36px] font-semibold text-[#05224a] sm:text-[48px]">
          {lifelongLearner.title}
        </h2>
      </motion.div>

      <div className="mx-auto mt-16 max-w-[1100px]">
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between">
          {lifelongLearner.journey.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-3 lg:flex-row lg:flex-1">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.15 + i * 0.12 }}
                whileHover={{ scale: 1.08 }}
                className="grid h-20 w-full max-w-[200px] place-items-center rounded-full border-2 border-[#006b37] bg-[#fffdf7] px-3 text-center text-[11px] font-black uppercase leading-tight tracking-[0.06em] text-[#006b37] sm:h-24 lg:w-full lg:max-w-none"
              >
                {step}
              </motion.div>
              {i < lifelongLearner.journey.length - 1 && (
                <motion.span
                  className="text-2xl text-[#ffd400] lg:rotate-0"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                  aria-hidden="true"
                >
                  <span className="lg:hidden">↓</span>
                  <span className="hidden lg:inline">→</span>
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <motion.div
          className="mx-auto mt-10 hidden h-0.5 max-w-[90%] bg-gradient-to-r from-[#006b37] via-[#ffd400] to-[#006b37] lg:block"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left center" }}
        />
      </div>
    </section>
  );
}
