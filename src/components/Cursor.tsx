import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          background: `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(100, 180, 255, 0.07), transparent 80%)`,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", moveGlow);
    return () => window.removeEventListener("mousemove", moveGlow);
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        mixBlendMode: "screen",
        filter: "blur(40px)",
        transition: "background 0.3s ease-out",
      }}
    />
  );
};

export default Cursor;
