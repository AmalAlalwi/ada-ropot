export const siteConfig = {
  name: "ADA Robot | Designed to Understand",
  nameAr: "روبوت أدا | صُمم ليفهم - المهندسة دعاء الابراهيم",
  author: "Eng. Duaa Alibrahim",
  authorAr: "المهندسة دعاء الابراهيم",
  title: "ADA Robot — Biomechatronic AI Facial Robotic System & Eng. Duaa Alibrahim",
  titleAr: "روبوت أدا — نظام الروبوتات الحيوية والذكاء الاصطناعي التفاعلي | المهندسة دعاء الابراهيم",
  description:
    "Official portfolio for ADA Robot, an advanced 17-motor biomechatronic head (InMoov V2) with multimodal AI emotion recognition, created by Syrian Mechatronics Engineer Duaa Alibrahim.",
  descriptionAr:
    "الموقع الرسمي لمشروع روبوت أدا (ADA Robot) - رأس روبوتي تفاعلي بـ 17 محرك يحاكي عضلات الوجه البشري مع ذكاء اصطناعي متعدد الوسائط لتمييز المشاعر، ابتكار المهندسة دعاء الابراهيم (جامعة حلب).",
  url: "https://ada-robot.ai",
  keywords: [
    "ADA Robot",
    "Ada robot",
    "روبوت أدا",
    "أدا روبوت",
    "المهندسة دعاء الابراهيم",
    "دعاء الابراهيم",
    "Duaa Alibrahim",
    "Duaa Al-Ibrahim",
    "Biomechatronics",
    "InMoov V2",
    "Human-Robot Interaction",
    "Facial Emotion Recognition",
    "MediaPipe FaceMesh",
    "FER-2013 CNN XGBoost",
    "University of Aleppo Mechatronics",
    "Syrian AI Robotics",
    "Paul Ekman Action Units",
    "17-motor robotic head",
    "Whisper ASR GPT-2 robot"
  ],
  links: {
    linkedin: "https://linkedin.com/in/duaa-alibrahim",
    emailUniv: "duaa.alibrahim@alepuniv.edu.sy",
    emailPersonal: "duaaalibrahim6@gmail.com",
    phone: "+963-998-962774",
    location: "Aleppo, Syria"
  }
};

export function generateStructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ada-robot.ai/#duaa-alibrahim",
    "name": "Duaa Alibrahim",
    "alternateName": [
      "دعاء الابراهيم",
      "المهندسة دعاء الابراهيم",
      "Eng. Duaa Alibrahim"
    ],
    "jobTitle": "AI Robotics Engineer & Human-Robot Interaction Specialist",
    "description": "Syrian mechatronics engineer, researcher in biomechatronics and multimodal AI. Inventor and lead developer of the ADA Imitated Head robotic project.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Aleppo - Faculty of Electrical and Electronic Engineering"
    },
    "knowsAbout": [
      "Biomechatronics",
      "Human-Robot Interaction",
      "Facial Emotion Recognition",
      "Multimodal AI Systems",
      "Computer Vision",
      "InMoov V2 Robotics",
      "Machine Learning"
    ],
    "award": [
      "Damascus HEMK 2025 Exhibition Award - One of Aleppo University's Best Engineering Projects",
      "English Proficiency Certificate C1 - Eduidea Institute"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Aleppo",
      "addressCountry": "SY"
    },
    "email": "duaaalibrahim6@gmail.com",
    "sameAs": [
      "https://linkedin.com/in/duaa-alibrahim"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://ada-robot.ai/#ada-robot",
    "name": "ADA Robot",
    "alternateName": ["روبوت أدا", "أدا روبوت", "ADA Imitated Head"],
    "category": "Robotics / Artificial Intelligence / Human-Robot Interaction",
    "slogan": "Designed to Understand | إننا نهمس بالأمل",
    "description": "An advanced 17-motor biomechatronic robotic head mimicking human facial muscles using Paul Ekman Action Units, integrated with real-time MediaPipe facial analysis, CNN+XGBoost emotion recognition, Whisper ASR, and GPT-2 conversational intelligence.",
    "brand": {
      "@type": "Brand",
      "name": "ADA Robot"
    },
    "manufacturer": {
      "@type": "Person",
      "name": "Eng. Duaa Alibrahim"
    },
    "award": "Faculty Mechanical & Electrical Engineering Exhibition Award - Damascus HEMK 2025"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هو روبوت أدا (ADA Robot)؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "روبوت أدا (ADA Robot) هو رأس روبوتي بيوميكاترونيكي متطور مزود بـ 17 محركاً يحاكي عضلات الوجه البشري وفق نظرية Paul Ekman لوحدات الفعل الوجهي (FACS)، مدمج بنظام ذكاء اصطناعي متعدد الوسائط لتحليل المشاعر والتفاعل الصوتي والتعبيري الفوري."
        }
      },
      {
        "@type": "Question",
        "name": "من هي مبتكرة روبوت أدا؟ / Who is the creator of ADA Robot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "المهندسة دعاء الابراهيم (Duaa Alibrahim)، مهندسة ميكاترونيكس وباحثة في الذكاء الاصطناعي والتفاعل بين الإنسان والروبوت في جامعة حلب، الحائزة على تكريم معرض HEMK في دمشق لأفضل مشاريع جامعة حلب الهندسية."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي التقنيات البرمجية والعتادية المستخدمة في أدا؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تعتمد أدا على منصة InMoov V2 المعدلة، شبكات CNN+XGBoost مصنفة للبيانات الوجهية FER-2013 مع MediaPipe FaceMesh، نموذج Whisper للتعرف الصوتي، GPT-2 للمحادثة، وتطبيق تحكم عبر Arduino C++ و ROS."
        }
      }
    ]
  };

  return { personSchema, productSchema, faqSchema };
}
