import Image from "next/image";

import { heroSlides } from "@/data/home-content";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { PageIntro } from "./PageIntro";

type HeroSectionProps = {
  activeSlide: number;
  isNavbarVisible: boolean;
};

export function HeroSection({ activeSlide, isNavbarVisible }: HeroSectionProps) {
  return (
    <>
      <PageIntro />

      <section className="home-hero relative min-h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={`${slide.title}-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,34,74,0.82)_0%,rgba(5,34,74,0.45)_50%,rgba(0,0,0,0.18)_100%)]" />
          </div>
        ))}

        <SiteNavbar isNavbarVisible={isNavbarVisible} />

        <div className="relative z-10 flex min-h-screen items-end px-5 pb-14 pt-40 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <div className="hero-copy w-full max-w-[820px] text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#ffd400]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffd400]">
                Delhi Public School · SPR Gurugram
              </p>
            </div>

            <h1 className="text-[36px] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-[48px] lg:text-[58px]">
              Best CBSE School for <br className="hidden sm:block" />
              Nursery to Class 12 in Gurugram
            </h1>

            <p className="mt-5 max-w-[580px] text-[16px] font-normal leading-[1.8] text-white/80">
              Excellence in Academics, Sports, and Holistic Development — shaping
              confident, curious, and capable learners.
            </p>

            <div className="hero-actions mt-9 flex flex-wrap gap-3">
              <a
                href="#admissions"
                className="inline-flex items-center gap-2 rounded-lg bg-[#ffd400] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-[#05224a] transition duration-300 hover:bg-white"
              >
                Admissions 2026-27
              </a>
              <a
                href="#tour"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#05224a]"
              >
                Campus Tour
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-white/70 underline-offset-4 transition duration-300 hover:text-white hover:underline"
              >
                Apply Online
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/20 pt-8">
              {[["30+", "Years of Excellence"], ["6000+", "Students Enrolled"], ["CBSE", "Affiliated Board"]].map(
                ([num, label]) => (
                  <div key={label}>
                    <p className="text-[22px] font-bold text-white">{num}</p>
                    <p className="mt-0.5 text-[12px] font-normal uppercase tracking-[0.16em] text-white/60">
                      {label}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
