"use client";

import React from "react";
import { Mail } from "lucide-react";
import { AdaLogo, LinkedinIcon } from "../components/AdaSvgAssets";

interface FooterProps {
  lang: "ar" | "en";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === "ar";

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #07020E 0%, #030006 100%)",
        borderTop: "1px solid rgba(152, 21, 89, 0.3)",
        paddingTop: "70px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="container-ada">
        <div className="grid-3" style={{ marginBottom: "50px", gap: "36px" }}>
          
          {/* Col 1: Brand & Identity */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <AdaLogo variant="gradient" width={160} height={70} />
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              {isAr
                ? "آدا — رفيق روبوتي تفاعلي قيد التطوير، مصمَّم ليدعم الأطفال في التعلم والتواصل والتفاعل بثقة ومتعة، مع تركيز خاص على ذوي متلازمة داون وطيف التوحد."
                : "ADA — An interactive robotic companion in development, designed to support children in learning, communication, and social interaction, with a special focus on Down syndrome and autism spectrum disorder."}
            </p>
            <div style={{ fontSize: "0.82rem", color: "var(--accent-magenta)", fontStyle: "italic" }}>
              {isAr ? "« إننا نهمس بالأمل »" : "« We Whisper Hope »"}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#FFFFFF", marginBottom: "16px" }}>
              {isAr ? "التنقل السريع" : "System Matrix"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <a href="#hero" className="nav-item-link">{isAr ? "الرئيسية" : "Home"}</a>
              <a href="#how-ada-works" className="nav-item-link">{isAr ? "كيف يعمل آدا" : "How ADA Works"}</a>
              <a href="#matrix" className="nav-item-link">{isAr ? "لمن المشروع" : "For Whom"}</a>
              <a href="#evolution" className="nav-item-link">{isAr ? "ما الذي يميزنا" : "What Sets Us Apart"}</a>
              <a href="#inventor-portal" className="nav-item-link" style={{ color: "var(--accent-cyan)", fontWeight: "600" }}>
                {isAr ? "المهندسة دعاء" : "Eng. Duaa"}
              </a>
            </div>
          </div>

          {/* Col 3: Research & Creator */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#FFFFFF", marginBottom: "16px" }}>
              {isAr ? "مطورة المشروع والأبحاث" : "Developer & Research"}
            </h4>
            <p style={{ fontSize: "0.88rem", color: "var(--text-lavender)", lineHeight: "1.6", marginBottom: "10px" }}>
              <strong>{isAr ? "المهندسة دعاء الابراهيم" : "Eng. Duaa Alibrahim"}</strong><br />
              {isAr ? "مهندسة ميكاترونيكس (التخرج: أكتوبر 2026) وباحثة ذكاء اصطناعي" : "Mechatronics Engineer (Grad: Oct 2026) & AI Robotics Researcher"}<br />
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                {isAr ? "جامعة حلب - كلية الهندسة الكهربائية والإلكترونية" : "University of Aleppo — EEE Faculty"}
              </span>
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              <a
                href="https://linkedin.com/in/duaa-alibrahim"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-cyan)", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.82rem" }}
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:duaaalibrahim6@gmail.com"
                style={{ color: "var(--text-lavender)", display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "0.82rem" }}
              >
                <Mail size={14} />
                <span>{isAr ? "البريد المباشر" : "Direct Email"}</span>
              </a>
            </div>
          </div>

        </div>

        {/* SEO Tagline & Meta Strip */}
        <div
          style={{
            borderTop: "1px solid rgba(152, 21, 89, 0.2)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            fontSize: "0.8rem",
            color: "var(--text-dim)",
          }}
        >
          <div>
            © 2026 ADA Robot & Eng. Duaa Alibrahim (دعاء الابراهيم). {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </div>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <span>ADA Robot</span>
            <span>•</span>
            <span>آدا — رفيق روبوتي للأطفال</span>
            <span>•</span>
            <span>المهندسة دعاء الابراهيم</span>
            <span>•</span>
            <span>إننا نهمس بالأمل</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
