"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { visionHero } from "@/data/vision-content";

const revealEase = [0.16, 1, 0.3, 1] as const;

function HeroParticles() {
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    left: `${10 + ((i * 19) % 80)}%`,
    top: `${18 + ((i * 27) % 64)}%`,
    size: 2 + (i % 3),
    delay: i * 0.45,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[#ffd400]/40"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.1, 0.55, 0.1],
          }}
          transition={{
            duration: 5 + (p.id % 2),
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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="vision-hero relative isolate flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Our Vision"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }}>
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${visionHero.image})` }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(5,34,74,0.88)_0%,rgba(5,34,74,0.58)_46%,rgba(0,107,55,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,212,0,0.14),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(0,107,55,0.22),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05224a]/75 to-transparent" />

      <HeroParticles />

      <a
        href="/"
        className="absolute left-5 top-5 z-20 w-fit leading-none sm:left-8 sm:top-8 lg:left-10 lg:top-10"
      >
        <span className="inline-block rounded-sm bg-white p-1 shadow-[0_10px_28px_rgba(0,0,0,0.2)] sm:p-1.5">
          <Image
            src="/logo11.png"
            alt="Delhi Public School SPR Gurugram logo"
            width={620}
            height={155}
            sizes="240px"
            className="block h-[44px] w-auto object-contain sm:h-[50px] lg:h-[56px]"
            priority
          />
        </span>
      </a>

      <motion.div
        className="relative z-10 mx-auto max-w-[920px] px-5 py-24 text-center text-white sm:px-8"
        style={{ y: contentY, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: revealEase }}
          className="mb-4 flex items-center justify-center gap-3 sm:mb-5"
        >
          <span className="h-px w-10 bg-[#ffd400] sm:w-12" />
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#ffd400] sm:text-[12px]">
            {visionHero.eyebrow}
          </p>
          <span className="h-px w-10 bg-[#ffd400] sm:w-12" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 1, ease: revealEase }}
          className="vision-serif text-[40px] font-semibold leading-[0.92] tracking-[-0.03em] [text-shadow:0_2px_18px_rgba(0,0,0,0.45)] sm:text-[56px] sm:leading-[0.9] lg:text-[72px] xl:text-[80px]"
        >
          <span className="block">{visionHero.headline[0]}</span>
          <span className="-mt-1 block text-[#ffd400] sm:-mt-2">{visionHero.headline[1]}</span>
        </motion.h1>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: revealEase }}
          className="mx-auto mt-5 block h-[3px] w-16 origin-center rounded-full bg-gradient-to-r from-transparent via-[#ffd400] to-transparent sm:mt-6 sm:w-20"
          aria-hidden="true"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.95, ease: revealEase }}
          className="mx-auto mt-5 max-w-[620px] text-[17px] font-medium leading-8 text-white/88 sm:mt-6 sm:text-[19px] sm:leading-9"
        >
          {visionHero.subheadline}
        </motion.p>
      </motion.div>

      <motion.a
        href="#why-another-school"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-white sm:bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-label="Scroll to content"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-[#ffd400] to-transparent" />
        </motion.span>
      </motion.a>
    </section>
  );
}
