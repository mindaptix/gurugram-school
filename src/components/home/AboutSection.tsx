"use client";

import { useEffect, useRef, useState } from "react";

import { aboutCards } from "@/data/home-content";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`about-section relative isolate overflow-hidden bg-white px-5 py-16 text-[#003b73] sm:px-8 lg:px-[74px] lg:py-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      <div className="absolute bottom-0 left-0 h-2 w-[42%] bg-[#05b982]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,212,0,0.16),transparent_28%),radial-gradient(circle_at_86%_22%,rgba(5,185,130,0.14),transparent_30%)]" />
      <span className="about-floating-letter left-[4%] top-[15%] text-[#003b73]/[0.04]">D</span>
      <span className="about-floating-letter about-floating-letter-delay right-[8%] top-[24%] text-[#05b982]/[0.06]">P</span>
      <span className="about-floating-letter about-floating-letter-slow bottom-[10%] left-[48%] text-[#ffd400]/20">S</span>

      <div className="mx-auto max-w-[1440px]">
        <p className="about-eyebrow text-[16px] font-black uppercase leading-none tracking-[0.24em] text-[#003b73] max-sm:text-xs">
          About Our DPS School
        </p>
        <h2 className="sr-only">About Our DPS School</h2>

        <div className="about-copy mt-8 max-w-[1180px] text-[38px] font-medium leading-[1.2] tracking-normal text-[#111111] max-xl:text-4xl max-md:text-3xl">
          <span className="about-word about-word-left text-[#111111]">We carry the</span>{" "}
          <span className="about-shape about-hourglass bg-[#111111]" />{" "}
          <span className="about-word about-word-right text-[#111111]">
            legacy of excellence under
          </span>{" "}
          <span className="about-word about-word-left font-black text-[#ffd400]">
            Delhi Public School
          </span>
          ,{" "}
          <span className="about-word about-word-right text-[#111111]">shaping a</span>{" "}
          <span className="about-word about-word-left font-black text-[#a8f2c9]">
            Best CBSE school in Gurugram
          </span>{" "}
          <span className="about-word about-word-right text-[#111111]">
            for students from Nursery to Class 12. Our vision is holistic education
            where academics
          </span>{" "}
          <span className="about-shape about-circle bg-[#111111]" />{" "}
          <span className="about-word about-word-left text-[#111111]">
            personality development, values, discipline, and leadership grow together.
          </span>
        </div>

        <div className="about-grid mt-10 grid gap-4 lg:grid-cols-3">
          {aboutCards.map((card, index) => (
            <article
              key={card.title}
              className="about-card group relative overflow-hidden bg-[#f4f8fc] p-6 lg:p-7"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[#ffd400] transition duration-500 group-hover:scale-150" />
              <h3 className="relative text-xl font-black uppercase leading-tight tracking-[0.1em] text-[#003b73]">
                {card.title}
              </h3>
              <p className="relative mt-4 text-base font-semibold leading-7 text-[#425a73]">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
