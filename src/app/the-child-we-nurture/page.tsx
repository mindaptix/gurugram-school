import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import NurturePage from "@/components/nurture/NurturePage";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Child We Nurture | Delhi Public School SPR Gurugram",
  description:
    "Discover the qualities, character, and values DPS SPR Gurugram nurtures in every child — curious thinkers, compassionate leaders, and future-ready citizens.",
};

export default function Page() {
  return (
    <div className={playfair.variable}>
      <NurturePage />
    </div>
  );
}
