"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { visionMission } from "@/data/vision-content";
import { scaleIn, staggerContainer } from "@/lib/motion";

export function VisionMissionCards() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${visionMission.background})` }}
      />
      <div className="absolute inset-0 bg-[#05224a]/88" />

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-2"
      >
        {[visionMission.vision, visionMission.mission].map((card) => (
          <motion.article
            key={card.title}
            variants={scaleIn}
            whileHover={{ y: -6 }}
            className="vision-glass-card rounded-[28px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl sm:p-10"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffd400]">
              {card.title}
            </p>
            <p className="vision-serif mt-6 text-[24px] font-medium leading-[1.45] text-white sm:text-[28px]">
              {card.text}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
