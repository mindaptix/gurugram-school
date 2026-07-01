"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  HERO_SLIDE_DURATION_MS,
  heroAdmissionCard,
  heroSlides,
  navLinks,
} from "@/data/home-content";
import { PageIntro } from "./PageIntro";
import { VirtualTourCard } from "./VirtualTourCard";

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

      <section className="home-hero relative bg-[#f4f6f2] p-[var(--hero-pad)]">
        <header
          className={`site-navbar absolute right-2 top-1.5 z-50 transition-transform duration-500 ease-out sm:right-3 sm:top-2 lg:right-4 lg:top-2.5 ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="flex h-[54px] w-fit min-w-[min(100%,220px)] items-center justify-end gap-2 border border-white/45 bg-white/95 px-3 text-[#003b73] shadow-[0_14px_34px_rgba(5,34,74,0.13)] backdrop-blur-md sm:h-[62px] sm:min-w-[286px] sm:gap-4 sm:px-5">
            <a
              href="#admissions"
              className="hidden min-h-9 items-center gap-2.5 text-[12px] font-black uppercase tracking-[0.16em] text-[#003b73] transition hover:text-[#006b37] sm:inline-flex sm:text-[13px]"
            >
              <span className="relative h-5 w-5 rounded-full border-[2.5px] border-current before:absolute before:left-1/2 before:top-[3px] before:h-1.5 before:w-1.5 before:-translate-x-1/2 before:rounded-full before:bg-current after:absolute after:bottom-[2px] after:left-1/2 after:h-1.5 after:w-3.5 after:-translate-x-1/2 after:rounded-t-full after:border-x-[2.5px] after:border-t-[2.5px] after:border-current" />
              Login
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex min-h-9 items-center gap-2.5 border-l border-[#c9c9c9] pl-3 text-[12px] font-black uppercase tracking-[0.16em] text-[#003b73] transition hover:text-[#006b37] sm:pl-4 sm:text-[13px]"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span className="grid gap-1.5" aria-hidden="true">
                <span className="block h-[2px] w-6 bg-current" />
                <span className="block h-[2px] w-6 bg-current" />
                <span className="block h-[2px] w-6 bg-current" />
              </span>
              Menu
            </button>
          </div>
        </header>

        <div className="hero-layout grid gap-2 lg:items-stretch">
          <div className="hero-banner relative w-full lg:h-full lg:min-h-0">
            <div className="relative h-full min-h-[inherit] w-full overflow-hidden rounded-sm bg-[#d8e6f2]">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeSlide;

                return (
                  <motion.div
                    key={slide.image}
                    className="hero-slide-layer absolute inset-0 z-0 overflow-hidden"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      opacity: { duration: 0.9, ease: slideEase },
                    }}
                    style={{ zIndex: isActive ? 10 : 0 }}
                    aria-hidden={!isActive}
                  >
                  <motion.div
                    className="absolute inset-[-3%]"
                    initial={false}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{
                      scale: {
                        duration: isActive ? HERO_SLIDE_DURATION_MS / 1000 : 0.4,
                        ease: isActive ? "linear" : slideEase,
                      },
                    }}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.headline.join(" ")}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1280px) calc(100vw - 340px), (min-width: 1024px) calc(100vw - 320px), 100vw"
                      className="object-cover object-center"
                      style={{ objectPosition: slide.position }}
                    />
                  </motion.div>
                  </motion.div>
                );
              })}

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[58%] bg-gradient-to-t from-[#021428]/92 via-[#021428]/48 to-transparent"
                aria-hidden="true"
              />

              <div className="pointer-events-none absolute inset-0 z-30 flex flex-col justify-between">
              <Link
                href="/"
                className="hero-chip pointer-events-auto relative -ml-1 -mt-1 block w-fit shrink-0 sm:ml-0 sm:mt-0 lg:ml-2 lg:mt-1"
              >
                <span className="inline-block w-fit rounded-none bg-white p-1 leading-none shadow-[0_8px_24px_rgba(0,0,0,0.12)] sm:p-1.5">
                  <Image
                    src="/logo11.png"
                    alt="Delhi Public School SPR Gurugram logo"
                    width={620}
                    height={155}
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 280px, 240px"
                    className="hero-logo block w-auto object-contain object-left"
                    priority
                  />
                </span>
              </Link>

              <div className="pointer-events-none grid gap-3 pb-7 pl-3 pr-3 sm:gap-4 sm:pb-8 sm:pl-4 sm:pr-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-5 lg:pb-10 lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8">
                <div className="hero-copy pointer-events-auto min-w-0 max-w-[1040px]">
                  <p className="hero-eyebrow mb-2.5 inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-white px-3 py-1.5 font-black uppercase tracking-[0.22em] text-[#006b37] sm:mb-3 sm:gap-3 sm:px-3.5 sm:tracking-[0.28em]">
                    <span className="hidden h-px w-8 bg-[#006b37] sm:block sm:w-10" />
                    <span className="max-sm:text-[0.62rem] max-sm:tracking-[0.14em]">
                      Delhi Public School · SPR Gurugram
                    </span>
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={activeSlideData.headline.join("-")}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.55, ease: slideEase }}
                      className="hero-headline font-bold leading-[0.94] tracking-[-0.02em] text-white"
                    >
                      <span className="block lg:whitespace-nowrap">
                        {activeSlideData.headline[0]}
                      </span>
                      <span className="mt-1 block sm:mt-1.5 lg:whitespace-nowrap">
                        {activeSlideData.headline[1]}
                      </span>
                    </motion.h1>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeSlideData.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.55, ease: slideEase, delay: 0.05 }}
                      className="hero-subtitle mt-2.5 font-medium leading-snug text-white/90 sm:mt-3 lg:mt-4 lg:whitespace-nowrap"
                    >
                      {activeSlideData.title}
                    </motion.p>
                  </AnimatePresence>

                  <div className="mt-2.5 flex flex-wrap items-center gap-2.5 sm:mt-3 sm:gap-3">
                    <a
                      href="#admissions"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#ffd400] px-5 text-[11px] font-black uppercase tracking-[0.16em] text-[#003b73] shadow-[0_8px_24px_rgba(255,212,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#003b73] hover:text-white sm:min-h-[48px] sm:px-6 sm:text-[12px] sm:tracking-[0.18em] lg:min-h-[52px] lg:px-8"
                    >
                      Apply for Admission
                    </a>
                    <a
                      href="#tour"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-full border-2 border-[#003b73] bg-[#003b73] px-5 text-[11px] font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:border-[#006b37] hover:bg-[#006b37] sm:min-h-[48px] sm:px-6 sm:text-[12px] sm:tracking-[0.18em] lg:min-h-[52px] lg:px-8"
                    >
                      Download Prospectus
                    </a>
                  </div>

                  <div className="mt-3 flex w-full max-w-[420px] items-center gap-3 sm:mt-4 lg:max-w-none lg:translate-y-2.5 lg:pr-4 xl:translate-y-3">
                    <div className="flex min-w-0 flex-1 items-center gap-2">
                      {heroSlides.map((slide, index) => (
                        <button
                          key={slide.image}
                          type="button"
                          onClick={() => onSlideChange(index)}
                          aria-label={`Go to slide ${index + 1}`}
                          className="group relative h-[3px] min-w-0 flex-1 overflow-hidden rounded-full bg-white/25"
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

                    <div className="hero-actions pointer-events-auto flex shrink-0 items-center gap-2 lg:hidden">
                      <button
                        type="button"
                        onClick={() => onSlideChange(previousSlide)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/10 text-2xl font-light leading-none text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#003b73] sm:h-11 sm:w-11 sm:text-3xl"
                        aria-label="Previous hero slide"
                      >
                        <span aria-hidden="true">&lsaquo;</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onSlideChange(nextSlide)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/10 text-2xl font-light leading-none text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#003b73] sm:h-11 sm:w-11 sm:text-3xl"
                        aria-label="Next hero slide"
                      >
                        <span aria-hidden="true">&rsaquo;</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="hero-actions pointer-events-auto hidden translate-y-2.5 items-end gap-2 lg:flex sm:translate-y-3 lg:gap-2.5">
                  <button
                    type="button"
                    onClick={() => onSlideChange(previousSlide)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/55 bg-white/10 text-3xl font-light leading-none text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#003b73] sm:h-12 sm:w-12"
                    aria-label="Previous hero slide"
                  >
                    <span aria-hidden="true">&lsaquo;</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSlideChange(nextSlide)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/55 bg-white/10 text-3xl font-light leading-none text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-[#003b73] sm:h-12 sm:w-12"
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
          </div>

          <aside className="hero-aside relative grid h-full min-h-0 grid-cols-1 grid-rows-[minmax(0,1fr)_minmax(0,0.94fr)] gap-2.5 overflow-hidden md:grid-cols-2 md:grid-rows-1 lg:grid-cols-1 lg:grid-rows-[minmax(0,1fr)_minmax(0,0.94fr)] lg:h-full">
            <div className="min-h-0 overflow-hidden">
              <VirtualTourCard />
            </div>

            <a
              href="#admissions"
              className="group relative flex min-h-0 flex-col overflow-hidden rounded-sm border border-[#003b73]/10 bg-white p-3.5 pb-4 text-[#003b73] no-underline shadow-[0_12px_32px_rgba(5,34,74,0.08)] transition duration-300 hover:shadow-[0_16px_40px_rgba(5,34,74,0.12)] sm:p-4 sm:pb-5"
            >
              <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center py-1">
                <Image
                  src={heroAdmissionCard.image}
                  alt="Admissions Open"
                  width={520}
                  height={520}
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="hero-admission-badge h-auto w-[clamp(168px,78%,228px)] object-contain mix-blend-multiply"
                  draggable={false}
                />
              </div>

              <div className="relative z-10 mt-auto shrink-0 border-t border-[#003b73]/10 pt-3">
                <p className="pr-8 text-[clamp(0.8rem,2.6vw,0.92rem)] font-semibold leading-snug text-[#003b73] sm:pr-10">
                  Nursery to Grade XII · CBSE curriculum.
                </p>

                <div className="mt-3 flex items-center justify-between border-t border-[#003b73]/10 pt-3">
                  <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-[#006b37]">
                    DPS
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#003b73]/20 bg-[#003b73] text-xl leading-none text-white transition duration-500 group-hover:translate-x-0.5 group-hover:border-[#006b37] group-hover:bg-[#006b37] sm:h-11 sm:w-11 sm:text-2xl">
                    &rarr;
                  </span>
                </div>
              </div>
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
