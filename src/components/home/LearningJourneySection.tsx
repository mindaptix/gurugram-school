import { academicPrograms, programCardThemes } from "@/data/home-content";

export function LearningJourneySection() {
  return (
    <section
      id="academics"
      className="learning-journey-section relative isolate overflow-hidden bg-[#05224a] px-5 pb-16 pt-16 text-white sm:px-8 lg:px-[74px]"
    >
      <div className="relative z-10 mx-auto max-w-[1920px]">
        <div className="program-heading relative z-10 mx-auto text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f6c343]">
            Our Programs
          </p>
          <h2 className="mt-4 text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-white max-xl:text-[36px] max-md:text-[28px]">
            Academic Programs from Nursery to Class 12
          </h2>
        </div>

        <div className="program-grid relative z-10 mt-[94px] grid gap-2 md:grid-cols-2 xl:grid-cols-4">
          {academicPrograms.map((program, index) => (
            <article
              key={program.title}
              className={`program-card group relative min-h-[500px] overflow-hidden text-white transition duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(5,34,74,0.18)] ${programCardThemes[index].shell}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url(${program.image})` }}
              />
              <div
                className={`absolute inset-0 transition duration-700 ease-out group-hover:opacity-20 ${programCardThemes[index].imageOverlay}`}
              />
              <div className="absolute right-4 top-4 z-[1] h-28 w-28 translate-x-7 -translate-y-7 opacity-0 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                {programCardThemes[index].accentShape === "petal" && (
                  <>
                    <div
                      className={`absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-t-full ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute bottom-0 left-1/2 h-14 w-14 -translate-x-1/2 rounded-b-full ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute left-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-l-full ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute right-0 top-1/2 h-14 w-14 -translate-y-1/2 rounded-r-full ${programCardThemes[index].accent}`}
                    />
                  </>
                )}
                {programCardThemes[index].accentShape === "diamond" && (
                  <>
                    <div
                      className={`absolute left-1 top-1 h-12 w-12 rotate-45 rounded-[12px] ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute right-1 top-1 h-12 w-12 rotate-45 rounded-[12px] ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[12px] ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute bottom-1 left-1/2 h-12 w-12 -translate-x-1/2 rotate-45 rounded-[12px] ${programCardThemes[index].accent}`}
                    />
                  </>
                )}
                {programCardThemes[index].accentShape === "spark" && (
                  <>
                    <div
                      className={`absolute left-1/2 top-0 h-28 w-10 -translate-x-1/2 rounded-full ${programCardThemes[index].accent}`}
                    />
                    <div
                      className={`absolute left-0 top-1/2 h-10 w-28 -translate-y-1/2 rounded-full ${programCardThemes[index].accent}`}
                    />
                    <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
                  </>
                )}
                {programCardThemes[index].accentShape === "arc" && (
                  <>
                    <div
                      className={`absolute right-0 top-0 h-28 w-28 rounded-bl-[92px] ${programCardThemes[index].accent}`}
                    />
                    <div className="absolute right-[26px] top-[26px] h-12 w-12 rounded-full bg-white/18" />
                  </>
                )}
              </div>
              <div
                className={`absolute inset-x-0 bottom-0 h-[38%] transition-all duration-700 ease-out ${programCardThemes[index].bottom} ${programCardThemes[index].bottomHeight}`}
              />

              <div className="relative flex h-full min-h-[500px] flex-col justify-end px-[38px] pb-[34px]">
                <h3
                  className={`max-w-[300px] whitespace-nowrap text-[24px] font-medium leading-[1.18] tracking-normal transition duration-700 max-lg:max-w-full max-lg:whitespace-normal ${programCardThemes[index].bottomText}`}
                >
                  {program.title}
                </h3>
                <div className="mt-5 flex items-center justify-between gap-6">
                  <p
                    className={`whitespace-nowrap text-[12px] font-normal uppercase leading-none tracking-[0.16em] transition duration-700 ${programCardThemes[index].label}`}
                  >
                    {program.classes}
                  </p>
                  <a
                    href="#apply"
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center text-[42px] font-light leading-none transition duration-700 group-hover:translate-x-2 ${programCardThemes[index].arrow}`}
                    aria-label={`Explore ${program.title}`}
                  >
                    &#8594;
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
