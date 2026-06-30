"use client";

import { useLayoutEffect, useRef } from "react";

import { foundingQuote } from "@/data/founding-story-content";
import { gsap, registerFoundingGsap } from "@/lib/founding-gsap";

export function FoundingQuoteSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".founding-quote-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: section, start: "top 75%" },
        },
      );

      gsap.fromTo(
        ".founding-quote-text",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 72%" },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#006b37] px-5 py-20 text-white sm:px-8 lg:px-[74px] lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,212,0,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-[900px] text-center">
        <span className="founding-quote-line mx-auto mb-8 block h-px w-20 origin-center bg-[#ffd400]" />
        <blockquote className="founding-quote-text vision-serif text-[26px] font-medium leading-[1.4] sm:text-[34px] lg:text-[40px]">
          &ldquo;{foundingQuote.quote}&rdquo;
        </blockquote>
        <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-[#ffd400]">
          {foundingQuote.attribution}
        </p>
      </div>
    </section>
  );
}
