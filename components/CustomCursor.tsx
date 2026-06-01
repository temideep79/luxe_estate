"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const isHovering = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };

    const handleEnter = () => {
      isHovering.current = true;
      if (cursorRef.current) {
        cursorRef.current.style.transform += " scale(1.8)";
        cursorRef.current.style.background = "rgba(139, 99, 71, 0.3)";
        cursorRef.current.style.borderColor = "#8B6347";
      }
    };

    const handleLeave = () => {
      isHovering.current = false;
      if (cursorRef.current) {
        cursorRef.current.style.background = "transparent";
        cursorRef.current.style.borderColor = "rgba(255,255,255,0.6)";
      }
    };

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/60 pointer-events-none z-[9999] mix-blend-difference transition-[background,border-color] duration-200"
        style={{ x: smoothX, y: smoothY }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C4A882] pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
