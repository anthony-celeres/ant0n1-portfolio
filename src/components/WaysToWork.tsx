"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowUpRight, 
  ArrowRight, 
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

interface BubbleDef {
  size: number;
  offset: number;     // vertical offset in px
  wobble: number;     // vertical float delta in px
  delayRatio: number; // stagger delay as fraction of duration (0 to 1)
  styleClass: string; // matches cursor detector trailing circles styles
}

const TRAIL_DURATION = 3.8; // Gentle, smooth floating pace (significantly relaxed speed)

// Continuous stream of trailing circles from Discovery [0] -> ant0n1
const CHANNEL_A_BUBBLES: BubbleDef[] = [
  { size: 16, offset: -6,  wobble: 6,   delayRatio: 0 / 7,   styleClass: "border-2 border-emerald-500 bg-emerald-400/30 shadow-[0_0_10px_rgba(16,185,129,0.5)]" },
  { size: 10, offset: 8,   wobble: -6,  delayRatio: 1 / 7,   styleClass: "border border-emerald-400 bg-emerald-400/40 shadow-[0_0_6px_rgba(16,185,129,0.4)]" },
  { size: 20, offset: -2,  wobble: -5,  delayRatio: 2 / 7,   styleClass: "border-2 border-emerald-500/90 bg-emerald-400/25 shadow-[0_0_12px_rgba(16,185,129,0.5)]" },
  { size: 12, offset: -10, wobble: 7,   delayRatio: 3 / 7,   styleClass: "border border-emerald-500 bg-emerald-400/35 shadow-[0_0_8px_rgba(16,185,129,0.4)]" },
  { size: 7,  offset: 6,   wobble: 4,   delayRatio: 4 / 7,   styleClass: "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" },
  { size: 14, offset: 10,  wobble: -7,  delayRatio: 5 / 7,   styleClass: "border-2 border-emerald-400 bg-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.45)]" },
  { size: 9,  offset: -5,  wobble: -4,  delayRatio: 6 / 7,   styleClass: "bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]" },
];

// Continuous stream of trailing circles from ant0n1 -> Delivery [1] (runs simultaneously)
const CHANNEL_B_BUBBLES: BubbleDef[] = [
  { size: 14, offset: 6,   wobble: -6,  delayRatio: 0.5 / 7, styleClass: "border-2 border-emerald-500 bg-emerald-400/30 shadow-[0_0_10px_rgba(16,185,129,0.5)]" },
  { size: 18, offset: -8,  wobble: 7,   delayRatio: 1.5 / 7, styleClass: "border-2 border-emerald-500/90 bg-emerald-400/25 shadow-[0_0_12px_rgba(16,185,129,0.5)]" },
  { size: 8,  offset: -10, wobble: -4,  delayRatio: 2.5 / 7, styleClass: "bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" },
  { size: 20, offset: 2,   wobble: 6,   delayRatio: 3.5 / 7, styleClass: "border-2 border-emerald-500 bg-emerald-400/30 shadow-[0_0_12px_rgba(16,185,129,0.5)]" },
  { size: 10, offset: 10,  wobble: -5,  delayRatio: 4.5 / 7, styleClass: "border border-emerald-400 bg-emerald-400/40 shadow-[0_0_6px_rgba(16,185,129,0.4)]" },
  { size: 16, offset: -5,  wobble: -6,  delayRatio: 5.5 / 7, styleClass: "border-2 border-emerald-400 bg-emerald-400/30 shadow-[0_0_8px_rgba(16,185,129,0.45)]" },
  { size: 7,  offset: -8,  wobble: 4,   delayRatio: 6.5 / 7, styleClass: "bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.5)]" },
];

