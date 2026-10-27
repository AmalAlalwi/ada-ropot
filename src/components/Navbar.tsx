"use client";

import React, { useState, useEffect } from "react";
import { Globe, ArrowUpRight, Menu, X, Cpu, Sparkles, Sun, Moon } from "lucide-react";
import { AdaLogo } from "./AdaSvgAssets";

interface NavbarProps {
  lang: "ar" | "en";
  setLang: (lang: "ar" | "en") => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, setTheme }) => {
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
            ? (theme === "light" ? "0 10px 30px -10px rgba(80, 11, 117, 0.2), 0 0 15px rgba(152, 21, 89, 0.12)" : "0 14px 40px -10px rgba(0, 0, 0, 0.95), 0 0 25px rgba(152, 21, 89, 0.45)")
            : (theme === "light" ? "0 8px 24px -10px rgba(80, 11, 117, 0.12), 0 0 12px rgba(152, 21, 89, 0.08)" : "0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(80, 11, 117, 0.25)"),
        }}
      >
        {/* Left Badge: Official ADA Logo Symbol + Bold "ADa" Wordmark */}
        <a href="#hero" className="nav-badge-box" aria-label="Ada Robot Home" title="ADA Robot">
          <AdaLogo variant={theme === "light" ? "gradient" : "neon"} width={42} height={20} />
          <span className="nav-brand-ada-text">ADa</span>
        </a>

        {/* Center Desktop Navigation Links */}
        <div className="nav-links-row desktop-only-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item-link">
              {isAr ? link.labelAr : link.label}
            </a>
          ))}

          {/* Link to Developer Duaa Section */}
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

        {/* Right Utilities: Theme Toggle + Language Switcher + Mobile Hamburger Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="btn-ada-glass theme-toggle-btn"
            style={{
              padding: "5px 11px",
              fontSize: "0.8rem",
              borderRadius: "var(--radius-full)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
            aria-label="Toggle Theme"
            title={theme === "light" ? (isAr ? "التبديل إلى الوضع الداكن" : "Switch to Dark Mode") : (isAr ? "التبديل إلى الوضع الفاتح" : "Switch to Light Mode")}
          >
            {theme === "light" ? <Moon size={14} color="#500B75" /> : <Sun size={14} color="#F59E0B" />}
            <span style={{ fontWeight: "600" }}>{theme === "light" ? (isAr ? "داكن" : "Dark") : (isAr ? "فاتح" : "Light")}</span>
          </button>

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
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
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
