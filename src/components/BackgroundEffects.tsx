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

    let mouse = { x: -1000, y: -1000, radius: 140 };

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

    // Connected Studio & Blueprint Constellation Nodes
    const nodeCount = Math.min(Math.floor((width * height) / 22000), 45);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1.2,
      baseColor: Math.random() > 0.6 ? "#E25543" : Math.random() > 0.3 ? "#F8DC96" : "#B2C4B0",
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw connecting web lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(226, 85, 67, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Render & update individual nodes
      nodes.forEach((node) => {
        // Mouse repelling physics
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= Math.cos(angle) * force * 2;
          node.y -= Math.sin(angle) * force * 2;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0) node.x = width;
        if (node.x > width) node.x = 0;
        if (node.y < 0) node.y = height;
        if (node.y > height) node.y = 0;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.baseColor;
        ctx.globalAlpha = 0.55;
        ctx.fill();
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
      {/* Interactive Constellation & Blueprint Line Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Atmospheric Watercolor Ambient Glows */}
      <div className="paint-blob top-16 left-8 w-[420px] h-[360px] bg-[#E25543]/12 animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="paint-blob top-1/3 right-8 w-[380px] h-[400px] bg-[#B2C4B0]/14 animate-pulse" style={{ animationDuration: "11s" }} />
      <div className="paint-blob bottom-16 left-1/4 w-[450px] h-[320px] bg-[#F8DC96]/10 animate-pulse" style={{ animationDuration: "9s" }} />

      {/* Subtle Studio Coffee Cup Ring Stains */}
      <div className="coffee-stain absolute top-1/4 -left-12 w-48 h-48 -rotate-12 opacity-35" />
      <div className="coffee-stain absolute top-3/4 -right-10 w-44 h-44 rotate-45 opacity-30" />
    </div>
  );
}
