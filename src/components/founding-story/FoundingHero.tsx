"use client";

import { useLayoutEffect, useRef } from "react";

import { VisionNavbar } from "@/components/vision/VisionNavbar";
import { foundingStoryHero } from "@/data/founding-story-content";
import { gsap, registerFoundingGsap } from "@/lib/founding-gsap";

export function FoundingHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerFoundingGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".founding-hero-kicker", {
          y: 24,
          opacity: 0,
          duration: 0.75,
        })
        .from(".founding-hero-line", {
          scaleX: 0,
          opacity: 0,
          duration: 1,
          transformOrigin: "left center",
        }, "-=0.45")
        .from(
          ".founding-title-word",
          {
            yPercent: 105,
            rotateX: -18,
            opacity: 0,
            filter: "blur(10px)",
            stagger: 0.055,
            duration: 1,
            transformOrigin: "left bottom",
          },
          "-=0.55",
        )
        .from(
          "[data-hero-line]",
          { y: 34, opacity: 0, filter: "blur(8px)", stagger: 0.12, duration: 0.9 },
          "-=0.45",
        );

      gsap.to(bgRef.current, {
        y: 72,
        scale: 1.09,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(auraRef.current, {
        xPercent: -12,
        yPercent: 16,
        rotate: 16,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".founding-hero-float", {
        y: -18,
        opacity: 1,
        duration: 2.4,
        stagger: 0.18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(copyRef.current, {
        y: 32,
        opacity: 0.42,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="founding-hero relative isolate min-h-[70vh] overflow-hidden"
      aria-label="Founding Story"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${foundingStoryHero.image})` }}
        role="img"
        aria-label="DPS SPR Gurugram campus"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.34)_45%,rgba(0,0,0,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(255,212,0,0.2),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.42)_100%)]" />
      <div ref={auraRef} className="vision-hero-aura pointer-events-none absolute -right-24 top-20 h-[520px] w-[520px] rounded-full border border-[#ffd400]/25" />
      <div className="founding-hero-float pointer-events-none absolute right-[12%] top-[24%] hidden h-24 w-24 rounded-full border border-white/25 bg-white/8 backdrop-blur-sm lg:block" />
      <div className="founding-hero-float pointer-events-none absolute right-[30%] top-[58%] hidden h-14 w-14 rounded-full border border-[#ffd400]/35 bg-[#ffd400]/10 backdrop-blur-sm lg:block" />
      <div className="founding-hero-float pointer-events-none absolute bottom-[18%] right-[8%] hidden h-32 w-32 rounded-full border border-white/18 bg-white/5 backdrop-blur-sm lg:block" />

      <VisionNavbar />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-[1320px] flex-col justify-end px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:px-12 lg:pb-12">
        <div ref={copyRef} className="founding-hero-copy max-w-[980px] text-white">
          <div className="founding-hero-kicker mb-4 flex items-center gap-3">
            <span className="founding-hero-line h-px w-12 bg-[#ffd400]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd400]">
              {foundingStoryHero.eyebrow}
            </p>
          </div>
          <h1 className="vision-hero-title text-[36px] font-black leading-[0.98] tracking-[-0.03em] sm:text-[54px] lg:text-[74px]">
            {foundingStoryHero.title.split(" ").map((word) => (
              <span key={word} className="mr-[0.16em] inline-block overflow-hidden pb-2 align-bottom">
                <span className="founding-title-word inline-block">{word}</span>
              </span>
            ))}
          </h1>
          <p
            data-hero-line
            className="mt-4 max-w-[720px] text-[16px] font-medium leading-7 text-white/88 sm:text-[18px] sm:leading-8"
          >
            {foundingStoryHero.subtitle}
          </p>

          <div data-hero-line className="mt-5 hidden max-w-[760px] gap-3 sm:grid sm:grid-cols-3">
            {["DPS legacy", "Gurugram campus", "Purpose-led beginning"].map((item) => (
              <div
                key={item}
                className="vision-hero-stat border border-white/18 bg-white/10 px-4 py-3 text-[11px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="vision-scroll-cue mt-6 hidden items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-white/70 sm:flex">
          <span className="block h-10 w-px bg-[#ffd400]" />
          Scroll
        </div>
      </div>
    </section>
  );
}
