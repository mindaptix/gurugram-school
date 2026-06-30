"use client";

import { useLayoutEffect, useRef } from "react";

import { foundingPillars } from "@/data/founding-story-content";
import { gsap, initFoundingReveal, registerFoundingGsap } from "@/lib/founding-gsap";

export function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    const cleanup = initFoundingReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".founding-pillar-card",
        { y: 60, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".founding-pillars-grid",
            start: "top 80%",
          },
        },
      );
    }, section);

    return () => {
      cleanup();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[74px] lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,107,55,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,107,55,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] text-center" data-founding-reveal>
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
          What Guides Us
        </p>
        <h2 className="vision-serif mt-4 text-[32px] font-semibold text-[#111111] sm:text-[42px]">
          The Pillars of Our Founding Vision
        </h2>
      </div>

      <div className="founding-pillars-grid relative mx-auto mt-14 grid max-w-[1200px] gap-6 md:grid-cols-3">
        {foundingPillars.map((pillar) => (
          <article
            key={pillar.title}
            className={`founding-pillar-card group h-full rounded-[22px] border-l-4 p-8 transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(0,107,55,0.12)] ${pillar.accent}`}
          >
            <span className="text-[48px] font-black leading-none text-[#006b37]/15 transition duration-500 group-hover:text-[#006b37]/30">
              {pillar.icon}
            </span>
            <h3 className="mt-5 text-[21px] font-bold text-[#1b3b22]">{pillar.title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#4a5548]">{pillar.detail}</p>
            <span className="mt-6 block h-0.5 w-10 bg-[#ffd400] transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
}
