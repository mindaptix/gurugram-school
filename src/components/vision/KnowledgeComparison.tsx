"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { knowledgeComparison } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function KnowledgeComparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const bridgeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vision-compare-panel",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vision-compare-grid",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        bridgeRef.current,
        { scale: 0, rotate: -12 },
        {
          scale: 1,
          rotate: 0,
          duration: 1.1,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: bridgeRef.current,
            start: "top 85%",
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
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-end gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div data-vision-reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
              04 - A Shift In Success
            </p>
            <h2 className="vision-serif mt-4 text-[36px] font-semibold leading-[1.06] text-[#111111] sm:text-[50px]">
              What tomorrow asks of learners
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-[#4a5548]">
              Marks remain important, but the world ahead needs children who can think, lead,
              collaborate, adapt, and act with character.
            </p>
          </div>

          <div className="vision-compare-photo relative aspect-[16/9] overflow-hidden rounded-[8px] shadow-[0_26px_80px_rgba(27,59,34,0.14)]">
            <Image
              src={knowledgeComparison.image}
              alt="Students learning with a globe"
              fill
              sizes="(min-width: 1024px) 680px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="vision-compare-grid mt-12 grid gap-5 lg:grid-cols-[1fr_0.72fr_1fr] lg:items-stretch">
          <article className="vision-compare-panel rounded-[8px] border border-[#1b3b22]/10 bg-white p-7 shadow-[0_18px_60px_rgba(27,59,34,0.06)] lg:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a9489]">
              {knowledgeComparison.traditional.label}
            </p>
            <ul className="mt-8 space-y-4">
              {knowledgeComparison.traditional.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[18px] font-medium text-[#9aa39a] line-through decoration-[#c8cfc6]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#c8cfc6]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <div className="vision-compare-panel flex items-center justify-center">
            <div
              ref={bridgeRef}
              className="w-full rounded-[8px] bg-[#006b37] px-6 py-9 text-center shadow-[0_24px_70px_rgba(0,107,55,0.28)]"
            >
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
                Balanced Model
              </p>
              <p className="vision-serif mt-4 text-[24px] font-semibold leading-tight text-white sm:text-[30px]">
                {knowledgeComparison.center}
              </p>
            </div>
          </div>

          <article className="vision-compare-panel vision-compare-future rounded-[8px] border border-[#006b37]/25 bg-[#1b3b22] p-7 text-white shadow-[0_22px_70px_rgba(27,59,34,0.16)] lg:p-9">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#ffd400]">
              {knowledgeComparison.future.label}
            </p>
            <ul className="mt-8 space-y-4">
              {knowledgeComparison.future.items.map((item) => (
                <li key={item} className="vision-future-item flex items-center gap-3 text-[18px] font-semibold">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#ffd400] text-[11px] font-black text-[#1b3b22]">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
