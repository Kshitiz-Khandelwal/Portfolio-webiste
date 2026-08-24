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

    let mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Engineering & Atmospheric Stardust Particles
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.5 + 1,
      type: Math.random() > 0.7 ? "spark" : Math.random() > 0.4 ? "node" : "dust",
      color: Math.random() > 0.6 ? "#E25543" : Math.random() > 0.3 ? "#F8DC96" : "#B2C4B0",
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.02,
      opacity: Math.random() * 0.4 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle connecting laser/circuit lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(226, 85, 67, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 2. Render & Update Particle Shapes
      particles.forEach((p) => {
        // Mouse repelling physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= Math.cos(angle) * force * 2.2;
          p.y -= Math.sin(angle) * force * 2.2;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vrot;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;

        if (p.type === "spark") {
          // Draw 4-point star spark
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 2);
          ctx.quadraticCurveTo(0, 0, p.size * 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, p.size * 2);
          ctx.quadraticCurveTo(0, 0, -p.size * 2, 0);
          ctx.quadraticCurveTo(0, 0, 0, -p.size * 2);
          ctx.fill();
        } else if (p.type === "node") {
          // Draw geometric diamond node
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.5);
          ctx.lineTo(p.size * 1.5, 0);
          ctx.lineTo(0, p.size * 1.5);
          ctx.lineTo(-p.size * 1.5, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          // Draw circular soft dust particle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Interactive Circuit & Geometric Stardust Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Atmospheric Breathing Gradient Auroras */}
      <div className="paint-blob top-10 left-10 w-[500px] h-[420px] bg-[#E25543]/14 animate-pulse" style={{ animationDuration: "7s" }} />
      <div className="paint-blob top-1/2 right-4 w-[450px] h-[450px] bg-[#B2C4B0]/15 animate-pulse" style={{ animationDuration: "10s" }} />
      <div className="paint-blob bottom-10 left-1/3 w-[550px] h-[380px] bg-[#F8DC96]/12 animate-pulse" style={{ animationDuration: "9s" }} />

      {/* Subtle Studio Coffee Cup Ring Stains */}
      <div className="coffee-stain absolute top-1/4 -left-12 w-48 h-48 -rotate-12 opacity-30" />
      <div className="coffee-stain absolute top-3/4 -right-10 w-44 h-44 rotate-45 opacity-25" />
    </div>
  );
}
