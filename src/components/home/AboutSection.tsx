import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="about-section bg-white px-5 py-16 sm:px-8 lg:px-[74px] lg:py-24"
    >
      <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
        <div className="relative mx-auto w-fit lg:mx-0">
          <Image
            src="/half-logo.png"
            alt="Delhi Public School SPR Gurugram emblem"
            width={400}
            height={400}
            sizes="280px"
            className="h-[220px] w-auto object-contain sm:h-[250px] lg:h-[280px]"
          />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#006b37]">
            About Our School
          </p>

          <h2 className="mt-4 text-[38px] font-bold leading-[1.1] tracking-[-0.02em] text-[#05224a] max-xl:text-[32px] max-md:text-[26px]">
            A Legacy of Excellence for Nursery to Class 12
          </h2>

          <p className="mt-5 max-w-[680px] text-[17px] font-normal leading-[1.75] tracking-normal text-[#4b5563]">
            We carry the legacy of excellence under Delhi Public School, shaping
            a premier CBSE school in Gurugram where academics, personality
            development, values, discipline, and leadership grow together.
          </p>

          <a
            href="#admissions"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#05224a] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition duration-300 hover:bg-[#006b37]"
          >
            Explore Admissions <span className="text-base leading-none">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
