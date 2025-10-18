'use client';

import React from "react";

export default function Glow({ className = "", size = 420, opacity = 0.6 }:{ className?: string; size?: number; opacity?: number }) {
  return (
    <>
      {/* Primary glow */}
      <div
        aria-hidden
        className={"pointer-events-none absolute inset-0 -z-10 overflow-hidden " + className}
        style={{
          background:
            `radial-gradient(circle at 50% 20%, color-mix(in srgb, var(--accent) ${Math.round(opacity*100)}%, transparent) 0%, color-mix(in srgb, var(--accent) 15%, transparent) 30%, transparent 60%)`,
          maskImage: `radial-gradient(circle at center, black ${size}px, transparent ${size + 1}px)`,
        }}
      />
      
      {/* Secondary ambient glow */}
      <div
        aria-hidden
        className={"pointer-events-none absolute inset-0 -z-20 overflow-hidden opacity-50 " + className}
        style={{
          background: `
            radial-gradient(circle at 70% 40%, color-mix(in srgb, var(--accent) 30%, transparent) 0%, transparent 50%),
            radial-gradient(circle at 30% 60%, color-mix(in srgb, var(--primary) 20%, transparent) 0%, transparent 50%)
          `,
        }}
      />

      {/* Soft light streaks */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-30 overflow-hidden opacity-30"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%, 
              color-mix(in srgb, var(--accent) 10%, transparent) 15%, 
              transparent 80%
            ),
            linear-gradient(45deg,
              transparent 0%,
              color-mix(in srgb, var(--primary) 5%, transparent) 25%,
              transparent 50%
            )
          `
        }}
      />
    </>
  );
}
