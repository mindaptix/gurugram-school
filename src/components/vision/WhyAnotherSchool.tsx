"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";

import { whyAnotherSchool } from "@/data/vision-content";
import { gsap, registerVisionGsap } from "@/lib/vision-gsap";

const titleWords = whyAnotherSchool.title.split(" ");

function highlightPhrases(text: string, phrases: string[]): React.ReactNode {
  if (!phrases.length) return text;

  for (const phrase of phrases) {
    const index = text.indexOf(phrase);
    if (index === -1) continue;

    const before = text.slice(0, index);
    const after = text.slice(index + phrase.length);
    const remaining = phrases.filter((item) => item !== phrase);

    return (
      <>
        {highlightPhrases(before, remaining)}
        <mark className="rounded-sm bg-[#ffd400]/30 px-1 font-semibold text-[#1b3b22] not-italic">
          {phrase}
        </mark>
        {highlightPhrases(after, remaining)}
      </>
    );
  }

  return text;
}

function HighlightedParagraph({ text, index }: { text: string; index: number }) {
  const highlights =
    index === 0
      ? ["changing faster than ever", "evolving every year"]
      : index === 1
        ? ["happiness, identity, confidence", "world we cannot yet fully imagine"]
        : ["world ahead", "not another school built for yesterday"];

  return (
    <p className="text-[17px] leading-[1.85] text-[#2f3830] sm:text-[18px]">
      {highlightPhrases(text, highlights)}
    </p>
  );
}

