"use client";

import React from "react";
import { Heart, Star, Globe, DollarSign, Lightbulb, Clock, Award, Rocket } from "lucide-react";

interface MatrixSpecsSectionProps {
  lang: "ar" | "en";
}

export const MatrixSpecsSection: React.FC<MatrixSpecsSectionProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const audience = [
    {
      icon: <Heart size={28} color="#FF2E93" />,
      titleEn: "Children with Down Syndrome",
      titleAr: "أطفال متلازمة داون",
      descEn:
        "ADA helps children with Down syndrome practice expressing their feelings, communicate more freely, and engage in social interaction in a fun, safe, and encouraging way tailored to their needs.",
      descAr:
        "يساعد آدا أطفال متلازمة داون على التمرين على التعبير عن مشاعرهم والتواصل بحرية أكبر والتفاعل الاجتماعي بطريقة ممتعة وآمنة وقريبة من احتياجاتهم.",
    },
    {
      icon: <Star size={28} color="#00F2FE" />,
      titleEn: "Children on the Autism Spectrum",
      titleAr: "أطفال طيف التوحد",
      descEn:
        "ADA provides a structured, predictable interaction space that supports autistic children in building communication patterns, attention, and social engagement at their own pace.",
      descAr:
        "يوفر آدا بيئة تفاعلية منظمة ومتوقعة تدعم أطفال طيف التوحد في بناء أنماط التواصل والانتباه والتفاعل الاجتماعي بوتيرتهم الخاصة.",
    },
    {
      icon: <Globe size={28} color="#10B981" />,
      titleEn: "All Children Who Need More",
      titleAr: "كل طفل يحتاج مزيداً من الاهتمام",
      descEn:
        "Emotional and social needs aren't bound by diagnosis or age. ADA aims to be a supportive companion for any child who needs more communication, attention, and engagement.",
      descAr:
        "الاحتياجات العاطفية والاجتماعية لا ترتبط بتشخيص أو عمر معين. تسعى آدا لتكون رفيقاً داعماً لكل طفل يحتاج إلى مزيد من التواصل والاهتمام والتفاعل.",
    },
  ];

  const differentiators = [
    {
      icon: <Heart size={22} color="#FF2E93" />,
      titleEn: "Human-First Design",
      titleAr: "مصمَّم باحتياجات الإنسان أولاً",
      descEn: "Built around children with Down syndrome and autism, with future expansion to support elderly and Alzheimer's patients.",
      descAr: "بُني حول أطفال متلازمة داون والتوحد، مع إمكانية توسعه مستقبلاً لدعم كبار السن ومرضى الزهايمر.",
    },
    {
      icon: <Star size={22} color="#00F2FE" />,
      titleEn: "Emotion Interaction & Understanding",
      titleAr: "التفاعل وفهم المشاعر",
      descEn: "Goes beyond commands — recognizes facial expressions and emotions, responding with movements that mimic human facial muscles.",
      descAr: "لا يقتصر على الاستجابة للأوامر، بل يتعرّف على تعابير الوجه والمشاعر ويتفاعل معها بحركات تحاكي العضلات البشرية.",
    },
    {
      icon: <Globe size={22} color="#10B981" />,
      titleEn: "Arabic Language Support",
      titleAr: "دعم اللغة العربية",
      descEn: "One of ADA's core goals: enabling full Arabic interaction, making technology closer and more culturally relevant to Arab users.",
      descAr: "من أهم أهداف المشروع: تطوير قدرة آدا على التحدث والتفاعل بالعربية، لتكون التقنية أقرب للمستخدمين العرب وأكثر ملاءمة لثقافتهم.",
    },
    {
      icon: <DollarSign size={22} color="#F59E0B" />,
      titleEn: "Accessible Session Costs",
      titleAr: "جلسات بتكلفة مناسبة",
      descEn: "ADA is designed to be affordable — so interactive companionship isn't limited to those who can afford high costs.",
      descAr: "صُمم آدا ليكون بمتناول الجميع — حتى لا تُحصر الرفقة التفاعلية بمن يستطيع تحمل تكاليف مرتفعة.",
    },
    {
      icon: <Lightbulb size={22} color="#981559" />,
      titleEn: "Born from a Real Need",
      titleAr: "بدأ من احتياج حقيقي",
      descEn: "Combines robotics, AI, and the human dimension — born from witnessing real challenges in working with children with special needs.",
      descAr: "يجمع بين الروبوتات والذكاء الاصطناعي والجانب الإنساني، وينطلق من رؤية مشكلة حقيقية في العمل مع الأطفال وذوي الاحتياجات المختلفة.",
    },
  ];

  return (
    <section id="matrix" className="section-padding" style={{ position: "relative" }}>
      <div className="container-ada">

        {/* Section Header — For Whom */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="section-tag-badge">
            <Heart size={14} />
            {isAr ? "لمن هذا المشروع؟" : "Who Is ADA For?"}
          </span>
          <h2 className="section-title">
            {isAr ? "لمن هذا المشروع" : "Designed for Children Who Need More"}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {isAr
              ? "مع تركيز خاص على الأطفال من ذوي متلازمة داون واضطراب طيف التوحد، لمساعدتهم على التعبير عن مشاعرهم والتواصل والتفاعل الاجتماعي والتعلّم بطريقة ممتعة وآمنة."
              : "With a special focus on children with Down syndrome and autism spectrum disorder, helping them express their feelings, communicate, and learn in a fun and safe way."}
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid-3" style={{ marginBottom: "60px" }}>
          {audience.map((item, i) => (
            <div key={i} className="glass-panel matrix-spec-card">
              <div style={{ marginBottom: "16px" }}>{item.icon}</div>
              <div
                className="matrix-spec-val"
                style={{ fontSize: "1.25rem", fontWeight: "800", color: "var(--text-pure)", marginBottom: "10px" }}
              >
                {isAr ? item.titleAr : item.titleEn}
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--text-lavender)", lineHeight: "1.7" }}>
                {isAr ? item.descAr : item.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* What Makes Us Different */}
        <div id="evolution" className="glass-panel evolution-card">
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
            <Award size={28} color="#FF2E93" />
            <h3 className="evolution-card-title" style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--text-pure)" }}>
              {isAr ? "ما الذي يميّزنا" : "What Makes ADA Different"}
            </h3>
          </div>

          <div className="grid-3">
            {differentiators.map((d, idx) => (
              <div key={idx} className="evolution-item">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                  {d.icon}
                  <h4 className="evolution-item-title" style={{ fontSize: "1rem", fontWeight: "700", color: "var(--text-pure)", lineHeight: "1.45" }}>
                    {isAr ? d.titleAr : d.titleEn}
                  </h4>
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                  {isAr ? d.descAr : d.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Horizons */}
        <div
          className="glass-panel"
          style={{
            marginTop: "40px",
            padding: "36px",
            border: "1px solid rgba(0, 242, 254, 0.2)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <Rocket size={26} color="#00F2FE" />
            <h3 style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--text-pure)" }}>
              {isAr ? "آفاق التوسّع — المراحل القادمة" : "Future Horizons — Next Phases"}
            </h3>
          </div>
          <p style={{ fontSize: "0.88rem", color: "var(--accent-cyan)", fontFamily: "monospace", marginBottom: "20px" }}>
            {isAr
              ? "// اتجاهات مطروحة للمراحل القادمة، لا تخص المرحلة الحالية"
              : "// Directions proposed for future phases — not part of the current stage"}
          </p>
          <div className="grid-2" style={{ gap: "28px" }}>
            <div className="evolution-item">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
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
                  {isAr ? "لاحقاً" : "Later"}
                </span>
                <Heart size={18} color="var(--accent-magenta)" />
              </div>
              <h4 className="evolution-item-title" style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-pure)" }}>
                {isAr ? "كبار السن ومرضى الزهايمر" : "Elderly & Alzheimer's Patients"}
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                {isAr
                  ? "دعم كبار السن المصابين بمرض الزهايمر ومن يحتاجون إلى الرعاية والدعم النفسي، عبر توفير الرفقة والتفاعل والمساعدة اليومية بطريقة إنسانية ولطيفة."
                  : "Supporting elderly patients with Alzheimer's and those who need psychological care — providing companionship, daily interaction, and gentle assistance in a human and kind manner."}
              </p>
            </div>
            <div className="evolution-item">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
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
                  {isAr ? "لاحقاً" : "Later"}
                </span>
                <Globe size={18} color="var(--accent-magenta)" />
              </div>
              <h4 className="evolution-item-title" style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-pure)" }}>
                {isAr ? "تعلّم اللغات" : "Language Learning"}
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-lavender)", lineHeight: "1.6" }}>
                {isAr
                  ? "رفيق ترفيهي وتعليمي يتيح تعلّم أكثر من لغة من مصدر واحد — اتجاه يتجاوز فئة عمرية بعينها ويمتد إلى اليافعين."
                  : "An entertaining and educational companion enabling multi-language learning from a single source — a direction that extends beyond a specific age group to young adults."}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