function ContinuousBubbleDesktop({ bubble }: { bubble: BubbleDef }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none will-change-transform ${bubble.styleClass}`}
      style={{
        width: bubble.size,
        height: bubble.size,
        top: "50%",
        marginTop: -bubble.size / 2,
      }}
      animate={{
        left: ["0%", "100%"],
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1, 1, 0.6],
        y: [bubble.offset, bubble.offset + bubble.wobble * 0.5, bubble.offset - bubble.wobble * 0.5, bubble.offset],
      }}
      transition={{
        repeat: Infinity,
        duration: TRAIL_DURATION,
        delay: bubble.delayRatio * TRAIL_DURATION,
        ease: "linear",
        times: [0, 0.1, 0.9, 1],
      }}
    />
  );
}

function ContinuousBubbleMobile({ bubble }: { bubble: BubbleDef }) {
  const MOBILE_DURATION = TRAIL_DURATION * 0.75;
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none will-change-transform ${bubble.styleClass}`}
      style={{
        width: Math.round(bubble.size * 0.85),
        height: Math.round(bubble.size * 0.85),
        left: "50%",
        marginLeft: -Math.round((bubble.size * 0.85) / 2),
      }}
      animate={{
        top: ["-5%", "105%"],
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1, 1, 0.6],
        x: [bubble.offset * 0.7, (bubble.offset + bubble.wobble * 0.5) * 0.7, (bubble.offset - bubble.wobble * 0.5) * 0.7, bubble.offset * 0.7],
      }}
      transition={{
        repeat: Infinity,
        duration: MOBILE_DURATION,
        delay: bubble.delayRatio * MOBILE_DURATION,
        ease: "linear",
        times: [0, 0.08, 0.92, 1],
      }}
    />
  );
}

