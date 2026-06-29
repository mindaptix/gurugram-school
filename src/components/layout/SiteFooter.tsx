import Image from "next/image";

import { navLinks } from "@/data/home-content";

export function SiteFooter() {
  return (
    <footer className="site-footer relative isolate overflow-hidden bg-[#0f6734] px-5 py-14 text-white sm:px-8 lg:px-[74px]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_8%_12%,rgba(255,212,0,0.12),transparent_25%),radial-gradient(circle_at_92%_8%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(135deg,#136a37_0%,#0f6734_48%,#0a4f28_100%)]" />
      <div className="footer-leaf-pattern pointer-events-none absolute inset-0 -z-10 opacity-25" />

      <div className="mx-auto max-w-[1720px]">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start lg:gap-12">
          <div>
            <div className="relative h-[96px] w-[250px] overflow-hidden rounded-[16px] bg-white p-3 shadow-[8px_8px_0_rgba(255,212,0,0.22)]">
              <Image
                src="/logo11.png"
                alt="Delhi Public School SPR Gurugram logo"
                fill
                sizes="250px"
                className="object-contain p-3"
              />
            </div>
            <p className="mt-8 max-w-[360px] text-[18px] font-semibold leading-8 text-white">
              Delhi Public School SPR Gurugram stands out as a future-ready CBSE
              school for confident learners.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-black uppercase leading-none tracking-normal text-white">
              Quick Links
            </h3>
            <nav
              className="mt-7 flex flex-col gap-4 text-[18px] font-semibold leading-none text-white"
              aria-label="Footer navigation"
            >
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="footer-dps-link group inline-flex items-center gap-3 transition hover:text-[#ffd400]"
                >
                  <span className="text-[24px] leading-none text-white/90 transition group-hover:translate-x-1 group-hover:text-[#ffd400]">
                    &#8250;
                  </span>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[30px] font-black uppercase leading-none tracking-normal text-white">
              Get In Touch
            </h3>
            <div className="mt-7 grid gap-6 text-[18px] font-semibold leading-7 text-white">
              <div>
                <p className="text-[16px] text-white/80">Address</p>
                <p className="mt-1 font-bold">Sector 68, Gurugram, Haryana, India</p>
              </div>
              <div>
                <p className="text-[16px] text-white/80">Phone</p>
                <p className="mt-1 font-bold">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-[16px] text-white/80">Email</p>
                <p className="mt-1 font-bold">admissions@dpsgurugram.edu.in</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 h-px bg-white/70" />

        <p className="mt-7 text-center text-[16px] font-semibold text-white/90">
          &copy; 2026. DPS SPR Gurugram All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
