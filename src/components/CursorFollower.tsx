"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hasPositioned = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Progressive trailing springs for primary cursor ring and trailing bubbles
  const leadSpring = { damping: 24, stiffness: 360, mass: 0.4 };
  const leadX = useSpring(mouseX, leadSpring);
  const leadY = useSpring(mouseY, leadSpring);

  // Trailing Bubble 1 (close follower)
  const trail1Spring = { damping: 26, stiffness: 300, mass: 0.5 };
  const trail1X = useSpring(mouseX, trail1Spring);
  const trail1Y = useSpring(mouseY, trail1Spring);

  // Trailing Bubble 2 (mid follower)
  const trail2Spring = { damping: 28, stiffness: 220, mass: 0.65 };
  const trail2X = useSpring(mouseX, trail2Spring);
  const trail2Y = useSpring(mouseY, trail2Spring);

  // Trailing Bubble 3 (tail micro-bubble)
  const trail3Spring = { damping: 30, stiffness: 160, mass: 0.8 };
  const trail3X = useSpring(mouseX, trail3Spring);
  const trail3Y = useSpring(mouseY, trail3Spring);

  useEffect(() => {
    // Only show on desktop devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasPositioned.current) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        leadX.jump(e.clientX);
        leadY.jump(e.clientY);
        trail1X.jump(e.clientX);
        trail1Y.jump(e.clientY);
        trail2X.jump(e.clientX);
        trail2Y.jump(e.clientY);
        trail3X.jump(e.clientX);
        trail3Y.jump(e.clientY);
        hasPositioned.current = true;
      } else {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect clickable elements to scale cursor follower
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target?.closest("button") ||
        target?.closest("a") ||
        target?.closest("input") ||
        target?.closest("textarea") ||
        target?.closest("[role='button']") ||
        target?.closest(".cursor-grab")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, leadX, leadY, trail1X, trail1Y, trail2X, trail2Y, trail3X, trail3Y]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {/* Trailing Bubble 3 (Tail micro-bubble) */}
      <motion.div
        className="pointer-events-none fixed rounded-full bg-emerald-400/40"
        style={{
          x: trail3X,
          y: trail3Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 3 : 5,
          height: isHovered ? 3 : 5,
          opacity: isHovered ? 0.25 : 0.6,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400 }}
      />

      {/* Trailing Bubble 2 (Mid minimalist bubble) */}
      <motion.div
        className="pointer-events-none fixed rounded-full border border-emerald-400/30 bg-emerald-400/25 shadow-[0_0_4px_rgba(16,185,129,0.15)]"
        style={{
          x: trail2X,
          y: trail2Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 5 : 8,
          height: isHovered ? 5 : 8,
          opacity: isHovered ? 0.35 : 0.7,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400 }}
      />

      {/* Trailing Bubble 1 (Leading bubble) */}
      <motion.div
        className="pointer-events-none fixed rounded-full border border-emerald-400/50 bg-emerald-400/20 shadow-[0_0_6px_rgba(16,185,129,0.2)]"
        style={{
          x: trail1X,
          y: trail1Y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 8 : 12,
          height: isHovered ? 8 : 12,
          opacity: isHovered ? 0.45 : 0.8,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400 }}
      />

      {/* Primary Target Cursor Ring */}
      <motion.div
        className="pointer-events-none fixed rounded-full border-2 border-emerald-500/80 bg-emerald-400/10 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
        style={{
          x: leadX,
          y: leadY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 40 : 24,
          height: isHovered ? 40 : 24,
          borderColor: isHovered ? "rgba(16, 185, 129, 0.95)" : "rgba(16, 185, 129, 0.75)",
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 400 }}
      />
    </div>
  );
}