export default function WaysToWork() {
  return (
    <section id="capabilities" className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-200 bg-[#fafafa] geo-grid-bg relative overflow-hidden">
      <div className="relative z-10 max-w-[1280px] mx-auto">

        {/* Section Header with MASSIVE typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-neutral-200 gap-8">
          <div>
            <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Meet ant<span className="text-emerald-500 font-mono">0</span>n<span className="text-emerald-500 font-mono">1</span>.
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-500 mt-2 tracking-tight">
              From zero to one.
            </p>
          </div>

          <p className="max-w-md text-base sm:text-lg text-neutral-600 font-sans leading-relaxed">
            Turning problems and ideas into working solutions.
          </p>
        </div>

        {/* =========================================================================
            SIGNATURE 3-NODE CONTINUOUS BUBBLE STREAM DIAGRAM (COMPACT & UNBOXED)
            Constrained max-width brings boxes closer together; continuous non-stop bubble flow
            ========================================================================= */}
        <div className="mt-16 sm:mt-20 max-w-2xl sm:max-w-3xl mx-auto relative">

          {/* Desktop Channel A: Discovery (Node 0) -> ant0n1 (Continuous non-stop stream) */}
          <div className="absolute top-12 sm:top-14 md:top-16 -translate-y-1/2 left-24 sm:left-28 md:left-32 right-[calc(50%+3rem)] sm:right-[calc(50%+3.5rem)] md:right-[calc(50%+4rem)] h-20 sm:h-24 md:h-28 pointer-events-none hidden md:block overflow-hidden z-20">
            {CHANNEL_A_BUBBLES.map((b, idx) => (
              <ContinuousBubbleDesktop key={`chA-${idx}`} bubble={b} />
            ))}
          </div>

          {/* Desktop Channel B: ant0n1 -> Delivery (Node 1) (Continuous simultaneous stream) */}
          <div className="absolute top-12 sm:top-14 md:top-16 -translate-y-1/2 left-[calc(50%+3rem)] sm:left-[calc(50%+3.5rem)] md:left-[calc(50%+4rem)] right-24 sm:right-28 md:right-32 h-20 sm:h-24 md:h-28 pointer-events-none hidden md:block overflow-hidden z-20">
            {CHANNEL_B_BUBBLES.map((b, idx) => (
              <ContinuousBubbleDesktop key={`chB-${idx}`} bubble={b} />
            ))}
          </div>

          {/* 3 Process Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 relative">
            
            {/* Node 0: Discovery */}
            <div className="group cursor-pointer select-none flex flex-col md:items-start items-center text-center relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white border border-neutral-300 shadow-sm flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-neutral-900 group-hover:shadow-xl group-hover:shadow-neutral-900/10 group-hover:ring-2 group-hover:ring-neutral-900/10 active:translate-y-0 active:scale-95 mb-4 z-10">
                <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tighter transition-transform duration-300 ease-out group-hover:scale-110">
                  0
                </span>
              </div>

              <div className="w-24 sm:w-28 md:w-32 flex flex-col items-center text-center">
                <span className="font-mono text-[10px] font-bold text-neutral-400 group-hover:text-neutral-600 transition-colors uppercase tracking-widest whitespace-nowrap text-center">
                  INPUT [ 00 ]
                </span>
                <span className="font-sans text-xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors mt-0.5 text-center">
                  Discovery
                </span>
              </div>
            </div>

            {/* Mobile Vertical Bubble Chamber (Node 0 -> ant0n1) */}
            <div className="md:hidden relative h-16 w-28 mx-auto overflow-hidden pointer-events-none my-0 flex items-center justify-center">
              {CHANNEL_A_BUBBLES.map((b, idx) => (
                <ContinuousBubbleMobile key={`mobA-${idx}`} bubble={b} />
              ))}
            </div>

            {/* Node Center: ant0n1 Process */}
            <div className="group cursor-pointer select-none flex flex-col items-center text-center relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-neutral-900 border border-neutral-900 shadow-md flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-emerald-400 group-hover:shadow-2xl group-hover:shadow-emerald-500/25 group-hover:ring-2 group-hover:ring-emerald-400/40 active:translate-y-0 active:scale-95 mb-4 z-10">
                <span className="font-mono text-base sm:text-lg md:text-xl font-black text-white tracking-wider transition-transform duration-300 ease-out group-hover:scale-110">
                  ant<span className="text-emerald-400 font-black">0</span>n<span className="text-emerald-400 font-black">1</span>
                </span>
              </div>

              <div className="w-24 sm:w-28 md:w-32 flex flex-col items-center text-center">
                <span className="font-mono text-[10px] font-bold text-emerald-600 group-hover:text-emerald-500 transition-colors uppercase tracking-widest whitespace-nowrap text-center">
                  PROCESS [ 0 ➔ 1 ]
                </span>
                <span className="font-sans text-xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors mt-0.5 text-center">
                  Sprint
                </span>
              </div>
            </div>

            {/* Mobile Vertical Bubble Chamber (ant0n1 -> Node 1) */}
            <div className="md:hidden relative h-16 w-28 mx-auto overflow-hidden pointer-events-none my-0 flex items-center justify-center">
              {CHANNEL_B_BUBBLES.map((b, idx) => (
                <ContinuousBubbleMobile key={`mobB-${idx}`} bubble={b} />
              ))}
            </div>

            {/* Node 1: Delivery */}
            <div className="group cursor-pointer select-none flex flex-col md:items-end items-center text-center relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white border border-neutral-300 shadow-sm flex items-center justify-center transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:border-emerald-500 group-hover:shadow-xl group-hover:shadow-emerald-500/20 group-hover:ring-2 group-hover:ring-emerald-400/30 active:translate-y-0 active:scale-95 mb-4 z-10">
                <span className="font-mono text-3xl sm:text-4xl md:text-5xl font-black text-emerald-600 tracking-tighter transition-transform duration-300 ease-out group-hover:scale-110">
                  1
                </span>
              </div>

              <div className="w-24 sm:w-28 md:w-32 flex flex-col items-center text-center">
                <span className="font-mono text-[10px] font-bold text-emerald-600 group-hover:text-emerald-500 transition-colors uppercase tracking-widest whitespace-nowrap text-center">
                  OUTPUT [ 01 ]
                </span>
                <span className="font-sans text-xl font-bold text-neutral-900 group-hover:text-emerald-600 transition-colors mt-0.5 text-center">
                  Delivery
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            BOTTOM CALLOUT
            ========================================================================= */}
        <div className="mt-16 sm:mt-20 p-8 bg-white text-neutral-900 border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-600 font-mono text-xs mb-2 font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>0-TO-1 COLLABORATION</span>
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900">
              Have an unexplored problem or ambitious idea?
            </h3>
            <p className="text-neutral-600 text-sm mt-1 max-w-xl">
              Let's turn problems and ideas into working solutions together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3 bg-emerald-500 text-white font-mono text-xs font-bold uppercase hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>CONNECT & COLLABORATE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href="/projects"
              className="px-6 py-3 border border-neutral-200 bg-neutral-50 text-neutral-800 font-mono text-xs font-semibold uppercase hover:bg-neutral-100 hover:border-neutral-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4 text-neutral-500" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
