"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Award,
  BookOpen,
  Heart,
  Code2,
  Terminal,
  Cpu,
  Mail,
  MapPin,
  FileText,
  UserCheck,
  ChevronRight,
  Globe,
  Star,
} from "lucide-react";
import { LinkedinIcon } from "./AdaSvgAssets";

interface InventorSpotlightProps {
  lang: "ar" | "en";
}

export const InventorSpotlightSection: React.FC<InventorSpotlightProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const [activeTab, setActiveTab] = useState<"about" | "skills" | "experience" | "impact" | "certs">("about");

  const skills = {
    programming: ["Python (TensorFlow, OpenCV, MediaPipe)", "Arduino C / C++", "MATLAB", "ROS (Robot Operating System - مستوى مبتدئ / Beginner)"],
    ai_ml: ["Facial Emotion Recognition (FER-2013)", "CNN + XGBoost Hybrid Models", "OpenAI Whisper ASR", "GPT-2 NLP Pipeline", "MediaPipe FaceMesh (468 pts Real-Time)"],
    hardware: ["InMoov V2 Robotic Assembly", "Biomechanical Actuators (17 Servos: JX PDI-11098 9g & 6221MG 20kg)", "SolidWorks 3D CAD & Printing", "Arduino C++ & PWM Actuator Bus"],
    soft: ["Project Planning & Research", "Bilingual Communication (Arabic / English - C1)", "Time Management", "Creative Problem Solving"],
  };

  return (
    <section id="inventor-portal" className="section-padding" style={{ position: "relative" }}>
      <div className="container-ada">
        
        {/* Intro Portal Switcher Banner */}
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <span
            className="section-tag-badge"
            style={{
              background: "linear-gradient(135deg, rgba(80, 11, 117, 0.6) 0%, rgba(152, 21, 89, 0.6) 100%)",
              borderColor: "var(--accent-cyan)",
              boxShadow: "0 0 20px rgba(0, 242, 254, 0.3)",
            }}
          >
            <Sparkles size={14} color="var(--accent-cyan)" />
            {isAr ? "مطورة الفكرة والأبحاث" : "DEVELOPER & RESEARCH LEAD"}
          </span>
          <h2 className="section-title">
            {isAr ? "المهندسة دعاء الابراهيم" : "Eng. Duaa Alibrahim"}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {isAr
              ? "موقع ويب مصغر مخصص يستعرض سيرة مطورة روبوت أدا، وأبحاثها في الميكاترونيكس الحيوية، وخبرتها التقنية وإنجازاتها الإنسانية والأكاديمية."
              : "A dedicated standalone portal presenting the developer behind ADA Robot: research in biomechatronics, multimodal AI, and academic achievements."}
          </p>
        </div>

        {/* ========================================================
            THE "SECOND WEBSITE" BROWSER SHELL CONTAINER
            Renders exactly like a dedicated second web application
            ======================================================== */}
        <div className="duaa-portal-shell">
          

          {/* Sub-Portal Inner Navigation Bar */}
          <div className="duaa-nav-bar">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--gradient-ada)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "800",
                  fontSize: "0.85rem",
                  color: "#FFFFFF",
                }}
              >
                DA
              </div>
              <span style={{ fontWeight: "700", color: "#FFFFFF", fontSize: "0.95rem" }}>
                {isAr ? "المهندسة دعاء الابراهيم" : "Eng. Duaa Alibrahim"}
              </span>
            </div>

            {/* Sub-portal Tabs */}
            <div className="duaa-tabs-row">
              {[
                { id: "about", labelEn: "Overview & Bio", labelAr: "نبذة عن المهندسة" },
                { id: "skills", labelEn: "Core Competencies", labelAr: "المهارات والتقنيات" },
                { id: "experience", labelEn: "Research & Projects", labelAr: "المشاريع والأبحاث" },
                { id: "impact", labelEn: "Humanitarian Impact", labelAr: "الأثر المجتمعي" },
                { id: "certs", labelEn: "Credentials & Awards", labelAr: "الشهادات والجوائز" },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "var(--radius-sm)",
                      border: "none",
                      background: isActive ? "var(--gradient-ada)" : "transparent",
                      color: isActive ? "#FFFFFF" : "var(--text-lavender)",
                      fontSize: "0.82rem",
                      fontWeight: isActive ? "700" : "500",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {isAr ? tab.labelAr : tab.labelEn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================
              TAB CONTENT 1: OVERVIEW & BIO
              ======================================================== */}
          {activeTab === "about" && (
            <div className="duaa-hero-banner">
              
              {/* Photo & Identity Frame */}
              <div className="duaa-photo-frame" style={{ position: "relative", minHeight: "360px" }}>
                <Image
                  src="/images/duaa_robotics_workspace.jpg"
                  alt="Eng. Duaa Alibrahim - AI Robotics Engineer"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(7, 2, 14, 0.95) 100%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px" }}>
                  <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "#FFFFFF" }}>
                    {isAr ? "المهندسة دعاء الابراهيم" : "Eng. Duaa Alibrahim"}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", marginTop: "2px" }}>
                    {isAr ? "مهندسة ميكاترونيكس (التخرج: أكتوبر 2026) | باحثة ومطورة ذكاء اصطناعي" : "Mechatronics Engineer (Grad: Oct 2026) | AI & Robotics Developer"}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-lavender)", opacity: 0.85, marginTop: "4px" }}>
                    📍 Aleppo, Syria • University of Aleppo
                  </div>
                </div>
              </div>

              {/* Bio & Vision Description */}
              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="badge-neural" style={{ borderColor: "#00F2FE", color: "#00F2FE" }}>
                    <ShieldCheck size={14} />
                    {isAr ? "متخصصة في دمج البيوميكاترونيكس والذكاء الصنعي" : "BIOMECHATRONICS & AI RESEARCHER"}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.9rem", fontWeight: "800", color: "#FFFFFF", lineHeight: "1.2" }}>
                  {isAr
                    ? "شغف بصناعة التكنولوجيا التي تتحدث بلغة المشاعر الإنسانية"
                    : "Pioneering Human-Centered Robotics & Biomechatronic Empathy"}
                </h3>

                <p style={{ fontSize: "1rem", color: "var(--text-lavender)", lineHeight: "1.7" }}>
                  {isAr
                    ? "مهندسة ميكاترونيكس بجامعة حلب (التخرج: أكتوبر 2026)، متخصصة في دمج البيوميكاترونيكس والذكاء الصنعي لبناء نظام متكامل يحقق استجابة تفاعلية ومحاكاة دقيقة للمشاعر. طوّرت وهندست بنجاح رأس روبوت أدا (ADA Imitated Head) المعتمد على منصة InMoov V2 مع 17 مشغل سيرفو دقيق عالي العزم (Actuators) من نوع JX PDI-11098 9g و JX PDI-6221MG 20kg تحاكي أدق تعابير الوجه البشري وفق نظرية بول إيكمان لوحدات الفعل الوجهي (FACS)، مدعوماً برؤية حاسوبية في الزمن الحقيقي عبر MediaPipe ونماذج تصنيف المشاعر الهجينة."
                    : "Mechatronics Engineer at the University of Aleppo (Expected Graduation: October 2026), dedicated to integrating biomechatronics and artificial intelligence to build an end-to-end responsive system. Developed and engineered the 17-actuator ADA Imitated Head (InMoov V2 platform) utilizing precision servos (JX PDI-11098 9g & 6221MG 20kg) to replicate human emotional expressions based on Paul Ekman FACS Action Units, powered by real-time MediaPipe computer vision and hybrid emotion classification models."}
                </p>

                {/* Key Metric Highlights */}
                <div className="duaa-metrics-grid">
                  <div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--accent-magenta)" }}>
                      17 Actuators
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {isAr ? "مشغلات سيرفو JX PDI" : "ADA Facial Actuators"}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--accent-cyan)" }}>
                      Top 5 Syria
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {isAr ? "ميدالية فضية - تكنوقراط" : "Silver Medal Technocrats"}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: "1.3rem", fontWeight: "800", color: "#10B981" }}>
                      400+
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {isAr ? "طالب في الإغاثة التعليمية" : "Students Mentored"}
                    </div>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="duaa-cta-row">
                  <a
                    href="https://linkedin.com/in/duaa-alibrahim"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ada-glow"
                    style={{ padding: "10px 22px", fontSize: "0.88rem" }}
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href="#connect"
                    className="btn-ada-glass"
                    style={{ padding: "10px 20px", fontSize: "0.88rem" }}
                  >
                    <Mail size={16} />
                    <span>{isAr ? "تواصل مع المهندسة" : "Direct Contact"}</span>
                  </a>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================
              TAB CONTENT 2: CORE COMPETENCIES & TECHNICAL SKILLS
              ======================================================== */}
          {activeTab === "skills" && (
            <div className="duaa-tab-body">
              <div style={{ marginBottom: "26px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#FFFFFF" }}>
                  {isAr ? "المهارات التقنية ومجالات الخبرة" : "Technical Arsenal & Core Competencies"}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  {isAr
                    ? "مزيج متكامل من البرمجة، خوارزميات الذكاء الاصطناعي، التصميم الميكانيكي، والتحكم بالعتاد الصلب."
                    : "Interdisciplinary proficiency across software engineering, deep learning, CAD design, and hardware integration."}
                </p>
              </div>

              <div className="grid-2">
                {/* AI / ML */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.75)",
                    border: "1px solid rgba(152, 21, 89, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <Cpu size={20} color="var(--accent-cyan)" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#FFFFFF" }}>
                      AI, Computer Vision & NLP
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {skills.ai_ml.map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-lavender)" }}>
                        <ChevronRight size={14} color="var(--accent-magenta)" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Programming */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.75)",
                    border: "1px solid rgba(152, 21, 89, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <Terminal size={20} color="var(--accent-magenta)" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#FFFFFF" }}>
                      Programming & Frameworks
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {skills.programming.map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-lavender)" }}>
                        <ChevronRight size={14} color="var(--accent-cyan)" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Robotics & Hardware */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.75)",
                    border: "1px solid rgba(152, 21, 89, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <Code2 size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#FFFFFF" }}>
                      Robotics & Mechanical CAD
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {skills.hardware.map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-lavender)" }}>
                        <ChevronRight size={14} color="#10B981" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Communication & Management */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.75)",
                    border: "1px solid rgba(152, 21, 89, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                    <Globe size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#FFFFFF" }}>
                      Soft Skills & Languages
                    </h4>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {skills.soft.map((s, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", color: "var(--text-lavender)" }}>
                        <ChevronRight size={14} color="#F59E0B" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB CONTENT 3: RESEARCH & PROFESSIONAL EXPERIENCE
              ======================================================== */}
          {activeTab === "experience" && (
            <div className="duaa-tab-body">
              <div style={{ marginBottom: "26px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#FFFFFF" }}>
                  {isAr ? "الخبرة البحثية والمشاريع الميدانية" : "Research & Engineering Trajectory"}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                {/* Role 1: ADA Lead */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.8)",
                    borderLeft: "4px solid var(--accent-magenta)",
                    borderRight: isAr ? "4px solid var(--accent-magenta)" : "none",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#FFFFFF" }}>
                      {isAr ? "مطورة مشروع رأس روبوت أدا (ADA Imitated Head)" : "Lead Developer — ADA Imitated Head Robotic Project"}
                    </h4>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", fontFamily: "monospace" }}>
                      April 2023 – Present
                    </span>
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--accent-magenta)", fontWeight: "600", marginTop: "4px" }}>
                    Junior Mechatronics Engineer (Grad: Oct 2026) | Robotics & AI Developer
                  </div>
                  <ul style={{ marginTop: "14px", paddingLeft: isAr ? "0" : "20px", paddingRight: isAr ? "20px" : "0", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.92rem", color: "var(--text-lavender)" }}>
                    <li>
                      {isAr
                        ? "تطوير وهندسة رأس روبوت أدا المحاكي للوجه البشري، مدمجاً هيكل InMoov V2 مع الذكاء الاصطناعي متعدد الوسائط للتفاعل المباشر في الزمن الحقيقي (Real time)."
                        : "Led development of ADA Imitated Head integrating InMoov V2 platform with multimodal AI systems for real-time human-robot interaction."}
                    </li>
                    <li>
                      {isAr
                        ? "تطبيق نظرية بول إيكمان لوحدات الفعل الوجهي (FACS) وتشريح عضلات الوجه عبر 17 مشغل سيرفو دقيق عالي العزم (Actuators) من نوع JX PDI-11098 9g و JX PDI-6221MG 20kg مبرمجة بلغة Arduino C++ ومربوطة بالنموذج النهائي MediaPipe."
                        : "Applied Paul Ekman's Action Units (FACS) theory and facial anatomy using 17 precision actuators (JX PDI-11098 9g & 6221MG 20kg servos) programmed via Arduino C++ and integrated with the final MediaPipe model."}
                    </li>
                    <li>
                      {isAr
                        ? "تطوير نموذج تصنيف هجين يجمع بين CNN و XGBoost بالاعتماد على قاعدة FER-2013 وتتبع نقاط MediaPipe FaceMesh في الزمن الحقيقي."
                        : "Developed CNN+XGBoost hybrid model for emotion classification using FER-2013 dataset and real-time MediaPipe FaceMesh."}
                    </li>
                    <li>
                      {isAr
                        ? "بناء وتكامل خط أنابيب ذكاء اصطناعي صوتي ومحادثاتي كامل: Whisper ASR، GPT-2 NLP، وتوليف صوتي عبر gTTS مع بوت تلجرام (نموذج أولي للاختبار فقط)."
                        : "Integrated AI pipeline: Whisper ASR, GPT-2 NLP, gTTS voice synthesis, and Telegram bot (initial prototype for testing only)."}
                    </li>
                  </ul>
                </div>

                {/* Role 2: Tech Harvest Competition (Sanad Youth) */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.8)",
                    borderLeft: "4px solid var(--accent-magenta)",
                    borderRight: isAr ? "4px solid var(--accent-magenta)" : "none",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-pure)" }}>
                      {isAr ? "المركز الأول بالمشاريع الريادية — مسابقة Tech Harvest" : "1st Place Winner — Tech Harvest Competition"}
                    </h4>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent-magenta)", fontFamily: "monospace" }}>
                      2025
                    </span>
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--accent-magenta)", fontWeight: "600", marginTop: "4px" }}>
                    {isAr ? "فريق سند الشباب التنموي — حلب" : "Sanad Youth Development Organization — Aleppo"}
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "0.92rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                    {isAr
                      ? "حائزة على المركز الأول في فئة المشاريع الريادية بمسابقة Tech Harvest بحلب لتطوير وتصميم روبوت أدا البيوميكاترونيكي للذكاء الاصطناعي التفاعلي."
                      : "Won 1st Place in the entrepreneurial track at Tech Harvest competition in Aleppo for advancing human-centered interactive robotics."}
                  </p>
                </div>

                {/* Role 3: Syrian Technocrats Foundation */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.8)",
                    borderLeft: "4px solid var(--accent-cyan)",
                    borderRight: isAr ? "4px solid var(--accent-cyan)" : "none",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-pure)" }}>
                      {isAr ? "الميدالية الفضية - مؤسسة التكنوقراط السوريون" : "Silver Medal Winner — Syrian Technocrats Foundation"}
                    </h4>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", fontFamily: "monospace" }}>
                      2026
                    </span>
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--accent-cyan)", fontWeight: "600", marginTop: "4px" }}>
                    Top 5 Syrian Entrepreneurial Engineering Projects
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "0.92rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                    {isAr
                      ? "الحصول على الميدالية الفضية من مؤسسة التكنوقراط السوريون ضمن ترتيب الـ Top 5 بمشاريع الهندسة الكهربائية والميكانيكية الريادية على مستوى سوريا."
                      : "Honored with the Silver Medal and ranked among the Top 5 pioneering electrical and mechanical engineering entrepreneurial projects across Syria."}
                  </p>
                </div>

                {/* Role 3: Industry Orientation */}
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.8)",
                    borderLeft: "4px solid #10B981",
                    borderRight: isAr ? "4px solid #10B981" : "none",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#FFFFFF" }}>
                      {isAr ? "اطلاع وتدريب عملي ميداني" : "Industrial Field Practical Orientation"}
                    </h4>
                    <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", fontFamily: "monospace" }}>
                      2024
                    </span>
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "#10B981", fontWeight: "600", marginTop: "4px" }}>
                    Aleppo Chamber of Industry & University of Aleppo
                  </div>
                  <p style={{ marginTop: "10px", fontSize: "0.92rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                    {isAr
                      ? "اطلاع وتدريب عملي ميداني للتعرف على المعامل والآلات الصناعية وخطوط الإنتاج ومتحكماتها بالتعاون بين غرفة صناعة حلب وجامعتها."
                      : "Field practical orientation visiting industrial manufacturing plants, production equipment, and automation lines."}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================
              TAB CONTENT 4: HUMANITARIAN & SOCIAL IMPACT
              ======================================================== */}
          {activeTab === "impact" && (
            <div className="duaa-tab-body">
              <div style={{ marginBottom: "26px" }}>
                <span className="badge-neural" style={{ borderColor: "#10B981", color: "#10B981" }}>
                  <Heart size={14} />
                  {isAr ? "الأثر الإنساني والمجتمعي" : "HUMANITARIAN & SOCIAL COMMITMENT"}
                </span>
                <h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#FFFFFF", marginTop: "10px" }}>
                  {isAr ? "التكنولوجيا والإنسانية في خدمة المجتمع" : "Where Engineering Meets Human Compassion"}
                </h3>
              </div>

              <div className="grid-2">
                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.75)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <Heart size={22} color="#10B981" />
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#FFFFFF" }}>
                      {isAr ? "تدريس رياضيات لطلاب المرحلة الثانوية أثناء كارثة الزلزال" : "High School Math Tutoring During Earthquake Crisis"}
                    </h4>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-lavender)", lineHeight: "1.65" }}>
                    {isAr
                      ? "التطوع لتدريس الرياضيات لطلاب المرحلة الثانوية أثناء كارثة الزلزال، وتقديم الدعم النفسي والأكاديمي لأكثر من 400 طالب وطالبة عبر تيليغرام وواتساب بتسجيلات صوتية وأوراق عمل لمساعدتهم على اجتياز الصدمات واستكمال تحصيلهم العلمي بنجاح."
                      : "Volunteered tutoring high school mathematics during the 2023 earthquake disaster, supporting 400+ Syrian students via Telegram and WhatsApp with tailored audio recordings, worksheets, and psychological coaching to overcome trauma and continue learning."}
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(14, 4, 27, 0.75)",
                    border: "1px solid rgba(245, 158, 11, 0.35)",
                    borderRadius: "var(--radius-md)",
                    padding: "24px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                    <BookOpen size={22} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#FFFFFF" }}>
                      {isAr ? "متطوعة مع منظمة الطائرات الورقية (Paper Airplanes)" : "Volunteer with Paper Airplanes Organization"}
                    </h4>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-lavender)", lineHeight: "1.65" }}>
                    {isAr
                      ? "التطوع لتدريس اللغة الإنجليزية للمبتدئين مع منظمة Paper Airplanes، وتمكين الشباب من اكتساب المهارات اللغوية وبناء الثقة في التواصل الأكاديمي، إلى جانب شغف تبسيط وتدريس الرياضيات للأطفال واليافعين (2018 - 2024)."
                      : "Volunteered with Paper Airplanes teaching beginner English, empowering students with fundamental communication skills and cross-cultural confidence, along with 6+ years of private math instruction (2018–2024)."}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB CONTENT 5: CREDENTIALS & AWARDS
              ======================================================== */}
          {activeTab === "certs" && (
            <div className="duaa-tab-body">
              <div style={{ marginBottom: "26px" }}>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#FFFFFF" }}>
                  {isAr ? "الدرجات الأكاديمية والشهادات والجوائز" : "Academic Degrees, Certifications & Honors"}
                </h3>
              </div>

              <div className="duaa-certs-grid">
                {[
                  {
                    title: "Bachelor of Mechatronics Engineering",
                    org: "University of Aleppo (Faculty of Electrical & Electronics)",
                    date: "Expected October 2026 • GPA 3.25 / 4.0",
                    badge: "Graduating Oct 2026",
                  },
                  {
                    title: "1st Place Winner — Tech Harvest Competition",
                    org: "Sanad Youth Development Organization (سند الشباب التنموي - حلب)",
                    date: "2025",
                    badge: "1st Place Entrepreneurship",
                  },
                  {
                    title: "Silver Medal Winner — Top 5 in Syria",
                    org: "Syrian Technocrats Foundation (مؤسسة التكنوقراط السوريون)",
                    date: "2026",
                    badge: "Top 5 Syria Engineering Projects",
                  },
                  {
                    title: "Exhibition Award Winner (HEMK 2025)",
                    org: "Damascus Faculty of Mechanical & Electrical Engineering",
                    date: "2025",
                    badge: "Aleppo University Best Projects",
                  },
                  {
                    title: "Business Analytics Level 1 (Excel)",
                    org: "Paper Airplanes International Organization",
                    date: "Verified Certification",
                    badge: "Analytics & Excel",
                  },
                  {
                    title: "Paper Airplanes Volunteer & English Educator",
                    org: "Paper Airplanes International Organization",
                    date: "2024 - 2026",
                    badge: "Beginner English Teaching",
                  },
                  {
                    title: "English Proficiency Certificate C1",
                    org: "Eduidea Institute (Turkey)",
                    date: "2025",
                    badge: "C1 Advanced CEFR",
                  },
                  {
                    title: "ISO 9001:2015 Quality Management",
                    org: "Quality Systems Workshop, Aleppo",
                    date: "2024",
                    badge: "Verified ISO Standard",
                  },
                  {
                    title: "ACPC Competitive Programming Contest",
                    org: "Arab Collegiate Programming Contest",
                    date: "2022",
                    badge: "Algorithmic Problem Solving",
                  },
                ].map((c, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "rgba(14, 4, 27, 0.75)",
                      border: "1px solid rgba(152, 21, 89, 0.3)",
                      borderRadius: "var(--radius-md)",
                      padding: "18px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <div style={{ display: "inline-block", background: "rgba(0, 242, 254, 0.15)", color: "var(--accent-cyan)", fontSize: "0.72rem", padding: "2px 8px", borderRadius: "var(--radius-full)", fontWeight: "600", marginBottom: "8px" }}>
                        {c.badge}
                      </div>
                      <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#FFFFFF" }}>
                        {c.title}
                      </h4>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "4px" }}>
                        {c.org}
                      </div>
                    </div>
                    <div style={{ fontSize: "0.76rem", color: "var(--accent-magenta)", fontFamily: "monospace", marginTop: "6px" }}>
                      {c.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
