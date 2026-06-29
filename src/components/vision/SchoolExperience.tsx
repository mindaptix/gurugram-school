"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { schoolExperience } from "@/data/vision-content";
import { slideLeft, slideRight } from "@/lib/motion";

function ExperienceRow({
  text,
  image,
  index,
}: {
  text: string;
  image: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={isEven ? slideLeft : slideRight}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
        isEven ? "" : "lg:[&>div:first-child]:order-2"
      }`}
    >
      <div className="relative min-h-[300px] overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(5,34,74,0.12)] sm:min-h-[380px]">
        <Image
          src={image}
          alt={text}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05224a]/40 via-transparent to-transparent" />
      </div>
      <div>
        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="vision-serif mt-4 text-[30px] font-medium leading-[1.2] text-[#05224a] sm:text-[38px]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

export function SchoolExperience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="vision-serif mx-auto mb-16 max-w-[900px] text-center text-[36px] font-semibold leading-[1.08] text-[#05224a] sm:text-[48px]"
      >
        {schoolExperience.title}
      </motion.h2>

      <div className="mx-auto max-w-[1280px] space-y-20">
        {schoolExperience.items.map((item, index) => (
          <ExperienceRow
            key={item.text}
            text={item.text}
            image={item.image}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
