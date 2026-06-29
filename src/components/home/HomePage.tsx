"use client";

import Image from "next/image";
import { useState } from "react";

import { AboutSection } from "@/components/home/AboutSection";
import { FoundationSection } from "@/components/home/FoundationSection";
import { HeroSection } from "@/components/home/HeroSection";
import { LearningJourneySection } from "@/components/home/LearningJourneySection";
import { TrustSection } from "@/components/home/TrustSection";
import {
  admissionSteps,
  galleryItems,
  importantDates,
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

      <section className="relative isolate overflow-hidden bg-white px-5 py-20 text-[#05224a] sm:px-8 lg:px-[74px]">
        <div className="relative mx-auto grid max-w-[1580px] gap-8 overflow-hidden bg-[#dff7eb] p-8 shadow-[12px_12px_0_#05224a] md:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="pointer-events-none absolute left-0 top-0 h-5 w-full bg-[#05b982]" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-5 w-full bg-[#ffd400]" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-[18px] bg-[#05224a]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 bg-[#05b982]/18 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-[38%] h-64 w-64 bg-[#ffd400]/24 blur-2xl" />

          <div className="relative z-10">
            <p className="w-fit bg-[#05224a] px-4 py-2 text-[13px] font-black uppercase leading-none tracking-[0.26em] text-[#ffd400]">
              Admissions 2026-27
            </p>
            <h2 className="mt-6 max-w-[900px] text-[68px] font-black leading-[0.94] tracking-[-0.05em] text-[#111111] max-xl:text-5xl max-md:text-4xl">
              Admissions Open for Nursery to Class 12
            </h2>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 lg:max-w-[560px] lg:justify-end">
            <a
              href="#apply"
              className="inline-flex min-h-[64px] items-center justify-center bg-[#05224a] px-8 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[8px_8px_0_#05b982] transition hover:-translate-y-1"
            >
              Apply Now <span className="ml-2 text-xl leading-none">&#8594;</span>
            </a>
            <a
              href="#prospectus"
              className="inline-flex min-h-[64px] items-center justify-center border-2 border-[#05224a] bg-white px-8 text-sm font-black uppercase tracking-[0.16em] text-[#05224a] shadow-[8px_8px_0_rgba(5,34,74,0.16)] transition hover:-translate-y-1"
            >
              Download Prospectus
            </a>
            <a
              href="#tour"
              className="inline-flex min-h-[64px] items-center justify-center border-2 border-[#05b982] bg-white px-8 text-sm font-black uppercase tracking-[0.16em] text-[#00845d] shadow-[8px_8px_0_rgba(5,185,130,0.22)] transition hover:-translate-y-1"
            >
              Enquire Now
            </a>
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
        id="admissions"
        className="admission-section relative isolate overflow-hidden bg-[#05224a] px-5 py-24 text-white sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(255,212,0,0.22),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(9,108,232,0.34),transparent_32%),linear-gradient(135deg,#05224a_0%,#07182d_62%,#003b73_100%)]" />
        <div className="absolute left-0 top-0 h-2 w-full bg-[#ffd400]" />
        <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full border-[44px] border-white/10" />
        <div className="absolute bottom-[-80px] left-[-60px] h-48 w-48 rounded-full border-[32px] border-[#ffd400]/20" />

        <div className="mx-auto max-w-[1680px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="admission-heading max-w-[760px]">
              <p className="text-[20px] font-black uppercase leading-none tracking-[0.28em] text-[#ffd400] max-sm:text-sm">
                Admissions 2026-27
              </p>
              <h2 className="mt-8 text-[68px] font-black leading-[0.95] tracking-normal text-white max-xl:text-6xl max-md:text-5xl">
                Admissions Open for Nursery to Class 12
              </h2>
              <p className="mt-8 text-xl font-semibold leading-8 text-white/78">
                A premium, guided admission journey for families seeking academic strength,
                holistic growth, and a trusted CBSE learning environment.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black uppercase tracking-[0.2em] text-[#ffd400] backdrop-blur">
                  CBSE Curriculum
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                  Holistic Growth
                </span>
                <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-black uppercase tracking-[0.2em] text-white/90 backdrop-blur">
                  Future Ready
                </span>
              </div>
            </div>

            <div className="admission-dates grid gap-4 sm:grid-cols-3 lg:pt-[58px]">
              {importantDates.map(([label, value], index) => (
                <div
                  key={label}
                  className="admission-date-card rounded-[24px] border border-white/15 bg-white/10 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ffd400]">
                    {label}
                  </p>
                  <p className="mt-4 text-3xl font-black leading-tight text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="admission-timeline relative grid gap-5">
              <div className="absolute left-[38px] top-8 hidden h-[calc(100%-4rem)] w-px bg-white/20 sm:block" />
              {admissionSteps.map((step, index) => (
                <article
                  key={step}
                  className="admission-step group relative grid gap-5 rounded-[24px] border border-white/10 bg-white p-6 text-[#05224a] shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:grid-cols-[76px_1fr]"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-[#ffd400] text-2xl font-black text-[#05224a] transition group-hover:rotate-12 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.22em] text-[#096ce8]">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-normal sm:text-3xl">
                      {step}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <aside className="admission-eligibility relative overflow-hidden rounded-[30px] border border-[#ffd400]/40 bg-[#ffd400] p-8 text-[#05224a] shadow-[0_30px_90px_rgba(0,0,0,0.16)] lg:p-10">
              <div className="absolute right-[-72px] top-[-72px] h-48 w-48 rounded-full border-[34px] border-[#05224a]/12" />
              <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
              <h3 className="relative text-3xl font-black uppercase leading-tight tracking-normal sm:text-4xl">
                Eligibility Criteria
              </h3>
              <div className="relative mt-8 grid gap-5">
                {[
                  "Nursery admission as per age norms for the academic session.",
                  "Classes 1 to 9 based on previous school records and interaction.",
                  "Class 11 based on stream preference, aptitude, and Class 10 performance.",
                  "Documents required: birth certificate, transfer certificate, report card, and address proof.",
                ].map((item) => (
                  <div key={item} className="flex gap-4 rounded-2xl bg-white/45 p-3">
                    <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#05224a] text-lg font-light text-white">
                      +
                    </span>
                    <p className="text-base font-bold leading-7 sm:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="admission-cta mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-[#ffd400] px-9 text-[15px] font-black uppercase tracking-[0.24em] text-[#05224a] transition hover:-translate-y-1 hover:bg-white"
            >
              Apply Now <span className="ml-5 text-2xl">&#8594;</span>
            </a>
            <a
              href="#prospectus"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full border border-white/50 px-9 text-[15px] font-black uppercase tracking-[0.24em] text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#05224a]"
            >
              Download Prospectus
            </a>
            <a
              href="#tour"
              className="inline-flex min-h-[64px] items-center justify-center rounded-full bg-white/12 px-9 text-[15px] font-black uppercase tracking-[0.24em] text-white backdrop-blur transition hover:-translate-y-1 hover:bg-[#096ce8]"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="gallery-section relative isolate overflow-hidden bg-white px-5 py-24 text-[#05224a] sm:px-8 lg:px-[74px] lg:py-32"
      >
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[34%] bg-[#ffd400]" />
        <div className="mx-auto max-w-[1720px]">
          <div className="gallery-heading flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[20px] font-black uppercase leading-none tracking-[0.28em] text-[#096ce8] max-sm:text-sm">
                Gallery / Campus Life
              </p>
              <h2 className="mt-8 text-[82px] font-black leading-none tracking-normal text-[#003b73] max-xl:text-7xl max-md:text-5xl">
                Life at Our DPS School
              </h2>
            </div>
            <p className="max-w-[520px] text-xl font-semibold leading-8 text-[#516177]">
              A lively campus where classroom learning, sports, cultural
              programs, clubs, and annual day moments shape confident students.
            </p>
          </div>

          <div className="gallery-grid mt-16 grid auto-rows-[260px] gap-5 md:grid-cols-4 lg:auto-rows-[300px]">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`gallery-card group relative overflow-hidden bg-[#05224a] text-white ${
                  index === 0
                    ? "md:col-span-2 md:row-span-2"
                    : index === 3
                      ? "md:col-span-2"
                      : ""
                }`}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03192e]/88 via-[#03192e]/28 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-7">
                  <p className="mb-4 w-fit bg-[#ffd400] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#05224a]">
                    {item.label}
                  </p>
                  <h3 className="text-4xl font-black leading-tight tracking-normal">
                    {item.title}
                  </h3>
                  <span className="mt-6 h-1.5 w-16 bg-[#ffd400] transition duration-500 group-hover:w-28" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer relative overflow-hidden bg-[#03192e] px-5 py-14 text-white sm:px-8 lg:px-[74px]">
        <div className="absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full border-[48px] border-[#ffd400]/10" />
        <div className="mx-auto grid max-w-[1720px] gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <div className="relative h-24 w-24 overflow-hidden border-2 border-white bg-white">
              <Image
                src="/logo11.png"
                alt="Delhi Public School Gurugram logo"
                fill
                sizes="96px"
                className="object-contain p-2"
              />
            </div>
            <h2 className="mt-6 text-4xl font-black leading-tight tracking-normal">
              Delhi Public School Gurugram
            </h2>
            <p className="mt-4 max-w-[560px] text-base font-semibold leading-7 text-white/70">
              A CBSE school for Nursery to Class 12 focused on academics,
              values, leadership, communication, and holistic development.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd400]">
              Quick Links
            </h3>
            <div className="mt-6 grid gap-3 text-lg font-bold text-white/78">
              {[
                ["About", "#about"],
                ["Programs", "#academics"],
                ["Infrastructure", "#infrastructure"],
                ["Admissions", "#admissions"],
                ["Contact", "#tour"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="transition hover:text-[#ffd400]">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-[#ffd400]">
              Admissions Office
            </h3>
            <div className="mt-6 grid gap-3 text-lg font-bold leading-7 text-white/78">
              <p>Gurugram, Haryana, India</p>
              <p>+91 98765 43210</p>
              <p>admissions@dpsgurugram.edu.in</p>
            </div>
            <a
              href="#admissions"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#ffd400] px-6 text-sm font-black uppercase tracking-[0.18em] text-[#05224a] transition hover:-translate-y-1 hover:bg-white"
            >
              Apply Now
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-[1720px] flex-col gap-3 border-t border-white/12 pt-6 text-sm font-semibold text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Delhi Public School Gurugram. All rights reserved.</p>
          <p>Designed for a smooth, animated school experience.</p>
        </div>
      </footer>
    </main>
  );
}




