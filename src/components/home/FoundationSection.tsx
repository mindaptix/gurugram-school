"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { foundationItems } from "@/data/home-content";

gsap.registerPlugin(ScrollTrigger);

function FoundationCard({
  item,
  index,
  cardRef,
}: {
  item: (typeof foundationItems)[number];
  index: number;
  cardRef: (el: HTMLElement | null) => void;
}) {
  return (
    <article
      ref={cardRef}
      className="foundation-image-card foundation-stack-card group absolute inset-0 overflow-hidden bg-[#fffdf7] will-change-transform"
      style={{ zIndex: index + 1 }}
    >
      <div
        className={`foundation-label absolute z-20 grid place-items-center bg-white px-5 py-4 text-left ${
          index % 2 === 0
            ? "left-0 top-6 min-h-[96px] w-[210px] rounded-br-[22px] max-md:top-0 max-md:w-[200px]"
            : "left-0 top-5 min-h-[88px] w-[196px] rounded-br-[20px] max-md:top-0 max-md:w-[190px]"
        }`}
      >
        <h3 className="text-[14px] font-black uppercase leading-[1.18] tracking-[0.05em] text-[#111111] max-md:text-[13px]">
          {item.title}
        </h3>
      </div>

      <div className="relative h-full min-h-[380px] overflow-hidden rounded-[0_36px_36px_0] bg-white shadow-[0_22px_56px_rgba(5,34,74,0.12)] lg:min-h-[520px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{ backgroundImage: `url(${item.image})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
      </div>

      <div
        className={`foundation-plus absolute z-20 grid place-items-center rounded-full bg-white shadow-[0_16px_40px_rgba(5,34,74,0.14)] ${
          index === 0
            ? "right-4 bottom-10 h-[72px] w-[72px]"
            : "right-4 bottom-8 h-[64px] w-[64px]"
        }`}
      >
        <span
          className={`foundation-plus-core grid place-items-center rounded-full bg-[#111111] font-light leading-none text-[#006b37] ${
            index === 0
              ? "h-[48px] w-[48px] text-[32px]"
              : "h-[42px] w-[42px] text-[28px]"
          }`}
        >
          +
        </span>
      </div>
    </article>
  );
}

export function FoundationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinWrap = pinRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLElement[];

    if (!section || !pinWrap || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.set(cards[0], { yPercent: 0 });
        gsap.set(cards.slice(1), { yPercent: 100 });

        const scrollDistance = (cards.length - 1) * window.innerHeight * 0.9;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: pinWrap,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.slice(1).forEach((card) => {
          timeline.to(
            card,
            {
              yPercent: 0,
              duration: 1,
              ease: "none",
            },
            ">",
          );
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.set(cards, { clearProps: "transform" });

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                toggleActions: "play none none reverse",
              },
            },
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="foundation"
      className="foundation-section foundation-scroll-stack relative isolate bg-[#fffdf7] px-5 py-14 text-[#05224a] sm:px-8 lg:px-[86px] lg:py-20"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[38%] bg-[#f8fafc] max-lg:hidden" />

      <div
        ref={pinRef}
        className="foundation-pin-wrap relative z-10 mx-auto w-full max-w-[1680px] pt-4 lg:min-h-screen lg:pt-16"
      >
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16">
          <div className="foundation-sticky relative z-10 flex items-center justify-center text-center lg:pt-6">
            <h2 className="w-full max-w-[720px] font-black uppercase leading-[0.86] tracking-[-0.04em]">
              <span className="block text-[88px] text-[#111111] max-xl:text-[68px] max-md:text-[44px]">
                Strong
              </span>
              <span className="block text-[88px] text-[#111111] max-xl:text-[68px] max-md:text-[44px]">
                Academic
              </span>
              <span className="block text-[76px] text-[#006b37] max-xl:text-[60px] max-md:text-[40px]">
                Foundation
              </span>
              <span className="my-5 block text-[34px] leading-none text-[#006b37] max-md:text-[24px]">
                For
              </span>
              <span className="block text-[88px] text-[#111111] max-xl:text-[68px] max-md:text-[44px]">
                Future
              </span>
              <span className="block text-[88px] text-[#006b37] max-xl:text-[68px] max-md:text-[44px]">
                Success
              </span>
            </h2>
          </div>

          <div className="foundation-scroll relative z-10 w-full max-lg:flex max-lg:flex-col max-lg:gap-10">
            <div className="foundation-stack-viewport relative ml-auto w-full max-w-[860px] max-lg:static max-lg:min-h-0 max-lg:space-y-10 lg:h-[520px] lg:overflow-hidden">
              {foundationItems.map((item, index) => (
                <FoundationCard
                  key={item.title}
                  item={item}
                  index={index}
                  cardRef={(el) => {
                    cardsRef.current[index] = el;
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
