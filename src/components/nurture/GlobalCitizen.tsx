"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { globalCitizen } from "@/data/nurture-content";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

export function GlobalCitizen() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="nurture-global relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cellipse cx='400' cy='200' rx='360' ry='180' fill='none' stroke='%23006b37' stroke-width='2'/%3E%3Cpath d='M40 200 Q200 80 400 200 T760 200' fill='none' stroke='%23006b37' stroke-width='1'/%3E%3Cpath d='M40 200 Q200 320 400 200 T760 200' fill='none' stroke='%23006b37' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="relative mx-auto max-w-[900px] text-center"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">
          {globalCitizen.subheading}
        </p>
        <h2 className="nurture-serif mt-4 text-[36px] font-semibold text-[#05224a] sm:text-[48px]">
          {globalCitizen.title}
        </h2>
      </motion.div>

      <div className="relative mx-auto mt-16 flex max-w-[640px] justify-center">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative z-10 grid h-36 w-36 place-items-center rounded-full border-4 border-[#006b37]/30 bg-white shadow-[0_20px_60px_rgba(5,34,74,0.1)] sm:h-44 sm:w-44"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006b37]">
            Global
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer(0.1, 0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto mt-12 grid max-w-[1100px] gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {globalCitizen.themes.map((theme, i) => (
          <motion.div
            key={theme}
            variants={fadeUp}
            whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,107,55,0.12)" }}
            className={`rounded-[20px] border border-[#05224a]/8 bg-white p-6 text-center shadow-[0_12px_40px_rgba(5,34,74,0.06)] ${
              i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <p className="text-[15px] font-bold uppercase tracking-[0.1em] text-[#006b37]">{theme}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
