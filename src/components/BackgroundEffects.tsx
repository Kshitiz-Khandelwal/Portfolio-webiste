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

    // Particle Palette
    const colors = [
      "rgba(212, 175, 55,",  // Rich Gold
      "rgba(255, 215, 0,",   // Sunburst Gold
      "rgba(220, 20, 60,",   // Crimson Red
      "rgba(56, 189, 248,",  // Sky Blue
    ];

    const particleCount = Math.min(Math.floor((width * height) / 28000), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.15,
      });
    }

    // Famous Cultivation, Engineering & Systems Quotes Floating in Ambient Background
    const floatingQuotesList = [
      "“Man proposes, heaven disposes. But today, I propose, and I dispose!”",
      "“From the darkness I came, and to the shadows I shall return.”",
      "“Talk is cheap. Show me the code.” — Linus Torvalds",
      "“Simplicity is prerequisite for reliability.” — Dijkstra",
      "“Every cultivator begins as nothing. The Dao cares only if you keep walking.”",
      "“A grandmaster does not rely on fate. He refines the world.”",
      "H(X) = -Σ P(xᵢ) · log₂ P(xᵢ)",
      "Attention(Q,K,V) = softmax(QKᵀ / √dₖ) V",
      "“In the midst of chaos, there is also opportunity.” — Sun Tzu",
      "NoPeek_Loss = ℒ_task + α · dCor(X, Z)",
    ];

    const quotes: FloatingQuote[] = floatingQuotesList.map((text, idx) => ({
      text,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.floor(Math.random() * 2) + 11,
      color: colors[idx % colors.length],
      alpha: Math.random() * 0.12 + 0.08,
      pulseSpeed: Math.random() * 0.015 + 0.008,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Floating Famous Quotes & Formulas
      for (const q of quotes) {
        q.x += q.vx;
        q.y += q.vy;

        // Wrap boundaries
        if (q.x < -400) q.x = width + 50;
        if (q.x > width + 200) q.x = -350;
        if (q.y < -50) q.y = height + 30;
        if (q.y > height + 50) q.y = -30;

        const dynamicAlpha = q.alpha + Math.sin(time * q.pulseSpeed * 60 + q.pulseOffset) * 0.04;

        ctx.font = `italic ${q.size}px "Courier New", Courier, monospace`;
        ctx.fillStyle = `${q.color} ${Math.max(dynamicAlpha, 0.05)})`;
        ctx.shadowColor = "rgba(212, 175, 55, 0.25)";
        ctx.shadowBlur = 4;
        ctx.fillText(q.text, q.x, q.y);
      }

      // 2. Connect particles with distance-based constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      // 3. Update and draw individual particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowColor = "rgba(212, 175, 55, 0.35)";
        ctx.shadowBlur = 4;
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
      {/* Ambient Color Blobs */}
      <div className="absolute top-10 left-[-5%] w-[600px] h-[550px] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-5%] w-[650px] h-[600px] bg-[#DC143C]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[65%] left-[10%] w-[550px] h-[500px] bg-[#38BDF8]/6 rounded-full blur-[140px] pointer-events-none" />

      {/* Tactile Doodles in Corners */}
      <div className="absolute top-28 left-6 text-2xl opacity-15 hidden md:block rotate-[-12deg]">✦</div>
      <div className="absolute top-36 right-16 hidden lg:flex items-center gap-2 opacity-20">
        <span className="font-mono text-xs text-[#D4AF37] tracking-widest">- - - ⚡ - - -</span>
      </div>
      <div className="absolute top-[45%] left-8 text-xl opacity-15 hidden md:block rotate-12">⚙️</div>
      <div className="absolute top-[75%] right-12 hidden lg:block opacity-20">
        <span className="font-mono text-xs text-[#FFD700] tracking-wider">- - - 🛸 - - -</span>
      </div>

      {/* SVG Subtle Textured Paper Noise Filter */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Interactive HTML5 Particle & Floating Quotes Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-65" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] transition-transform duration-75 ease-out pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.07) 0%, rgba(220, 20, 60, 0.02) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
