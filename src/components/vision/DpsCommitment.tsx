"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { dpsCommitment } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function DpsCommitment() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vision-pillar-card",
        { y: 60, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.95,
          stagger: 0.14,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".vision-pillars-grid",
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        ".vision-commitment-image",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".vision-commitment-image", start: "top 82%" },
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
      className="relative overflow-hidden bg-[#f3efe4] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,107,55,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,107,55,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div data-vision-reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
              05 - Our Commitment
            </p>
            <h2 className="vision-serif mt-4 text-[38px] font-semibold leading-[1.04] text-[#111111] sm:text-[54px] lg:text-[68px]">
              &ldquo;{dpsCommitment.quote}&rdquo;
            </h2>
            <p className="mt-6 max-w-[620px] text-[17px] leading-8 text-[#4a5548]">
              This question shapes how we design classrooms, relationships, campus experiences,
              and the everyday culture children grow inside.
            </p>
          </div>

          <div className="vision-commitment-image relative aspect-[4/3] overflow-hidden rounded-[8px] shadow-[0_30px_90px_rgba(27,59,34,0.17)]">
            <Image
              src={dpsCommitment.image}
              alt="Students learning in a science classroom"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="vision-pillars-grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dpsCommitment.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="vision-pillar-card group rounded-[8px] border border-[#1b3b22]/8 bg-white p-6 shadow-[0_18px_50px_rgba(27,59,34,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#006b37]/30 hover:shadow-[0_28px_70px_rgba(0,107,55,0.14)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006b37]/60">
                  Pillar
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#006b37]/10 text-[12px] font-black text-[#006b37] transition duration-500 group-hover:bg-[#006b37] group-hover:text-[#ffd400]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="vision-serif mt-6 text-[24px] font-semibold text-[#1b3b22]">
                {pillar.title}
              </p>
              <p className="mt-3 text-[14px] leading-7 text-[#5a6558]">{pillar.text}</p>
              <span className="mt-5 block h-0.5 w-0 bg-[#ffd400] transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