export function WhyAnotherSchool() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeQuestion, setActiveQuestion] = useState(0);

  useLayoutEffect(() => {
    registerVisionGsap();
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-eyebrow-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: { trigger: ".why-header", start: "top 85%" },
        },
      );

      gsap.fromTo(
        ".why-word-inner",
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.07,
          ease: "power4.out",
          scrollTrigger: { trigger: ".why-header", start: "top 82%" },
        },
      );

      gsap.fromTo(
        ".why-campus-photo",
        { opacity: 0, y: 34, clipPath: "inset(10% 10% 10% 10%)", scale: 1.04 },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-campus-photo", start: "top 88%" },
        },
      );

      gsap.fromTo(
        ".why-feature-card",
        { y: 46, opacity: 0, rotateX: -8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-feature-card", start: "top 88%" },
        },
      );

      gsap.utils.toArray<HTMLElement>(".why-narrative-block").forEach((block) => {
        gsap.fromTo(
          block,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: block, start: "top 90%" },
          },
        );
      });

      gsap.fromTo(
        ".why-impact-chip",
        { y: 24, opacity: 0, scale: 0.92 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(1.6)",
          scrollTrigger: { trigger: ".why-impact-row", start: "top 88%" },
        },
      );

      gsap.to(".why-photo-glow", {
        rotate: 10,
        scale: 1.08,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-questions-track",
          start: "top 70%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.fromTo(
        ".why-reveal-block",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-reveal-block", start: "top 88%" },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-another-school"
      ref={sectionRef}
      className="why-another-section relative overflow-hidden bg-[#fffdf7] px-5 py-20 sm:px-8 lg:px-[74px] lg:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-24 h-64 w-64 rounded-full bg-[#006b37]/8 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 right-0 h-72 w-72 rounded-full bg-[#ffd400]/18 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="why-header relative mb-12 lg:mb-16">
          <div className="flex items-center gap-3">
            <span className="why-eyebrow-line h-px w-12 origin-left bg-[#ffd400]" />
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#006b37]">
              01 · The Beginning
            </p>
          </div>

          <h2 className="vision-serif mt-5 max-w-[800px] text-[36px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#111111] sm:text-[48px] lg:text-[58px]">
            {titleWords.map((word) => (
              <span
                key={word}
                className="mr-[0.18em] inline-block overflow-hidden align-bottom"
              >
                <span className="why-word-inner inline-block">{word}</span>
              </span>
            ))}
          </h2>

          <div className="why-impact-row mt-8 grid gap-3 sm:grid-cols-3">
            {["Future thinking", "Child-first care", "Confidence-led growth"].map((item) => (
              <div
                key={item}
                className="why-impact-chip border border-[#006b37]/14 bg-white/80 px-4 py-4 text-[12px] font-black uppercase tracking-[0.16em] text-[#1b3b22] shadow-[0_16px_50px_rgba(27,59,34,0.06)] backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-1 space-y-6">
            <article className="why-feature-card rounded-[20px] border border-[#1b3b22]/8 bg-white p-7 shadow-[0_20px_60px_rgba(27,59,34,0.07)] sm:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
                Why this matters now
              </p>
              <div className="mt-4">
                <HighlightedParagraph text={whyAnotherSchool.body[0]} index={0} />
              </div>
            </article>

            {whyAnotherSchool.body.slice(1).map((paragraph, index) => (
              <article
                key={paragraph.slice(0, 28)}
                className="why-narrative-block rounded-[18px] border border-[#1b3b22]/6 bg-white/80 p-6 sm:p-7"
              >
                <span className="mb-3 inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#006b37]/70">
                  Insight {String(index + 2).padStart(2, "0")}
                </span>
                <HighlightedParagraph text={paragraph} index={index + 1} />
              </article>
            ))}
          </div>

          <div className="order-2 lg:sticky lg:top-28">
            <div className="why-campus-photo relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-[0_24px_70px_rgba(27,59,34,0.14)] sm:aspect-[5/4]">
              <div className="why-photo-glow pointer-events-none absolute -right-20 -top-20 z-10 h-56 w-56 rounded-full border border-[#ffd400]/30" />
              <Image
                src={whyAnotherSchool.image}
                alt="DPS SPR Gurugram campus"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/5 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ffd400]">
                  DPS SPR Gurugram
                </p>
                <p className="mt-1 max-w-[360px] text-[15px] font-semibold leading-6 text-white">
                  A school designed for the world ahead — not built for yesterday.
                </p>
              </div>
            </div>

            <div className="why-questions-track relative mt-8">
              <p className="mb-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#006b37]">
                Questions every family asks
              </p>

              <div
                ref={progressRef}
                className="absolute bottom-0 left-[15px] top-10 w-[2px] origin-top scale-y-0 bg-[#006b37]/20"
                aria-hidden="true"
              />

              <div className="space-y-3">
                {whyAnotherSchool.questions.map((question, index) => {
                  const isActive = activeQuestion === index;

                  return (
                    <button
                      key={question}
                      type="button"
                      onClick={() => setActiveQuestion(index)}
                      className={`relative w-full rounded-[16px] border px-4 py-4 text-left transition-all duration-500 sm:px-5 sm:py-5 ${
                        isActive
                          ? "border-[#006b37] bg-[#006b37] text-white shadow-[0_16px_40px_rgba(0,107,55,0.2)]"
                          : "border-[#1b3b22]/8 bg-white text-[#1b3b22] hover:border-[#006b37]/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 shrink-0 text-[11px] font-black ${
                            isActive ? "text-[#ffd400]" : "text-[#006b37]/50"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[15px] font-semibold leading-snug sm:text-[16px]">
                            {question}
                          </p>
                          {isActive ? (
                            <p className="mt-2 text-[13px] leading-6 text-white/80">
                              This defines how we teach, mentor, and design every learner&apos;s
                              path at DPS SPR Gurugram.
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="why-reveal-block mx-auto mt-16 max-w-[800px] rounded-[24px] bg-[#006b37] px-8 py-10 text-center sm:mt-20 sm:px-12 sm:py-12">
          <span className="mx-auto mb-5 block h-px w-12 bg-[#ffd400]" />
          <p className="vision-serif text-[24px] font-medium leading-[1.2] text-white sm:text-[32px] lg:text-[36px]">
            {whyAnotherSchool.reveal}
          </p>
        </div>
      </div>
    </section>
  );
}
