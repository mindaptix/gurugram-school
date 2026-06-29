"use client";

import { useEffect, useRef, useState } from "react";

import { trustPoints } from "@/data/home-content";

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function TrustSection() {
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

  const activeIndex = clamp(Math.round(progress * (trustPoints.length - 1)), 0, trustPoints.length - 1);
  const activePoint = trustPoints[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="trust-section relative isolate min-h-[240vh] overflow-visible bg-white text-[#003b73] max-xl:min-h-0"
    >
      <div className="sticky top-0 min-h-screen overflow-hidden px-5 py-12 sm:px-8 lg:px-[18px] xl:flex xl:items-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(255,212,0,0.18),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(5,185,130,0.14),transparent_26%),linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]" />
        <div className="trust-pulse-ring pointer-events-none absolute right-[9%] top-[14%] hidden h-56 w-56 rounded-full border border-[#096ce8]/15 xl:block" />
        <div className="trust-scan pointer-events-none absolute inset-x-0 top-[52%] h-px bg-gradient-to-r from-transparent via-[#05b982]/50 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-[1780px] gap-8 xl:grid-cols-[0.62fr_1.12fr_0.5fr] xl:items-center">
          <div
            className="trust-heading mx-auto max-w-[620px] text-center xl:mx-0 xl:text-left"
            style={{
              transform: `translateY(${22 - progress * 22}px)`,
            }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-[#05b982]/25 bg-white px-4 py-2 text-[12px] font-black uppercase tracking-[0.22em] text-[#006b37] shadow-[0_16px_42px_rgba(0,59,115,0.08)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#05b982]" />
              DPS At A Glance
            </span>
            <h2 className="mt-6 text-[58px] font-bold leading-[0.98] tracking-normal text-[#111111] max-xl:text-5xl max-md:text-4xl">
              Why Parents Trust Our DPS School
            </h2>
            <p className="mt-5 text-lg font-semibold leading-8 text-[#526a7f]">
              Each trust point opens like a chapter while families move through the
              section, making the school strengths easier to scan and remember.
            </p>
            <div className="mt-8 overflow-hidden rounded-full bg-[#003b73]/10">
              <div
                className="h-2.5 rounded-full bg-[#ffd400] transition-[width] duration-300 ease-out"
                style={{ width: `${Math.max(8, progress * 100)}%` }}
              />
            </div>
          </div>

          <div className="trust-stage relative mx-auto min-h-[670px] w-full max-w-[780px] max-xl:min-h-[560px]">
            <div
              className="trust-photo absolute inset-0 overflow-hidden rounded-[38px] shadow-[0_40px_120px_rgba(5,34,74,0.18)]"
              style={{
                transform: `translateY(${progress * 24}px) scale(${1 - progress * 0.025})`,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1500&q=85)",
                  transform: `scale(${1.06 + progress * 0.06}) translateY(${-progress * 18}px)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041f3b]/72 via-[#041f3b]/20 to-transparent" />
            </div>

            {trustPoints.map((point, index) => {
              const localProgress = progress * (trustPoints.length - 1) - index;
              const distance = Math.abs(localProgress);
              const isActive = distance < 0.55;
              const x = clamp((index - progress * (trustPoints.length - 1)) * 48, -92, 92);
              const y = clamp(distance * 34, 0, 92);
              const rotate = clamp((index - progress * (trustPoints.length - 1)) * 3.4, -8, 8);
              const scale = isActive ? 1 : 0.84;
              const opacity = clamp(1.12 - distance * 0.38, 0, 1);

              return (
                <article
                  key={point.title}
                  className={`trust-card absolute bottom-10 left-1/2 min-h-[430px] w-[92%] max-w-[570px] -translate-x-1/2 overflow-hidden rounded-[34px] p-9 shadow-[0_34px_110px_rgba(0,0,0,0.24)] max-xl:relative max-xl:left-auto max-xl:mt-5 max-xl:min-h-[360px] max-xl:w-full max-xl:max-w-none max-xl:!transform-none max-md:p-7 ${point.color} ${point.text}`}
                  style={{
                    opacity,
                    transform: `translate3d(calc(-50% + ${x}px), ${y}px, 0) rotate(${rotate}deg) scale(${scale})`,
                    zIndex: trustPoints.length - Math.round(distance * 10),
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/10" />
                  <div className="absolute right-5 top-5 h-28 w-28 opacity-95 max-md:h-20 max-md:w-20">
                    <div className={`absolute right-0 top-0 h-14 w-14 rotate-45 rounded-[18px] max-md:h-10 max-md:w-10 ${point.accent}`} />
                    <div className={`absolute left-0 top-0 h-14 w-14 rotate-45 rounded-[18px] max-md:h-10 max-md:w-10 ${point.accent}`} />
                    <div className={`absolute bottom-0 right-0 h-14 w-14 rotate-45 rounded-[18px] max-md:h-10 max-md:w-10 ${point.accent}`} />
                    <div className={`absolute bottom-0 left-0 h-14 w-14 rotate-45 rounded-[18px] max-md:h-10 max-md:w-10 ${point.accent}`} />
                  </div>

                  <div className="relative flex min-h-[350px] flex-col justify-end max-xl:min-h-[286px]">
                    <p className="text-[13px] font-black uppercase tracking-[0.24em] opacity-75 max-md:text-xs">
                      Trust Factor {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="trust-icon mt-9 text-[86px] font-light leading-none tracking-normal max-md:text-[68px]">
                      {point.icon}
                    </div>
                    <h3 className="mt-5 max-w-[420px] text-[36px] font-black leading-[1.04] tracking-normal max-md:text-[28px]">
                      {point.title}
                    </h3>
                    <div className="mt-8 h-1.5 w-28 rounded-full bg-white/45" />
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="relative z-10 hidden rounded-[28px] border border-[#dce8ef] bg-white/78 p-4 shadow-[0_26px_80px_rgba(5,34,74,0.12)] backdrop-blur xl:block">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#096ce8]">
              Currently Highlighting
            </p>
            <h3 className="mt-4 text-2xl font-black leading-tight text-[#05224a]">
              {activePoint.title}
            </h3>
            <div className="mt-5 grid gap-2">
              {trustPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition duration-300 ${
                    activeIndex === index
                      ? "bg-[#05224a] text-white"
                      : "bg-[#f4f8fb] text-[#526a7f]"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-black ${
                      activeIndex === index
                        ? "bg-[#ffd400] text-[#05224a]"
                        : "bg-white text-[#05224a]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="text-[13px] font-black leading-tight">{point.title}</span>
                </div>
              ))}
            </div>
            <a
              href="#apply"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#ffd400] px-5 text-xs font-black uppercase tracking-[0.16em] text-[#05224a] transition hover:-translate-y-1 hover:bg-[#05224a] hover:text-white"
            >
              Discover More Facts
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
