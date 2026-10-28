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
            ======================================================== */}
        <div className={`hero-content-anchor ${isAr ? "content-left" : "content-right"}`}>
          
          {/* Mission Statement Paragraph */}
          <p className="hero-paragraph-statement">
            {isAr
              ? "رفيق روبوتي قيد التطوير، نعمل ليكون داعماً للأطفال في التعلم والتواصل والتفاعل بثقة ومتعة. مصمَّم بالكاميرا الذكية والذكاء الاصطناعي ليرى تعبيرات الوجه ويستجيب بحركات وتعبيرات مشجعة."
              : "A robotic companion in development — built to support children in learning, communication, and social interaction with confidence and joy. Powered by smart vision and AI to see facial expressions and respond with encouraging movements."}
          </p>

          {/* Prominent Main Heading */}
          <div className="hero-title-group">
            <h1 className="hero-main-title">
              {isAr ? "آدا" : "ADA"}
            </h1>

            {/* Futuristic Subtitle & Tagline */}
            <div className="hero-tech-tagline">
              <span className="badge-neural">
                <span className="badge-neural-dot" />
                {isAr ? "إننا نهمس بالأمل • WE WHISPER HOPE" : "WE WHISPER HOPE • CHILDREN'S ROBOTIC COMPANION"}
              </span>
            </div>
          </div>

          {/* Quick Actions */}
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
              href="#how-ada-works"
              className="hero-scroll-pill"
              aria-label="Scroll to How ADA Works"
            >
              <span>{isAr ? "كيف يعمل آدا؟" : "How ADA Works"}</span>
              <ArrowDown size={14} className="animate-bounce-subtle" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
