"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";


interface AnimatedCyberHeadProps {
  lang: "ar" | "en";
}

export const AnimatedCyberHead: React.FC<AnimatedCyberHeadProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const containerRef = useRef<HTMLDivElement>(null);

  // Interactive 3D tilt tracking
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const soundEnabled = true;

  // Web Audio API Synthesizer for futuristic ethereal whisper chime
  const playCyberWhisperTone = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") return;

    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const now = ctx.currentTime;
      // Chime frequencies in harmony (C5, G5, E6 - ethereal synth chord)
      const freqs = [523.25, 783.99, 1318.51, 2093.0];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        // Gentle envelope
        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.045 / (idx + 1), now + idx * 0.08 + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 1.25);
      });
    } catch {
      // Audio fallback without crashing
    }
  }, [soundEnabled]);

  // Handle whisper click
  const triggerWhisper = () => {
    setIsSpeaking(true);
    playCyberWhisperTone();
    setTimeout(() => {
      setIsSpeaking(false);
    }, 2800);
  };

  // Mouse move tilt calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    // Invert X tilt if mirrored
    const tiltMultiplierX = isAr ? -15 : 15;

    setTilt({
      x: -y * 12,
      y: x * tiltMultiplierX,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`cyber-head-wrapper ${isAr ? "is-rtl-mirrored" : "is-ltr-standard"}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Floating & Tilting Container */}
      <div
        className="cyber-head-stage"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.8s ease-out",
        }}
      >
        {/* Ambient Radial Cyber Nebulas behind the head */}
        <div className="cyber-head-aura-magenta" />
        <div className="cyber-head-aura-cyan" />

        {/* The Exact Robotic Head Asset (Flipped horizontally in Arabic) */}
        <div className={`cyber-head-image-box ${isAr ? "flip-horizontal" : ""}`}>
          <Image
            src="/images/ada_cyber_head_feathered.png"
            alt="Ada Robot Cybernetic Wireframe AI Face"
            width={720}
            height={720}
            priority
            className="cyber-head-img"
          />

          {/* Animated Holographic Vertical Laser Scanner */}
          <div className="cyber-scan-laser-line" />
          <div className="cyber-scan-gradient-curtain" />

          {/* Sci-Fi SVG Overlays: Neural Nodes, Circuit Pulses, Eye Reticle */}
          <svg
            className="cyber-head-hud-svg"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <filter id="neonHudGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 1. Ocular Reticle over Right Eye (~ X: 388, Y: 250) */}
            <g
              className="hud-eye-module"
              style={{
                transformOrigin: "388px 250px",
                transform: `translate(${tilt.y * 0.3}px, ${-tilt.x * 0.3}px)`,
              }}
            >
              <circle
                cx="388"
                cy="250"
                r="18"
                stroke="#00F2FE"
                strokeWidth="1.2"
                strokeDasharray="4 2"
                className="animate-spin-slow"
              />
              <circle cx="388" cy="250" r="8" stroke="#FF2E93" strokeWidth="1.5" />
              <circle cx="388" cy="250" r="3" fill="#00F2FE" filter="url(#neonHudGlow)" />
              <line x1="365" y1="250" x2="373" y2="250" stroke="#00F2FE" strokeWidth="1.5" />
              <line x1="403" y1="250" x2="411" y2="250" stroke="#00F2FE" strokeWidth="1.5" />
              <line x1="388" y1="227" x2="388" y2="235" stroke="#00F2FE" strokeWidth="1.5" />
              <line x1="388" y1="265" x2="388" y2="273" stroke="#00F2FE" strokeWidth="1.5" />

              {/* Eye Tracking Coordinates HUD text */}
              <text
                x="418"
                y="245"
                fill="#00F2FE"
                fontSize="8"
                fontFamily="monospace"
                letterSpacing="0.08em"
              >
                AU 5/7 // 468 PTS
              </text>
              <text
                x="418"
                y="256"
                fill="#FF2E93"
                fontSize="7.5"
                fontFamily="monospace"
              >
                GAZE: ACTIVE
              </text>
            </g>

            {/* 2. Temple Microchip Processor Core (~ X: 226, Y: 185) */}
            <g className="hud-temple-chip">
              <rect
                x="206"
                y="165"
                width="40"
                height="40"
                rx="4"
                fill="none"
                stroke="#00F2FE"
                strokeWidth="1.5"
                className="pulse-chip-border"
              />
              <circle
                cx="226"
                cy="185"
                r="28"
                stroke="#FF2E93"
                strokeWidth="1"
                strokeDasharray="3 4"
                opacity="0.6"
                className="animate-ping-slow"
              />
              {/* Circuit Bus Pulse Dots */}
              <circle cx="226" cy="135" r="3" fill="#00F2FE" className="pulse-data-dot-1" />
              <circle cx="270" cy="185" r="3" fill="#00F2FE" className="pulse-data-dot-2" />
              <circle cx="180" cy="185" r="3" fill="#FF2E93" className="pulse-data-dot-3" />
            </g>

            {/* 3. Cranium Zigzag Circuit Trace Pulse (~ X: 325, Y: 150) */}
            <g className="hud-cranium-trace" filter="url(#neonHudGlow)">
              <path
                d="M 295 165 L 320 135 L 345 155 L 370 135"
                stroke="#00F2FE"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="pulse-path-flow"
              />
            </g>

            {/* 4. Neck Microchip Core (~ X: 222, Y: 455) */}
            <g className="hud-neck-chip">
              <rect
                x="204"
                y="437"
                width="36"
                height="36"
                rx="4"
                fill="none"
                stroke="#FF2E93"
                strokeWidth="1.5"
                className="pulse-chip-border"
              />
              <circle cx="222" cy="455" r="4" fill="#00F2FE" filter="url(#neonHudGlow)" />
            </g>

            {/* 5. Audio Synthesizer Wave Ring when speaking */}
            {isSpeaking && (
              <g className="hud-vocal-waves">
                <circle
                  cx="440"
                  cy="390"
                  r="20"
                  stroke="#FF2E93"
                  strokeWidth="2"
                  opacity="0.9"
                  className="animate-ripple-1"
                />
                <circle
                  cx="440"
                  cy="390"
                  r="35"
                  stroke="#00F2FE"
                  strokeWidth="1.5"
                  opacity="0.7"
                  className="animate-ripple-2"
                />
                <circle
                  cx="440"
                  cy="390"
                  r="50"
                  stroke="#981559"
                  strokeWidth="1"
                  opacity="0.5"
                  className="animate-ripple-3"
                />
              </g>
            )}
          </svg>
        </div>

        {/* ========================================================
            ARABIC TAGLINE (Faithfully placed right beside the mouth/jaw)
            Small text: "إننا نهمس بالأمل"
            Large bold heading: "أدا روبوت"
            ======================================================== */}
        <div
          className={`hero-face-arabic-box ${isAr ? "arabic-box-rtl" : "arabic-box-ltr"} ${isSpeaking ? "whisper-active" : ""}`}
          onClick={triggerWhisper}
          title={isAr ? "انقر لسماع همس الروبوت أدا" : "Click to hear Ada's cyber whisper"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") triggerWhisper();
          }}
        >
          {/* Subtle audio wave indicator */}
          <div className="arabic-whisper-wave-row">
            <span className={`whisper-bar ${isSpeaking ? "speaking" : ""}`} />
            <span className={`whisper-bar ${isSpeaking ? "speaking" : ""}`} />
            <span className={`whisper-bar ${isSpeaking ? "speaking" : ""}`} />
            <span className={`whisper-bar ${isSpeaking ? "speaking" : ""}`} />
            <span className={`whisper-bar ${isSpeaking ? "speaking" : ""}`} />
            <p className="hero-face-arabic-whisper">إننا نهمس بالأمل</p>
          </div>

          <h2 className="hero-face-arabic-name">أدا روبوت</h2>

        </div>
      </div>
    </div>
  );
};
