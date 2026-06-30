"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { manifestoStatements, manifestoVisual } from "@/data/vision-content";
import { gsap, registerVisionGsap } from "@/lib/vision-gsap";

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    registerVisionGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.1,
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timer: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        timer = setInterval(() => {
          setIndex((current) => (current + 1) % manifestoStatements.length);
        }, 3200);

        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 40, opacity: 0, filter: "blur(10px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
    );
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="vision-manifesto relative flex min-h-[70vh] items-center justify-center overflow-hidden px-5 py-24 sm:px-8"
      aria-live="polite"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${manifestoVisual.image})` }}
        role="img"
        aria-label={manifestoVisual.alt}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.62)_100%)]" />

      <div className="relative z-10 mx-auto max-w-[980px] text-center">
        <p className="mb-8 text-[11px] font-black uppercase tracking-[0.28em] text-[#ffd400]">
          09 · Our Manifesto
        </p>
        <p
          ref={textRef}
          key={manifestoStatements[index]}
          className="vision-serif text-[32px] font-semibold leading-[1.2] text-white sm:text-[46px] lg:text-[58px]"
        >
          {manifestoStatements[index]}
        </p>

        <div className="mt-10 flex justify-center gap-2">
          {manifestoStatements.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === index ? 32 : 8,
                backgroundColor: i === index ? "#ffd400" : "rgba(255,255,255,0.28)",
              }}
              aria-label={`Show statement ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
