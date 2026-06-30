"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import { schoolExperience } from "@/data/vision-content";
import { gsap, registerVisionGsap } from "@/lib/vision-gsap";

export function SchoolExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerVisionGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-exp-heading]",
        { y: 40, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 80%" },
        },
      );

      gsap.fromTo(
        ".vision-exp-image",
        { y: 70, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".vision-exp-image", start: "top 84%" },
        },
      );

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".vision-exp-timeline",
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1.2,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".vision-exp-step").forEach((step) => {
        gsap.fromTo(
          step,
          { x: -40, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-[74px] lg:py-32"
    >
      <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <div data-exp-heading>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
              06 - The Experience
            </p>
            <h2 className="vision-serif mt-4 text-[36px] font-semibold leading-[1.06] text-[#111111] sm:text-[50px]">
              {schoolExperience.title}
            </h2>
          </div>

          <div className="vision-exp-image relative mt-9 aspect-[4/5] overflow-hidden rounded-[8px] shadow-[0_30px_90px_rgba(27,59,34,0.15)] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={schoolExperience.image}
              alt="Students learning together in class"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 border-l-2 border-[#ffd400] pl-4 text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd400]">
                Everyday learning
              </p>
              <p className="mt-2 text-[15px] leading-6 text-white/88">
                The school experience should feel thoughtful, caring, and alive.
              </p>
            </div>
          </div>
        </div>

        <div className="vision-exp-timeline relative pl-0 sm:pl-4">
          <div
            ref={lineRef}
            className="absolute bottom-0 left-[19px] top-0 w-[2px] origin-top bg-gradient-to-b from-[#ffd400] via-[#006b37] to-[#006b37]/20 sm:left-[23px]"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {schoolExperience.items.map((item, index) => (
              <article key={item.text} className="vision-exp-step group relative flex gap-5 sm:gap-8">
                <div className="relative z-10 flex shrink-0 flex-col items-center">
                  <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#006b37] bg-white text-[12px] font-black text-[#006b37] shadow-[0_8px_24px_rgba(0,107,55,0.15)] transition duration-500 group-hover:scale-110 group-hover:bg-[#006b37] group-hover:text-[#ffd400] sm:h-12 sm:w-12">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="min-w-0 flex-1 rounded-[8px] border border-[#1b3b22]/8 bg-[#fffdf7] px-5 py-6 transition duration-500 group-hover:-translate-y-1 group-hover:border-[#006b37]/25 group-hover:shadow-[0_20px_50px_rgba(27,59,34,0.08)] sm:px-7 sm:py-7">
                  <p className="vision-serif text-[24px] font-medium leading-[1.2] text-[#111111] sm:text-[31px]">
                    {item.text}
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#566255]">{item.note}</p>
                  <span className="mt-5 block h-0.5 w-10 bg-[#ffd400] transition-all duration-500 group-hover:w-24" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
