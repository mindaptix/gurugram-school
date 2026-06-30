"use client";

import { useLayoutEffect, useRef } from "react";

import { visionCta } from "@/data/vision-content";
import { gsap, initVisionSectionReveal, registerVisionGsap } from "@/lib/vision-gsap";

export function VisionCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const cleanup = initVisionSectionReveal(sectionRef);

    const section = sectionRef.current;
    if (!section) return cleanup;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vision-cta-trust",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".vision-cta-trust-grid",
            start: "top 90%",
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
      className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[74px] lg:py-24"
    >
      <div className="mx-auto max-w-[1080px] overflow-hidden rounded-[28px] bg-[#006232] px-6 py-12 text-center shadow-[0_28px_80px_rgba(0,98,50,0.22)] sm:px-10 sm:py-14">
        <div data-vision-reveal>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
            10 · Take The Next Step
          </p>
          <h2 className="vision-serif mt-4 text-[34px] font-semibold text-white sm:text-[46px]">
            {visionCta.headline}
          </h2>
        </div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-3"
          data-vision-reveal
          data-reveal-delay="0.1"
        >
          {visionCta.buttons.map((button, i) => (
            <a
              key={button.label}
              href={button.href}
              className={`inline-flex min-h-[52px] items-center justify-center rounded-full px-8 text-[12px] font-black uppercase tracking-[0.14em] transition hover:-translate-y-0.5 ${
                i === 0
                  ? "bg-[#ffd400] text-[#1b3b22] hover:bg-white"
                  : i === 1
                    ? "border-2 border-white/70 text-white hover:bg-white/10"
                    : "bg-white/12 text-white backdrop-blur-sm hover:bg-white/20"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>

        <div
          className="vision-cta-trust-grid mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          data-vision-reveal
          data-reveal-delay="0.18"
        >
          {visionCta.trust.map((item) => (
            <div
              key={item}
              className="vision-cta-trust rounded-[14px] border border-white/15 bg-white/8 px-4 py-4 text-[12px] font-bold uppercase tracking-[0.1em] text-white/90 backdrop-blur-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
