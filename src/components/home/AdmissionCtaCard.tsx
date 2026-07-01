import { admissionCta } from "@/data/home-content";

export function AdmissionCtaCard() {
  return (
    <section
      id="admissions"
      className="admission-quick-cta relative z-30 -mb-2 mt-16 scroll-mt-24 overflow-visible bg-[#fffdf7] px-5 pb-0 pt-0 sm:-mb-3 sm:mt-20 sm:px-8 lg:-mb-4 lg:mt-28 lg:px-[74px] xl:mt-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <article className="admission-cta-panel relative overflow-visible rounded-[24px] bg-[#006232] shadow-[0_22px_70px_rgba(0,98,50,0.22)] sm:rounded-[28px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]" aria-hidden="true">
            <div className="absolute left-[38%] top-6 grid grid-cols-4 gap-2 opacity-[0.18]">
              {Array.from({ length: 12 }).map((_, index) => (
                <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
              ))}
            </div>
          </div>

          <div className="relative z-10 grid items-center gap-2 px-5 py-6 sm:px-8 sm:py-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(180px,0.38fr)] lg:gap-4 lg:px-10 lg:py-8 xl:px-12">
            <div className="flex flex-col justify-center pr-[170px] sm:pr-[200px] lg:pr-[360px] xl:pr-[400px]">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffd400] sm:text-[12px]">
                {admissionCta.eyebrow}
              </p>

              <h2 className="mt-3 text-[22px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:mt-4 sm:text-[28px] lg:text-[32px] lg:leading-tight lg:whitespace-nowrap xl:text-[36px]">
                {admissionCta.title} {admissionCta.titleLine2}
              </h2>

              <p className="mt-3 max-w-[560px] text-[14px] font-medium leading-7 text-white/88 sm:mt-4 sm:text-[15px]">
                {admissionCta.description}
              </p>

              <span
                className="mt-4 block h-[3px] w-14 rounded-full bg-[#ffd400]"
                aria-hidden="true"
              />

              <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={admissionCta.applyHref}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#ffd400] px-5 text-[12px] font-black uppercase tracking-[0.16em] text-[#006232] transition hover:-translate-y-0.5 hover:bg-white sm:min-h-[48px] sm:px-6"
                >
                  {admissionCta.applyLabel}
                  <span aria-hidden="true">&rarr;</span>
                </a>
                <a
                  href={admissionCta.visitHref}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/70 bg-transparent px-5 text-[12px] font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:min-h-[48px] sm:px-6"
                >
                  {admissionCta.visitLabel}
                </a>
              </div>
            </div>

            <div className="hidden min-h-[220px] lg:min-h-[235px] lg:block" aria-hidden="true" />
          </div>

          <div className="pointer-events-none absolute bottom-0 right-3 z-20 bg-transparent sm:right-5 lg:right-10 lg:translate-x-0 xl:right-12">
            <img
              src={admissionCta.image}
              alt="Student with graduation cap exploring through a magnifying glass"
              width={474}
              height={527}
              draggable={false}
              className="h-auto w-[250px] -translate-x-2 translate-y-1 bg-transparent object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.18)] sm:w-[288px] sm:-translate-x-3 sm:translate-y-2 lg:w-[352px] lg:-translate-x-4 lg:translate-y-2 xl:w-[382px] xl:translate-y-3"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
