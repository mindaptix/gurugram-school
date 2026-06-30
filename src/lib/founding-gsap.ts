import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

let registered = false;

export function registerFoundingGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function initFoundingReveal(
  sectionRef: RefObject<HTMLElement | null>,
  selector = "[data-founding-reveal]",
) {
  const section = sectionRef.current;
  if (!section) return () => {};

  registerFoundingGsap();

  const ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>(selector, section).forEach((el) => {
      const delay = Number(el.dataset.revealDelay ?? 0);
      const y = Number(el.dataset.revealY ?? 44);

      gsap.fromTo(
        el,
        { y, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, section);

  return () => ctx.revert();
}

export { gsap, ScrollTrigger };
