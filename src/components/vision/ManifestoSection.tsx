"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { manifestoStatements } from "@/data/vision-content";

export function ManifestoSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % manifestoStatements.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="vision-manifesto relative flex min-h-[72vh] items-center justify-center overflow-hidden px-5 py-24 sm:px-8"
      aria-live="polite"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img4.jpeg)" }}
      />
      <div className="absolute inset-0 bg-[#03192e]/82" />
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,107,55,0.35), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={manifestoStatements[index]}
            initial={{ opacity: 0, y: 48, filter: "blur(10px)", scale: 0.96 }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, y: -36, filter: "blur(8px)", scale: 1.02 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="vision-serif text-[34px] font-semibold leading-[1.2] text-white sm:text-[48px] lg:text-[62px]"
          >
            {manifestoStatements[index]}
          </motion.p>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-2">
          {manifestoStatements.map((_, i) => (
            <motion.span
              key={i}
              className="h-1.5 rounded-full bg-white/30"
              animate={{
                width: i === index ? 32 : 8,
                backgroundColor: i === index ? "#ffd400" : "rgba(255,255,255,0.3)",
              }}
              transition={{ duration: 0.4 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
