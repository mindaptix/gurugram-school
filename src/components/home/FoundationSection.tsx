import { foundationItems } from "@/data/home-content";

export function FoundationSection() {
  return (
    <section
      id="foundation"
      className="foundation-section relative isolate bg-[#fffdf7] px-5 py-14 text-[#05224a] sm:px-8 lg:px-[86px] lg:py-20"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[38%] bg-[#f8fafc] max-lg:hidden" />

      <div className="mx-auto grid max-w-[1680px] gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16">
        <div className="foundation-sticky relative z-10 flex items-center justify-center text-center lg:sticky lg:top-32 lg:self-start lg:pt-6">
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

        <div className="foundation-scroll relative z-10 flex flex-col gap-12 overflow-visible pb-10 pt-4 lg:gap-16 lg:pb-20 lg:pt-8">
          {foundationItems.map((item, index) => (
            <article
              key={item.title}
              className="foundation-image-card group relative ml-auto w-full max-w-[760px]"
              style={{ animationDelay: `${index * 120}ms` }}
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

              <div
                className={`relative overflow-hidden rounded-[0_36px_36px_0] shadow-[0_18px_48px_rgba(5,34,74,0.09)] ${
                  index === 0 ? "min-h-[420px] max-md:min-h-[340px]" : "min-h-[320px] max-md:min-h-[280px]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05224a]/28 via-transparent to-transparent" />
              </div>

              <div
                className={`foundation-plus absolute z-20 grid place-items-center rounded-full bg-white shadow-[0_16px_40px_rgba(5,34,74,0.14)] ${
                  index === 0 ? "right-4 bottom-10 h-[72px] w-[72px]" : "right-4 bottom-8 h-[64px] w-[64px]"
                }`}
              >
                <span
                  className={`foundation-plus-core grid place-items-center rounded-full bg-[#111111] font-light leading-none text-[#006b37] ${
                    index === 0 ? "h-[48px] w-[48px] text-[32px]" : "h-[42px] w-[42px] text-[28px]"
                  }`}
                >
                  +
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
