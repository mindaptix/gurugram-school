"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { knowledgeComparison } from "@/data/vision-content";
import { fadeUp, slideLeft, slideRight } from "@/lib/motion";

export function KnowledgeComparison() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="rounded-[28px] border border-[#05224a]/10 bg-white p-8 shadow-[0_20px_60px_rgba(5,34,74,0.06)] lg:p-10"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#6b7280]">
              {knowledgeComparison.traditional.label}
            </p>
            <ul className="mt-8 space-y-4">
              {knowledgeComparison.traditional.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 text-[20px] font-medium text-[#9ca3af] line-through decoration-[#d1d5db]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#d1d5db]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative z-10 text-center"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 0 rgba(0,107,55,0)", "0 0 60px rgba(0,107,55,0.35)", "0 0 0 rgba(0,107,55,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto max-w-[280px] rounded-[24px] bg-[#006b37] px-6 py-8 lg:max-w-[320px]"
            >
              <p className="vision-serif text-[22px] font-semibold leading-tight text-white sm:text-[26px]">
                {knowledgeComparison.center}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="rounded-[28px] border border-[#006b37]/20 bg-[#05224a] p-8 text-white shadow-[0_24px_70px_rgba(5,34,74,0.18)] lg:p-10"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#ffd400]">
              {knowledgeComparison.future.label}
            </p>
            <ul className="mt-8 space-y-4">
              {knowledgeComparison.future.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 text-[20px] font-semibold"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ffd400] text-[11px] font-black text-[#05224a]">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
