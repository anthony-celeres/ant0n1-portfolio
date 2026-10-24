"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Plus } from "lucide-react";

interface CanvasItem {
  id: string;
  type: "sticker" | "note";
  content: string;
  symbol?: string;
  x: number;
  y: number;
}

const INITIAL_ITEMS: CanvasItem[] = [
  {
    id: "item-1",
    type: "note",
    content: "Clean architecture > complex spaghetti.",
    x: 40,
    y: 40,
  },
  {
    id: "item-2",
    type: "sticker",
    content: "ZERO LAG",
    symbol: "◆",
    x: 320,
    y: 80,
  },
  {
    id: "item-3",
    type: "sticker",
    content: "100% TYPE SAFE",
    symbol: "▲",
    x: 180,
    y: 190,
  },
  {
    id: "item-4",
    type: "note",
    content: "Anthony's 0-to-1 execution speed is top tier.",
    x: 460,
    y: 160,
  },
];

export default function GeometricCanvas() {
  const [items, setItems] = useState<CanvasItem[]>(INITIAL_ITEMS);
  const [noteInput, setNoteInput] = useState("");

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteInput.trim()) return;

    const newItem: CanvasItem = {
      id: `note-${Date.now()}`,
      type: "note",
      content: noteInput.trim(),
      x: 100 + Math.random() * 200,
      y: 80 + Math.random() * 120,
    };

    setItems((prev) => [...prev, newItem]);
    setNoteInput("");
  };

  const addSticker = (symbol: string, label: string) => {
    const newItem: CanvasItem = {
      id: `sticker-${Date.now()}`,
      type: "sticker",
      content: label,
      symbol: symbol,
      x: 120 + Math.random() * 250,
      y: 90 + Math.random() * 140,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const resetCanvas = () => {
    setItems(INITIAL_ITEMS);
  };

  return (
    <section id="canvas" className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-200 bg-[#fafafa] geo-grid-bg relative select-none overflow-hidden">

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-neutral-200 gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
              INTERACTIVE CANVAS
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Collaborate &{" "}
              <span className="underline decoration-emerald-500 decoration-4 underline-offset-8">
                comment.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-600 font-sans leading-relaxed">
            Drag stamps around, leave a quick note, or drop feedback on this live coordinate board.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-3 border border-neutral-200 bg-white shadow-sm">
          {/* Quick Stamps */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mr-1 font-semibold">
              STAMPS:
            </span>
            {[
              { symbol: "▲", label: "PRODUCTION READY" },
              { symbol: "■", label: "CLEAN CODE" },
              { symbol: "◆", label: "ZERO LAG" },
              { symbol: "✦", label: "RELENTLESS" },
            ].map((stamp) => (
              <button
                key={stamp.label}
                onClick={() => addSticker(stamp.symbol, stamp.label)}
                className="px-2.5 py-1 border border-neutral-200 bg-[#f8f9fa] hover:bg-emerald-600 hover:text-white hover:border-emerald-600 font-mono text-[10px] text-neutral-800 transition-colors flex items-center gap-1.5 font-semibold"
              >
                <span>{stamp.symbol}</span>
                <span>{stamp.label}</span>
              </button>
            ))}
          </div>

          {/* Add Custom Note Form */}
          <form onSubmit={addNote} className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="text"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
              placeholder="Drop a note on the canvas..."
              className="bg-[#f8f9fa] border border-neutral-300 px-3 py-1 font-mono text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-emerald-500 w-full sm:w-64"
            />
            <button
              type="submit"
              disabled={!noteInput.trim()}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs py-1 px-3 disabled:opacity-40 font-mono font-bold uppercase flex items-center gap-1 shadow-sm transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>PIN</span>
            </button>
            <button
              type="button"
              onClick={resetCanvas}
              title="Reset Canvas"
              className="p-1.5 text-neutral-400 hover:text-black transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Draggable Canvas Stage */}
        <div className="relative h-[420px] md:h-[480px] border border-neutral-200 bg-white mt-4 overflow-hidden shadow-inner">
          {/* Subtle Grid Lines inside Stage */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {items.map((item) => (
            <motion.div
              key={item.id}
              drag
              dragMomentum={false}
              dragConstraints={{ left: 10, right: 800, top: 10, bottom: 360 }}
              initial={{ x: item.x, y: item.y }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`absolute cursor-grab active:cursor-grabbing p-3.5 border shadow-sm select-none ${
                item.type === "sticker"
                  ? "border-emerald-600 bg-emerald-600 text-white font-mono font-bold text-xs shadow-md"
                  : "border-neutral-200 bg-white text-neutral-900 font-sans text-xs max-w-xs shadow"
              }`}
            >
              {item.type === "sticker" ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm">{item.symbol}</span>
                  <span className="uppercase tracking-wider text-[10px]">
                    {item.content}
                  </span>
                </div>
              ) : (
                <p className="leading-snug">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
