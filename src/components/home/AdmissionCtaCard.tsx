import Image from "next/image";

export function AdmissionCtaCard() {
  return (
    <section id="admissions" className="admission-quick-cta bg-white px-5 py-0 sm:px-8 lg:px-[74px]">
      <div className="mx-auto max-w-[1500px]">
        <article className="admission-cta-banner overflow-hidden rounded-[18px] leading-none shadow-[0_28px_90px_rgba(0,107,55,0.14)]">
          <Image
            src="/cta2.png"
            alt="Admissions Open Nursery to Class 12 at DPS SPR Gurugram"
            width={1916}
            height={821}
            className="block h-auto w-full"
            sizes="(min-width: 1500px) 1500px, 100vw"
            priority
          />
        </article>
      </div>
    </section>
  );
}
