import React, { useEffect, useRef } from "react";

const Cursor: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.background = `
            radial-gradient(
              400px circle at ${e.clientX}px ${e.clientY}px, 
              rgba(40, 140, 255, 0.05), 
              transparent 80%
            )
          `;
      }
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        transition: "background 0.2s ease-out",
      }}
    />
  );
};

export default Cursor;
