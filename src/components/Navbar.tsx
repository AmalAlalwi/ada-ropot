"use client";

import React, { useState, useEffect } from "react";
import { Globe, ArrowUpRight, Menu, X, Cpu, Sparkles } from "lucide-react";
import { AdaLogo } from "./AdaSvgAssets";

interface NavbarProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on ESC key or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isAr = lang === "ar";

  const navLinks = [
    { href: "#neural", label: "Neural", labelAr: "الشبكة العصبية" },
    { href: "#matrix", label: "Matrix", labelAr: "المصفوفة" },
    { href: "#evolution", label: "Evolution", labelAr: "التطور" },
    { href: "#connect", label: "Connect", labelAr: "التواصل" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="glass-nav-container">
      <nav
        className="glass-nav-bar"
        style={{
          boxShadow: scrolled
            ? "0 14px 40px -10px rgba(0, 0, 0, 0.95), 0 0 25px rgba(152, 21, 89, 0.45)"
            : "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(80, 11, 117, 0.25)",
        }}
      >
        {/* Left Badge: Official ADA Logo Symbol */}
        <a href="#hero" className="nav-badge-box" aria-label="Ada Robot Home" title="ADA Robot">
          <AdaLogo variant="neon" width={56} height={26} />
        </a>

        {/* Center Desktop Navigation Links */}
        <div className="nav-links-row desktop-only-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item-link">
              {isAr ? link.labelAr : link.label}
            </a>
          ))}

          {/* Link to Inventor Duaa Section */}
          <a
            href="#inventor-portal"
            className="nav-item-link"
            style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}
            title={isAr ? "المهندسة دعاء" : "Eng. Duaa"}
          >
            <span>{isAr ? "المهندسة دعاء" : "Eng. Duaa"}</span>
            <ArrowUpRight size={14} style={{ opacity: 0.8 }} />
          </a>
        </div>

        {/* Right Utilities: Language Switcher + Mobile Hamburger Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => setLang(isAr ? "en" : "ar")}
            className="btn-ada-glass"
            style={{
              padding: "5px 12px",
              fontSize: "0.8rem",
              borderRadius: "var(--radius-full)",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              background: "rgba(45, 12, 66, 0.6)",
              borderColor: "rgba(168, 85, 247, 0.4)",
            }}
            aria-label="Switch Language"
          >
            <Globe size={13} />
            <span>{isAr ? "EN" : "عربي"}</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle-btn"
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} color="#FFFFFF" /> : <Menu size={20} color="#FFFFFF" />}
          </button>
        </div>
      </nav>

      {/* Mobile Frosted Glass Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu-drawer">
          <div className="nav-mobile-links-column">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="nav-mobile-item-link"
              >
                <span>{isAr ? link.labelAr : link.label}</span>
              </a>
            ))}

            <a
              href="#inventor-portal"
              onClick={handleLinkClick}
              className="nav-mobile-item-link nav-mobile-portal-link"
            >
              <span>{isAr ? "المهندسة دعاء" : "Eng. Duaa"}</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
