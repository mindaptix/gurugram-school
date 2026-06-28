import { useEffect, useState } from "react";

export function useNavbarVisibility() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (currentScrollY < 80) {
        setIsNavbarVisible(true);
      } else if (scrollDifference > 8) {
        setIsNavbarVisible(false);
      } else if (scrollDifference < -8) {
        setIsNavbarVisible(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isNavbarVisible;
}
