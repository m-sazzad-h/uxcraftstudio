"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Testimonials from "@/components/landing/Testimonials";
import WorkGrid from "@/components/landing/WorkGrid";
import CaseStudy from "@/components/landing/CaseStudy";
import Differentiators from "@/components/landing/Differentiators";
import Process from "@/components/landing/Process";
import Services from "@/components/landing/Services";
import LeadForm from "@/components/landing/LeadForm";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function NeonAgencyLanding() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Testimonials />
      <WorkGrid />
      <CaseStudy />
      <Differentiators />
      <Process />
      <Services />
      <LeadForm />
      <FAQ />
      <Footer />

      {/* Subtle page-wide vignette */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{
        background:
          "radial-gradient(1200px 800px at 50% -10%, rgba(124,58,237,0.25), transparent), radial-gradient(800px 600px at 100% 10%, rgba(236,72,153,0.18), transparent)",
      }} />
    </main>
  );
}
