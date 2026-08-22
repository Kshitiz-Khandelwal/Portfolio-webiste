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

interface FloatingEquation {
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
      "rgba(155, 17, 30,",   // Ruby Red
    ];

    const particleCount = Math.min(Math.floor((width * height) / 28000), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.6 + 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.45 + 0.15,
      });
    }

    // Mathematical Equations & System Design Formulas
    const equationFormulas = [
      "H(X) = -Σ P(xᵢ) · log₂ P(xᵢ)",
      "W(a,b) = |a|⁻¹/² ∫ x(t) ψ*((t-b)/a) dt",
      "ℒ_Fed = Σ (nₖ / N) ℒₖ(w)",
      "ϕᵢ(f,x) = Σ [|S|!(|F|-|S|-1)! / |F|!] · Δf(S)",
      "∇_θ ℒ(θ; x, y)",
      "σ(z) = 1 / (1 + e⁻ᶻ)",
      "P(A|B) = [P(B|A) · P(A)] / P(B)",
      "DGA = PRNG(Seed_epoch, TLD)",
      "f(x) = ReLU(W · x + b)",
      "softmax(zᵢ) = eᶻⁱ / Σ eᶻʲ",
      "𝒪(N log N)",
      "NoPeek_Loss = ℒ_task + α · dCor(X, Z)",
      "Attention(Q,K,V) = softmax(QKᵀ / √dₖ) V",
    ];

    const equations: FloatingEquation[] = equationFormulas.map((text, idx) => ({
      text,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.floor(Math.random() * 2) + 11, // 11px to 13px
      color: colors[idx % colors.length],
      alpha: Math.random() * 0.15 + 0.12, // Subtle ambient transparency
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Floating Mathematical Equations
      for (const eq of equations) {
        eq.x += eq.vx;
        eq.y += eq.vy;

        // Wrap boundaries
        if (eq.x < -150) eq.x = width + 50;
        if (eq.x > width + 150) eq.x = -50;
        if (eq.y < -50) eq.y = height + 30;
        if (eq.y > height + 50) eq.y = -30;

        const dynamicAlpha = eq.alpha + Math.sin(time * eq.pulseSpeed * 60 + eq.pulseOffset) * 0.05;

        ctx.font = `${eq.size}px "Courier New", Courier, monospace`;
        ctx.fillStyle = `${eq.color} ${Math.max(dynamicAlpha, 0.08)})`;
        ctx.shadowColor = "rgba(212, 175, 55, 0.3)";
        ctx.shadowBlur = 4;
        ctx.fillText(eq.text, eq.x, eq.y);
      }

      // 2. Connect particles with distance-based constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const lineAlpha = (1 - dist / 125) * 0.14;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
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
        ctx.shadowColor = "rgba(212, 175, 55, 0.4)";
        ctx.shadowBlur = 5;
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
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive HTML5 Particle & Mathematical Equation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] transition-transform duration-75 ease-out pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(220, 20, 60, 0.03) 45%, transparent 70%)",
        }}
      />
    </div>
  );
}
