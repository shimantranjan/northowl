"use client";

import { useEffect, useRef } from "react";

type NodePoint = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
};

export function AiNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = 0;
    let nodes: NodePoint[] = [];
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(28, Math.floor(width / 18));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: index % 7 === 0 ? 2.5 : 1.6,
        pulse: Math.random() * Math.PI * 2
      }));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(17, 17, 17, 0.62)";
      context.fillRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(96,165,250,0.18)");
      gradient.addColorStop(0.55, "rgba(255,255,255,0.08)");
      gradient.addColorStop(1, "rgba(96,165,250,0.04)");
      context.strokeStyle = gradient;

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.018;

        if (node.x <= 0 || node.x >= width) node.vx *= -1;
        if (node.y <= 0 || node.y >= height) node.vy *= -1;

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 126) {
            context.globalAlpha = (1 - distance / 126) * 0.72;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      }

      context.globalAlpha = 1;
      nodes.forEach((node) => {
        const glow = Math.max(0.2, Math.sin(node.pulse) * 0.4 + 0.6);
        context.beginPath();
        context.fillStyle = `rgba(96, 165, 250, ${0.48 * glow})`;
        context.arc(node.x, node.y, node.radius * 4.2, 0, Math.PI * 2);
        context.fill();
        context.beginPath();
        context.fillStyle = "rgba(255, 255, 255, 0.92)";
        context.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        context.fill();
      });

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="premium-border relative h-[460px] overflow-hidden rounded-lg bg-north-charcoal shadow-north-panel md:h-[560px]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(96,165,250,0.14),transparent_36%),linear-gradient(180deg,transparent,rgba(17,17,17,0.78))]" />
      <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] uppercase text-north-muted backdrop-blur">
        Agent Network Active
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 text-center">
        {["Data", "Reasoning", "Action"].map((item) => (
          <div key={item} className="rounded-md border border-white/10 bg-white/[0.05] px-2 py-3 backdrop-blur">
            <p className="font-mono text-[11px] uppercase text-north-muted">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
