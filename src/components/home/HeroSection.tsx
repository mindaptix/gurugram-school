"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  HERO_SLIDE_DURATION_MS,
  heroSlides,
  navLinks,
} from "@/data/home-content";
import { PageIntro } from "./PageIntro";

type HeroSectionProps = {
  activeSlide: number;
  isNavbarVisible: boolean;
  onSlideChange: (slide: number) => void;
};

const slideEase = [0.22, 1, 0.36, 1] as const;

export function HeroSection({
  activeSlide,
  isNavbarVisible,
  onSlideChange,
}: HeroSectionProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const previousSlide =
    (activeSlide - 1 + heroSlides.length) % heroSlides.length;
  const nextSlide = (activeSlide + 1) % heroSlides.length;
  const menuLinks = navLinks;
  const activeSlideData = heroSlides[activeSlide];

  return (
    <>
      <PageIntro />

      <section className="home-hero relative min-h-screen overflow-hidden bg-[#f4f6f2] p-2 sm:p-2.5 lg:p-3">
        <header
          className={`site-navbar absolute right-2 top-1.5 z-50 transition-transform duration-500 ease-out sm:right-3 sm:top-2 lg:right-4 lg:top-2.5 ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="flex h-[70px] w-[min(calc(100vw-24px),420px)] items-center justify-end gap-4 border border-white/40 bg-white/95 px-5 text-[#003b73] shadow-[0_18px_45px_rgba(5,34,74,0.12)] backdrop-blur-md sm:h-[88px] sm:gap-6 sm:px-8 lg:w-[420px]">
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
              Login
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

        <div className="grid min-h-[calc(100vh-16px)] gap-2 overflow-hidden sm:min-h-[calc(100vh-20px)] lg:min-h-[calc(100vh-24px)] lg:grid-cols-[minmax(0,1fr)_292px] xl:grid-cols-[minmax(0,1fr)_304px]">
          <div className="relative min-h-[72vh] overflow-hidden rounded-sm bg-[#09233f] lg:min-h-[calc(100vh-24px)]">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <motion.div
                  key={slide.image}
                  className="hero-slide-layer absolute inset-0 overflow-hidden"
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 1.04,
                  }}
                  transition={{
                    opacity: { duration: 1.35, ease: slideEase },
                    scale: { duration: 1.35, ease: slideEase },
                  }}
                  style={{ zIndex: isActive ? 10 : 0 }}
                  aria-hidden={!isActive}
                >
                  <motion.div
                    className="absolute inset-[-8%]"
                    initial={false}
                    animate={{ scale: isActive ? 1.12 : 1 }}
                    transition={{
                      duration: isActive ? HERO_SLIDE_DURATION_MS / 1000 : 0.4,
                      ease: isActive ? "linear" : slideEase,
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1280px) calc(100vw - 340px), (min-width: 1024px) calc(100vw - 320px), 100vw"
                      className="object-cover"
                      style={{ objectPosition: slide.position }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}

            <div
              className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(90deg,rgba(3,18,34,0.72)_0%,rgba(3,18,34,0.38)_42%,rgba(3,18,34,0.12)_78%),linear-gradient(180deg,rgba(4,20,38,0.15)_0%,rgba(4,20,38,0.05)_40%,rgba(4,20,38,0.82)_100%)]"
              aria-hidden="true"
            />
            <div
              className="hero-grain pointer-events-none absolute inset-0 z-20"
              aria-hidden="true"
            />

            <div className="relative z-30 flex min-h-[72vh] flex-col justify-between px-5 pb-8 pt-24 text-white sm:px-8 sm:pt-28 lg:min-h-[calc(100vh-24px)] lg:px-8 lg:py-8 xl:px-10">
              <a
                href="/"
                className="hero-chip relative -ml-6 -mt-5 block w-fit shrink-0 sm:-ml-7 sm:-mt-6 lg:-ml-9 lg:-mt-7"
              >
                <span className="inline-block w-fit leading-none rounded-sm bg-white p-1 shadow-[0_8px_24px_rgba(0,0,0,0.15)] sm:p-1.5">
                  <Image
                    src="/logo11.png"
                    alt="Delhi Public School SPR Gurugram logo"
                    width={620}
                    height={155}
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 240px"
                    className="block h-[52px] w-auto object-contain object-left sm:h-[60px] md:h-[66px] lg:h-[74px]"
                    priority
                  />
                </span>
              </a>

              <div className="grid gap-6 pb-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <div className="hero-copy max-w-[1040px]">
                  <p className="mb-2 inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.28em] text-[#ffd400] sm:mb-3 sm:text-[12px]">
                    <span className="h-px w-10 bg-[#ffd400]" />
                    Delhi Public School · SPR Gurugram
                  </p>

                  <h1 className="text-[32px] font-semibold leading-[0.94] tracking-[-0.02em] [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_28px_rgba(0,0,0,0.55)] sm:text-[44px] sm:leading-[0.92] md:text-[50px] lg:text-[56px] xl:text-[62px]">
                    <span className="block sm:whitespace-nowrap">Preparing Children for Life,</span>
                    <span className="mt-2 block sm:mt-3 sm:whitespace-nowrap">Not Just Exams</span>
                  </h1>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeSlideData.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.55, ease: slideEase }}
                      className="mt-3 max-w-[640px] text-[16px] font-medium leading-7 text-white/88 sm:mt-4 sm:text-[18px] sm:leading-8"
                    >
                      {activeSlideData.title}
                    </motion.p>
                  </AnimatePresence>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href="#admissions"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#ffd400] px-7 text-[12px] font-black uppercase tracking-[0.2em] text-[#003b73] transition hover:-translate-y-0.5 hover:bg-white sm:px-8"
                    >
                      Apply for Admission
                    </a>
                    <a
                      href="#tour"
                      className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/55 bg-white/10 px-7 text-[12px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 sm:px-8"
                    >
                      Download Prospectus
                    </a>
                  </div>

                  <div className="mt-8 flex items-center">
                    <div className="flex w-full max-w-[420px] items-center gap-2">
                      {heroSlides.map((slide, index) => (
                        <button
                          key={slide.image}
                          type="button"
                          onClick={() => onSlideChange(index)}
                          aria-label={`Go to slide ${index + 1}`}
                          className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/20"
                        >
                          {index < activeSlide ? (
                            <span className="absolute inset-0 bg-[#ffd400]" />
                          ) : null}
                          {index === activeSlide ? (
                            <span
                              key={`progress-${activeSlide}`}
                              className="hero-progress-fill absolute inset-0 bg-[#ffd400]"
                              style={{
                                animationDuration: `${HERO_SLIDE_DURATION_MS}ms`,
                              }}
                            />
                          ) : null}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hero-actions flex items-end gap-3 lg:pb-2">
                  <button
                    type="button"
                    onClick={() => onSlideChange(previousSlide)}
                    className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/10 text-4xl font-light leading-none text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#003b73] sm:h-16 sm:w-16"
                    aria-label="Previous hero slide"
                  >
                    <span aria-hidden="true">&lsaquo;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSlideChange(nextSlide)}
                    className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/10 text-4xl font-light leading-none text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#003b73] sm:h-16 sm:w-16"
                    aria-label="Next hero slide"
                  >
                    <span aria-hidden="true">&rsaquo;</span>
                  </button>
                </div>
              </div>
            </div>

            <a
              href="#academics"
              className="absolute bottom-6 left-[58%] z-30 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] font-black uppercase tracking-[0.28em] text-white/70 transition hover:text-white lg:flex"
            >
              Scroll
              <span className="hero-scroll-cue-line block h-10 w-px bg-white/70" />
            </a>
          </div>

          <aside className="hero-actions relative grid min-h-[420px] grid-rows-[1fr_1fr] gap-2 overflow-hidden pt-[calc(70px+8px)] sm:pt-[calc(88px+8px)] lg:min-h-[calc(100vh-24px)]">
            <a
              href="#tour"
              className="group relative isolate flex flex-col justify-between overflow-hidden bg-[#287734] p-7 text-white transition duration-500 hover:brightness-110 sm:p-9"
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
              className="group relative isolate flex flex-col justify-end overflow-hidden bg-[#22102f] p-7 text-white transition duration-500 hover:brightness-110 sm:p-9"
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
                  <a
                    href="#tour"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-3"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#ffc845] text-[#ffc845]">
                      !
                    </span>
                    Visit
                  </a>
                  <a
                    href="#apply"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center gap-3"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#ffc845] text-[#ffc845]">
                      +
                    </span>
                    Apply
                  </a>
                </div>

                <nav
                  className="grid w-full gap-4 text-[30px] font-black leading-none tracking-normal sm:text-[42px] lg:text-[50px]"
                  aria-label="Menu navigation"
                >
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
