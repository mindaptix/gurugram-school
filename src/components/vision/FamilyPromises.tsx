"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { familyPromises } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function FamilyPromises() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vision-promise-card",
        { y: 50, opacity: 0, rotateX: 10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.95,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vision-promises-list",
            start: "top 82%",
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
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#006b37]/6 blur-3xl" />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div data-vision-reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
              08 - Our Promise
            </p>
            <h2 className="vision-serif mt-4 text-[36px] font-semibold leading-[1.06] text-[#111111] sm:text-[50px]">
              {familyPromises.title}
            </h2>
            <p className="mt-5 max-w-[600px] text-[16px] leading-8 text-[#4a5548]">
              A partnership built on trust, transparency, and shared ambition for every child at DPS
              SPR Gurugram.
            </p>
          </div>

          <div className="vision-promises-list mt-10 grid gap-4 sm:grid-cols-2">
            {familyPromises.promises.map((promise, index) => (
              <article
                key={promise.title}
                className="vision-promise-card group rounded-[8px] border border-[#1b3b22]/8 bg-white p-6 shadow-[0_12px_40px_rgba(27,59,34,0.05)] transition duration-500 hover:-translate-y-1 hover:border-[#006b37]/30 hover:shadow-[0_20px_50px_rgba(0,107,55,0.1)] sm:p-7"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#ffd400]">
                  Promise {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[18px] font-bold text-[#006b37]">{promise.title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-[#4a5548]">{promise.detail}</p>
                <span className="mt-5 block h-0.5 w-0 bg-[#ffd400] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_30px_90px_rgba(27,59,34,0.15)] sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src={familyPromises.image}
            alt="Students studying together outdoors"
            fill
            sizes="(min-width: 1024px) 520px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b3b22]/58 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd400]">
              Parent partnership
            </p>
            <p className="vision-serif mt-2 text-[28px] font-semibold leading-tight">
              Every promise becomes a daily practice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
