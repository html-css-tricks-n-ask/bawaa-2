"use client";

import { useState, useEffect } from "react";

interface YouTubeVideoBackgroundProps {
  videoId: string;
  className?: string;
  startTime?: number;
}

/**
 * Fullscreen muted YouTube video background.
 * Uses youtube-nocookie.com + no JS API to ensure ZERO controls, overlays, or media session registration.
 */
export function YouTubeVideoBackground({ videoId, className = "", startTime = 0 }: YouTubeVideoBackgroundProps) {
  const [visible, setVisible] = useState(false);

  // Fade in after a short delay to avoid showing any initial YouTube loading chrome
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&start=${startTime}&disablekb=1&fs=0&iv_load_policy=3&showinfo=0`}
        title="Background Video"
        allow="autoplay; encrypted-media"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-0 w-[100vw] h-[56.25vw] min-w-[177.78vh] min-h-[100vh] transition-opacity duration-1000 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: "none" }}
        tabIndex={-1}
      />
      {/* Transparent shield — catches all pointer/touch events before they reach the iframe */}
      <div className="absolute inset-0 z-10" style={{ background: "transparent" }} />
    </div>
  );
}
