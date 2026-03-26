import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MenuOverlayProps {
  isOpen: boolean;
  onItemClick: (id: string) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onItemClick }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.fromTo(
        listRef.current?.children ?? [],
        { y: 100, autoAlpha: 0, skewY: 5 },
        {
          y: 0,
          autoAlpha: 1,
          skewY: 0,
          stagger: 0.1,
          duration: 1,
          ease: "expo.out",
          delay: 0.1,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center opacity-0 invisible"
    >
      <ul ref={listRef} className="text-center flex flex-col gap-10">
        {["home", "work", "contact"].map((item) => (
          <li
            key={item}
            className="group cursor-pointer overflow-hidden py-2"
            onClick={() => onItemClick(item)}
          >
            <div className="en text-[8vw] md:text-[10rem] font-black leading-[0.9] text-white/20 group-hover:text-white group-hover:scale-105 transition-all duration-500 ease-out tracking-tighter hover:text-gradient">
              {item}
            </div>
            <div className="w-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--secondary))] to-transparent mx-auto mt-4 transition-all duration-500 group-hover:w-1/2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
