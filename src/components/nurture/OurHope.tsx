"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { ourHope } from "@/data/nurture-content";

function HopeStatement({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-[40vh] flex items-center justify-center px-5"
    >
      <p className="nurture-serif max-w-[800px] text-center text-[28px] font-medium leading-[1.3] text-[#05224a] sm:text-[38px] lg:text-[48px]">
        {text}
      </p>
    </motion.div>
  );
}

export function OurHope() {
  const revealRef = useRef<HTMLDivElement>(null);
  const revealInView = useInView(revealRef, { once: true, margin: "-15%" });

  return (
    <section className="relative bg-white py-12" aria-label="Our Hope">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-[#006b37]"
      >
        Our Hope
      </motion.p>

      {ourHope.statements.map((statement, index) => (
        <HopeStatement key={statement} text={statement} index={index} />
      ))}

      <motion.div
        ref={revealRef}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={revealInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex min-h-[50vh] items-center justify-center px-5 pb-20"
      >
        <p className="nurture-serif max-w-[900px] text-center text-[30px] font-semibold leading-[1.25] text-[#006b37] sm:text-[40px] lg:text-[48px]">
          {ourHope.reveal}
        </p>
      </motion.div>
    </section>
  );
}
