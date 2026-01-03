"use client";

import { useEffect, useRef } from "react";

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas as HTMLCanvasElement;
    const context = ctx as CanvasRenderingContext2D;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
    };

    let nodes: Node[] = [];
    let targetCount = 0;
    const maxDist = 250; // increased for more connections
    const nodeCountFor = (w: number, h: number) => Math.floor(Math.min(280, (w * h) / 8000)); // 2x more nodes

    const GOLD = { r: 212, g: 175, b: 55 };
    const LINE_ALPHA = 0.4; // more visible
    const NODE_SPEED = 0.135; // 3x faster movement
    const NODE_RADIUS = 3.2; // 2x larger dots
    const NODE_ALPHA = 0.5; // more visible nodes

    function resize() {
      const rect = c.parentElement?.getBoundingClientRect();
      width = Math.floor((rect?.width ?? window.innerWidth));
      height = Math.floor((rect?.height ?? window.innerHeight));
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = Math.floor(width * dpr);
      c.height = Math.floor(height * dpr);
      c.style.width = `${width}px`;
      c.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      // re-seed progressively
      const count = nodeCountFor(width, height);
      targetCount = count;
      nodes = [];
    }

    function step() {
      // clear with black background (transparent canvas on top of black backdrop also works, but we avoid artifacts)
      context.clearRect(0, 0, width, height);

      // update positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // soft bounce
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // progressively add nodes to "build" the network
      if (nodes.length < targetCount) {
        const add = Math.min(4, targetCount - nodes.length);
        for (let k = 0; k < add; k++) {
          nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * NODE_SPEED,
            vy: (Math.random() - 0.5) * NODE_SPEED,
          });
        }
      }

      // draw connections
      context.lineWidth = 1.1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxDist) {
            // alpha decreases with distance for extra subtlety
            const alpha = LINE_ALPHA * (1 - dist / maxDist);
            context.strokeStyle = `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, ${alpha})`;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      // after connections, draw node dots
      context.save();
      for (const n of nodes) {
        context.fillStyle = `rgba(${GOLD.r}, ${GOLD.g}, ${GOLD.b}, ${NODE_ALPHA})`;
        context.beginPath();
        context.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
        context.fill();
      }
      context.restore();

      rafRef.current = requestAnimationFrame(step);
    }

    function handleVisibility() {
      const hidden = document.hidden;
      if (hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else {
        if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
      }
    }

    resize();
    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-black" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
