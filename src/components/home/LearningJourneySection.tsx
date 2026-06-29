"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import { academicPrograms, programCardThemes } from "@/data/home-content";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function ProgramAccent({ index }: { index: number }) {
  const theme = programCardThemes[index];

  return (
    <div className="program-accent absolute right-4 top-4 z-[1] h-28 w-28 opacity-100 transition-all duration-700 ease-out">
      {theme.accentShape === "petal" && (
        <>
          <div className={`absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-t-full ${theme.accent}`} />
          <div className={`absolute bottom-0 left-1/2 h-14 w-14 -translate-x-1/2 rounded-b-full ${theme.accent}`} />
          <div className={`absolute left-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-l-full ${theme.accent}`} />
          <div className={`absolute right-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-r-full ${theme.accent}`} />
        </>
      )}
      {theme.accentShape === "diamond" && (
        <>
          <div className={`absolute left-1 top-1 h-12 w-12 rotate-45 rounded-[12px] ${theme.accent}`} />
          <div className={`absolute right-1 top-1 h-12 w-12 rotate-45 rounded-[12px] ${theme.accent}`} />
          <div className={`absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[12px] ${theme.accent}`} />
          <div className={`absolute bottom-1 left-1/2 h-12 w-12 -translate-x-1/2 rotate-45 rounded-[12px] ${theme.accent}`} />
        </>
      )}
      {theme.accentShape === "spark" && (
        <>
          <div className={`absolute left-1/2 top-0 h-28 w-10 -translate-x-1/2 rounded-full ${theme.accent}`} />
          <div className={`absolute left-0 top-1/2 h-10 w-28 -translate-y-1/2 rounded-full ${theme.accent}`} />
          <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
        </>
      )}
      {theme.accentShape === "arc" && (
        <>
          <div className={`absolute right-0 top-0 h-28 w-28 rounded-bl-[92px] ${theme.accent}`} />
          <div className="absolute right-[26px] top-[26px] h-12 w-12 rounded-full bg-white/18" />
        </>
      )}
    </div>
  );
}

