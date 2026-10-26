"use client";

import React from "react";
import { Sliders, Award, Cpu, Shield, Zap, Layers, CheckCircle } from "lucide-react";

interface MatrixSpecsSectionProps {
  lang: "ar" | "en";
}

export const MatrixSpecsSection: React.FC<MatrixSpecsSectionProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const specs = [
    { labelEn: "Facial Degrees of Freedom (DOF)", labelAr: "درجات الحرية الحركية (DOF)", val: "17 Motors", sub: "InMoov V2 Biomimetic Topology" },
    { labelEn: "Facial Landmark Resolution", labelAr: "دقة شبكة تتبع الوجه", val: "468 Keypoints", sub: "MediaPipe 3D Mesh Tracking" },
    { labelEn: "Emotion Recognition Latency", labelAr: "زمن استجابة تصنيف المشاعر", val: "< 45 ms", sub: "Hybrid CNN + XGBoost Execution" },
    { labelEn: "Microcontroller Bus", labelAr: "ناقل التحكم الإلكتروني", val: "Dual Arduino C++", sub: "PWM Interpolated Servo Control" },
    { labelEn: "Chassis Fabrication", labelAr: "تصنيع الهيكل الخارجي", val: "PLA+ 3D Printing", sub: "Reinforced SolidWorks Assembly" },
    { labelEn: "Voice Pipeline", labelAr: "المعالجة والتوليف الصوتي", val: "Full-Duplex", sub: "Whisper ASR + GPT-2 + gTTS" },
  ];

  const awards = [
    {
      year: "2025",
      titleEn: "Faculty Exhibition Award — Damascus HEMK",
      titleAr: "جائزة معرض كلية الهندسة الميكانيكية والكهربائية (HEMK) - دمشق",
      descEn: "Recognized as 'One of Aleppo University's Best Engineering Projects' for groundbreaking integration of biomechatronics and emotional AI.",
      descAr: "تم تكريم المشروع كأحد أفضل مشاريع جامعة حلب الهندسية للدمج المبتكر بين الميكاترونيكس الحيوية والذكاء الاصطناعي العاطفي.",
    },
    {
      year: "2024",
      titleEn: "Aleppo Chamber of Industry Practical Training",
      titleAr: "برنامج التدريب العملي - غرفة صناعة حلب وجامعتها",
      descEn: "Applied robotic systems integration, industrial microcontrollers, and electronic design methodologies.",
      descAr: "تطبيق عملي لتكامل الأنظمة الروبوتية، والمتحكمات الصناعية، ومنهجيات التصميم الإلكتروني الدقيق.",
    },
  ];

  return (
    <section id="matrix" className="section-padding" style={{ position: "relative" }}>
      <div className="container-ada">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="section-tag-badge">
            <Sliders size={14} />
            {isAr ? "مصفوفة المواصفات والجوائز" : "Matrix & Benchmarks"}
          </span>
          <h2 className="section-title">
            {isAr ? "المصفوفة التقنية والمكتسبات الهندسية" : "Technical Matrix & Validation"}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {isAr
              ? "مواصفات دقيقة وحقائق قياسية تبرهن الكفاءة العالية في هندسة النماذج الروبوتية المتقدمة."
              : "Rigorous hardware specifications and academic achievements validating ADA's performance benchmarks."}
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid-3" style={{ marginBottom: "60px" }}>
          {specs.map((item, i) => (
            <div
              key={i}
              className="glass-panel matrix-spec-card"
            >
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "500" }}>
                {isAr ? item.labelAr : item.labelEn}
              </div>
              <div style={{ fontSize: "2rem", fontWeight: "800", color: "#FFFFFF" }}>
                {item.val}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontFamily: "monospace" }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Milestones Box (Evolution) */}
        <div id="evolution" className="glass-panel evolution-card">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <Award size={28} color="#FF2E93" />
            <h3 style={{ fontSize: "1.6rem", fontWeight: "800", color: "#FFFFFF" }}>
              {isAr ? "التطور والاعتراف الأكاديمي والجوائز" : "Evolution, Awards & Academic Recognition"}
            </h3>
          </div>

          <div className="grid-2">
            {awards.map((aw, idx) => (
              <div
                key={idx}
                className="evolution-item"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      background: "rgba(0, 242, 254, 0.15)",
                      border: "1px solid rgba(0, 242, 254, 0.4)",
                      padding: "3px 12px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.78rem",
                      color: "var(--accent-cyan)",
                      fontWeight: "700",
                    }}
                  >
                    {aw.year}
                  </span>
                  <Shield size={18} color="var(--accent-magenta)" />
                </div>
                <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#FFFFFF" }}>
                  {isAr ? aw.titleAr : aw.titleEn}
                </h4>
                <p style={{ fontSize: "0.92rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                  {isAr ? aw.descAr : aw.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
