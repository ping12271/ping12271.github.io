import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

type LoadingScreenProps = {
  /** milliseconds */
  minDurationMs?: number;
  onDone: () => void;
};

type Star = {
  x: number;
  y: number;
  z: number;
  pz: number;
};

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
  );
}

export function LoadingScreen({
  minDurationMs = 1800,
  onDone,
}: LoadingScreenProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const stars = useMemo<Star[]>(() => {
    const count = 1200;
    const arr: Star[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2,
        z: Math.random(),
        pz: 0,
      });
    }
    return arr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const root = rootRef.current;
    if (!canvas || !root) return;

    const reduced = prefersReducedMotion();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    startRef.current = performance.now();

    const duration = reduced
      ? Math.max(800, Math.min(1200, minDurationMs))
      : minDurationMs;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        const elapsed = performance.now() - startRef.current;
        const remaining = Math.max(0, duration - elapsed);
        window.setTimeout(() => {
          gsap.to(root, {
            opacity: 0,
            duration: 0.55,
            ease: "power2.out",
            onComplete: onDone,
          });
        }, remaining);
      },
    });

    tl.fromTo(
      root,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    ).fromTo(
      root.querySelectorAll("[data-animate='loading-text']"),
      { opacity: 0, y: 16, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, stagger: 0.08 },
      "<+0.05"
    );

    const draw = (t: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      const baseSpeed = reduced ? 0.012 : 0.026;
      const speed = baseSpeed + Math.min(0.02, (t - startRef.current) / 180000);
      const fov = 0.9;

      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z <= 0) {
          s.x = (Math.random() - 0.5) * 2;
          s.y = (Math.random() - 0.5) * 2;
          s.z = 1;
          s.pz = 1;
        }

        const sx = cx + (s.x / (s.z * fov)) * cx;
        const sy = cy + (s.y / (s.z * fov)) * cy;
        const px = cx + (s.x / (s.pz * fov)) * cx;
        const py = cy + (s.y / (s.pz * fov)) * cy;

        const depth = 1 - s.z;
        const alpha = 0.15 + depth * 0.85;
        const width = 0.4 + depth * 1.6;

        ctx.strokeStyle = `rgba(160, 210, 255, ${alpha})`;
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }

      // subtle center glow
      if (!reduced) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(cx, cy));
        g.addColorStop(0, "rgba(40, 140, 255, 0.18)");
        g.addColorStop(0.35, "rgba(40, 140, 255, 0.05)");
        g.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      rafRef.current = window.requestAnimationFrame(draw);
    };

    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      tl.kill();
    };
  }, [minDurationMs, onDone, stars]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex flex-col items-center">
        <h2 data-animate="loading-text" className="en text-white/80">
          LOADING
        </h2>
        <div
          data-animate="loading-text"
          className="mt-4 w-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>
    </div>
  );
}
