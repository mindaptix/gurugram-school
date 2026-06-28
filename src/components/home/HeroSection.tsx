import Image from "next/image";

import { announcementItems, heroSlides, navLinks } from "@/data/home-content";
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
          </div>
        ))}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,18,34,0.76)_0%,rgba(2,18,34,0.42)_39%,rgba(2,18,34,0.12)_68%,rgba(2,18,34,0)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(0deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.36)_54%,rgba(0,0,0,0)_100%)]" />

        <header
          className={`site-navbar fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="h-7 overflow-hidden border-t-[3px] border-[#3a251f] bg-[#006b37] text-[#fff200]">
            <div className="flex h-full w-max animate-[ticker-scroll_30s_linear_infinite] items-center gap-14 whitespace-nowrap text-[13px] font-black uppercase leading-none tracking-normal md:text-[15px]">
              {[...announcementItems, ...announcementItems].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-5">
                  {item}
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[11px] leading-none text-[#006b37]">
                    *
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="border-b border-[#d2ccbb] bg-[#fffdf7] shadow-[0_2px_0_rgba(0,0,0,0.12)]">
            <div className="mx-auto flex min-h-[88px] max-w-[1900px] flex-wrap items-center justify-between gap-3 px-3 py-2 text-[#121827] sm:px-4 md:px-6 lg:flex-nowrap lg:gap-3 lg:px-8 lg:py-0">
              <a
                href="#"
                className="relative h-[64px] w-[220px] shrink-0 sm:h-[70px] sm:w-[280px] md:h-[74px] md:w-[320px] lg:h-[76px] lg:w-[330px] xl:w-[380px]"
              >
                <Image
                  src="/logo11.png"
                  alt="Delhi Public School SPR Gurugram logo"
                  fill
                  sizes="380px"
                  className="object-contain"
                  priority
                />
              </a>

              <nav
                className="hidden min-w-0 flex-1 items-center justify-center gap-1 xl:flex 2xl:gap-3"
                aria-label="Primary navigation"
              >
                {navLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="nav-link whitespace-nowrap px-1.5 py-1 text-[9.5px] font-black uppercase tracking-[0.12em] text-[#111827] transition hover:text-[#006b37] sm:text-[10px] lg:text-[10.24px]"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <a
                href="#tour"
                className="ml-auto inline-flex h-[36px] shrink-0 items-center justify-center rounded-full bg-[#1b3b22] px-3 text-[11px] font-black uppercase tracking-[0.1em] text-white shadow-[0_18px_38px_rgba(27,59,34,0.24)] transition hover:bg-[#006b37] sm:px-4 sm:text-[11.5px] lg:px-4 xl:px-5 2xl:px-6"
              >
                Schedule A Visit
              </a>
            </div>
          </div>

          <nav
            className="flex gap-2 overflow-x-auto border-b border-[#d7d2bf] bg-[#fffdf7] px-4 py-1.5 text-[#111827] shadow-xl shadow-[#03192e]/10 xl:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="shrink-0 rounded-full border border-[#ded8c5] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#006b37] hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </header>

        <div className="relative z-10 flex min-h-screen items-end px-5 pb-8 pt-40 sm:px-8 sm:pb-10 lg:px-14 lg:pb-12 lg:pt-44">
          <div className="grid w-full gap-8 xl:grid-cols-[minmax(0,1fr)_330px] xl:items-end">
            <div className="hero-copy max-w-[1060px] text-white [text-shadow:0_5px_28px_rgba(0,0,0,0.62)]">
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="hero-chip inline-flex items-center rounded-full border border-white/35 bg-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#fff7b0] backdrop-blur-md">
                  Admissions 2026-27
                </span>
                <span className="hero-chip hero-chip-delay inline-flex items-center rounded-full border border-white/35 bg-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Nursery to Grade XII
                </span>
              </div>
              <h1 className="max-w-[980px] text-5xl font-bold leading-[1.08] tracking-normal sm:text-6xl lg:text-[76px] 2xl:text-[82px]">
                <span className="block sm:whitespace-nowrap">Best DPS School for Nursery to</span>
                <span className="block">Class 12 in Gurugram</span>
              </h1>
              <p className="mt-6 max-w-3xl rounded-[22px] border border-white/18 bg-black/32 px-5 py-4 text-lg font-bold leading-8 text-white shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:text-2xl">
                Excellence in Academics, Sports, and Holistic Development
              </p>
            </div>

            <div className="hero-actions grid translate-y-6 gap-3 sm:max-w-[420px] xl:ml-auto xl:w-full xl:translate-y-12">
              <a
                href="#admissions"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#f6c343] px-6 text-sm font-black uppercase tracking-[0.1em] text-[#061a33] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Admissions 2026-27
              </a>
              <a
                href="#tour"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/50 bg-white/12 px-6 text-sm font-black uppercase tracking-[0.1em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#061a33]"
              >
                Campus Tour
              </a>
              <a
                href="#apply"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-6 text-sm font-black uppercase tracking-[0.1em] text-[#003b73] transition duration-300 hover:-translate-y-1 hover:bg-[#eaf2ff]"
              >
                Apply Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
