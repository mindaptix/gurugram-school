"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { closingManifesto } from "@/data/nurture-content";

export function ClosingManifesto() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setShowSecond(true), 2200);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24"
      aria-label="Closing manifesto"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${closingManifesto.image})` }}
      />
      <div className="absolute inset-0 bg-[#03192e]/85" />

      <div className="relative z-10 mx-auto max-w-[1000px] text-center text-white">
        <AnimatePresence mode="wait">
          {!showSecond ? (
            <motion.p
              key="line1"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="nurture-serif text-[26px] font-medium leading-[1.35] sm:text-[36px] lg:text-[44px]"
            >
              {closingManifesto.line1}
            </motion.p>
          ) : (
            <motion.p
              key="line2"
              initial={{ opacity: 0, y: 48, scale: 0.96, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="nurture-serif text-[34px] font-semibold leading-[1.15] text-[#ffd400] sm:text-[48px] lg:text-[58px]"
            >
              {closingManifesto.line2}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
