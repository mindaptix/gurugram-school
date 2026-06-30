"use client";

import { useEffect, useRef, useState } from "react";

import { trustPoints } from "@/data/home-content";

export function TrustSection() {
  const trustRailRef = useRef<HTMLDivElement | null>(null);
  const [activeTrustImage, setActiveTrustImage] = useState(0);
  const activeTrustPoint = trustPoints[activeTrustImage] ?? trustPoints[0];

  useEffect(() => {
    trustPoints.forEach((point) => {
      const image = new window.Image();
      image.src = point.image;
    });
  }, []);

  const scrollTrustRail = (direction: "prev" | "next") => {
    const rail = trustRailRef.current;
    const nextIndex = Math.min(
      trustPoints.length - 1,
      Math.max(
        0,
        activeTrustImage + (direction === "next" ? 1 : -1),
      ),
    );

    setActiveTrustImage(nextIndex);

    if (!rail) return;

    const maxScrollLeft = rail.scrollWidth - rail.clientWidth;
    const targetScrollLeft =
      trustPoints.length > 1
        ? (maxScrollLeft / (trustPoints.length - 1)) * nextIndex
        : 0;

    rail.scrollTo({
      left: targetScrollLeft,
      behavior: "auto",
    });
  };

  return (
    <section
      id="trust"
      className="trust-section relative isolate overflow-hidden bg-[#fffdf7] px-5 pb-0 pt-16 text-[#05224a] sm:px-8 lg:px-[18px]"
    >
      <div className="mx-auto max-w-[1720px]">
        <div className="trust-heading mx-auto max-w-[1180px] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37]">
            DPS At A Glance
          </p>
          <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] max-xl:text-[36px] max-lg:whitespace-normal max-md:text-[28px]">
            Why Parents Trust Our DPS School
          </h2>
        </div>

        <div className="mt-14 grid gap-4 xl:grid-cols-[1.05fr_1.35fr]">
          <div className="trust-photo relative min-h-[540px] overflow-hidden max-xl:min-h-[400px]">
            {trustPoints.map((point, index) => (
              <div
                key={point.image}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-150 ease-out ${
                  activeTrustImage === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                style={{ backgroundImage: `url("${point.image}")` }}
                aria-hidden={activeTrustImage !== index}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#041f3b]/72 via-[#041f3b]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-[360px] text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd45c]">
                {String(activeTrustImage + 1).padStart(2, "0")} /{" "}
                {String(trustPoints.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-[28px] font-black leading-tight tracking-[-0.03em]">
                {activeTrustPoint.title}
              </h3>
            </div>
          </div>

          <div className="min-w-0">
            <div
              ref={trustRailRef}
              className="trust-cards flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {trustPoints.map((point, index) => (
                <article
                  key={point.title}
                  className={`trust-card group relative min-h-[490px] w-[64vw] max-w-[360px] shrink-0 snap-start overflow-hidden transition-transform duration-150 ease-out ${
                    activeTrustImage === index
                      ? "scale-[1.01]"
                      : "scale-100"
                  } ${point.color} ${point.text}`}
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
                    <h3 className="trust-icon max-w-[300px] text-[34px] font-semibold leading-[1.04] tracking-[-0.03em] max-md:text-[30px]">
                      {point.title}
                    </h3>
                    <p className="mt-4 max-w-[250px] text-[14px] font-semibold leading-6 opacity-80">
                      {point.detail}
                    </p>
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
