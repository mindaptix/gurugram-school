"use client";

import { useRef } from "react";

import { trustPoints } from "@/data/home-content";

export function TrustSection() {
  const trustRailRef = useRef<HTMLDivElement | null>(null);

  const scrollTrustRail = (direction: "prev" | "next") => {
    const rail = trustRailRef.current;
    if (!rail) return;

    const delta = rail.clientWidth * 0.72;
    rail.scrollBy({
      left: direction === "next" ? delta : -delta,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="trust"
      className="trust-section relative isolate overflow-hidden bg-white px-5 pb-10 pt-14 text-[#003b73] sm:px-8 lg:px-[18px]"
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="trust-heading mx-auto max-w-[1180px] text-center">
          <p className="text-[16px] font-black uppercase leading-none tracking-[0.26em] text-[#05b982] max-sm:text-[12px]">
            DPS At A Glance
          </p>
          <h2 className="mt-6 whitespace-nowrap text-[55px] font-bold leading-none tracking-normal text-[#111111] max-xl:text-5xl max-lg:whitespace-normal max-md:text-4xl">
            Why Parents Trust Our DPS School
          </h2>
        </div>

        <div className="mt-14 grid gap-4 xl:grid-cols-[1.05fr_1.35fr]">
          <div className="trust-photo relative min-h-[540px] overflow-hidden max-xl:min-h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out hover:scale-105"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=1500&q=85)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#041f3b]/72 via-[#041f3b]/30 to-transparent" />
          </div>

          <div className="min-w-0">
            <div
              ref={trustRailRef}
              className="trust-cards flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {trustPoints.map((point, index) => (
                <article
                  key={point.title}
                  className={`trust-card group relative min-h-[490px] w-[64vw] max-w-[360px] shrink-0 snap-start overflow-hidden ${point.color} ${point.text}`}
                  style={{ animationDelay: `${index * 95}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/10" />
                  <div className="absolute inset-x-0 top-0 h-[56%] bg-white/0" />

                  <div className="absolute right-3 top-3 h-20 w-20 opacity-95 transition duration-700 ease-out group-hover:scale-105">
                    <div className={`absolute right-0 top-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                    <div className={`absolute left-0 top-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                    <div className={`absolute right-0 bottom-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                    <div className={`absolute left-0 bottom-0 h-10 w-10 rotate-45 rounded-[14px] ${point.accent}`} />
                  </div>

                  <div className="relative flex min-h-[490px] flex-col justify-end p-7">
                    <div className="trust-icon mb-4 text-[60px] font-light leading-none tracking-normal">
                      {point.icon}
                    </div>
                    <h3 className="max-w-[240px] text-[21px] font-medium leading-[1.18] tracking-normal">
                      {point.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between gap-5 max-sm:flex-col">
              <a
                href="#apply"
                className="inline-flex min-h-[62px] min-w-[334px] items-center justify-center rounded-full border-2 border-[#003b73] bg-white px-8 text-[15px] font-black uppercase tracking-[0.24em] text-[#003b73] transition hover:-translate-y-1 hover:bg-[#003b73] hover:text-white max-sm:min-w-0 max-sm:w-full"
              >
                Discover More Facts <span className="ml-5 text-2xl">&#8594;</span>
              </a>

              <div className="flex gap-4 max-lg:hidden">
                <button
                  type="button"
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#003b73] text-2xl font-light leading-none text-[#003b73] transition hover:bg-[#003b73] hover:text-white"
                  aria-label="Previous fact"
                  onClick={() => scrollTrustRail("prev")}
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#003b73] text-2xl font-light leading-none text-[#003b73] transition hover:bg-[#003b73] hover:text-white"
                  aria-label="Next fact"
                  onClick={() => scrollTrustRail("next")}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
