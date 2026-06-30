"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { VisionNavbar } from "@/components/vision/VisionNavbar";
import { nurtureHero } from "@/data/nurture-content";
import { easeOutExpo, staggerContainer, wordReveal } from "@/lib/motion";

export function NurtureHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.42]);
  const auraX = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const auraY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  return (
    <section
      ref={ref}
      className="nurture-hero relative isolate min-h-[70vh] overflow-hidden"
      aria-label="The Child We Nurture"
    >
      <motion.div className="absolute inset-0 scale-105" style={{ y: bgY }}>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${nurtureHero.image})` }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.34)_45%,rgba(0,0,0,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(255,212,0,0.2),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.42)_100%)]" />

      <motion.div
        className="vision-hero-aura pointer-events-none absolute -right-24 top-20 h-[520px] w-[520px] rounded-full border border-[#ffd400]/25"
        style={{ x: auraX, y: auraY }}
      />
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[24%] hidden h-24 w-24 rounded-full border border-white/25 bg-white/8 backdrop-blur-sm lg:block"
        animate={{ y: [0, -18, 0], opacity: [0.72, 1, 0.72] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[30%] top-[58%] hidden h-14 w-14 rounded-full border border-[#ffd400]/35 bg-[#ffd400]/10 backdrop-blur-sm lg:block"
        animate={{ y: [0, -18, 0], opacity: [0.62, 1, 0.62] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.18 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[18%] right-[8%] hidden h-32 w-32 rounded-full border border-white/18 bg-white/5 backdrop-blur-sm lg:block"
        animate={{ y: [0, -18, 0], opacity: [0.58, 0.95, 0.58] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.36 }}
      />

      <VisionNavbar />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1320px] flex-col justify-end px-5 pb-8 pt-28 text-white sm:px-8 sm:pb-10 lg:px-12 lg:pb-12"
        style={{ opacity }}
      >
        <div className="max-w-[980px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOutExpo }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-[#ffd400]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd400]">
              The Child We Nurture
            </p>
          </motion.div>

          <motion.h1
            variants={staggerContainer(0.055, 0.16)}
            initial="hidden"
            animate="visible"
            className="vision-hero-title text-[38px] font-black leading-[0.98] tracking-[-0.03em] sm:text-[56px] lg:text-[78px]"
          >
            {nurtureHero.headline.split(" ").map((word) => (
              <span key={word} className="mr-[0.16em] inline-block overflow-hidden pb-2 align-bottom">
                <motion.span variants={wordReveal} className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.42, duration: 0.9, ease: easeOutExpo }}
            className="mt-4 max-w-[720px] text-[16px] font-medium leading-7 text-white/88 sm:text-[18px] sm:leading-8"
          >
            {nurtureHero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.58, duration: 0.9, ease: easeOutExpo }}
            className="mt-5 hidden max-w-[760px] gap-3 sm:grid sm:grid-cols-3"
          >
            {["Early years", "Middle school", "Senior readiness"].map((item) => (
              <div
                key={item}
                className="vision-hero-stat border border-white/18 bg-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="vision-scroll-cue mt-6 hidden items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/70 sm:flex"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7, ease: easeOutExpo }}
        >
          <span className="block h-10 w-px bg-[#ffd400]" />
          Scroll
        </motion.div>
      </motion.div>
    </section>
  );
}
