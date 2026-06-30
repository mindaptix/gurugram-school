"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { gurugramSection } from "@/data/founding-story-content";
import { gsap, initFoundingReveal, registerFoundingGsap } from "@/lib/founding-gsap";

export function GurugramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    const cleanup = initFoundingReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 85%" },
        },
      );

      gsap.utils.toArray<HTMLElement>(".gurugram-highlight").forEach((item, i) => {
        gsap.fromTo(
          item,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: ".gurugram-highlights", start: "top 85%" },
          },
        );
      });
    }, section);

    return () => {
      cleanup();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1b3b22] px-5 py-20 text-white sm:px-8 lg:px-[74px] lg:py-28"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div
          ref={imageRef}
          className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-[0_28px_80px_rgba(0,0,0,0.35)]"
        >
          <Image
            src={gurugramSection.image}
            alt="DPS SPR Gurugram campus"
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        </div>

        <div data-founding-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
            {gurugramSection.eyebrow}
          </p>
          <h2 className="vision-serif mt-4 text-[32px] font-semibold leading-[1.08] sm:text-[42px]">
            {gurugramSection.title}
          </h2>
          <p className="mt-5 text-[17px] leading-8 text-white/78">{gurugramSection.detail}</p>

          <ul className="gurugram-highlights mt-8 space-y-4">
            {gurugramSection.highlights.map((item) => (
              <li key={item} className="gurugram-highlight flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ffd400] text-sm font-black text-[#1b3b22]">
                  ✓
                </span>
                <span className="text-[16px] font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
