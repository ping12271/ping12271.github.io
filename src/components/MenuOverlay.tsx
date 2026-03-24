import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onItemClick: (id: string) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onItemClick }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.fromTo(
        listRef.current?.children ?? [],
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "expo.out",
          delay: 0.2,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-40 invisible bg-black/60 backdrop-blur-md flex items-center justify-center opacity-0"
    >
      <ul ref={listRef} className="text-center space-y-10 uppercase text-white">
        {["home", "work", "contact"].map((item) => (
          <li
            key={item}
            className="group cursor-pointer list-none"
            onClick={() => onItemClick(item)}
          >
            <div className="en text-[10rem] uppercase group-hover:text-gradient">
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
