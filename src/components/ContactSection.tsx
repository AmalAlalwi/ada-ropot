"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Sparkles, MessageSquare } from "lucide-react";
import { LinkedinIcon } from "./AdaSvgAssets";

interface ContactSectionProps {
  lang: "ar" | "en";
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const isAr = lang === "ar";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "research",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="connect" className="section-padding" style={{ position: "relative" }}>
      <div className="container-ada">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span className="section-tag-badge">
            <Mail size={14} />
            {isAr ? "قنوات التواصل والشراكة" : "Connect & Collaborate"}
          </span>
          <h2 className="section-title">
            {isAr ? "تواصل مع مطورة روبوت أدا" : "Initiate Direct Collaboration"}
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            {isAr
              ? "مستعدون لبناء شراكات بحثية وأكاديمية وصناعية في مجال الروبوتات الحيوية والذكاء الاصطناعي التفاعلي."
              : "Open for academic partnerships, robotic lab research fellowships, AI grants, and technological deployment."}
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "stretch" }}>
          
          {/* Left Column: Direct Official Contact Cards */}
          <div
            className="glass-panel contact-panel"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--text-pure)", marginBottom: "8px" }}>
                {isAr ? "معلومات التواصل المباشرة" : "Verified Contact Details"}
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                {isAr
                  ? "يمكنك التواصل مباشرة مع المهندسة دعاء الابراهيم عبر بريدها المباشر أو حسابها على لينكد إن أو الهاتف."
                  : "Reach Eng. Duaa Alibrahim directly through her direct inbox, LinkedIn network, or mobile."}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Direct Personal Email */}
              <div className="contact-card-item">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0, flex: 1 }}>
                  <Mail size={20} color="var(--accent-magenta)" style={{ flexShrink: 0 }} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                      {isAr ? "البريد الإلكتروني المباشر" : "Direct Email Inbox"}
                    </div>
                    <a
                      href="mailto:duaaalibrahim6@gmail.com"
                      style={{ fontSize: "0.92rem", color: "var(--text-pure)", fontWeight: "600", wordBreak: "break-all", overflowWrap: "anywhere" }}
                    >
                      duaaalibrahim6@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("duaaalibrahim6@gmail.com", "personal")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: copiedItem === "personal" ? "var(--accent-green)" : "var(--text-muted)",
                    cursor: "pointer",
                    padding: "6px",
                  }}
                  title="Copy email"
                >
                  {copiedItem === "personal" ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="contact-card-item">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0, flex: 1 }}>
                  <LinkedinIcon size={20} color="#0A66C2" style={{ flexShrink: 0 }} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                      LinkedIn Network
                    </div>
                    <a
                      href="https://linkedin.com/in/duaa-alibrahim"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.92rem", color: "var(--text-pure)", fontWeight: "600", wordBreak: "break-all", overflowWrap: "anywhere" }}
                    >
                      linkedin.com/in/duaa-alibrahim
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone / Location */}
              <div className="contact-card-item">
                <div style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: 0, flex: 1 }}>
                  <Phone size={20} color="#10B981" style={{ flexShrink: 0 }} />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", textTransform: "uppercase" }}>
                      {isAr ? "الهاتف / واتساب • الموقع" : "Mobile / WhatsApp • Location"}
                    </div>
                    <div style={{ fontSize: "0.92rem", color: "var(--text-pure)", fontWeight: "600", wordBreak: "break-word" }}>
                      +963-998-962774 • Aleppo, Syria
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+963998962774", "phone")}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: copiedItem === "phone" ? "var(--accent-green)" : "var(--text-muted)",
                    cursor: "pointer",
                    padding: "6px",
                  }}
                  title="Copy phone"
                >
                  {copiedItem === "phone" ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            <div style={{ fontSize: "0.82rem", color: "var(--text-dim)" }}>
              ⚡ {isAr ? "يتم الرد على المراسلات الأكاديمية والمهنية خلال 24 - 48 ساعة." : "Inquiries answered within 24-48 business hours."}
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="glass-panel contact-panel">
            <h3 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--text-pure)", marginBottom: "8px" }}>
              {isAr ? "إرسال رسالة مباشرة" : "Send A Direct Inquiry"}
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "24px" }}>
              {isAr
                ? "حدد طبيعة التعاون واكتب رسالتك وسنكون سعداء بالتواصل معك."
                : "Select your project type and send your inquiry to begin the dialogue."}
            </p>

            {submitted ? (
              <div className="contact-success-box">
                <CheckCircle2 size={48} color="#10B981" style={{ margin: "0 auto 12px" }} />
                <h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-pure)" }}>
                  {isAr ? "تم إرسال رسالتك بنجاح!" : "Message Dispatched Successfully!"}
                </h4>
                <p style={{ fontSize: "0.92rem", color: "var(--text-lavender)", marginTop: "8px" }}>
                  {isAr
                    ? "شكراً لتواصلك واهتمامك بروبوت أدا. سيتم مراجعة الرسالة والتواصل معك قريباً."
                    : "Thank you for reaching out regarding ADA Robot. We will get back to you shortly."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ada-glass"
                  style={{ marginTop: "20px", fontSize: "0.85rem" }}
                >
                  {isAr ? "إرسال رسالة أخرى" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-lavender)", marginBottom: "6px" }}>
                    {isAr ? "الاسم الكامل / الجهة" : "Full Name / Organization"} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={isAr ? "مثال: د. أحمد / جامعة حلب" : "e.g. Dr. Alex Vance / MIT Media Lab"}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(14, 4, 27, 0.8)",
                      border: "1px solid rgba(152, 21, 89, 0.35)",
                      borderRadius: "var(--radius-sm)",
                      color: "#FFFFFF",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-lavender)", marginBottom: "6px" }}>
                    {isAr ? "البريد الإلكتروني للرد" : "Email Address"} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@organization.com"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(14, 4, 27, 0.8)",
                      border: "1px solid rgba(152, 21, 89, 0.35)",
                      borderRadius: "var(--radius-sm)",
                      color: "#FFFFFF",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-lavender)", marginBottom: "6px" }}>
                    {isAr ? "مجال الشراكة / الاستفسار" : "Inquiry Category"}
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(14, 4, 27, 0.8)",
                      border: "1px solid rgba(152, 21, 89, 0.35)",
                      borderRadius: "var(--radius-sm)",
                      color: "#FFFFFF",
                      fontSize: "0.92rem",
                      outline: "none",
                    }}
                  >
                    <option value="research">{isAr ? "أبحاث أكاديمية وتطوير مشترك" : "Academic Research & Collaboration"}</option>
                    <option value="robotics">{isAr ? "تصنيع وتطوير روبوتات حيوية" : "Biomechatronic Robotics Manufacturing"}</option>
                    <option value="grant">{isAr ? "منح وتمويل أبحاث ذكاء اصطناعي" : "AI Research Grants & Funding"}</option>
                    <option value="speaking">{isAr ? "مؤتمرات وورش عمل ومحاضرات" : "Speaking Invitations & Workshops"}</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-lavender)", marginBottom: "6px" }}>
                    {isAr ? "تفاصيل الرسالة" : "Your Message"} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder={isAr ? "اكتب نبذة عن مشروعك أو استفسارك هنا..." : "Tell us about your project, research scope, or proposal..."}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(14, 4, 27, 0.8)",
                      border: "1px solid rgba(152, 21, 89, 0.35)",
                      borderRadius: "var(--radius-sm)",
                      color: "#FFFFFF",
                      fontSize: "0.92rem",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button type="submit" className="btn-ada-glow" style={{ marginTop: "6px" }}>
                  <Send size={18} />
                  <span>{isAr ? "إرسال الرسالة الآن" : "Transmit Message"}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
