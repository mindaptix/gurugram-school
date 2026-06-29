"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { beliefs } from "@/data/vision-content";
import { scaleIn, staggerContainer } from "@/lib/motion";

export function WhatWeBelieve() {
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
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[980px] text-center"
      >
        <h2 className="vision-serif text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#05224a] sm:text-[48px] lg:text-[58px]">
          {beliefs.title}
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto mt-16 grid max-w-[1280px] gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {beliefs.items.map((item) => (
          <motion.article
            key={item.title}
            variants={scaleIn}
            whileHover={{
              y: -12,
              rotateX: 4,
              rotateY: -4,
              boxShadow: "0 32px 80px rgba(0,107,55,0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="vision-belief-card group relative overflow-hidden rounded-[24px] border border-[#05224a]/6 bg-[#fffdf7] p-6"
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          >
            <motion.div
              className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#006b37]/8"
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <span className="text-[28px] text-[#006b37]">{item.icon}</span>
            <h3 className="mt-5 text-[16px] font-bold leading-snug text-[#05224a]">{item.title}</h3>
            <p className="mt-3 text-[14px] leading-6 text-[#6b7280] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.detail}
            </p>
            <motion.span
              className="mt-6 block h-0.5 w-8 bg-[#ffd400]"
              whileHover={{ width: 48 }}
              transition={{ duration: 0.4 }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
