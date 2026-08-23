"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
}

interface FloatingQuote {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

    // Deep Violet & Subtle Emerald Particles
    const colors = [
      "rgba(167, 139, 250,",  // Bright Violet #A78BFA
      "rgba(196, 181, 253,",  // Lavender Tint
      "rgba(52, 211, 153,",   // Emerald Green #34D399 (sparingly)
      "rgba(169, 155, 194,",  // Muted Lavender-Gray
    ];

    const particleCount = Math.min(Math.floor((width * height) / 32000), 32);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.4 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.15,
      });
    }

    const floatingQuotesList = [
      "“Talk is cheap. Show me the code.” — Linus Torvalds",
      "“Simplicity is prerequisite for reliability.” — Dijkstra",
      "H(X) = -Σ P(xᵢ) · log₂ P(xᵢ)",
      "Attention(Q,K,V) = softmax(QKᵀ / √dₖ) V",
      "NoPeek_Loss = ℒ_task + α · dCor(X, Z)",
    ];

    const quotes: FloatingQuote[] = floatingQuotesList.map((text, idx) => ({
      text,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.14,
      vy: (Math.random() - 0.5) * 0.14,
      size: Math.floor(Math.random() * 2) + 11,
      color: "rgba(169, 155, 194,",
      alpha: Math.random() * 0.16 + 0.08,
      pulseSpeed: Math.random() * 0.015 + 0.008,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Quotes
      for (const q of quotes) {
        q.x += q.vx;
        q.y += q.vy;

        if (q.x < -400) q.x = width + 50;
        if (q.x > width + 200) q.x = -350;
        if (q.y < -50) q.y = height + 30;
        if (q.y > height + 50) q.y = -30;

        const dynamicAlpha = q.alpha + Math.sin(time * q.pulseSpeed * 60 + q.pulseOffset) * 0.04;

        ctx.font = `italic ${q.size}px "Courier New", Courier, monospace`;
        ctx.fillStyle = `${q.color} ${Math.max(dynamicAlpha, 0.06)})`;
        ctx.fillText(q.text, q.x, q.y);
      }

      // 2. Constellation Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(167, 139, 250, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      // 3. Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Ambient Deep Violet Glow Blobs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[500px] bg-[#A78BFA]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#34D399]/4 rounded-full blur-[140px] pointer-events-none" />

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full blur-[130px] transition-transform duration-75 ease-out pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.08) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
