"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

type ThrowOptions = {
  fromX?: number;
  fromY?: number;
  fromRotate?: number;
  fromScale?: number;
  overshootX?: number;
  overshootY?: number;
  overshootRotate?: number;
  overshootScale?: number;
};

function addThrowMotion(
  tl: gsap.core.Timeline,
  target: HTMLElement,
  at: number,
  options: ThrowOptions = {},
) {
  const {
    fromX = -360,
    fromY = 56,
    fromRotate = -28,
    fromScale = 0.52,
    overshootX = 22,
    overshootY = -10,
    overshootRotate = 5,
    overshootScale = 1.06,
  } = options;

  tl.fromTo(
    target,
    {
      opacity: 0,
      x: fromX,
      y: fromY,
      rotate: fromRotate,
      scale: fromScale,
    },
    {
      opacity: 1,
      x: overshootX,
      y: overshootY,
      rotate: overshootRotate,
      scale: overshootScale,
      duration: 0.62,
    },
    at,
  );

  tl.to(
    target,
    {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 0.28,
    },
    at + 0.62,
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const content = contentRef.current;
    const line = lineRef.current;
    const glow = glowRef.current;

    if (!section || !logo || !content) return;

    const items = gsap.utils.toArray<HTMLElement>(
      content.querySelectorAll("[data-about-item]"),
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([logo, ...items, line, glow].filter(Boolean), {
        clearProps: "all",
        opacity: 1,
      });
      section.classList.remove("about-awaiting-scroll");
      return;
    }

    const ctx = gsap.context(() => {
      const throwTargets = [logo, ...items];

      gsap.set(throwTargets, {
        opacity: 0,
        transformOrigin: "50% 60%",
      });

      if (line) {
        gsap.set(line, {
          opacity: 0,
          scaleX: 0,
          transformOrigin: "left center",
        });
      }

      if (glow) {
        gsap.set(glow, { opacity: 0, scale: 0.8 });
      }

      section.classList.add("about-awaiting-scroll");

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top 92%",
          end: "top 30%",
          scrub: 0.58,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.03) {
              section.classList.remove("about-awaiting-scroll");
            } else {
              section.classList.add("about-awaiting-scroll");
            }
          },
        },
      });

      if (glow) {
        tl.to(glow, { opacity: 1, scale: 1, duration: 0.3 }, 0);
      }

      addThrowMotion(tl, logo, 0.02, {
        fromX: -420,
        fromY: 70,
        fromRotate: -34,
        fromScale: 0.48,
        overshootX: 28,
        overshootY: -12,
        overshootRotate: 6,
        overshootScale: 1.08,
      });

      items.forEach((item, index) => {
        addThrowMotion(tl, item, 0.14 + index * 0.11, {
          fromX: -300 - index * 18,
          fromY: 40 + index * 6,
          fromRotate: -24 - index * 2,
          fromScale: 0.58,
          overshootX: 16 - index,
          overshootY: -8,
          overshootRotate: 4,
          overshootScale: 1.04,
        });
      });

      if (line) {
        tl.to(
          line,
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.22,
          },
          0.72,
        );
      }

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-school-section about-awaiting-scroll relative isolate overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-[74px] lg:py-24"
    >
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#006b37]/8 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
        <div
          ref={logoRef}
          data-about-reveal
          className="relative mx-auto w-fit will-change-transform lg:mx-0"
        >
          <Image
            src="/half-logo.png"
            alt="Delhi Public School SPR Gurugram emblem"
            width={400}
            height={400}
            sizes="280px"
            className="h-[220px] w-auto object-contain sm:h-[250px] lg:h-[280px]"
          />
        </div>

        <div ref={contentRef} className="relative min-w-0">
          <p
            data-about-item
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37]"
          >
            About Our School
          </p>

          <span
            ref={lineRef}
            aria-hidden="true"
            className="mt-3 block h-1 w-28 origin-left rounded-full bg-[#ffd400]"
          />

          <h2
            data-about-item
            className="mt-5 text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] max-xl:text-[32px] max-md:text-[26px]"
          >
            A Legacy of Excellence for Nursery to Class 12
          </h2>

          <p
            data-about-item
            className="mt-5 max-w-[680px] text-[17px] font-normal leading-[1.75] tracking-normal text-[#4b5563]"
          >
            We carry the legacy of excellence under Delhi Public School, shaping
            a premier CBSE school in Gurugram where academics, personality
            development, values, discipline, and leadership grow together.
          </p>

          <a
            data-about-item
            href="#admissions"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#05224a] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#006b37]"
          >
            Explore Admissions{" "}
            <span className="text-base leading-none">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
