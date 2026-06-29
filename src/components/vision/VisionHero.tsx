"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { fadeUp } from "@/lib/motion";
import { visionHero } from "@/data/vision-content";

function HeroParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${8 + ((i * 17) % 84)}%`,
    top: `${12 + ((i * 23) % 72)}%`,
    size: 3 + (i % 4),
    delay: i * 0.35,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[#ffd400]/50"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -28, 0],
            opacity: [0.15, 0.75, 0.15],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 4.5 + (p.id % 3),
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function VisionHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="vision-hero relative isolate flex min-h-screen items-center justify-center overflow-hidden pt-32"
      aria-label="Our Vision"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${visionHero.image})` }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,34,74,0.55)_0%,rgba(5,34,74,0.82)_42%,rgba(0,107,55,0.72)_100%)]" />
      <HeroParticles />

      <motion.div
        className="relative z-10 mx-auto max-w-[1080px] px-5 text-center text-white sm:px-8"
        style={{ y: contentY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.28em" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-semibold uppercase text-[#ffd400]"
        >
          Our Vision · DPS SPR Gurugram
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="vision-serif mt-8 text-[42px] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-[58px] lg:text-[78px]"
        >
          {visionHero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-[720px] text-[18px] font-light leading-9 text-white/86 sm:text-[20px]"
        >
          {visionHero.subheadline}
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-[#ffd400] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
