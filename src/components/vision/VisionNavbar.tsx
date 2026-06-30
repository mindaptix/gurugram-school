"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navLinks } from "@/data/home-content";

export function VisionNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="vision-navbar absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-end">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-[50px] shrink-0 items-center gap-3 rounded-full bg-[#006b37] px-5 text-[12px] font-black uppercase tracking-[0.18em] text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:bg-[#1b3b22] sm:h-[54px] sm:px-7"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span className="block h-[2px] w-6 bg-white" />
              <span className="block h-[2px] w-6 bg-white" />
              <span className="block h-[2px] w-6 bg-white" />
            </span>
            Menu
          </button>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          className="vision-menu-overlay fixed inset-0 z-[200] flex flex-col bg-[#006b37] text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#ffd400]/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-black/20 blur-3xl" />

          <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5 lg:px-12">
            <Link
              href="/"
              onClick={closeMenu}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition hover:opacity-90 sm:rounded-lg sm:px-4 sm:py-2.5"
            >
              <Image
                src="/logo11.png"
                alt="DPS SPR Gurugram"
                width={360}
                height={96}
                className="h-14 w-auto object-contain sm:h-16 lg:h-[72px]"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/20 sm:h-12 sm:w-12"
              aria-label="Close menu"
            >
              <span className="relative block h-5 w-5 before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-5 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 before:bg-white after:absolute after:left-1/2 after:top-1/2 after:h-[2px] after:w-5 after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45 after:bg-white" />
            </button>
          </div>

          <div className="relative z-10 flex-1 overflow-y-auto overscroll-contain">
            <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16 lg:px-12 lg:py-14">
              <div className="vision-menu-intro lg:sticky lg:top-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#ffd400]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd400]">
                    DPS SPR Gurugram
                  </p>
                </div>
                <h2 className="vision-serif text-[34px] font-semibold leading-[1.05] sm:text-[42px] lg:text-[48px]">
                  Explore Our World
                </h2>
                <p className="mt-4 max-w-[420px] text-[15px] leading-7 text-white/72 sm:text-[16px]">
                  Navigate academics, admissions, campus life, and the philosophy that shapes every
                  learner at Delhi Public School SPR Gurugram.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#tour"
                    onClick={closeMenu}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#ffd400] px-5 text-[11px] font-black uppercase tracking-[0.14em] text-[#1b3b22] transition hover:bg-white"
                  >
                    Campus Visit
                  </Link>
                  <Link
                    href="/#admissions"
                    onClick={closeMenu}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/30 px-5 text-[11px] font-black uppercase tracking-[0.14em] text-white transition hover:bg-white/10"
                  >
                    Admissions
                  </Link>
                </div>
              </div>

              <nav className="vision-menu-nav flex flex-col" aria-label="Menu navigation">
                {navLinks.map(([label, href], index) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={closeMenu}
                    className="vision-menu-link group flex items-center gap-4 border-b border-white/10 py-4 transition sm:gap-5 sm:py-5"
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    <span className="w-8 shrink-0 text-[12px] font-black tracking-[0.12em] text-[#ffd400]/80 sm:text-[13px]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[22px] font-bold leading-tight transition group-hover:translate-x-1 group-hover:text-[#ffd400] sm:text-[28px] lg:text-[32px]">
                      {label}
                    </span>
                    <span
                      className="text-xl text-white/30 transition group-hover:translate-x-1 group-hover:text-[#ffd400] sm:text-2xl"
                      aria-hidden="true"
                    >
                      &rarr;
                    </span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="relative z-10 shrink-0 border-t border-white/10 px-5 py-4 sm:px-8 lg:px-12">
            <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
              <span>Delhi Public School · Sector 68, Gurugram</span>
              <Link
                href="/#connect"
                onClick={closeMenu}
                className="text-[#ffd400] transition hover:text-white"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
