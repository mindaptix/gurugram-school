"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { FoundingCtaSection } from "@/components/founding-story/FoundingCtaSection";
import { FoundingHero } from "@/components/founding-story/FoundingHero";
import { FoundingQuoteSection } from "@/components/founding-story/FoundingQuoteSection";
import { GenesisSection } from "@/components/founding-story/GenesisSection";
import { GurugramSection } from "@/components/founding-story/GurugramSection";
import { MilestonesSection } from "@/components/founding-story/MilestonesSection";
import { PillarsSection } from "@/components/founding-story/PillarsSection";

export default function FoundingStoryPage() {
  return (
    <main className="founding-page min-h-screen bg-[#fffdf7] text-[#1b3b22]">
      <FoundingHero />
      <GenesisSection />
      <FoundingQuoteSection />
      <MilestonesSection />
      <PillarsSection />
      <GurugramSection />
      <FoundingCtaSection />
      <SiteFooter />
    </main>
  );
}
