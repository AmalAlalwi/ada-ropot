import React from "react";

// ==========================================
// 1. Official ADA Robot Brand Logo (Vector SVG)
// Based on ADA Robot Brand Guidelines (Pages 1-10)
// ==========================================
interface LogoProps {
  className?: string;
  variant?: "gradient" | "white" | "black" | "symbol" | "neon";
  width?: number | string;
  height?: number | string;
}

export const LinkedinIcon: React.FC<{ size?: number; color?: string; className?: string; style?: React.CSSProperties }> = ({
  size = 18,
  color = "currentColor",
  className = "",
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const AdaLogo: React.FC<LogoProps> = ({
  className = "",
  variant = "gradient",
  width = 180,
  height = 80,
}) => {
  const isWhite = variant === "white";
  const isBlack = variant === "black";
  const isSymbol = variant === "symbol";
  const isNeon = variant === "neon";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={isSymbol || isNeon ? "0 0 340 160" : "0 0 340 210"}
      width={width}
      height={height}
      className={className}
      fill="none"
      role="img"
      aria-label="ADA Robot Brand Mark"
    >
      <defs>
        {/* Controlled Brand Gradient (0% Berry Magenta #981559 to 100% Royal Purple #500B75) */}
        <linearGradient id="adaBrandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#500B75" />
          <stop offset="28%" stopColor="#640E6D" />
          <stop offset="72%" stopColor="#8D135D" />
          <stop offset="100%" stopColor="#981559" />
        </linearGradient>

        {/* Vibrant Neon Luminous Gradient for Dark Navigation Header */}
        <linearGradient id="adaNeonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF2E93" />
          <stop offset="45%" stopColor="#D91680" />
          <stop offset="80%" stopColor="#981559" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        <filter id="adaGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Flowing Continuous Mark: A - D - A Ribbon Wave */}
      <g
        stroke={isWhite ? "#FFFFFF" : isBlack ? "#000000" : isNeon ? "url(#adaNeonGrad)" : "url(#adaBrandGrad)"}
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={isNeon ? "url(#adaGlow)" : undefined}
      >
        {/* Left 'A' leg rising */}
        <path d="M 28 140 L 88 32 C 92 24 100 24 104 32 L 132 88" />
        
        {/* First crossbridge to 'D' loop */}
        <path d="M 58 92 C 84 92 110 82 134 82" />

        {/* Central 'D' curved underbelly loop uniting both A's */}
        <path d="M 112 50 C 130 32 172 32 188 50 C 204 68 206 102 186 122 C 166 142 124 142 108 122 C 92 102 110 74 136 74 C 180 74 200 114 240 114" />

        {/* Right 'A' arch and descending leg */}
        <path d="M 218 88 L 244 32 C 248 24 256 24 260 32 L 316 140" />

        {/* Right crossbridge */}
        <path d="M 210 84 C 235 84 260 92 284 92" />
      </g>

      {/* Wordmark: R O B O T (widely tracked) */}
      {!isSymbol && (
        <text
          x="170"
          y="190"
          textAnchor="middle"
          fontFamily="'Montserrat', sans-serif"
          fontWeight="700"
          fontSize="24"
          letterSpacing="0.48em"
          fill={isWhite ? "#FFFFFF" : isBlack ? "#000000" : "url(#adaBrandGrad)"}
        >
          ROBOT
        </text>
      )}
    </svg>
  );
};

// ==========================================
// 2. Cybernetic Wireframe AI Facial Mesh (Hero Visual)
// Exact match to the futuristic purple glowing head in the user's hero screenshot
// ==========================================
export const CyberFaceHeroSvg: React.FC<{ className?: string; style?: React.CSSProperties }> = ({
  className = "",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 700"
      className={className}
      style={style}
      fill="none"
      role="img"
      aria-label="Cybernetic Wireframe Neural Face"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="neonMagenta" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur1" />
          <feGaussianBlur stdDeviation="14" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="cyberNeonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF2E93" />
          <stop offset="35%" stopColor="#981559" />
          <stop offset="70%" stopColor="#6A3293" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>

        <linearGradient id="wireframeFade" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#500B75" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#981559" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FF2E93" stopOpacity="1" />
        </linearGradient>

        <radialGradient id="eyeIrisGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00F2FE" stopOpacity="1" />
          <stop offset="60%" stopColor="#FF2E93" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#500B75" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Cybernetic Ambient Halo Background */}
      <circle cx="260" cy="340" r="230" fill="url(#eyeIrisGlow)" opacity="0.15" filter="blur(40px)" />

      {/* Skull and Profile Wireframe Contour Lines */}
      <g stroke="url(#cyberNeonGrad)" strokeWidth="1.5" opacity="0.85">
        {/* Cranium & Forehead Mesh */}
        <path d="M 60 220 Q 90 90 240 70 T 420 160 Q 480 230 460 340 T 380 500 Q 320 620 220 630 T 140 560 Q 50 440 60 220 Z" strokeDasharray="3 3" opacity="0.4" />
        <path d="M 90 190 Q 180 120 300 120 T 420 200" strokeWidth="1.8" />
        <path d="M 100 240 Q 220 180 340 180 T 440 260" strokeWidth="1.5" />
        <path d="M 120 290 Q 240 240 380 250 T 450 330" />
        <path d="M 140 350 Q 260 300 400 310" strokeWidth="2" />
        
        {/* Jaw & Chin Contours */}
        <path d="M 160 420 Q 260 390 380 390" />
        <path d="M 170 480 Q 250 460 340 460" strokeWidth="1.8" />
        <path d="M 190 540 Q 250 530 310 530" />
        
        {/* Vertical Poly-Ribs (Profile Curvature) */}
        <path d="M 230 80 Q 180 240 170 380 T 210 580" />
        <path d="M 290 80 Q 260 250 260 400 T 260 610" strokeWidth="2" />
        <path d="M 350 95 Q 350 260 340 420 T 320 570" />
        <path d="M 400 130 Q 420 280 400 420 T 360 520" />

        {/* Diagonal FaceMesh Triangulation */}
        <path d="M 180 150 L 260 190 L 340 150 L 400 200 L 350 250 L 260 230 L 170 250 Z" opacity="0.6" />
        <path d="M 170 250 L 220 310 L 260 280 L 300 310 L 360 260 L 390 330 L 310 350 L 260 330 L 210 350 Z" opacity="0.65" />
        <path d="M 210 350 L 260 390 L 310 350 L 340 420 L 260 440 L 180 420 Z" opacity="0.7" />
        <path d="M 180 420 L 220 480 L 260 460 L 300 480 L 340 420" opacity="0.6" />
        <path d="M 220 480 L 260 550 L 300 480" strokeWidth="2" />
      </g>

      {/* Cybernetic Ocular Vision Module (Eye with glowing crosshair & iris) */}
      <g filter="url(#neonMagenta)">
        {/* Left Eye Orbit */}
        <ellipse cx="230" cy="275" rx="36" ry="22" stroke="#FF2E93" strokeWidth="2.5" fill="none" />
        <circle cx="232" cy="275" r="14" stroke="#00F2FE" strokeWidth="2" fill="rgba(0, 242, 254, 0.3)" />
        <circle cx="232" cy="275" r="5" fill="#FFFFFF" />
        {/* HUD reticle ticks */}
        <line x1="232" y1="248" x2="232" y2="255" stroke="#00F2FE" strokeWidth="2" />
        <line x1="232" y1="295" x2="232" y2="302" stroke="#00F2FE" strokeWidth="2" />
        <line x1="205" y1="275" x2="212" y2="275" stroke="#00F2FE" strokeWidth="2" />
        <line x1="252" y1="275" x2="259" y2="275" stroke="#00F2FE" strokeWidth="2" />

        {/* Right Eye Orbit */}
        <ellipse cx="340" cy="275" rx="36" ry="22" stroke="#FF2E93" strokeWidth="2.5" fill="none" />
        <circle cx="338" cy="275" r="14" stroke="#00F2FE" strokeWidth="2" fill="rgba(0, 242, 254, 0.3)" />
        <circle cx="338" cy="275" r="5" fill="#FFFFFF" />
        {/* HUD reticle ticks */}
        <line x1="338" y1="248" x2="338" y2="255" stroke="#00F2FE" strokeWidth="2" />
        <line x1="338" y1="295" x2="338" y2="302" stroke="#00F2FE" strokeWidth="2" />
        <line x1="311" y1="275" x2="318" y2="275" stroke="#00F2FE" strokeWidth="2" />
        <line x1="358" y1="275" x2="365" y2="275" stroke="#00F2FE" strokeWidth="2" />
      </g>

      {/* Cybernetic Forehead Matrix Nodes & Circuit Traces */}
      <g stroke="#FF2E93" strokeWidth="2" fill="none">
        <path d="M 285 100 L 285 150 L 320 170" />
        <path d="M 250 120 L 220 150 L 220 190" />
        <path d="M 330 90 L 370 110 L 370 170 L 410 190" />
        <path d="M 180 180 L 140 200 L 140 260" />
        <path d="M 285 340 L 285 390 L 260 410" />
      </g>

      {/* Glowing Neural Keypoints / MediaPipe 468 Landmark Dots */}
      <g fill="#00F2FE" filter="url(#neonMagenta)">
        <circle cx="285" cy="150" r="4" />
        <circle cx="220" cy="150" r="3.5" />
        <circle cx="350" cy="150" r="3.5" />
        <circle cx="180" cy="210" r="4" />
        <circle cx="390" cy="210" r="4" />
        <circle cx="285" cy="240" r="4" fill="#FF2E93" />
        <circle cx="285" cy="340" r="4.5" fill="#FF2E93" />
        <circle cx="240" cy="380" r="3.5" />
        <circle cx="330" cy="380" r="3.5" />
        <circle cx="285" cy="420" r="4" />
        <circle cx="285" cy="460" r="4" fill="#FF2E93" />
        <circle cx="260" cy="550" r="5" fill="#00F2FE" />
      </g>

      {/* Holographic Telemetry HUD Box overlay */}
      <g stroke="rgba(255, 46, 147, 0.45)" strokeWidth="1" fill="none">
        <rect x="40" y="40" width="160" height="70" rx="8" fill="rgba(14, 4, 27, 0.6)" />
        <line x1="40" y1="62" x2="200" y2="62" stroke="rgba(255, 46, 147, 0.25)" />
        <text x="50" y="56" fill="#00F2FE" fontFamily="'Montserrat', sans-serif" fontSize="10" fontWeight="600" letterSpacing="0.1em">
          NEURAL MESH // 468 PTS
        </text>
        <text x="50" y="78" fill="#EFEFFB" fontFamily="'Montserrat', sans-serif" fontSize="11" fontWeight="500">
          FPS: 60.0 • LATENCY: 22ms
        </text>
        <text x="50" y="96" fill="#FF2E93" fontFamily="'Montserrat', sans-serif" fontSize="10" fontWeight="600">
          FER-2013 CONFIDENCE: 98.4%
        </text>
      </g>

      {/* Dynamic Data Stream Lines */}
      <g stroke="rgba(0, 242, 254, 0.25)" strokeWidth="1" strokeDasharray="4 4">
        <line x1="200" y1="75" x2="285" y2="150" />
        <line x1="285" y1="460" x2="480" y2="520" />
      </g>
    </svg>
  );
};

// ==========================================
// 3. 17-Motor Biomimetic Head Schematic SVG
// Details the physical InMoov V2 head actuators for Paul Ekman Action Units
// ==========================================
export const BiomechanicalHeadSvg: React.FC<{ activeServo?: number | null; className?: string }> = ({
  activeServo = null,
  className = "",
}) => {
  // Servo callouts based on Duaa's 17 motors
  const servos = [
    { id: 1, name: "Eyebrow Left Inner (AU 1)", x: 230, y: 190 },
    { id: 2, name: "Eyebrow Right Inner (AU 1)", x: 330, y: 190 },
    { id: 3, name: "Eyebrow Outer L (AU 2)", x: 190, y: 180 },
    { id: 4, name: "Eyebrow Outer R (AU 2)", x: 370, y: 180 },
    { id: 5, name: "Eyeball Pitch Y (Vertical)", x: 260, y: 245 },
    { id: 6, name: "Eyeball Yaw X Left", x: 225, y: 245 },
    { id: 7, name: "Eyeball Yaw X Right", x: 335, y: 245 },
    { id: 8, name: "Eyelid Upper L (AU 5)", x: 225, y: 230 },
    { id: 9, name: "Eyelid Lower L (AU 7)", x: 225, y: 260 },
    { id: 10, name: "Eyelid Upper R (AU 5)", x: 335, y: 230 },
    { id: 11, name: "Eyelid Lower R (AU 7)", x: 335, y: 260 },
    { id: 12, name: "Nose Wrinkler / Disgust (AU 9)", x: 280, y: 300 },
    { id: 13, name: "Lip Corner Puller L (AU 12)", x: 235, y: 365 },
    { id: 14, name: "Lip Corner Puller R (AU 12)", x: 325, y: 365 },
    { id: 15, name: "Upper Lip Raiser (AU 10)", x: 280, y: 350 },
    { id: 16, name: "Jaw Drop Servo (AU 26/27)", x: 280, y: 430 },
    { id: 17, name: "Neck Pitch / Tilt", x: 280, y: 510 },
  ];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 580"
      className={className}
      fill="none"
      role="img"
      aria-label="17-Motor InMoov V2 Facial Actuator Architecture"
    >
      <defs>
        <linearGradient id="chassisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E0C30" />
          <stop offset="100%" stopColor="#0B0314" />
        </linearGradient>

        <linearGradient id="servoGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="100%" stopColor="#981559" />
        </linearGradient>
      </defs>

      {/* Head Chassis Structure (InMoov V2 3D-printed skull contour) */}
      <path
        d="M 160 170 C 160 90 220 50 280 50 C 340 50 400 90 400 170 C 420 250 420 340 370 410 C 350 440 330 460 330 480 L 330 540 L 230 540 L 230 480 C 230 460 210 440 190 410 C 140 340 140 250 160 170 Z"
        fill="url(#chassisGrad)"
        stroke="#7A1D76"
        strokeWidth="2.5"
      />

      {/* Eye Socket Sockets */}
      <ellipse cx="225" cy="245" rx="34" ry="24" fill="#140620" stroke="#981559" strokeWidth="1.8" />
      <ellipse cx="335" cy="245" rx="34" ry="24" fill="#140620" stroke="#981559" strokeWidth="1.8" />

      {/* Jaw Pivot Mechanism */}
      <path d="M 230 410 Q 280 435 330 410 L 320 460 Q 280 480 240 460 Z" fill="#200B33" stroke="#6A3293" strokeWidth="2" />

      {/* Neck Base Gimbal */}
      <rect x="245" y="490" width="70" height="35" rx="8" fill="#1B072B" stroke="#8D135D" strokeWidth="2" />

      {/* Structural Ribs */}
      <line x1="280" y1="50" x2="280" y2="350" stroke="rgba(152, 21, 89, 0.3)" strokeDasharray="4 4" />
      <line x1="160" y1="245" x2="400" y2="245" stroke="rgba(152, 21, 89, 0.3)" strokeDasharray="4 4" />

      {/* Servo Actuator Points */}
      {servos.map((s) => {
        const isActive = activeServo === s.id;
        return (
          <g key={s.id} className="cursor-pointer transition-transform duration-200">
            {/* Pulsing ring if active */}
            {isActive && (
              <circle
                cx={s.x}
                cy={s.y}
                r="16"
                fill="none"
                stroke="#00F2FE"
                strokeWidth="2"
                opacity="0.8"
                className="animate-ping"
              />
            )}
            
            {/* Actuator Pin */}
            <circle
              cx={s.x}
              cy={s.y}
              r={isActive ? 11 : 8}
              fill={isActive ? "url(#servoGradActive)" : "#981559"}
              stroke={isActive ? "#FFFFFF" : "#500B75"}
              strokeWidth="2"
            />
            
            {/* Motor Index Label */}
            <text
              x={s.x}
              y={s.y + 3.5}
              textAnchor="middle"
              fill="#FFFFFF"
              fontSize={isActive ? "10" : "8"}
              fontWeight="700"
              fontFamily="'Montserrat', sans-serif"
            >
              M{s.id}
            </text>
          </g>
        );
      })}

      {/* Header Legend */}
      <text x="280" y="32" textAnchor="middle" fill="#EFEFFB" fontSize="13" fontWeight="700" letterSpacing="0.12em" fontFamily="'Montserrat', sans-serif">
        17-MOTOR BIOMIMETIC FACIAL ACTUATOR TOPOLOGY
      </text>
    </svg>
  );
};

