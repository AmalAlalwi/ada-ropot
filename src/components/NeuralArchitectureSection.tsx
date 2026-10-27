"use client";

import React from "react";
import { Cpu, Eye, Mic, Brain, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";
import { NeuralPipelineDiagramSvg } from "./AdaSvgAssets";

interface NeuralArchitectureProps {
  lang: "ar" | "en";
}

export const NeuralArchitectureSection: React.FC<NeuralArchitectureProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const pipelineCards = [
    {
      icon: <Eye size={24} color="#00F2FE" />,
      titleEn: "Real-Time FaceMesh Vision",
      titleAr: "الرؤية الحاسوبية وتتبع الملامح (MediaPipe)",
      tech: "MediaPipe 468 Landmark Mesh",
      descEn:
        "High-frequency ocular and facial tracking processing 468 3D landmarks in real time. Accurately extracts micro-expressions, head pose, and facial muscle vectors in real time.",
      descAr:
        "نظام رؤية حاسوبية عالي التردد يرصد 468 نقطة ثلاثية الأبعاد على الوجه في الزمن الحقيقي Real time، ويستخرج التعبيرات الدقيقة وزوايا إمالة الرأس في الزمن الحقيقي Real time.",
    },
    {
      icon: <Brain size={24} color="#FF2E93" />,
      titleEn: "CNN + XGBoost Emotion Classifier",
      titleAr: "مصنف المشاعر الهجين (CNN + XGBoost)",
      tech: "FER-2013 + Hybrid Age/Gender Detection",
      descEn:
        "Deep convolutional neural architecture paired with gradient-boosted decision trees. Achieves robust multiclass emotion classification across seven affective states with sub-45ms latency.",
      descAr:
        "بنية شبكة عصبية التفافية هجينة مع خوارزمية XGBoost مدربة على قاعدة بيانات FER-2013 لتمييز سبع حالات شعورية ونطاقات عمرية بدقة تصنيف متقدمة وبزمن تأخير يقل عن 45 ميلي ثانية.",
    },
    {
      icon: <Mic size={24} color="#981559" />,
      titleEn: "Acoustic Speech & Conversational NLP",
      titleAr: "المعالجة الصوتية والمحادثة الذكية",
      tech: "Whisper ASR + GPT-2 + gTTS",
      descEn:
        "Full-duplex voice pipeline combining OpenAI Whisper for noise-resilient automatic speech recognition, GPT-2 conversational reasoning, gTTS voice synthesis, and a Telegram bot (prototype for testing only).",
      descAr:
        "معالجة صوتية متكاملة تدمج نموذج Whisper للتعرف الآلي على الكلام المعزول عن الضوضاء، ومحرك GPT-2 للمحادثة التفاعلية، والتوليف الصوتي عبر gTTS، مع بوت تلجرام (نموذج أولي للاختبار فقط).",
    },
    {
      icon: <Cpu size={24} color="#10B981" />,
      titleEn: "Hardware Actuation & Actuator Matrix",
      titleAr: "التحكم العتادي ومصفوفة المشغلات (Actuators)",
      tech: "InMoov V2 Assembly + Arduino C++ & MediaPipe",
      descEn:
        "17 high-torque precision actuators (JX PDI-11098 9g & JX PDI-6221MG 20kg servos) programmed in Arduino C++ and integrated with the final MediaPipe model, engineered according to Paul Ekman's FACS and Action Units to replicate anatomical muscle contractions.",
      descAr:
        "17 مشغل سيرفو دقيق عالي العزم (Actuators) من نوع JX PDI-11098 9g و JX PDI-6221MG 20kg مبرمج بلغة Arduino C++ ومربوط بالنموذج النهائي MediaPipe، مربوطة هندسياً وفق نظام FACS لعالم النفس بول إيكمان لتقليد تعابير الوجه بالاعتماد على نظام Action Units (ملاحقة التقلصات العضلية في البنية التشريحية للوجه للتعرف على المشاعر).",
    },
  ];

  return (
    <section id="neural" className="section-padding" style={{ position: "relative" }}>
      <div className="container-ada">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="section-tag-badge">
            <Cpu size={14} />
            {isAr ? "البنية العصبية والهندسية" : "Neural & Mechatronic Pipeline"}
          </span>
          <h2 className="section-title">
            {isAr ? "معمارية الذكاء الاصطناعي متعدد الوسائط" : "Multimodal AI Architecture"}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {isAr
              ? "كيف يتحول التحفيز البصري والصوتي إلى تفاعل إنساني؟ سلسلة مترابطة تبدأ من الكاميرا والميكروفون وتمر بالشبكات العصبية لتصل إلى حركة العضلات الميكاترونيكية."
              : "Bridging human emotional cues to physical actuation. An integrated end-to-end pipeline connecting sensory inputs to deep neural models and robotic servos."}
          </p>
        </div>

        {/* Pipeline SVG Architecture Diagram */}
        <div className="glass-panel neural-bus-panel">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <span style={{ fontSize: "0.82rem", color: "var(--accent-cyan)", fontFamily: "monospace" }}>
              // SYSTEM_DATAFLOW_BUS_PIPELINE
            </span>
            <span className="badge-neural" style={{ fontSize: "0.74rem" }}>
              ZERO-LATENCY SYNC
            </span>
          </div>
          <div style={{ width: "100%", overflowX: "auto" }}>
            <div style={{ minWidth: "700px" }}>
              <NeuralPipelineDiagramSvg />
            </div>
          </div>
        </div>

        {/* 4 Pipeline Core Pillars Grid */}
        <div className="grid-2">
          {pipelineCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-panel neural-card"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(80, 11, 117, 0.4)",
                    border: "1px solid rgba(152, 21, 89, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "#FFFFFF" }}>
                    {isAr ? card.titleAr : card.titleEn}
                  </h3>
                  <div style={{ fontSize: "0.78rem", color: "var(--accent-cyan)", fontFamily: "monospace", marginTop: "2px" }}>
                    {card.tech}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-lavender)", lineHeight: "1.65" }}>
                {isAr ? card.descAr : card.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
