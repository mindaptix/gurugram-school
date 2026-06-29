import type { Metadata } from "next";

import FoundingStoryPage from "@/components/founding-story/FoundingStoryPage";

export const metadata: Metadata = {
  title: "Founding Story | Delhi Public School SPR Gurugram",
  description:
    "Discover the founding story of Delhi Public School SPR Gurugram — our vision, milestones, and legacy in Gurugram.",
};

export default function Page() {
  return <FoundingStoryPage />;
}
