"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { visionMission } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function VisionMissionCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.fromTo(
        ".vision-mission-card",
        { y: 70, opacity: 0, rotateX: 12 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vision-mission-grid",
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
      className="relative overflow-hidden bg-[#1b3b22] px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006b37]/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,212,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,212,0,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={visionMission.image}
            alt="Students celebrating achievement"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </div>

        <div>
          <div className="mb-10 max-w-[700px]" data-vision-reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
              07 - Vision & Mission
            </p>
            <h2 className="vision-serif mt-4 text-[36px] font-semibold leading-[1.06] text-white sm:text-[50px]">
              What guides us every day
            </h2>
          </div>

          <div className="vision-mission-grid grid gap-5">
            {[visionMission.vision, visionMission.mission].map((card) => (
              <article
                key={card.title}
                className="vision-mission-card rounded-[8px] border border-white/15 bg-white/8 p-7 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#ffd400]/40 sm:p-8"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ffd400]">
                  {card.title}
                </p>
                <p className="vision-serif mt-5 text-[22px] font-medium leading-[1.42] text-white sm:text-[26px]">
                  {card.text}
                </p>
                <span className="mt-7 block h-0.5 w-16 bg-[#ffd400]" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
