"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AboutSection } from "@/components/home/AboutSection";
import { AdmissionCtaCard } from "@/components/home/AdmissionCtaCard";
import { CampusTourVideo } from "@/components/home/CampusTourVideo";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FoundationSection } from "@/components/home/FoundationSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningJourneySection } from "@/components/home/LearningJourneySection";
import { TrustSection } from "@/components/home/TrustSection";
import {
  // galleryItems,
  heroSlides,
  infrastructureItems,
} from "@/data/home-content";
import { useNavbarVisibility } from "@/hooks/use-navbar-visibility";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeInfrastructure, setActiveInfrastructure] = useState(2);
  const isNavbarVisible = useNavbarVisibility();

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#06264a]">
      <HeroSection
        activeSlide={activeSlide}
        isNavbarVisible={isNavbarVisible}
        onSlideChange={setActiveSlide}
      />

      <AboutSection />

      <LearningJourneySection />

      <TrustSection />

      <FoundationSection />

      <AdmissionCtaCard />

        <section
          id="infrastructure"
          className="infrastructure-section relative isolate overflow-hidden bg-white pb-14 pt-0 text-white"
        >
          <div id="learning-at-dps-section" className="infra-story relative z-0 mx-auto max-w-[1720px] px-5 pb-0 sm:px-8 lg:px-14">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
              <div className="relative min-w-0 pt-2">
                <div className="infra-learning-at relative z-30 w-fit rounded-[16px] bg-[#ffd400] px-4 py-2 text-[54px] font-normal leading-none tracking-normal text-[#111111] max-lg:text-[42px] max-md:text-[34px]">
                  Learning at
                </div>
                 <div className="infra-dps-word relative z-[8] mt-2 text-[176px] font-black leading-[0.92] tracking-[-0.05em] text-[#003b73] max-xl:text-[144px] max-lg:mt-1 max-lg:text-[118px] max-md:text-[88px]">
                  DPS
                </div>
              </div>

            <div className="infra-story-copy relative z-30 lg:pt-2">
              <p className="max-w-[630px] text-[18px] font-medium leading-9 text-[#111111] max-lg:max-w-none max-lg:text-[16px] max-lg:leading-8">
                Every child learns differently and our aim is to provide
                students with the opportunities, experiences, and pathways that
                best suit their abilities, interests, and aspirations.
              </p>
            </div>
          </div>
        </div>

            <div className="infra-accordion relative z-20 -mt-2 flex h-[500px] w-full gap-1 overflow-hidden border-y-[4px] border-white bg-white max-lg:mt-0 max-lg:h-auto max-lg:flex-col lg:-mt-[7.5rem] xl:-mt-32">
          {infrastructureItems.map((item, index) => {
            const isActive = activeInfrastructure === index;

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActiveInfrastructure(index)}
                onFocus={() => setActiveInfrastructure(index)}
                tabIndex={0}
                className={`infra-card group relative min-w-0 cursor-pointer overflow-hidden outline-none transition-[flex,filter] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:min-h-[360px] ${
                  isActive ? "flex-[2.7]" : "flex-[0.82]"
                }`}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-[#071d34]/38 transition-colors duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-[#071d34]/20" />
                <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/78 via-black/42 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-5 lg:p-6">
                  <h3
                    className={`max-w-[520px] break-words font-black leading-[1.12] tracking-normal transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] max-lg:text-3xl ${
                        isActive
                          ? "text-[34px] max-xl:text-[30px] max-lg:text-3xl"
                          : "text-[20px] max-xl:text-[18px] max-lg:text-3xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div
                    className={`mt-4 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0 max-lg:translate-y-0 max-lg:opacity-100"
                    }`}
                  >
                    <p className="max-w-[560px] text-[16px] font-semibold leading-7 text-white/88">
                      {item.detail}
                    </p>
                    <div className="mt-5 flex items-center gap-5">
                      <span className="h-1.5 w-16 bg-[#ffd400]" />
                      <span className="grid h-16 w-16 place-items-center rounded-full bg-[#003b73] text-[42px] font-light leading-none text-white transition group-hover:rotate-90">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </section>

        <section
          id="tour"
          className="drone-tour-section relative isolate overflow-hidden bg-white px-0 py-0 text-[#05224a]"
        >
          <div className="mx-auto max-w-none">
            <div className="drone-tour-layout grid lg:grid-cols-[0.98fr_1.02fr] lg:items-stretch">
              <div className="drone-tour-left relative flex h-full bg-white">
                <div className="drone-tour-video-stack flex h-full w-full flex-col">
                  <div className="drone-tour-video-shell relative h-[360px] overflow-hidden bg-[#05224a] shadow-[0_24px_70px_rgba(5,34,74,0.12)] transition-all duration-700 ease-out md:h-[460px] lg:h-[620px] lg:min-h-[620px]">
                    <CampusTourVideo />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041728]/26 via-transparent to-white/18" />
                  </div>

                  <div className="px-6 py-10 md:px-10 lg:px-[92px] lg:py-12">
                    <a
                      href="#tour"
                      className="inline-flex min-h-[58px] items-center justify-center rounded-[18px] border border-[#006b37]/55 bg-white px-8 text-[14px] font-black uppercase tracking-[0.18em] text-[#006b37] transition duration-500 ease-out hover:-translate-y-1 hover:border-[#006b37] hover:bg-[#006b37] hover:text-white"
                    >
                      Explore DPS Gurugram
                    </a>
                  </div>
                </div>
              </div>

              <div className="drone-tour-right relative flex h-full flex-col bg-white lg:-ml-px">
                <div className="drone-tour-intro relative bg-white px-4 py-8 transition-all duration-700 ease-out md:px-6 lg:min-h-[320px] lg:px-8 lg:py-10 lg:pt-12">
                  <div className="relative ml-2 h-[104px] w-[280px] md:w-[320px] lg:ml-4 lg:h-[118px] lg:w-[380px]">
                    <Image
                      src="/logo11.png"
                      alt="Delhi Public School Gurugram logo"
                      fill
                      sizes="380px"
                      className="object-contain object-left"
                    />
                  </div>

                  <p className="ml-2 mt-8 text-[15px] font-black uppercase leading-none tracking-[0.28em] text-[#006b37] max-sm:text-[12px]">
                    A Unique Location
                  </p>
                  <h2 className="ml-2 mt-6 text-[54px] font-medium leading-[0.96] tracking-normal text-[#0a3b68] max-xl:text-[52px] max-md:text-[42px]">
                    DPS Gurugram
                  </h2>
                </div>

                <div className="drone-tour-map relative flex-1 overflow-hidden bg-white px-0 py-6 transition-all duration-700 ease-out md:px-0 lg:py-8">
                  <div className="relative h-full overflow-hidden rounded-[28px] border border-[#e8edf3] shadow-[0_24px_80px_rgba(5,34,74,0.12)]">
                    <iframe
                      title="DPS Gurugram location map"
                      src="https://www.google.com/maps?q=Sector%2068%2C%20Gurugram-122101&output=embed"
                      className="h-[300px] w-full border-0 md:h-[360px] lg:h-full lg:min-h-[520px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Gallery / Campus Stories — commented out for now
      <section
        id="gallery"
        className="gallery-section relative isolate overflow-hidden bg-[#fffdf7] px-5 py-24 text-[#05224a] sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#006b37]/25" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#006b37]/25" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,212,0,0.16),transparent_26%),radial-gradient(circle_at_88%_82%,rgba(0,107,55,0.1),transparent_28%)]" />

        <div className="mx-auto max-w-[1760px]">
          <div className="gallery-heading flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37] max-sm:text-[10px]">
                Gallery / Campus Life
              </p>
              <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] max-xl:text-[36px] max-md:text-[28px]">
                Campus Stories
              </h2>
            </div>
            <p className="max-w-[560px] text-lg font-semibold leading-8 text-[#526a7f]">
              See the moments that make school life memorable, from classrooms and
              sports to cultural stages and annual celebrations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className="gallery-card group relative overflow-hidden bg-white text-[#05224a] shadow-[0_22px_70px_rgba(5,34,74,0.1)]"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div className="relative h-[300px] overflow-hidden bg-[#05224a]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03192e]/40 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 text-[11px] font-black uppercase tracking-[0.24em] text-white">
                    {index === 0 ? "Jun 12 2026" : index === 1 ? "Jun 10 2026" : index === 2 ? "Jun 2 2026" : "Jun 1 2026"}
                  </p>
                </div>

                <div className="relative min-h-[190px] border-t border-[#e8edf2] p-6">
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#006b37]">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-[22px] font-black leading-tight tracking-normal text-[#05224a]">
                    {item.title}
                  </h3>
                  <a
                    href="#tour"
                    className="mt-7 inline-flex w-fit border-b-2 border-[#006b37] pb-1 text-[12px] font-black uppercase tracking-[0.18em] text-[#006b37]"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      */}

      <SiteFooter />
    </main>
  );
}





