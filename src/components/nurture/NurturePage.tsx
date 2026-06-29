"use client";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { CharacterCentre } from "@/components/nurture/CharacterCentre";
import { ClosingManifesto } from "@/components/nurture/ClosingManifesto";
import { GlobalCitizen } from "@/components/nurture/GlobalCitizen";
import { GraduateProfile } from "@/components/nurture/GraduateProfile";
import { LifelongLearner } from "@/components/nurture/LifelongLearner";
import {
  CompassionateLeader,
  ConfidentCommunicator,
  CreativeProblemSolver,
  CuriousThinker,
  EthicalDecisionMaker,
} from "@/components/nurture/NurtureArchetypes";
import { NurtureCta } from "@/components/nurture/NurtureCta";
import { NurtureHero } from "@/components/nurture/NurtureHero";
import { OurHope } from "@/components/nurture/OurHope";

export default function NurturePage() {
  return (
    <main className="nurture-page min-h-screen bg-white text-[#05224a]">
      <SiteNavbar />
      <NurtureHero />
      <GraduateProfile />
      <CuriousThinker />
      <CreativeProblemSolver />
      <CompassionateLeader />
      <ConfidentCommunicator />
      <EthicalDecisionMaker />
      <GlobalCitizen />
      <LifelongLearner />
      <CharacterCentre />
      <OurHope />
      <ClosingManifesto />
      <NurtureCta />
      <SiteFooter />
    </main>
  );
}
