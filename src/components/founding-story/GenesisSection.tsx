"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { genesisSection } from "@/data/founding-story-content";
import { gsap, initFoundingReveal, registerFoundingGsap } from "@/lib/founding-gsap";

export function GenesisSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    const cleanup = initFoundingReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".genesis-image",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".genesis-image", start: "top 82%" },
        },
      );

      gsap.fromTo(
        statRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: statRef.current, start: "top 88%" },
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
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#006b37]/6 blur-3xl" />

      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div data-founding-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
            {genesisSection.eyebrow}
          </p>
          <h2 className="vision-serif mt-4 text-[32px] font-semibold leading-[1.08] text-[#111111] sm:text-[42px] lg:text-[48px]">
            {genesisSection.title}
          </h2>
          <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#4a5548]">
            {genesisSection.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div
            ref={statRef}
            className="mt-10 inline-flex items-center gap-5 rounded-[18px] border border-[#006b37]/12 bg-[#fffdf7] px-6 py-5 shadow-[0_18px_50px_rgba(0,107,55,0.08)]"
          >
            <span className="text-[40px] font-black leading-none text-[#006b37]">
              {genesisSection.stat.value}
            </span>
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#1b3b22]">
              {genesisSection.stat.label}
            </span>
          </div>
        </div>

        <div className="genesis-image relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-[0_28px_80px_rgba(27,59,34,0.14)] sm:aspect-[5/6]">
          <Image
            src={genesisSection.image}
            alt="Early learning at DPS SPR Gurugram"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-[12px] bg-white px-4 py-3 shadow-lg">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#006b37]">
              Genesis
            </p>
            <p className="mt-1 text-sm font-bold text-[#1b3b22]">Where our story began</p>
          </div>
        </div>
      </div>
    </section>
  );
}
