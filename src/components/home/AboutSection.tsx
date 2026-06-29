import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="about-section bg-white px-5 py-16 sm:px-8 lg:px-[74px] lg:py-20"
    >
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[340px_1fr] lg:items-center">
        <div className="relative mx-auto h-[260px] w-[260px] overflow-hidden rounded-full bg-white lg:mx-0">
          <Image
            src="/half-logo.png"
            alt="Delhi Public School SPR Gurugram emblem"
            fill
            sizes="260px"
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-[16px] font-black uppercase leading-none tracking-[0.24em] text-[#111111] max-sm:text-xs">
            About Our DPS School
          </p>

          <h2 className="mt-5 max-w-none whitespace-nowrap text-[36px] font-bold leading-[1.08] tracking-[-0.02em] text-[#111111] max-xl:text-3xl max-lg:whitespace-normal max-md:text-2xl">
            A Legacy of Excellence for Nursery to Class 12
          </h2>

          <p className="mt-6 max-w-[980px] text-[24px] font-medium leading-[1.35] tracking-normal text-[#111111] max-xl:text-2xl max-md:text-xl">
            We carry the legacy of excellence under Delhi Public School, shaping a Best
            CBSE school in Gurugram where academics, personality development, values,
            discipline, and leadership grow together.
          </p>

          <a
            href="#admissions"
            className="mt-7 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#08b985] px-7 text-[13px] font-black uppercase tracking-[0.16em] text-white"
          >
            Explore Admissions <span className="ml-2 text-base leading-none">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
