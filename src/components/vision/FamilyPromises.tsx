"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { familyPromises } from "@/data/vision-content";
import { fadeUp, slideRight, staggerContainer } from "@/lib/motion";

export function FamilyPromises() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(5,34,74,0.12)] lg:min-h-[560px]"
        >
          <Image
            src={familyPromises.image}
            alt="Parent and child learning together"
            fill
            sizes="(min-width: 1024px) 580px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#05224a]/50 via-transparent to-transparent" />
        </motion.div>

        <div>
          <motion.h2
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="vision-serif text-[36px] font-semibold leading-[1.08] text-[#05224a] sm:text-[44px]"
          >
            {familyPromises.title}
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.14, 0.2)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-10 space-y-4"
          >
            {familyPromises.promises.map((promise) => (
              <motion.article
                key={promise.title}
                variants={fadeUp}
                whileHover={{ x: 8, borderColor: "rgba(0,107,55,0.4)" }}
                className="rounded-[20px] border border-[#05224a]/8 bg-white p-6 shadow-[0_12px_40px_rgba(5,34,74,0.05)] transition-colors"
              >
                <h3 className="text-[18px] font-bold text-[#006b37]">{promise.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[#4b5563]">{promise.detail}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
