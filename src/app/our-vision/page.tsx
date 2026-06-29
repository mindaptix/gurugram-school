import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

import VisionPage from "@/components/vision/VisionPage";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Our Vision | Delhi Public School SPR Gurugram",
  description:
    "Discover the vision of Delhi Public School SPR Gurugram — education for the world ahead, rooted in excellence, character, and future-ready learning.",
};

export default function Page() {
  return (
    <div className={playfair.variable}>
      <VisionPage />
    </div>
  );
}
