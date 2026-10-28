"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NeuralArchitectureSection } from "@/components/NeuralArchitectureSection";
import { MatrixSpecsSection } from "@/components/MatrixSpecsSection";
import { InventorSpotlightSection } from "@/components/InventorSpotlightSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/layouts/Footer";

export default function Home() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load saved theme preference on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("ada_theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      }
    } catch {}
  }, []);

  // Sync HTML dir, lang, and theme attributes on change
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("ada_theme", theme);
    } catch {}
  }, [theme]);

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Cyber Ambient Background Grid & Radial Nebulas */}
      <div className="cyber-bg-grid" aria-hidden="true" />
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />

      {/* Floating Frosted Glass Navbar Pill (Screenshot Replica) */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Screenshot Replica with Animated Head & Arabic Whisper) */}
        <HeroSection
          lang={lang}
          onExploreInventor={() => {
            const el = document.getElementById("inventor-portal");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* 2. How ADA Works — Interaction, Teaching, Communication */}
        <NeuralArchitectureSection lang={lang} />

        {/* 3. For Whom + What Sets Us Apart + Future Horizons */}
        <MatrixSpecsSection lang={lang} />

        {/* 4. The Dedicated Sub-Portal for Eng. Duaa Alibrahim */}
        <InventorSpotlightSection lang={lang} />

        {/* 5. Direct Contact & Collaboration Channels */}
        <ContactSection lang={lang} />
      </main>

      {/* Futuristic Brand Footer */}
      <Footer
        lang={lang}
      />
    </div>
  );
}
