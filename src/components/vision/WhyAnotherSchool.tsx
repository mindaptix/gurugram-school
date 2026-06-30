"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { whyAnotherSchool } from "@/data/vision-content";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/lib/motion";

export function WhyAnotherSchool() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const revealRef = useRef<HTMLDivElement>(null);
  const revealInView = useInView(revealRef, { once: true, margin: "-8%" });

  return (
    <section
      id="why-another-school"
      ref={ref}
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] gap-16 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="vision-serif text-[48px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#05224a] sm:text-[62px] lg:text-[76px]">
            {whyAnotherSchool.title}
          </h2>
        </motion.div>

        <motion.div
          variants={slideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6 text-[17px] leading-8 text-[#4b5563]"
        >
          {whyAnotherSchool.body.map((paragraph) => (
            <p key={paragraph.slice(0, 28)}>{paragraph}</p>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer(0.14, 0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto mt-20 max-w-[900px]"
      >
        {whyAnotherSchool.questions.map((question, index) => (
          <motion.div
            key={question}
            variants={fadeUp}
            className="vision-question-wall group relative mb-4 overflow-hidden rounded-[20px] border border-[#05224a]/8 bg-white px-6 py-5 shadow-[0_16px_50px_rgba(5,34,74,0.05)] sm:px-8 sm:py-6"
          >
            <motion.span
              className="absolute left-0 top-0 h-full w-1 bg-[#006b37] opacity-0 transition-opacity group-hover:opacity-100"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              style={{ originY: 0 }}
            />
            <p className="text-[18px] font-medium text-[#05224a] sm:text-[22px]">{question}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        ref={revealRef}
        initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
        animate={
          revealInView
            ? { opacity: 1, scale: 1, filter: "blur(0px)" }
            : { opacity: 0, scale: 0.92, filter: "blur(12px)" }
        }
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-16 max-w-[900px] text-center"
      >
        <div className="inline-block rounded-[24px] bg-[#05224a] px-8 py-6 shadow-[0_28px_80px_rgba(5,34,74,0.22)] sm:px-12 sm:py-8">
          <p className="vision-serif text-[28px] font-medium leading-tight text-white sm:text-[36px]">
            {whyAnotherSchool.reveal}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
