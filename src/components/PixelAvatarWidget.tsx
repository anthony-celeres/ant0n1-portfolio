"use client";

import React, { useState, useRef } from "react";
import { RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

interface PlacedAccessory {
  id: string;
  emoji: string;
  x: number;
  y: number;
}

const ACCESSORIES = [
  { emoji: "👑", label: "Crown" },
  { emoji: "🕶️", label: "Sunglasses" },
  { emoji: "🎧", label: "Headphones" },
  { emoji: "💻", label: "Laptop" },
  { emoji: "☕", label: "Coffee" },
  { emoji: "⚡", label: "Lightning" },
  { emoji: "🚀", label: "Rocket" },
  { emoji: "⌨️", label: "Keyboard" },
  { emoji: "🧋", label: "Boba" },
  { emoji: "💡", label: "Idea" },
  { emoji: "🪴", label: "Plant" },
  { emoji: "🎮", label: "Gamepad" },
];

export default function PixelAvatarWidget() {
  const [placedItems, setPlacedItems] = useState<PlacedAccessory[]>([]);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!selectedEmoji || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(90, Math.max(10, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.min(90, Math.max(10, ((e.clientY - rect.top) / rect.height) * 100));

    const newItem: PlacedAccessory = {
      id: `${selectedEmoji}-${Date.now()}`,
      emoji: selectedEmoji,
      x,
      y,
    };

    setPlacedItems((prev) => [...prev, newItem]);
    setSelectedEmoji(null);
  };

  const removeItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlacedItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleReset = () => {
    setPlacedItems([]);
    setSelectedEmoji(null);
  };

  return (
    <div className="w-full max-w-[340px] mx-auto select-none">
      {/* Avatar Container Stage (Exact square box from Image 2) */}
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="relative aspect-square border border-neutral-200 bg-[#f8f9fa] overflow-hidden cursor-crosshair shadow-2xs transition-colors hover:border-emerald-500"
      >
        {/* Pixel Character SVG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 64 64"
            className="w-44 h-44 filter drop-shadow-sm"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Hair */}
            <rect x="22" y="10" width="20" height="6" fill="#18181b" />
            <rect x="20" y="14" width="24" height="6" fill="#18181b" />
            <rect x="18" y="18" width="6" height="10" fill="#18181b" />
            <rect x="40" y="18" width="6" height="10" fill="#18181b" />
            <rect x="24" y="16" width="16" height="3" fill="#27272a" />

            {/* Face / Skin */}
            <rect x="24" y="20" width="16" height="14" fill="#fed7aa" />
            <rect x="22" y="22" width="2" height="8" fill="#fed7aa" />
            <rect x="40" y="22" width="2" height="8" fill="#fed7aa" />

            {/* Eyes & Glasses */}
            <rect x="26" y="24" width="3" height="3" fill="#09090b" />
            <rect x="35" y="24" width="3" height="3" fill="#09090b" />
            <rect x="25" y="23" width="5" height="5" fill="none" stroke="#27272a" strokeWidth="1" />
            <rect x="34" y="23" width="5" height="5" fill="none" stroke="#27272a" strokeWidth="1" />
            <rect x="30" y="25" width="4" height="1" fill="#27272a" />

            {/* Smile */}
            <rect x="30" y="30" width="4" height="1" fill="#ca8a04" />

            {/* Neck */}
            <rect x="28" y="34" width="8" height="3" fill="#fed7aa" />

            {/* Developer Hoodie */}
            <rect x="20" y="37" width="24" height="18" fill="#27272a" />
            <rect x="16" y="39" width="4" height="12" fill="#3f3f46" />
            <rect x="44" y="39" width="4" height="12" fill="#3f3f46" />
            <rect x="28" y="37" width="2" height="8" fill="#ffffff" />
            <rect x="34" y="37" width="2" height="8" fill="#ffffff" />
            {/* Emerald Geometric Logo on Chest */}
            <polygon points="32,45 29,50 35,50" fill="#10b981" />

            {/* Hands */}
            <rect x="16" y="51" width="4" height="4" fill="#fed7aa" />
            <rect x="44" y="51" width="4" height="4" fill="#fed7aa" />

            {/* Pants */}
            <rect x="22" y="55" width="20" height="6" fill="#18181b" />
            <rect x="31" y="57" width="2" height="4" fill="#10b981" />
          </svg>
        </div>

        {/* Placed Accessories */}
        {placedItems.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            drag
            dragConstraints={containerRef}
            dragMomentum={false}
            onClick={(e) => removeItem(item.id, e)}
            title="Drag to move, click to remove"
            className="absolute -translate-x-1/2 -translate-y-1/2 text-2xl cursor-grab active:cursor-grabbing hover:scale-125 transition-transform drop-shadow"
            style={{ left: `${item.x}%`, top: `${item.y}%`, zIndex: 20 }}
          >
            {item.emoji}
          </motion.button>
        ))}

        {/* Placement Helper */}
        {selectedEmoji && (
          <div className="absolute bottom-2 left-0 right-0 px-2 text-center pointer-events-none">
            <span className="inline-block bg-emerald-600 text-white text-[10px] font-mono px-2 py-0.5 shadow">
              Click avatar to place {selectedEmoji}
            </span>
          </div>
        )}
      </div>

      {/* 2-Row Accessory Grid (6 columns, exact match to Image 2) */}
      <div className="mt-3.5 grid grid-cols-6 gap-1.5">
        {ACCESSORIES.map((item) => (
          <button
            key={item.label}
            type="button"
            title={item.label}
            aria-label={item.label}
            onClick={() => setSelectedEmoji((prev) => (prev === item.emoji ? null : item.emoji))}
            className={`aspect-square flex items-center justify-center text-lg border transition-all ${
              selectedEmoji === item.emoji
                ? "border-emerald-500 bg-emerald-500 text-white scale-105 shadow-xs"
                : "border-neutral-200 bg-white hover:border-emerald-400 hover:bg-neutral-50 shadow-2xs"
            }`}
          >
            {item.emoji}
          </button>
        ))}
      </div>

      {/* Reset Button (Exact square button from Image 2) */}
      <div className="mt-3 flex justify-center">
        <button
          type="button"
          onClick={handleReset}
          title="Reset accessories"
          aria-label="Reset character accessories"
          className="w-9 h-9 border border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50 flex items-center justify-center transition-colors shadow-2xs"
        >
          <RotateCcw className="h-3.5 w-3.5 text-neutral-500 hover:text-neutral-900" />
        </button>
      </div>
    </div>
  );
}
