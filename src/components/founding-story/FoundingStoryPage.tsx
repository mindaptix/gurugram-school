"use client";

import Image from "next/image";

import { AnimatedReveal } from "@/components/founding-story/AnimatedReveal";
import { SiteFooter } from "@/components/layout/SiteFooter";
import {
  foundingCta,
  foundingPillars,
  foundingQuote,
  foundingStoryHero,
  genesisSection,
  gurugramSection,
  milestones,
} from "@/data/founding-story-content";

export default function FoundingStoryPage() {
  return (
    <main className="min-h-screen bg-[#fffdf7] text-[#05224a]">

      {/* Hero */}
      <section className="founding-hero relative isolate min-h-[78vh] overflow-hidden sm:min-h-[82vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foundingStoryHero.image})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(5,34,74,0.9)_0%,rgba(5,34,74,0.62)_48%,rgba(0,107,55,0.42)_100%)]" />
        <div className="founding-hero-glow pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-[#ffd400]/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-[1280px] flex-col justify-end px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <div className="founding-hero-copy max-w-[760px] text-white">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#ffd400]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd400]">
                {foundingStoryHero.eyebrow}
              </p>
            </div>
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-[-0.03em] sm:text-[54px] lg:text-[64px]">
              {foundingStoryHero.title}
            </h1>
            <p className="mt-6 max-w-[620px] text-[17px] font-normal leading-8 text-white/82">
              {foundingStoryHero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Genesis */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[74px] lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#006b37]/6 blur-3xl" />
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <AnimatedReveal variant="left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37]">
              {genesisSection.eyebrow}
            </p>
            <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] max-md:text-[28px] lg:text-[44px]">
              {genesisSection.title}
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-[#4b5563]">
              {genesisSection.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 inline-flex items-center gap-5 rounded-[16px] border border-[#05224a]/10 bg-[#fffdf7] px-6 py-4 shadow-[0_18px_50px_rgba(5,34,74,0.06)]">
              <span className="text-[34px] font-black leading-none text-[#006b37]">
                {genesisSection.stat.value}
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#05224a]">
                {genesisSection.stat.label}
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="right" delayMs={120}>
            <div className="founding-image-frame relative min-h-[420px] overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(5,34,74,0.14)]">
              <Image
                src={genesisSection.image}
                alt="Early learning at DPS SPR Gurugram"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05224a]/35 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-[12px] bg-white/92 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#006b37]">
                  Genesis
                </p>
                <p className="mt-1 text-sm font-bold text-[#05224a]">Where our story began</p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Quote */}
      <section className="founding-quote-band relative overflow-hidden bg-[#05224a] px-5 py-20 text-white sm:px-8 lg:px-[74px] lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,212,0,0.14),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(0,107,55,0.22),transparent_30%)]" />
        <AnimatedReveal className="relative mx-auto max-w-[980px] text-center">
          <div className="founding-quote-line mx-auto mb-8 h-1 w-24 bg-[#ffd400]" />
          <blockquote className="text-[28px] font-semibold leading-[1.45] tracking-[-0.02em] text-white max-md:text-[22px] lg:text-[36px]">
            &ldquo;{foundingQuote.quote}&rdquo;
          </blockquote>
          <p className="mt-8 text-[12px] font-black uppercase tracking-[0.28em] text-[#ffd400]">
            {foundingQuote.attribution}
          </p>
        </AnimatedReveal>
      </section>

      {/* Milestones */}
      <section className="relative overflow-hidden bg-[#fffdf7] px-5 py-20 sm:px-8 lg:px-[74px] lg:py-28">
        <AnimatedReveal className="mx-auto max-w-[1280px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37]">
            Our Journey
          </p>
          <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] lg:text-[44px]">
            Milestones That Shaped Us
          </h2>
        </AnimatedReveal>

        <div className="relative mx-auto mt-16 max-w-[1080px]">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#006b37]/20 lg:block" />

          <div className="grid gap-10 lg:gap-14">
            {milestones.map((item, index) => (
              <AnimatedReveal
                key={item.title}
                variant={index % 2 === 0 ? "left" : "right"}
                delayMs={index * 90}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="founding-milestone-card overflow-hidden rounded-[24px] border border-[#05224a]/8 bg-white shadow-[0_20px_60px_rgba(5,34,74,0.08)]">
                  <div className="relative h-[240px] overflow-hidden bg-[#05224a] sm:h-[280px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className={`object-cover ${item.image.includes("half-logo") ? "object-contain p-10" : ""}`}
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <span className="inline-flex rounded-full bg-[#ffd400] px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#05224a]">
                      {item.year}
                    </span>
                    <h3 className="mt-4 text-[24px] font-bold text-[#05224a]">{item.title}</h3>
                    <p className="mt-3 text-[16px] leading-7 text-[#4b5563]">{item.detail}</p>
                  </div>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full border-4 border-[#ffd400] bg-white text-[18px] font-black text-[#006b37] shadow-[0_12px_30px_rgba(5,34,74,0.1)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[74px] lg:py-28">
        <AnimatedReveal className="mx-auto max-w-[1280px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37]">
            What Guides Us
          </p>
          <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] lg:text-[44px]">
            The Pillars of Our Founding Vision
          </h2>
        </AnimatedReveal>

        <div className="mx-auto mt-14 grid max-w-[1280px] gap-6 md:grid-cols-3">
          {foundingPillars.map((pillar, index) => (
            <AnimatedReveal key={pillar.title} variant="scale" delayMs={index * 110}>
              <article
                className={`founding-pillar-card group h-full rounded-[24px] border-l-4 p-8 ${pillar.accent} transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(5,34,74,0.1)]`}
              >
                <span className="text-[42px] font-black leading-none text-[#05224a]/12 transition group-hover:text-[#006b37]/20">
                  {pillar.icon}
                </span>
                <h3 className="mt-6 text-[22px] font-bold text-[#05224a]">{pillar.title}</h3>
                <p className="mt-4 text-[16px] leading-7 text-[#4b5563]">{pillar.detail}</p>
                <span className="mt-8 inline-block h-1 w-12 bg-[#ffd400] transition-all duration-500 group-hover:w-20" />
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Gurugram */}
      <section className="relative overflow-hidden bg-[#05224a] px-5 py-20 text-white sm:px-8 lg:px-[74px] lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <AnimatedReveal variant="scale">
            <div className="relative min-h-[380px] overflow-hidden rounded-[28px] shadow-[0_28px_80px_rgba(0,0,0,0.28)] lg:min-h-[480px]">
              <Image
                src={gurugramSection.image}
                alt="Students at DPS SPR Gurugram"
                fill
                sizes="(min-width: 1024px) 580px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#05224a]/50 via-transparent to-transparent" />
            </div>
          </AnimatedReveal>

          <AnimatedReveal variant="right" delayMs={100}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffd400]">
              {gurugramSection.eyebrow}
            </p>
            <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] lg:text-[44px]">
              {gurugramSection.title}
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-white/80">{gurugramSection.detail}</p>
            <ul className="mt-8 space-y-4">
              {gurugramSection.highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-[16px] font-semibold">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#ffd400] text-sm font-black text-[#05224a]">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-[74px] lg:py-20">
        <AnimatedReveal variant="rise">
          <div className="founding-cta-banner relative mx-auto max-w-[1280px] overflow-hidden rounded-[20px] bg-[linear-gradient(120deg,#006b37_0%,#0f6734_55%,#05224a_100%)] px-8 py-12 shadow-[0_28px_90px_rgba(0,107,55,0.22)] sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#ffd400]/20 blur-3xl" />
            <div className="relative z-10 max-w-[720px] text-white">
              <h2 className="text-[32px] font-bold leading-tight sm:text-[40px]">{foundingCta.title}</h2>
              <p className="mt-4 text-[17px] leading-8 text-white/82">{foundingCta.detail}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={foundingCta.primaryHref}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-lg bg-[#ffd400] px-7 text-[12px] font-black uppercase tracking-[0.14em] text-[#05224a] transition hover:bg-white"
                >
                  {foundingCta.primaryLabel}
                </a>
                <a
                  href={foundingCta.secondaryHref}
                  className="inline-flex min-h-[50px] items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 text-[12px] font-black uppercase tracking-[0.14em] text-white backdrop-blur-sm transition hover:bg-white hover:text-[#05224a]"
                >
                  {foundingCta.secondaryLabel}
                </a>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </section>

      <SiteFooter />
    </main>
  );
}
