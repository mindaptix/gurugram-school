import { useEffect, useState } from "react";

export function useSectionFadeOpacity(sectionId: string) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const updateHeadingVisibility = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startPoint = viewportHeight * 0.22;
      const fadeDistance = Math.min(viewportHeight * 0.6, 500);
      const progress = Math.max(0, Math.min(1, (startPoint - rect.top) / fadeDistance));

      setOpacity(Math.max(0, 1 - progress));
    };

    updateHeadingVisibility();
    window.addEventListener("scroll", updateHeadingVisibility, { passive: true });
    window.addEventListener("resize", updateHeadingVisibility);

    return () => {
      window.removeEventListener("scroll", updateHeadingVisibility);
      window.removeEventListener("resize", updateHeadingVisibility);
    };
  }, [sectionId]);

  return opacity;
}
