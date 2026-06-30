"use client";

import { useLayoutEffect, useRef } from "react";

import { milestones } from "@/data/founding-story-content";
import { gsap, initFoundingReveal, registerFoundingGsap } from "@/lib/founding-gsap";

export function MilestonesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    const cleanup = initFoundingReveal(sectionRef);

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
            trigger: ".founding-timeline",
            start: "top 70%",
            end: "bottom 55%",
            scrub: 1.2,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".founding-milestone-item").forEach((item) => {
        gsap.fromTo(
          item,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
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
      className="relative overflow-hidden bg-[#fffdf7] px-5 py-20 sm:px-8 lg:px-[74px] lg:py-28"
    >
      <div className="mx-auto max-w-[800px] text-center" data-founding-reveal>
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
          Our Journey
        </p>
        <h2 className="vision-serif mt-4 text-[32px] font-semibold text-[#111111] sm:text-[42px]">
          Milestones That Shaped Us
        </h2>
      </div>

      <div className="founding-timeline relative mx-auto mt-14 max-w-[720px]">
        <div
          ref={lineRef}
          className="absolute bottom-0 left-[23px] top-0 w-[2px] origin-top bg-gradient-to-b from-[#ffd400] via-[#006b37] to-[#006b37]/20 sm:left-[27px]"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {milestones.map((item, index) => (
            <article
              key={item.title}
              className="founding-milestone-item group relative flex gap-5 sm:gap-6"
            >
              <div className="relative z-10 flex shrink-0 flex-col items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#006b37] bg-white text-[12px] font-black text-[#006b37] shadow-[0_8px_24px_rgba(0,107,55,0.12)] transition duration-500 group-hover:scale-110 group-hover:bg-[#006b37] group-hover:text-[#ffd400] sm:h-14 sm:w-14 sm:text-[13px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="min-w-0 flex-1 rounded-[20px] border border-[#1b3b22]/8 bg-white p-6 shadow-[0_16px_50px_rgba(27,59,34,0.06)] transition duration-500 group-hover:-translate-y-1 group-hover:border-[#006b37]/25 group-hover:shadow-[0_24px_60px_rgba(0,107,55,0.1)] sm:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#ffd400] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#1b3b22]">
                    {item.year}
                  </span>
                  <span className="text-[11px] font-black text-[#006b37]/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 text-[20px] font-bold text-[#1b3b22] sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#4a5548]">{item.detail}</p>
                <span className="mt-4 block h-0.5 w-0 bg-[#ffd400] transition-all duration-500 group-hover:w-16" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
