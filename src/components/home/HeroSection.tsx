"use client";

import Image from "next/image";
import { useState } from "react";

import { heroSlides, navLinks } from "@/data/home-content";
import { PageIntro } from "./PageIntro";

type HeroSectionProps = {
  activeSlide: number;
  isNavbarVisible: boolean;
  onSlideChange: (slide: number) => void;
};

export function HeroSection({
  activeSlide,
  isNavbarVisible,
  onSlideChange,
}: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const previousSlide = (activeSlide - 1 + heroSlides.length) % heroSlides.length;
  const nextSlide = (activeSlide + 1) % heroSlides.length;
  const menuLinks = navLinks;

  return (
    <>
      <PageIntro />

      <section className="home-hero relative min-h-screen overflow-hidden bg-[#f4f6f2] p-3 sm:p-4 lg:p-5">
        <header
          className={`site-navbar absolute right-3 top-3 z-50 transition-transform duration-500 ease-out sm:right-4 sm:top-4 lg:right-5 lg:top-5 ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="flex h-[70px] w-[min(calc(100vw-24px),420px)] items-center justify-end gap-4 bg-white px-5 text-[#003b73] shadow-[0_18px_45px_rgba(5,34,74,0.1)] sm:h-[88px] sm:gap-6 sm:px-8 lg:w-[420px]">
            <a
              href="#gallery"
              aria-label="Search"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f4f7fb] transition hover:bg-[#e9f0f7] sm:h-12 sm:w-12"
            >
              <span className="relative block h-5 w-5 rounded-full border-[3px] border-[#003b73] after:absolute after:-bottom-1.5 after:-right-1 after:h-2.5 after:w-[3px] after:rotate-[-45deg] after:rounded-full after:bg-[#003b73]" />
            </a>

            <a
              href="#admissions"
              className="hidden min-h-10 items-center gap-3 border-l border-[#b9b9b9] pl-5 text-[14px] font-black uppercase tracking-[0.18em] text-[#003b73] sm:inline-flex"
            >
              <span className="relative h-6 w-6 rounded-full border-[3px] border-[#003b73] before:absolute before:left-1/2 before:top-[3px] before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-[#003b73] after:absolute after:bottom-[2px] after:left-1/2 after:h-2 after:w-4 after:-translate-x-1/2 after:rounded-t-full after:border-x-[3px] after:border-t-[3px] after:border-[#003b73]" />
              My DPS
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex min-h-10 items-center gap-3 border-l border-[#b9b9b9] pl-5 text-[14px] font-black uppercase tracking-[0.18em] text-[#003b73]"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span className="grid gap-1.5">
                <span className="block h-[2px] w-7 bg-[#003b73]" />
                <span className="block h-[2px] w-7 bg-[#003b73]" />
                <span className="block h-[2px] w-7 bg-[#003b73]" />
              </span>
              Menu
            </button>
          </div>
        </header>

        <div className="grid min-h-[calc(100vh-24px)] gap-3 overflow-hidden lg:min-h-[calc(100vh-40px)] lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="relative min-h-[72vh] overflow-hidden bg-[#09233f] lg:min-h-[calc(100vh-40px)]">
            {heroSlides.map((slide, index) => (
              <div
                key={`${slide.title}-${index}`}
                className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                  index === activeSlide ? "z-10 opacity-100" : "z-0 opacity-0"
                }`}
                aria-hidden={index !== activeSlide}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1280px) calc(100vw - 400px), (min-width: 1024px) calc(100vw - 380px), 100vw"
                  className="object-cover transition-transform duration-[1800ms] ease-out"
                  style={{ objectPosition: slide.position }}
                />
              </div>
            ))}

            <div
              className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(3,18,34,0.54)_0%,rgba(3,18,34,0.28)_36%,rgba(3,18,34,0.08)_72%),linear-gradient(180deg,rgba(4,20,38,0.28)_0%,rgba(4,20,38,0.1)_36%,rgba(4,20,38,0.72)_100%)]"
              aria-hidden="true"
            />

            <div className="relative z-30 flex min-h-[72vh] flex-col justify-between px-5 pb-6 pt-24 text-white sm:px-8 sm:pt-28 lg:min-h-[calc(100vh-40px)] lg:px-8 lg:py-6 xl:px-10">
              <a href="#" className="flex w-fit max-w-[300px] items-center">
                <span className="relative block h-[78px] w-[210px] shrink-0 bg-white p-3 shadow-[0_18px_45px_rgba(0,0,0,0.18)] sm:h-[92px] sm:w-[250px]">
                  <Image
                    src="/logo11.png"
                    alt="Delhi Public School SPR Gurugram logo"
                    fill
                    sizes="250px"
                    className="object-contain p-3"
                    priority
                  />
                </span>
              </a>

              <div className="grid gap-5 pb-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div className="hero-copy max-w-[1040px] [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.55)]">
                  <h1 className="text-[42px] font-semibold leading-[1.08] tracking-normal sm:text-[62px] lg:text-[76px] xl:text-[86px]">
                    Leaders in Inclusive
                    <span className="block">Academic Excellence</span>
                  </h1>
                </div>

                <div className="hero-actions flex gap-3 lg:pb-6">
                  <button
                    type="button"
                    onClick={() => onSlideChange(previousSlide)}
                    className="grid h-14 w-14 place-items-center rounded-full border border-white/75 bg-white/5 text-4xl font-light leading-none text-white transition hover:bg-white hover:text-[#003b73] sm:h-16 sm:w-16"
                    aria-label="Previous hero slide"
                  >
                    <span aria-hidden="true">&lsaquo;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSlideChange(nextSlide)}
                    className="grid h-14 w-14 place-items-center rounded-full border border-white/75 bg-white/5 text-4xl font-light leading-none text-white transition hover:bg-white hover:text-[#003b73] sm:h-16 sm:w-16"
                    aria-label="Next hero slide"
                  >
                    <span aria-hidden="true">&rsaquo;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <aside className="hero-actions relative grid min-h-[420px] grid-rows-[1fr_1fr] gap-3 overflow-hidden pt-[calc(70px+12px)] sm:pt-[calc(88px+12px)] lg:min-h-[calc(100vh-40px)]">
            <a
              href="#tour"
              className="group relative isolate flex flex-col justify-between overflow-hidden bg-[#0644ef] p-7 text-white sm:p-9"
            >
              <span className="absolute right-0 top-0 flex h-44 items-start gap-0 transition duration-700 group-hover:translate-x-2">
                <span className="h-0 w-0 border-y-[86px] border-l-[86px] border-y-transparent border-l-[#ffc84a] sm:border-y-[96px] sm:border-l-[96px]" />
                <span className="h-0 w-0 border-y-[86px] border-l-[86px] border-y-transparent border-l-[#ffc84a] sm:border-y-[96px] sm:border-l-[96px]" />
              </span>
              <span />
              <span className="relative flex items-center justify-between gap-4 text-[26px] font-semibold leading-[1.12] tracking-normal sm:text-[30px]">
                Virtual
                <br />
                Campus Tour
                <span className="text-6xl font-light leading-none transition group-hover:translate-x-2">
                  &rarr;
                </span>
              </span>
            </a>

            <a
              href="#admissions"
              className="group relative isolate flex flex-col justify-end overflow-hidden bg-[#8518d8] p-7 text-white sm:p-9"
            >
              <span className="absolute -right-7 top-0 grid h-[196px] w-[196px] grid-cols-2 grid-rows-2 transition duration-700 group-hover:rotate-6 sm:h-[220px] sm:w-[220px]">
                <span className="rounded-br-full bg-[#f566aa]" />
                <span className="rounded-bl-full bg-[#f566aa]" />
                <span className="rounded-tr-full bg-[#f566aa]" />
                <span className="rounded-tl-full bg-[#f566aa]" />
              </span>
              <span className="relative flex items-center justify-between gap-4 text-[26px] font-semibold leading-[1.1] tracking-normal sm:text-[30px]">
                Admissions
                <br />
                Open
                <span className="text-6xl font-light leading-none transition group-hover:translate-x-2">
                  &rarr;
                </span>
              </span>
            </a>
          </aside>
        </div>

        {isMenuOpen ? (
          <div
            className="fixed inset-0 z-[80] bg-[#003b73] p-4 text-white sm:p-5"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="relative min-h-[calc(100vh-32px)] overflow-hidden bg-[#003b73] sm:min-h-[calc(100vh-40px)]">
              <div className="pointer-events-none absolute -left-16 -top-10 grid grid-cols-2 gap-0 opacity-100 sm:-left-12 sm:-top-8">
                {[0, 1, 2, 3].map((item) => (
                  <span
                    key={item}
                    className="h-[100px] w-[100px] rounded-full bg-[#06b778] sm:h-[130px] sm:w-[130px] xl:h-[150px] xl:w-[150px]"
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="absolute right-0 top-0 z-20 inline-flex h-24 items-center gap-4 bg-white px-8 text-[14px] font-black uppercase tracking-[0.22em] text-[#003b73] transition hover:bg-[#f4f7fb] sm:h-28 sm:px-10"
                aria-label="Close menu"
              >
                <span className="relative h-7 w-7 before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-7 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-[#003b73] after:absolute after:left-1/2 after:top-1/2 after:h-[2px] after:w-7 after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:bg-[#003b73]" />
                Close
              </button>

              <div className="relative z-10 ml-auto mr-[10vw] flex min-h-[calc(100vh-32px)] max-w-[980px] flex-col items-end justify-center px-5 py-28 text-right sm:min-h-[calc(100vh-40px)] sm:px-8 lg:mr-[18vw] lg:px-12 xl:mr-[22vw]">
                <div className="mb-10 flex flex-wrap justify-end gap-8 text-[13px] font-black uppercase tracking-[0.22em] text-white">
                  <a href="#tour" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#ffc845] text-[#ffc845]">
                      !
                    </span>
                    Visit
                  </a>
                  <a href="#apply" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#ffc845] text-[#ffc845]">
                      +
                    </span>
                    Apply
                  </a>
                </div>

                <nav className="grid w-full gap-4 text-[30px] font-black leading-none tracking-normal sm:text-[42px] lg:text-[50px]" aria-label="Menu navigation">
                  {menuLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="ml-auto w-fit transition hover:-translate-x-3 hover:text-[#ffc845]"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
