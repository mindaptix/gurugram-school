"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { beliefs } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function WhatWeBelieve() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".vision-beliefs-grid",
            start: "top 75%",
            end: "bottom 58%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".vision-belief-photo",
        { clipPath: "inset(14% 14% 14% 14%)", opacity: 0, scale: 1.08 },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".vision-belief-photo", start: "top 82%" },
        },
      );

      gsap.utils.toArray<HTMLElement>(".vision-belief-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { x: index % 2 === 0 ? -42 : 42, opacity: 0, rotateY: index % 2 === 0 ? -7 : 7 },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
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
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fffdf7] to-transparent" />

      <div className="mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-vision-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
            02 - Our Belief
          </p>
          <h2 className="vision-serif mt-4 text-[36px] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111111] sm:text-[50px] lg:text-[62px]">
            {beliefs.title}
          </h2>
          <p className="mt-5 max-w-[520px] text-[17px] leading-8 text-[#4d584c]">
            {beliefs.caption}
          </p>

          <div className="vision-belief-photo relative mt-9 aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_30px_90px_rgba(27,59,34,0.16)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={beliefs.image}
              alt="Students celebrating learning together"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 border-l-2 border-[#ffd400] pl-4 text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd400]">
                Seen. Known. Encouraged.
              </p>
              <p className="mt-2 text-[15px] leading-6 text-white/88">
                A child-first culture should be visible in every interaction.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute bottom-5 left-[23px] top-5 hidden w-[2px] origin-top bg-gradient-to-b from-[#ffd400] via-[#006b37] to-[#ffd400]/30 sm:block"
            aria-hidden="true"
          />

          <div className="vision-beliefs-grid grid gap-4">
            {beliefs.items.map((item) => (
              <article
                key={item.title}
                className="vision-belief-card group relative overflow-hidden rounded-[8px] border border-[#1b3b22]/8 bg-[#fffdf7] p-5 pl-6 shadow-[0_16px_50px_rgba(27,59,34,0.06)] transition duration-500 hover:-translate-y-1 hover:border-[#006b37]/25 hover:shadow-[0_24px_60px_rgba(0,107,55,0.12)] sm:ml-12 sm:p-6"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#006b37] to-[#ffd400] transition duration-500 group-hover:scale-x-100" />
                <span className="absolute -left-12 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#006b37] bg-white shadow-[0_0_0_8px_rgba(0,107,55,0.08)] sm:block" />
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#006b37]/10 text-[12px] font-black text-[#006b37] transition duration-500 group-hover:scale-110 group-hover:bg-[#006b37] group-hover:text-[#ffd400]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-[18px] font-bold leading-snug text-[#1b3b22]">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-6 text-[#5a6558]">{item.detail}</p>
                <span className="mt-5 block h-0.5 w-8 bg-[#ffd400] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
