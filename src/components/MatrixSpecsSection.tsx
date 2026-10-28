"use client";

import React from "react";
import { Sliders, Award, Cpu, Shield, Zap, Layers, CheckCircle } from "lucide-react";

interface MatrixSpecsSectionProps {
  lang: "ar" | "en";
}

export const MatrixSpecsSection: React.FC<MatrixSpecsSectionProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const specs = [
    { labelEn: "Facial Degrees of Freedom (DOF)", labelAr: "درجات الحرية الحركية (DOF)", val: "17 Actuators", sub: "JX PDI-11098 9g & 6221MG 20kg Servos" },
    { labelEn: "Facial Landmark Resolution", labelAr: "دقة شبكة تتبع الوجه", val: "468 Keypoints", sub: "MediaPipe 3D Mesh (Real time)" },
    { labelEn: "Emotion Recognition Latency", labelAr: "زمن استجابة تصنيف المشاعر", val: "< 45 ms", sub: "Hybrid CNN + XGBoost Execution" },
    { labelEn: "Microcontroller Bus", labelAr: "ناقل التحكم الإلكتروني", val: "Arduino C++", sub: "PWM Interpolated Actuator Bus" },
    { labelEn: "Chassis Fabrication", labelAr: "تصنيع الهيكل الخارجي", val: "PLA+ 3D Printing", sub: "InMoov V2 SolidWorks Assembly" },
    { labelEn: "Voice Pipeline", labelAr: "المعالجة والتوليف الصوتي", val: "Full-Duplex", sub: "Whisper ASR + GPT-2 + gTTS" },
  ];

  const awards = [
    {
      year: "2026",
      titleEn: "Silver Medal — Syrian Technocrats Foundation",
      titleAr: "الميدالية الفضية - مؤسسة التكنوقراط السوريون",
      descEn: "Awarded Silver Medal and ranked among the Top 5 pioneering electrical and mechanical engineering entrepreneurial projects across Syria.",
      descAr: "حاصلة على الميدالية الفضية من مؤسسة التكنوقراط السوريون ضمن ترتيب الـ Top 5 بمشاريع الهندسة الكهربائية والميكانيكية الريادية على مستوى سوريا.",
    },
    {
      year: "2025",
      titleEn: "1st Place in Entrepreneurial Projects — Tech Harvest (Sanad Youth)",
      titleAr: "المركز الأول بالمشاريع الريادية — مسابقة Tech Harvest (سند الشباب - حلب)",
      descEn: "Won 1st Place in entrepreneurial engineering projects at the Tech Harvest competition organized by Sanad Youth Development, Aleppo.",
      descAr: "حائزة على المركز الأول في فئة المشاريع الريادية بمسابقة Tech Harvest بالتعاون مع فريق سند الشباب التنموي في حلب.",
    },
    {
      year: "2025",
      titleEn: "Faculty Exhibition Award — Damascus HEMK",
      titleAr: "جائزة معرض كلية الهندسة الميكانيكية والكهربائية (HEMK) - دمشق",
      descEn: "Recognized as 'One of Aleppo University's Best Engineering Projects' for groundbreaking integration of biomechatronics and emotional AI.",
      descAr: "تم تكريم المشروع كأحد أفضل مشاريع جامعة حلب الهندسية للدمج المتطور بين الميكاترونيكس الحيوية والذكاء الاصطناعي التفاعلي.",
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
              <div className="matrix-spec-val" style={{ fontSize: "2rem", fontWeight: "800", color: "var(--text-pure)" }}>
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
            <h3 className="evolution-card-title" style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-pure)" }}>
              {isAr ? "التطور والاعتراف الأكاديمي والجوائز" : "Evolution, Awards & Academic Recognition"}
            </h3>
          </div>

          <div className="grid-3">
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
                <h4 className="evolution-item-title" style={{ fontSize: "1.08rem", fontWeight: "700", color: "var(--text-pure)", lineHeight: "1.45" }}>
                  {isAr ? aw.titleAr : aw.titleEn}
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
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
