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
                ? "روبوت أدا (ADA Robot) - منصة الروبوتات الحيوية والذكاء الاصطناعي التفاعلي متعدد الوسائط بمحاكاة 17 مشغل سيرفو (Actuators) لعضلات الوجه البشري."
                : "ADA Robot — Biomechatronic 17-actuator facial robotic system with real-time multimodal AI emotion recognition."}
            </p>
            <div style={{ fontSize: "0.82rem", color: "var(--accent-magenta)", fontStyle: "italic" }}>
              {isAr ? "« إننا نهمس بالأمل »" : "« Designed to understand »"}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#FFFFFF", marginBottom: "16px" }}>
              {isAr ? "التنقل السريع" : "System Matrix"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem" }}>
              <a href="#hero" className="nav-item-link">{isAr ? "الرئيسية" : "Home"}</a>
              <a href="#neural" className="nav-item-link">{isAr ? "المعمارية العصبية" : "Neural Pipeline"}</a>
              <a href="#matrix" className="nav-item-link">{isAr ? "المصفوفة والجوائز" : "Matrix & Evolution"}</a>
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
            <span>المهندسة دعاء الابراهيم</span>
            <span>•</span>
            <span>University of Aleppo</span>
            <span>•</span>
            <span>InMoov V2 Biomechatronics</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
