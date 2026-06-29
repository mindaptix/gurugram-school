"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { DpsCommitment } from "@/components/vision/DpsCommitment";
import { FamilyPromises } from "@/components/vision/FamilyPromises";
import { FutureSkills } from "@/components/vision/FutureSkills";
import { KnowledgeComparison } from "@/components/vision/KnowledgeComparison";
import { ManifestoSection } from "@/components/vision/ManifestoSection";
import { SchoolExperience } from "@/components/vision/SchoolExperience";
import { VisionCta } from "@/components/vision/VisionCta";
import { VisionHero } from "@/components/vision/VisionHero";
import { VisionMissionCards } from "@/components/vision/VisionMissionCards";
import { WhatWeBelieve } from "@/components/vision/WhatWeBelieve";
import { WhyAnotherSchool } from "@/components/vision/WhyAnotherSchool";

export default function VisionPage() {
  return (
    <main className="vision-page min-h-screen bg-white text-[#05224a]">
      <SiteNavbar />
      <VisionHero />
      <WhyAnotherSchool />
      <WhatWeBelieve />
      <FutureSkills />
      <KnowledgeComparison />
      <DpsCommitment />
      <SchoolExperience />
      <VisionMissionCards />
      <FamilyPromises />
      <ManifestoSection />
      <VisionCta />
      <SiteFooter />
    </main>
  );
}