export function LearningJourneySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const nextProgress = scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;

      setProgress(nextProgress);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const activeIndex = clamp(Math.round(progress * (academicPrograms.length - 1)), 0, academicPrograms.length - 1);

  return (
    <section
      ref={sectionRef}
      id="academics"
      className="learning-journey-section relative isolate min-h-[230vh] overflow-visible bg-[#096ce8] text-[#003b73] max-xl:min-h-0"
      style={{ "--learning-progress": progress } as CSSProperties}
    >
      <div className="sticky top-0 min-h-screen overflow-hidden px-5 pb-14 pt-10 sm:px-8 lg:px-[74px] xl:flex xl:items-center">
        <div className="absolute inset-x-0 top-0 h-[34%] bg-white max-xl:h-[250px] max-lg:h-[290px] max-md:h-[235px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_72%,rgba(255,212,0,0.25),transparent_30%),radial-gradient(circle_at_88%_66%,rgba(5,185,130,0.24),transparent_28%)]" />
        <div className="learning-scan-line pointer-events-none absolute left-0 top-[34%] h-px w-full bg-gradient-to-r from-transparent via-[#ffd400]/70 to-transparent" />
        <div className="learning-orbital pointer-events-none absolute -right-28 bottom-16 hidden h-[360px] w-[360px] rounded-full border border-white/20 xl:block" />
        <div className="pointer-events-none absolute bottom-0 left-0 hidden h-[42%] w-[42%] bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.18),transparent_58%)] xl:block" />

        <div className="mx-auto grid w-full max-w-[1920px] gap-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-center">
          <div
            className="program-heading relative z-10 mx-auto max-w-[620px] text-center xl:mx-0 xl:text-left"
            style={{
              opacity: 1,
              transform: `translateY(${24 - progress * 24}px) scale(${0.94 + progress * 0.06})`,
            }}
          >
            <p className="text-[18px] font-black uppercase leading-none tracking-[0.26em] text-[#05b982] max-sm:text-[12px]">
              From Preschool To Grade 12
            </p>
            <h2 className="mt-7 text-[72px] font-black leading-none tracking-normal text-[#111111] max-xl:text-6xl max-md:text-4xl">
              Our Learning Journey
            </h2>
            <div className="mt-8 hidden max-w-[430px] rounded-[22px] border border-white/45 bg-white/58 p-4 shadow-[0_22px_70px_rgba(0,59,115,0.11)] backdrop-blur xl:block">
              <div className="mb-3 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.18em] text-[#003b73]">
                <span>Journey Progress</span>
                <span>{Math.round(progress * 100)}%</span>
              </div>
              <div className="overflow-hidden rounded-full bg-[#003b73]/12">
                <div
                  className="h-2.5 rounded-full bg-[#ffd400] transition-[width] duration-300 ease-out"
                  style={{ width: `${Math.max(8, progress * 100)}%` }}
                />
              </div>
            </div>
            <div className="mt-5 hidden gap-2.5 xl:grid">
              {academicPrograms.map((program, index) => (
                <div
                  key={program.title}
                  className={`flex items-center gap-3 rounded-[18px] border px-4 py-3 text-[12px] font-black uppercase tracking-[0.13em] shadow-sm transition duration-500 ${
                    activeIndex === index
                      ? "border-[#ffd400] bg-[#ffd400] text-[#05224a] shadow-[0_16px_40px_rgba(255,212,0,0.22)]"
                      : "border-white/20 bg-white/12 text-white/78"
                  }`}
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#05224a] text-xs text-white">
                    {index + 1}
                  </span>
                  <span>{program.classes}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 hidden items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/70 xl:flex">
              <span className="h-px w-10 bg-white/35" />
              Scroll to explore the journey
            </div>
          </div>

          <div className="program-grid relative z-10 min-h-[560px] max-xl:grid max-xl:min-h-0 max-xl:gap-2 md:max-xl:grid-cols-2 xl:h-[640px]">
            {academicPrograms.map((program, index) => {
              const localProgress = progress * (academicPrograms.length - 1) - index;
              const distance = Math.abs(localProgress);
              const isActive = distance < 0.58;
              const x = clamp((index - progress * (academicPrograms.length - 1)) * 58, -88, 118);
              const y = clamp(distance * 34, 0, 80);
              const rotate = clamp((index - progress * (academicPrograms.length - 1)) * -5, -10, 10);
              const scale = isActive ? 1 : 0.9;
              const opacity = clamp(1.08 - distance * 0.34, 0.34, 1);

              return (
                <article
                  key={program.title}
                  className={`program-card group relative min-h-[500px] overflow-hidden text-white transition duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(5,34,74,0.18)] max-xl:!translate-x-0 max-xl:!translate-y-0 max-xl:!rotate-0 max-xl:!scale-100 xl:absolute xl:inset-y-0 xl:right-0 xl:w-[76%] ${programCardThemes[index].shell}`}
                  style={{
                    opacity,
                    transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
                    zIndex: academicPrograms.length - Math.round(distance * 10),
                  }}
                >
                  <div
                    className="program-card-image absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  <div className={`absolute inset-0 transition duration-700 ease-out group-hover:opacity-20 ${programCardThemes[index].imageOverlay}`} />
                  <ProgramAccent index={index} />
                  <div className={`absolute inset-x-0 bottom-0 h-[38%] transition-all duration-700 ease-out ${programCardThemes[index].bottom} ${programCardThemes[index].bottomHeight}`} />

                  <div className="relative flex h-full min-h-[500px] flex-col justify-end px-[38px] pb-[34px]">
                    <h3 className={`max-w-[300px] whitespace-nowrap text-[24px] font-medium leading-[1.18] tracking-normal transition duration-700 max-lg:max-w-full max-lg:whitespace-normal ${programCardThemes[index].bottomText}`}>
                      {program.title}
                    </h3>
                    <div className="mt-5 flex items-center justify-between gap-6">
                      <p className={`whitespace-nowrap text-[12px] font-normal uppercase leading-none tracking-[0.16em] transition duration-700 ${programCardThemes[index].label}`}>
                        {program.classes}
                      </p>
                      <a
                        href="#apply"
                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center text-[42px] font-light leading-none transition duration-700 group-hover:translate-x-2 ${programCardThemes[index].arrow}`}
                        aria-label={`Explore ${program.title}`}
                      >
                        &#8594;
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
