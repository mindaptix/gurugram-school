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

        <header
          className={`site-navbar fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
            isNavbarVisible ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <div className="h-7 overflow-hidden border-t-[3px] border-[#192F59] bg-[#192F59] text-white">
            <div className="flex h-full w-max animate-[ticker-scroll_30s_linear_infinite] items-center gap-14 whitespace-nowrap text-[12px] font-medium leading-none tracking-[0.02em] md:text-[13px]">
              {[...announcementItems, ...announcementItems].map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-2.5">
                  {item}
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[#192F59]">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 12 12"
                      className="h-2.5 w-2.5"
                    >
                      <path
                        d="M6 1.2 7.25 4.75 10.8 6 7.25 7.25 6 10.8 4.75 7.25 1.2 6l3.55-1.25L6 1.2Z"
                        fill="currentColor"
                      />
                    </svg>
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
            className="flex gap-2 overflow-x-auto border-b border-[#192F59] bg-[#192F59] px-4 py-1.5 text-white shadow-xl shadow-[#03192e]/10 xl:hidden"
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
            <div className="hero-copy max-w-[1060px] text-white">
              <h1 className="max-w-[980px] text-[32px] font-bold leading-[1.08] tracking-normal sm:text-[42px] lg:text-[54px]">
                <span className="block sm:whitespace-nowrap">Best DPS School for Nursery to</span>
                <span className="block">Class 12 in Gurugram</span>
              </h1>
              <p className="mt-6 max-w-3xl rounded-[22px] border border-white/18 bg-black/32 px-5 py-4 text-lg font-bold leading-8 text-white shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:text-2xl">
                Excellence in Academics, Sports, and Holistic Development
              </p>
            </div>

            <div className="hero-actions grid -translate-y-2 gap-3 sm:max-w-[420px] xl:ml-auto xl:w-full xl:-translate-y-10">
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