// ==========================================
// 4. Multimodal AI Pipeline Flowchart SVG
// ==========================================
export const NeuralPipelineDiagramSvg: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 880 260"
      className={className}
      fill="none"
      role="img"
      aria-label="Multimodal AI Architecture"
    >
      <defs>
        <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#500B75" />
          <stop offset="50%" stopColor="#981559" />
          <stop offset="100%" stopColor="#00F2FE" />
        </linearGradient>

        <filter id="boxGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection Bus Lines */}
      <path d="M 150 70 L 220 70 L 220 130 L 290 130" stroke="url(#pipeGrad)" strokeWidth="3" />
      <path d="M 150 190 L 220 190 L 220 130" stroke="url(#pipeGrad)" strokeWidth="3" />
      <path d="M 430 130 L 490 130" stroke="url(#pipeGrad)" strokeWidth="3" />
      <path d="M 630 130 L 690 130" stroke="url(#pipeGrad)" strokeWidth="3" />

      {/* Flow arrows */}
      <polygon points="285,126 295,130 285,134" fill="#981559" />
      <polygon points="485,126 495,130 485,134" fill="#981559" />
      <polygon points="685,126 695,130 685,134" fill="#00F2FE" />

      {/* Block 1A: Vision Input */}
      <g>
        <rect x="20" y="40" width="130" height="60" rx="10" fill="#1A072E" stroke="#981559" strokeWidth="2" />
        <text x="85" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Camera & Vision</text>
        <text x="85" y="83" textAnchor="middle" fill="#00F2FE" fontSize="10">MediaPipe FaceMesh</text>
      </g>

      {/* Block 1B: Audio Input */}
      <g>
        <rect x="20" y="160" width="130" height="60" rx="10" fill="#1A072E" stroke="#6A3293" strokeWidth="2" />
        <text x="85" y="185" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">Acoustic Sensor</text>
        <text x="85" y="203" textAnchor="middle" fill="#00F2FE" fontSize="10">Whisper ASR Speech</text>
      </g>

      {/* Block 2: Emotion & Intent Processing */}
      <g>
        <rect x="290" y="90" width="140" height="80" rx="12" fill="#250A3E" stroke="#981559" strokeWidth="2.5" />
        <text x="360" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Emotion Engine</text>
        <text x="360" y="138" textAnchor="middle" fill="#FF2E93" fontSize="11" fontWeight="600">CNN + XGBoost</text>
        <text x="360" y="153" textAnchor="middle" fill="#A895B8" fontSize="10">FER-2013 + Age Detect</text>
      </g>

      {/* Block 3: Cognitive & Response Generation */}
      <g>
        <rect x="490" y="90" width="140" height="80" rx="12" fill="#250A3E" stroke="#7A1D76" strokeWidth="2.5" />
        <text x="560" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Cognitive NLP</text>
        <text x="560" y="138" textAnchor="middle" fill="#00F2FE" fontSize="11" fontWeight="600">GPT-2 / LLM</text>
        <text x="560" y="153" textAnchor="middle" fill="#A895B8" fontSize="10">gTTS Voice Synthesis</text>
      </g>

      {/* Block 4: Physical Embodiment */}
      <g>
        <rect x="690" y="90" width="170" height="80" rx="12" fill="#120521" stroke="#00F2FE" strokeWidth="2.5" />
        <text x="775" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="700">Biomechatronics</text>
        <text x="775" y="138" textAnchor="middle" fill="#00F2FE" fontSize="11" fontWeight="600">17 Servos (InMoov V2)</text>
        <text x="775" y="153" textAnchor="middle" fill="#A895B8" fontSize="10">Ekman FACS Action Units</text>
      </g>
    </svg>
  );
};
