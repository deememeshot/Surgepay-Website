import React from 'react';

export default function GlobeAnimation() {
  return (
    <div className="globe-animation-wrapper" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', zIndex: 0, pointerEvents: 'none' }}>
      <svg viewBox="0 0 800 800" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#25D366" stopOpacity="0.1" />
            <stop offset="20%" stopColor="#25D366" stopOpacity="1" />
            <stop offset="80%" stopColor="#25D366" stopOpacity="1" />
            <stop offset="100%" stopColor="#25D366" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="globe-glow" cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="rgba(37,211,102,0.03)" />
            <stop offset="100%" stopColor="rgba(37,211,102,0)" />
          </radialGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <circle cx="400" cy="400" r="330" fill="url(#globe-glow)" />

        {/* Faint Wireframe Globe */}
        <g stroke="rgba(37,211,102,0.25)" strokeWidth="1" fill="none">
          {/* Outer circle */}
          <circle cx="400" cy="400" r="320" strokeDasharray="4 6" />
          {/* Equators */}
          <ellipse cx="400" cy="400" rx="320" ry="120" strokeDasharray="3 7" />
          <ellipse cx="400" cy="400" rx="320" ry="220" strokeDasharray="4 6" />
          {/* Longitudes */}
          <ellipse cx="400" cy="400" rx="120" ry="320" strokeDasharray="3 7" />
          <ellipse cx="400" cy="400" rx="220" ry="320" strokeDasharray="4 6" />
          
          {/* Diagonals */}
          <ellipse cx="400" cy="400" rx="140" ry="320" transform="rotate(35 400 400)" strokeDasharray="4 8" />
          <ellipse cx="400" cy="400" rx="140" ry="320" transform="rotate(-35 400 400)" strokeDasharray="4 8" />
        </g>

        {/* Continents Outline */}
        <g fill="rgba(37,211,102,0.06)" stroke="rgba(37,211,102,0.22)" strokeWidth="1.2" strokeLinejoin="round">
          <path d="M 180 240 Q 210 210 260 230 T 290 270 T 270 340 T 220 360 T 170 310 Z" />
          <path d="M 270 370 Q 300 380 310 420 T 290 490 T 260 510 T 250 450 Z" />
          <path d="M 370 230 Q 400 220 430 240 T 420 280 T 380 270 Z" />
          <path d="M 370 300 Q 420 290 450 330 T 440 430 T 400 470 T 360 410 T 360 340 Z" />
          <path d="M 440 230 Q 510 210 580 240 T 610 310 T 560 350 T 490 320 T 450 270 Z" />
          <path d="M 510 320 Q 540 330 535 375 Q 515 390 500 360 T 510 320 Z" fill="rgba(37,211,102,0.15)" stroke="rgba(37,211,102,0.4)" strokeWidth="1.5" />
          <path d="M 570 430 Q 620 420 630 460 T 590 500 T 550 470 Z" />
        </g>

        {/* Main Connecting Arc Background */}
        <path id="connection-path" d="M 100 400 A 300 300 0 0 1 700 400" fill="none" stroke="rgba(37,211,102,0.2)" strokeWidth="2" strokeDasharray="5 5" />
        
        {/* Solid green arc with gradient */}
        <path d="M 100 400 A 300 300 0 0 1 700 400" fill="none" stroke="url(#arc-gradient)" strokeWidth="2" />

        {/* Moving Dot Animation */}
        <circle r="5" fill="#25D366" filter="url(#glow)">
          <animateMotion dur="3.5s" repeatCount="indefinite">
            <mpath href="#connection-path" />
          </animateMotion>
        </circle>

        {/* US Node (Left) */}
        <g transform="translate(100, 400)">
          <circle cx="0" cy="0" r="8" fill="#25D366" filter="url(#glow)" />
          <circle cx="0" cy="0" r="3" fill="#fff" />
          <rect x="-18" y="16" width="36" height="20" rx="10" fill="#fff" stroke="rgba(15,23,42,0.08)" />
          <text x="0" y="29" fontSize="9" fontWeight="700" fill="#64748b" textAnchor="middle" letterSpacing="0.05em">US</text>
        </g>

        {/* IN Node (Right) */}
        <g transform="translate(700, 400)">
          <circle cx="0" cy="0" r="8" fill="#25D366" filter="url(#glow)" />
          <circle cx="0" cy="0" r="3" fill="#fff" />
          <rect x="-18" y="16" width="36" height="20" rx="10" fill="#fff" stroke="rgba(15,23,42,0.08)" />
          <text x="0" y="29" fontSize="9" fontWeight="700" fill="#64748b" textAnchor="middle" letterSpacing="0.05em">IN</text>
        </g>
      </svg>
    </div>
  );
}
