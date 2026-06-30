"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { futureSkills } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function FutureSkills() {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.to(ringRef.current, {
        rotate: 360,
        duration: 32,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        ".vision-future-photo",
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".vision-future-photo", start: "top 82%" },
        },
      );

      gsap.fromTo(
        ".vision-skill-pill",
        { scale: 0.5, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          ease: "back.out(1.8)",
          scrollTrigger: {
            trigger: ".vision-skills-wrap",
            start: "top 78%",
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
      className="vision-future-section relative overflow-hidden bg-[#006b37] px-5 py-24 text-white sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div
        ref={ringRef}
        className="pointer-events-none absolute right-[-180px] top-[-180px] h-[560px] w-[560px] rounded-full border border-dashed border-[#ffd400]/20"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,212,0,0.13),transparent_32%),linear-gradient(135deg,rgba(27,59,34,0.25),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        <div data-vision-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
            03 - Future Ready
          </p>
          <h2 className="vision-serif mt-4 max-w-[720px] text-[36px] font-semibold leading-[1.04] sm:text-[50px] lg:text-[64px]">
            {futureSkills.title}
          </h2>
          <p className="mt-5 max-w-[640px] text-[17px] leading-8 text-white/78">
            {futureSkills.subtitle}
          </p>

          <div className="vision-skills-wrap mt-12 grid gap-3 sm:grid-cols-2">
            {futureSkills.skills.map((skill, index) => (
              <span
                key={skill}
                className="vision-skill-pill group inline-flex min-h-[58px] cursor-default items-center justify-between gap-4 rounded-[8px] border border-white/16 bg-white/10 px-5 text-[12px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#ffd400]/70 hover:bg-white/15"
              >
                {skill}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffd400] text-[11px] text-[#1b3b22] transition duration-500 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="vision-future-photo relative min-h-[520px] overflow-hidden rounded-[8px] shadow-[0_34px_100px_rgba(0,0,0,0.28)]">
          <Image
            src={futureSkills.image}
            alt="Students building a hands-on project"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
              {futureSkills.spotlight}
            </p>
            <p className="vision-serif mt-3 text-[28px] font-semibold leading-tight sm:text-[34px]">
              Learning that moves from ideas to action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
