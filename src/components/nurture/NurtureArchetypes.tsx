"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { archetypes } from "@/data/nurture-content";
import { fadeUp, slideLeft, slideRight } from "@/lib/motion";

function FloatingQuestions() {
  const marks = ["?", "?", "?", "?"];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {marks.map((m, i) => (
        <motion.span
          key={i}
          className="absolute text-[48px] font-light text-[#006b37]/15 sm:text-[72px]"
          style={{ left: `${15 + i * 20}%`, top: `${20 + (i % 2) * 40}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.45, 0.15], rotate: [0, 8, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        >
          {m}
        </motion.span>
      ))}
    </div>
  );
}

export function CuriousThinker() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const data = archetypes.curious;

  return (
    <section ref={ref} className={`relative overflow-hidden ${data.bg} px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32`}>
      <FloatingQuestions />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={slideLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(5,34,74,0.12)] sm:min-h-[460px]">
            <Image src={data.image} alt={data.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </motion.div>
        <motion.div variants={slideRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">{data.subheading}</p>
          <h2 className="nurture-serif mt-4 text-[36px] font-semibold text-[#05224a] sm:text-[48px]">{data.title}</h2>
          <p className="mt-6 text-[18px] leading-8 text-[#4b5563]">{data.statement}</p>
        </motion.div>
      </div>
    </section>
  );
}

export function CreativeProblemSolver() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const data = archetypes.creative;

  return (
    <section ref={ref} className={`relative overflow-hidden ${data.bg} px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32`}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div variants={slideRight} initial="hidden" animate={isInView ? "visible" : "hidden"} className="lg:order-2">
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(5,34,74,0.12)] sm:min-h-[460px]">
            <Image src={data.image} alt={data.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </motion.div>
        <motion.div variants={slideLeft} initial="hidden" animate={isInView ? "visible" : "hidden"} className="lg:order-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">{data.subheading}</p>
          <h2 className="nurture-serif mt-4 text-[36px] font-semibold text-[#05224a] sm:text-[48px]">{data.title}</h2>
          <p className="mt-6 text-[18px] leading-8 text-[#4b5563]">{data.statement}</p>
          <div className="mt-10 flex items-center gap-4">
            <motion.div
              animate={isInView ? { opacity: [1, 0.4, 1], x: [0, -8, 0] } : {}}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="rounded-[16px] border border-[#c53030]/30 bg-[#fff5f5] px-5 py-4 text-sm font-semibold text-[#9b2c2c]"
            >
              {data.challenge}
            </motion.div>
            <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-2xl text-[#006b37]">
              →
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="rounded-[16px] border border-[#006b37]/30 bg-[#ecfdf3] px-5 py-4 text-sm font-semibold text-[#006b37]"
            >
              {data.solution}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CompassionateLeader() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const data = archetypes.compassionate;

  return (
    <section ref={ref} className={`relative overflow-hidden ${data.bg} px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32`}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <motion.div variants={slideLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">{data.subheading}</p>
          <h2 className="nurture-serif mt-4 text-[36px] font-semibold text-[#05224a] sm:text-[48px]">{data.title}</h2>
          <p className="mt-6 text-[18px] leading-8 text-[#4b5563]">{data.statement}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            {data.values!.map((v, i) => (
              <motion.span
                key={v}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-full border border-[#006b37]/25 bg-white px-5 py-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#006b37]"
              >
                {v}
              </motion.span>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(5,34,74,0.1)] sm:min-h-[460px]">
            <Image src={data.image} alt={data.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ConfidentCommunicator() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const data = archetypes.communicator;

  return (
    <section ref={ref} className={`relative overflow-hidden ${data.bg} px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32`}>
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <motion.div variants={slideLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] sm:min-h-[460px]">
            <Image src={data.image} alt={data.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center gap-1.5 bg-gradient-to-t from-[#05224a]/60 to-transparent pb-6">
              {Array.from({ length: 24 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-1 rounded-full bg-[#ffd400]"
                  animate={{ height: [8, 28 + (i % 5) * 6, 8] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div variants={slideRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#006b37]">{data.subheading}</p>
          <h2 className="nurture-serif mt-4 text-[36px] font-semibold text-[#05224a] sm:text-[48px]">{data.title}</h2>
          <p className="mt-6 text-[18px] leading-8 text-[#4b5563]">{data.statement}</p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {data.skills!.map((s) => (
              <div key={s} className="rounded-[14px] bg-[#fffdf7] px-4 py-3 text-[14px] font-bold text-[#05224a]">
                {s}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function EthicalDecisionMaker() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12%" });
  const data = archetypes.ethical;

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#03192e] px-5 py-24 text-white sm:px-8 lg:px-[74px] lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,107,55,0.3),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
        <motion.div variants={slideLeft} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffd400]">{data.subheading}</p>
          <h2 className="nurture-serif mt-4 text-[36px] font-semibold sm:text-[48px]">{data.title}</h2>
          <p className="mt-6 text-[18px] leading-8 text-white/78">{data.statement}</p>
          <div className="mt-10 space-y-3">
            {data.values!.map((v, i) => (
              <motion.div
                key={v}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="flex items-center gap-4"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#ffd400] text-sm font-black">
                  {i + 1}
                </span>
                <span className="text-[17px] font-semibold">{v}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={slideRight} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <div className="relative min-h-[380px] overflow-hidden rounded-[28px] sm:min-h-[460px]">
            <Image src={data.image} alt={data.title} fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[#03192e]/35" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
