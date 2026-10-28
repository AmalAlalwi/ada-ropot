"use client";

import React from "react";
import { Eye, Mic, Heart, Users, Sparkles, MessageCircle } from "lucide-react";

interface NeuralArchitectureProps {
  lang: "ar" | "en";
}

export const NeuralArchitectureSection: React.FC<NeuralArchitectureProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const howCards = [
    {
      icon: <Eye size={24} color="#00F2FE" />,
      titleEn: "ADA Sees & Responds",
      titleAr: "يتفاعل — يرى ويستجيب",
      descEn:
        "ADA's smart camera detects the child's facial expressions and emotional cues in real time. It responds with encouraging robotic movements, expressive face motions, and supportive voice feedback — creating a warm, engaging interaction.",
      descAr:
        "تكشف كاميرا آدا الذكية تعبيرات وجه الطفل ومشاعره في الزمن الحقيقي، ثم يستجيب بحركات روبوتية مشجعة وتعبيرات وجه دافئة وصوت داعم — مما يخلق تفاعلاً ممتعاً ومحفّزاً.",
    },
    {
      icon: <Sparkles size={24} color="#FF2E93" />,
      titleEn: "ADA Teaches",
      titleAr: "يعلّم — أنشطة بسيطة وممتعة",
      descEn:
        "ADA presents simple, structured activities for communication and learning — through sound, movement, and expressions. Future capabilities include speech practice exercises, language learning activities, and educational games.",
      descAr:
        "يقدم آدا أنشطة مبسطة ومشجعة للتواصل والتعلم والانتباه، من خلال الصوت والحركة والتعبيرات. تشمل الإمكانيات المستقبلية تمارين النطق وأنشطة تعلم اللغات والألعاب التعليمية.",
    },
    {
      icon: <MessageCircle size={24} color="#10B981" />,
      titleEn: "ADA Strengthens Communication",
      titleAr: "يعزّز التواصل — الأسرة والمختص",
      descEn:
        "ADA bridges the child with their family and therapist. It supports ongoing practice between sessions, helping parents and specialists track interaction progress in a safe, structured, and encouraging environment.",
      descAr:
        "يجسر آدا العلاقة بين الطفل وأسرته وأخصائيه. يدعم التمرين المستمر بين الجلسات، مما يساعد الأهل والمختصين على متابعة التفاعل في بيئة آمنة ومنظمة ومشجعة.",
    },
    {
      icon: <Heart size={24} color="#981559" />,
      titleEn: "A Companion, Not a Replacement",
      titleAr: "رفيق لا بديل",
      descEn:
        "ADA is not a replacement for parents or specialists — it is a robotic friend that helps the child practice, learn, and play alongside them in a safe and structured environment, complementing professional care.",
      descAr:
        "آدا ليس بديلاً عن الأهل أو المختص، بل صديق روبوتي يساعد الطفل على التمرين والتعلم واللعب ضمن بيئة منظمة وآمنة، ويعمل جنباً إلى جنب مع الرعاية المتخصصة.",
    },
  ];

  return (
    <section id="how-ada-works" className="section-padding" style={{ position: "relative" }}>
      <div className="container-ada">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="section-tag-badge">
            <Eye size={14} />
            {isAr ? "آلية عمل آدا" : "How ADA Works"}
          </span>
          <h2 className="section-title">
            {isAr ? "كيف يعمل آدا؟" : "The ADA Experience"}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {isAr
              ? "رحلة تفاعلية تبدأ من رؤية الطفل، تمر بالذكاء الاصطناعي لفهم مشاعره، وتصل إلى استجابة روبوتية دافئة ومشجعة تعزز تعلمه وتواصله."
              : "An interactive journey that starts with seeing the child, passes through AI to understand their feelings, and arrives at a warm, encouraging robotic response that strengthens their learning and communication."}
          </p>
        </div>

        {/* How ADA Works Cards */}
        <div className="grid-2">
          {howCards.map((card, idx) => (
            <div key={idx} className="glass-panel neural-card">
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
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--text-pure)" }}>
                    {isAr ? card.titleAr : card.titleEn}
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: "0.95rem", color: "var(--text-lavender)", lineHeight: "1.75" }}>
                {isAr ? card.descAr : card.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Need Statement Banner */}
        <div
          className="glass-panel evolution-card"
          style={{ marginTop: "40px", textAlign: isAr ? "right" : "left" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Users size={26} color="#FF2E93" />
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-pure)" }}>
              {isAr ? "احتياج لا تكفيه الأدوات المتاحة اليوم" : "A Need Today's Tools Don't Fully Meet"}
            </h3>
          </div>
          <div className="grid-2" style={{ gap: "24px" }}>
            <div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-lavender)", lineHeight: "1.75" }}>
                {isAr
                  ? "يواجه بعض الأطفال صعوبات في التواصل والنطق والتفاعل الاجتماعي والتركيز أو تعلم مهارات ولغات جديدة. يواجه الأهل والمراكز تحدياً في إيجاد أدوات داعمة تناسب احتياجات كل طفل."
                  : "Some children face challenges in communication, speech, social interaction, focus, or learning new skills and languages. Parents and centers struggle to find supportive tools tailored to each child's unique needs."}
              </p>
            </div>
            <div>
              <p style={{ fontSize: "0.95rem", color: "var(--text-lavender)", lineHeight: "1.75" }}>
                {isAr
                  ? "مع آدا: روبوت تفاعلي يقدّم أنشطة مبسطة ومشجعة للتواصل والتعلم والانتباه — أداة مساندة قابلة للتطوير في المنزل أو المركز، بالتعاون مع الأهل والأخصائيين."
                  : "With ADA: an interactive robot offering simplified, encouraging activities for communication, learning, and attention — a scalable supportive tool for home or center use, in collaboration with parents and specialists."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
