"use client";

import { useLayoutEffect, useRef } from "react";

import { foundingCta } from "@/data/founding-story-content";
import { gsap, initFoundingReveal, registerFoundingGsap } from "@/lib/founding-gsap";

export function FoundingCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    return initFoundingReveal(sectionRef);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-5 py-16 sm:px-8 lg:px-[74px] lg:py-20"
    >
      <div
        className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[24px] bg-[#006b37] px-8 py-12 shadow-[0_28px_90px_rgba(0,107,55,0.25)] sm:px-12 sm:py-14"
        data-founding-reveal
      >
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#ffd400]/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[680px] text-white">
          <h2 className="vision-serif text-[30px] font-semibold leading-tight sm:text-[38px]">
            {foundingCta.title}
          </h2>
          <p className="mt-4 text-[17px] leading-8 text-white/80">{foundingCta.detail}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={foundingCta.primaryHref}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#ffd400] px-7 text-[12px] font-black uppercase tracking-[0.14em] text-[#1b3b22] transition hover:bg-white"
            >
              {foundingCta.primaryLabel}
            </a>
            <a
              href={foundingCta.secondaryHref}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-7 text-[12px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
            >
              {foundingCta.secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
