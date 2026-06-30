"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { nurtureHero } from "@/data/nurture-content";
import { fadeUp } from "@/lib/motion";

export function NurtureHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="nurture-hero relative isolate flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="The Child We Nurture"
    >
      <motion.div className="absolute inset-0 scale-105" style={{ y: bgY }}>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${nurtureHero.image})` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,25,46,0.45)_0%,rgba(3,25,46,0.78)_50%,rgba(0,107,55,0.65)_100%)]" />

      <motion.div
        className="relative z-10 mx-auto max-w-[980px] px-5 text-center text-white sm:px-8"
        style={{ opacity }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.4em" }}
          animate={{ opacity: 1, letterSpacing: "0.26em" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-semibold uppercase text-[#ffd400]"
        >
          The Child We Nurture · DPS SPR Gurugram
        </motion.p>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="nurture-serif mt-8 text-[36px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[50px] lg:text-[64px]"
        >
          {nurtureHero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-[760px] text-[17px] font-light leading-8 text-white/84 sm:text-[19px]"
        >
          {nurtureHero.subheadline}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        aria-hidden="true"
      >
        <span className="block h-10 w-px bg-gradient-to-b from-[#ffd400] to-transparent" />
      </motion.div>
    </section>
  );
}
