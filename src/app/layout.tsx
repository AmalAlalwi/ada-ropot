import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig, generateStructuredData } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#500B75",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ADA Robot — Biomechatronic Facial Robotics & Eng. Duaa Alibrahim | روبوت أدا والمهندسة دعاء الابراهيم",
    template: "%s | ADA Robot",
  },
  description:
    "Official portfolio for ADA Robot, an advanced 17-actuator biomechatronic head (InMoov V2) with multimodal AI emotion recognition, created by Syrian Mechatronics Engineer Duaa Alibrahim (University of Aleppo). الموقع الرسمي لروبوت أدا والمهندسة دعاء الابراهيم.",
  keywords: siteConfig.keywords,
  authors: [{ name: "Eng. Duaa Alibrahim", url: "https://www.linkedin.com/in/dua-a-a-48484b297" }],
  creator: "Eng. Duaa Alibrahim (المهندسة دعاء الابراهيم)",
  publisher: "ADA Robotics Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SY",
    alternateLocale: ["en_US"],
    url: siteConfig.url,
    title: "ADA Robot | Designed to Understand — Eng. Duaa Alibrahim",
    description:
      "Advanced 17-actuator InMoov V2 biomechatronic facial robotic head with real-time MediaPipe and CNN+XGBoost emotion recognition by Eng. Duaa Alibrahim.",
    siteName: "ADA Robot Portfolio",
    images: [
      {
        url: "/images/ada_hero_cybernetic.jpg",
        width: 1200,
        height: 630,
        alt: "ADA Robot - Biomechatronic AI Facial Robotic System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADA Robot & Eng. Duaa Alibrahim (روبوت أدا)",
    description:
      "17-actuator biomechatronic robotic head mimicking human facial muscles with multimodal AI emotion recognition.",
    images: ["/images/ada_hero_cybernetic.jpg"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { personSchema, productSchema, faqSchema } = generateStructuredData();

  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        {/* Schema.org Structured Data for Google Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
