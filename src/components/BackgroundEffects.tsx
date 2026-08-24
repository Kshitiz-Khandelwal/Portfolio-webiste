"use client";

import React, { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Warm sketch particles
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.3 + 0.1,
      color: Math.random() > 0.5 ? "#E25543" : "#F8DC96",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Watercolor Paint Blobs in Background */}
      <div className="paint-blob top-20 left-10 w-96 h-80 bg-[#E25543]/10" />
      <div className="paint-blob top-1/3 right-10 w-80 h-96 bg-[#8A9A86]/12" />
      <div className="paint-blob bottom-10 left-1/3 w-96 h-72 bg-[#E8B042]/10" />
      <div className="paint-blob top-2/3 right-1/4 w-80 h-80 bg-[#D2C4D9]/10" />

      {/* Background Coffee Cup Stains */}
      <div className="coffee-stain absolute top-1/4 -left-12 w-48 h-48 -rotate-12 opacity-40" />
      <div className="coffee-stain absolute top-3/4 -right-10 w-44 h-44 rotate-45 opacity-35" />
    </div>
  );
}
