"use client";

import React from "react";
import { ArrowDown, Cpu } from "lucide-react";
import { AnimatedCyberHead } from "./AnimatedCyberHead";

interface HeroSectionProps {
  lang: "ar" | "en";
  onExploreInventor?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExploreInventor,
}) => {
  const isAr = lang === "ar";

  return (
    <section id="hero" className={`hero-wrapper ${isAr ? "hero-rtl" : "hero-ltr"}`}>
      <div className="hero-stage-container">
        
        {/* ========================================================
            CYBERNETIC ROBOTIC HEAD
            - English (LTR): Positioned on left edge, ~half face emerging from left, facing right.
            - Arabic (RTL): Positioned on right edge, ~half face emerging from right, flipped facing left.
            ======================================================== */}
        <div className={`hero-face-anchor ${isAr ? "anchor-right" : "anchor-left"}`}>
          <AnimatedCyberHead lang={lang} />
        </div>

        {/* ========================================================
            HERO CONTENT COLUMN
            - English (LTR): On the right, right-aligned, matching screenshot exactly.
            - Arabic (RTL): On the left, left-aligned in RTL flow.
            ======================================================== */}
        <div className={`hero-content-anchor ${isAr ? "content-left" : "content-right"}`}>
          
          {/* Mission Statement Paragraph (Word-for-word from screenshot) */}
          <p className="hero-paragraph-statement">
            {isAr
              ? "ملف احترافي يعرض مفاهيم متقدمة في الذكاء الاصطناعي، والروبوتات، والأتمتة الذكية. يركز على بناء أنظمة ذكية، وحلول قائمة على البيانات، وتقنيات جاهزة للمستقبل صُممت لحل مشكلات العالم الحقيقي بدقة وابتكار."
              : "A professional portfolio presenting advanced concepts in artificial intelligence, robotics, and smart automation. Focused on building intelligent systems, data-driven solutions, and future-ready technologies designed to solve real-world problems with precision and innovation."}
          </p>

          {/* Prominent Main Heading (From screenshot) */}
          <div className="hero-title-group">
            <h1 className="hero-main-title">
              {isAr ? "أدا روبوت" : "Ada Robot"}
            </h1>

            {/* Futuristic Subtitle & System Tagline */}
            <div className="hero-tech-tagline">
              <span className="badge-neural">
                <span className="badge-neural-dot" />
                {isAr ? "صُمم ليفهم • DESIGNED TO UNDERSTAND" : "DESIGNED TO UNDERSTAND • INMOOV V2"}
              </span>
            </div>
          </div>

          {/* Quick Actions (Minimalist and subtle so it preserves screenshot elegance) */}
          <div className="hero-quick-actions">
            {onExploreInventor && (
              <button
                onClick={onExploreInventor}
                className="btn-ada-glass"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 20px",
                  fontSize: "0.88rem",
                  borderRadius: "var(--radius-full)",
                }}
              >
                <Cpu size={16} />
                <span>{isAr ? "المهندسة دعاء" : "Eng. Duaa"}</span>
              </button>
            )}

            <a
              href="#neural"
              className="hero-scroll-pill"
              aria-label="Scroll to Neural Architecture"
            >
              <span>{isAr ? "استكشف النظام" : "Explore Matrix"}</span>
              <ArrowDown size={14} className="animate-bounce-subtle" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
