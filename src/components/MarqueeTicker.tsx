"use client";

import React from "react";

const DOMAIN_ITEMS = [
  "Machine Learning",
  "RAG Architectures",
  "Data Science",
  "Applied Research",
  "Web Development",
];

const GEOMETRIC_SYMBOLS = ["✦", "◆", "●", "▲"];

export default function MarqueeTicker() {
  // Repeat items so each track is adequately wide across ultra-wide monitors
  const trackItems = [...DOMAIN_ITEMS, ...DOMAIN_ITEMS, ...DOMAIN_ITEMS];

  return (
    <div className="w-full bg-[#ecfdf5] border-y border-emerald-200/90 py-3.5 md:py-4 overflow-hidden select-none">
      <div 
        className="flex w-max animate-marquee"
        style={{ animationDuration: "75s" }}
      >
        {/* Track 1 */}
        <div className="flex shrink-0 items-center">
          {trackItems.map((item, idx) => (
            <div
              key={`t1-${idx}`}
              className="flex items-center gap-8 px-8 font-mono text-xs md:text-sm tracking-wider uppercase"
            >
              <span className="font-bold text-neutral-900 whitespace-nowrap">
                {item}
              </span>
              <span className="text-emerald-500 font-bold text-xs shrink-0">
                {GEOMETRIC_SYMBOLS[idx % GEOMETRIC_SYMBOLS.length]}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless continuous loop) */}
        <div className="flex shrink-0 items-center">
          {trackItems.map((item, idx) => (
            <div
              key={`t2-${idx}`}
              className="flex items-center gap-8 px-8 font-mono text-xs md:text-sm tracking-wider uppercase"
            >
              <span className="font-bold text-neutral-900 whitespace-nowrap">
                {item}
              </span>
              <span className="text-emerald-500 font-bold text-xs shrink-0">
                {GEOMETRIC_SYMBOLS[idx % GEOMETRIC_SYMBOLS.length]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
