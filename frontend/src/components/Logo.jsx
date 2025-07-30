import React from "react";

const Logo = (props) => (
  <div
    className={props.className}
    onClick={props.onClick}
    style={{ cursor: props.onClick ? "pointer" : undefined, ...props.style }}
    tabIndex={props.onClick ? 0 : undefined}
    role={props.onClick ? "button" : undefined}
    aria-label={props["aria-label"] || "Logo"}
  >
    <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg" fill="none">
      {/* House outline */}
      <path d="M10 30 L30 10 L50 30" stroke="#ffffff" strokeWidth="3" fill="none" />
      <rect x="18" y="30" width="24" height="20" stroke="#ffffff" strokeWidth="3" fill="none" />
      <rect x="28" y="38" width="5" height="12" fill="#ffffff" />

      {/* Text with drop shadow */}
      <text x="60" y="42" fontFamily="Segoe UI, sans-serif" fontSize="20" fontWeight="600">
        <tspan fill="#ffffff" filter="url(#shadow)">Design </tspan>
        <tspan fill="#00bfff" filter="url(#shadow)">Homes</tspan>
      </text>

      {/* Shadow filter definition */}
      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feDropShadow dx="1" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
    </svg>
  </div>
);

export default Logo;