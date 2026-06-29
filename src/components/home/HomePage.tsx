"use client";

import Image from "next/image";
import { useState } from "react";

import { AboutSection } from "@/components/home/AboutSection";
import { FoundationSection } from "@/components/home/FoundationSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningJourneySection } from "@/components/home/LearningJourneySection";
import { TrustSection } from "@/components/home/TrustSection";
import {
  galleryItems,
  infrastructureItems,
} from "@/data/home-content";
import { useNavbarVisibility } from "@/hooks/use-navbar-visibility";

export default function Home() {
  const activeSlide = 0;
  const [activeInfrastructure, setActiveInfrastructure] = useState(2);
  const isNavbarVisible = useNavbarVisibility();

  return (
    <main className="min-h-screen bg-[#f7fbff] text-[#06264a]">
      <HeroSection activeSlide={activeSlide} isNavbarVisible={isNavbarVisible} />

      <AboutSection />

      <LearningJourneySection />

      <TrustSection />

      <FoundationSection />

      <section
        id="admissions"
        className="admission-quick-cta relative isolate overflow-hidden bg-white px-5 py-8 text-white sm:px-8 lg:px-[74px]"
      >
        <div className="relative mx-auto max-w-[1500px]">
          <div className="admission-cta-banner group relative min-h-[280px] overflow-hidden rounded-[12px] bg-[#400080] shadow-[0_28px_90px_rgba(64,0,128,0.24)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_28%,rgba(49,213,255,0.18),transparent_24%),linear-gradient(110deg,#400080_0%,#400080_52%,#2d005c_100%)]" />
            <div className="admission-cta-shine pointer-events-none absolute inset-y-0 left-[-24%] w-[34%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]" />

            <div className="relative z-10 grid min-h-[280px] items-center gap-6 px-6 py-7 md:px-10 lg:grid-cols-[1.05fr_0.68fr] lg:px-12">
              <div className="max-w-[860px]">
                <p className="text-[12px] font-black uppercase tracking-[0.24em] text-white/80">
                  Admissions 2026-27
                </p>
                <h2 className="mt-4 max-w-[780px] text-[34px] font-black leading-[0.98] tracking-normal text-white sm:text-[44px] xl:text-[56px]">
                  Admissions Open:
                  <span className="block">Nursery to Class 12</span>
                </h2>
                <p className="mt-4 max-w-[720px] text-[16px] font-semibold leading-7 text-white/78">
                  Nursery to Class 12 admissions are open at a future-ready CBSE
                  campus in Gurugram.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#apply"
                    className="group/btn inline-flex min-h-[52px] items-center justify-center rounded-[8px] bg-white px-7 text-[12px] font-black uppercase tracking-[0.16em] text-[#42007f] shadow-[0_18px_44px_rgba(255,255,255,0.22)] transition duration-500 hover:-translate-y-1 hover:bg-[#ffd400] hover:text-[#111111]"
                  >
                    Apply Now
                    <span className="ml-4 text-xl transition group-hover/btn:translate-x-1">
                      &#8594;
                    </span>
                  </a>
                  <a
                    href="#tour"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-[8px] border border-white/24 bg-white/10 px-7 text-[12px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-[#42007f]"
                  >
                    Book Visit
                  </a>
                </div>
              </div>

              <div className="relative min-h-[230px] overflow-hidden lg:min-h-[280px]">
                <Image
                  src="/young-children-making-diy-project-from-upcycled-materials.jpg"
                  alt="Happy student exploring creative learning"
                  fill
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="admission-cta-kid object-cover object-center mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7b00cf] via-transparent to-transparent lg:hidden" />
                <div className="admission-cta-ring absolute right-3 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border-[6px] border-white/70" />
                <div className="admission-cta-diamond absolute left-8 top-8 h-7 w-7 rotate-45 border-4 border-white/70" />
                <div className="absolute bottom-6 left-4 rounded-[10px] border border-white/18 bg-white/14 px-4 py-3 shadow-[0_20px_55px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#ffd400]">
                    Start Here
                  </p>
                  <p className="mt-1.5 text-lg font-black leading-tight text-white">
                    Secure enquiry today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section
          id="infrastructure"
          className="infrastructure-section relative isolate overflow-hidden bg-white pb-14 pt-8 text-white"
        >
          <div id="learning-at-dps-section" className="infra-story relative z-0 mx-auto max-w-[1720px] px-5 pb-36 sm:px-8 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="infra-story-wordmark relative z-0 min-w-0 pt-2">
                <div
                  className="w-fit rounded-[16px] bg-[#ffd400] px-4 py-2 text-[54px] font-normal leading-none tracking-normal text-[#111111] transition-all duration-300 ease-out max-lg:text-[42px] max-md:text-[34px]"
                >
                  Learning at
                </div>
                <div
                  className="mt-14 text-[176px] font-black leading-[0.92] tracking-[-0.05em] text-[#003b73] transition-all duration-300 ease-out max-xl:text-[144px] max-lg:mt-10 max-lg:text-[118px] max-md:text-[88px]"
                >
                  DPS
                </div>
              </div>

            <div className="infra-story-copy relative lg:pt-3">
              <p className="max-w-[630px] text-[18px] font-medium leading-9 text-[#111111] max-lg:max-w-none max-lg:text-[16px] max-lg:leading-8">
                Every child learns differently and our aim is to provide
                students with the opportunities, experiences, and pathways that
                best suit their abilities, interests, and aspirations.
              </p>
            </div>
          </div>
        </div>

            <div className="infra-accordion relative z-20 mt-8 flex h-[500px] w-full gap-1 overflow-hidden border-y-[4px] border-white bg-white lg:-mt-10 max-lg:h-auto max-lg:flex-col">
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
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                      aria-label="Drone tour of DPS Gurugram campus"
                    >
                      <source
                        src="https://samplelib.com/lib/preview/mp4/sample-20s.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#041728]/26 via-transparent to-white/18" />
                  </div>

                  <div className="px-6 py-10 md:px-10 lg:px-[92px] lg:py-12">
                    <a
                      href="#tour"
                      className="inline-flex min-h-[58px] items-center justify-center rounded-[18px] border border-[#c51647]/55 bg-white px-8 text-[14px] font-black uppercase tracking-[0.18em] text-[#c51647] transition duration-500 ease-out hover:-translate-y-1 hover:border-[#c51647] hover:bg-[#c51647] hover:text-white"
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

                  <p className="ml-2 mt-8 text-[15px] font-black uppercase leading-none tracking-[0.28em] text-[#003b73] max-sm:text-[12px]">
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

      <section
        id="gallery"
        className="gallery-section relative isolate overflow-hidden bg-[#fffdf7] px-5 py-24 text-[#05224a] sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-[#c51647]/35" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#c51647]/35" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(255,212,0,0.16),transparent_26%),radial-gradient(circle_at_88%_82%,rgba(5,185,130,0.12),transparent_28%)]" />

        <div className="mx-auto max-w-[1760px]">
          <div className="gallery-heading flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[16px] font-black uppercase leading-none tracking-[0.28em] text-[#05b982] max-sm:text-sm">
                Gallery / Campus Life
              </p>
              <h2 className="mt-6 text-[76px] font-black leading-none tracking-[-0.04em] text-[#111111] max-xl:text-6xl max-md:text-5xl">
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
                  <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#c51647]">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-[22px] font-black leading-tight tracking-normal text-[#05224a]">
                    {item.title}
                  </h3>
                  <a
                    href="#tour"
                    className="mt-7 inline-flex w-fit border-b-2 border-[#c51647] pb-1 text-[12px] font-black uppercase tracking-[0.18em] text-[#c51647]"
                  >
                    Read More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer relative isolate overflow-hidden bg-[#061a33] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-[74px] lg:pt-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_15%,rgba(255,212,0,0.16),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(5,185,130,0.16),transparent_26%),linear-gradient(135deg,#061a33_0%,#0b2342_48%,#03101f_100%)]" />
        <div className="pointer-events-none absolute left-8 top-8 h-px w-[calc(100%-4rem)] bg-[linear-gradient(90deg,transparent,#d8c37a,transparent)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-tl-full bg-[#05b982]/10 blur-3xl" />

        <div className="mx-auto max-w-[1720px]">
          <div className="grid overflow-hidden border border-white/12 bg-white/[0.04] shadow-[0_30px_110px_rgba(0,0,0,0.22)] backdrop-blur lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-white/12 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="relative h-[92px] w-[260px] overflow-hidden bg-white p-3 shadow-[12px_12px_0_rgba(216,195,122,0.34)]">
                <Image
                  src="/logo11.png"
                  alt="Delhi Public School Gurugram logo"
                  fill
                  sizes="260px"
                  className="object-contain p-3"
                />
              </div>
              <p className="mt-10 text-[12px] font-black uppercase leading-none tracking-[0.28em] text-[#f3d77b]">
                Delhi Public School Gurugram
              </p>
              <h2 className="mt-5 max-w-[780px] text-[48px] font-black leading-[0.98] tracking-[-0.05em] text-white max-xl:text-4xl max-md:text-3xl">
                A future-ready campus for confident learners.
              </h2>
              <p className="mt-6 max-w-[680px] text-base font-medium leading-8 text-white/68">
                Nursery to Class 12 CBSE education shaped around academics,
                values, communication, leadership, and holistic growth.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {["CBSE School", "Nursery - XII", "Gurugram Campus"].map((item) => (
                  <span
                    key={item}
                    className="border border-white/14 bg-white/[0.06] px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid">
              <div className="grid gap-4 border-b border-white/12 p-6 sm:grid-cols-2 sm:p-8 lg:p-10">
                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-[0.24em] text-[#f3d77b]">
                    Explore
                  </h3>
                  <div className="mt-5 grid gap-2">
                    {[
                      ["About School", "#about"],
                      ["Learning at DPS", "#infrastructure"],
                      ["Campus Stories", "#gallery"],
                      ["Admissions", "#admissions"],
                    ].map(([label, href]) => (
                      <a
                        key={label}
                        href={href}
                        className="group flex items-center justify-between border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/74 transition hover:border-[#f3d77b]/60 hover:bg-white/[0.08] hover:text-white"
                      >
                        {label}
                        <span className="text-[#f3d77b] transition group-hover:translate-x-1">
                          &#8594;
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-black uppercase tracking-[0.24em] text-[#f3d77b]">
                    Admissions Desk
                  </h3>
                  <div className="mt-5 grid gap-3 text-sm font-medium leading-6 text-white/72">
                    <p className="border-l-2 border-[#f3d77b] pl-4">
                      Gurugram, Haryana, India
                    </p>
                    <p className="border-l-2 border-[#05b982] pl-4">
                      +91 98765 43210
                    </p>
                    <p className="border-l-2 border-white/25 pl-4">
                      admissions@dpsgurugram.edu.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 p-6 sm:p-8 lg:p-10">
                <p className="text-[12px] font-black uppercase tracking-[0.24em] text-[#05b982]">
                  Ready to begin?
                </p>
                <a
                  href="#admissions"
                  className="group inline-flex min-h-[64px] items-center justify-between bg-[#f3d77b] px-6 text-sm font-black uppercase tracking-[0.16em] text-[#061a33] transition hover:-translate-y-1 hover:bg-white"
                >
                  Apply Now
                  <span className="ml-6 text-xl transition group-hover:translate-x-1">
                    &#8594;
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-[13px] font-medium text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Delhi Public School Gurugram. All rights reserved.</p>
            <p>Designed for a smooth, modern school experience.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}




