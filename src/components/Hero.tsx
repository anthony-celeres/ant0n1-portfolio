"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ParametricGeometricCore from "./ParametricGeometricCore";

interface DomainRotation {
  tag: string;
  prefix: string;
  accent: string;
  tech: string;
}

const DOMAIN_ROTATIONS: DomainRotation[] = [
  {
    tag: "01 // MACHINE LEARNING",
    prefix: "Machine",
    accent: "Learning.",
    tech: "PyTorch · Neural Networks · CUDA",
  },
  {
    tag: "02 // RAG SYSTEMS",
    prefix: "RAG",
    accent: "Systems.",
    tech: "Vector DBs · Hybrid Search · LangChain",
  },
  {
    tag: "03 // DATA SCIENCE",
    prefix: "Data",
    accent: "Science.",
    tech: "Pandas · NumPy · Scikit-Learn",
  },
  {
    tag: "04 // APPLIED RESEARCH",
    prefix: "Applied",
    accent: "Research.",
    tech: "First-Principles · RFCs · Benchmarks",
  },
  {
    tag: "05 // WEB DEVELOPMENT",
    prefix: "Web",
    accent: "Development.",
    tech: "Next.js 15 · React 19 · TypeScript",
  },
];

const RANDOM_GREEN_SQUARES = [
  // Top area near header tag
  { col: 7, row: 1, opacity: 0.035 },
  { col: 14, row: 2, opacity: 0.04 },

  // Around the right side / 3D core (matching Cess's exact cluster)
  { col: 22, row: 2, opacity: 0.045 },
  { col: 23, row: 2, opacity: 0.075 }, // adjacent pair like Cess
  { col: 28, row: 4, opacity: 0.06 },
  { col: 29, row: 4, opacity: 0.09 }, // right side accent
  { col: 24, row: 11, opacity: 0.04 },
  { col: 27, row: 13, opacity: 0.07 }, // bottom right accent

  // Subtle lower & center accents
  { col: 6, row: 12, opacity: 0.03 },
  { col: 17, row: 9, opacity: 0.035 },

  // Wide screen perimeter
  { col: 33, row: 3, opacity: 0.045 },
  { col: 34, row: 8, opacity: 0.06 },
];

export default function Hero() {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [audienceKey, setAudienceKey] = useState<"anyone" | "recruiters" | "researchers">("anyone");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotationIndex((prev) => (prev + 1) % DOMAIN_ROTATIONS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const audienceBios = {
    anyone: (
      <>
        Hi, I'm Anthony. I <strong className="font-bold text-neutral-900">build software and intelligent systems</strong>—turning complex ideas and problems into simple, reliable products people love to use.
      </>
    ),
    recruiters: (
      <>
        Anthony is a <strong className="font-bold text-neutral-900">Computer Science graduate</strong> with multidisciplinary expertise spanning <strong className="font-bold text-neutral-900">AI/ML (PyTorch, CUDA), Vector RAG pipelines, Data Science, and modern Web Systems</strong> (Next.js, TypeScript, PostgreSQL).
      </>
    ),
    researchers: (
      <>
        Collaborating on applied AI, RAG evaluation, or empirical discovery? I partner with researchers to <strong className="font-bold text-neutral-900">translate mathematical proofs, open hypotheses, and RFCs into robust, reproducible codebases</strong> and benchmarked systems.
      </>
    ),
  };

  const audienceLabels = {
    anyone: "FOR ANYONE",
    recruiters: "FOR RECRUITERS",
    researchers: "FOR RESEARCHERS",
  };

  const currentDomain = DOMAIN_ROTATIONS[rotationIndex];

  return (
    <section className="relative flex min-h-[92vh] lg:min-h-screen flex-col border-b border-neutral-200 overflow-hidden bg-white">
      {/* Background Grid & Light Green Gradient Wash */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Ultra-light green atmospheric gradient that softly fades in on the left side */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(209, 250, 229, 0.2) 0%, rgba(236, 253, 245, 0.25) 35%, rgba(240, 253, 248, 0.12) 65%, rgba(255, 255, 255, 0) 100%), radial-gradient(ellipse 75% 75% at 15% 50%, rgba(16, 185, 129, 0.04) 0%, transparent 70%)",
          }}
        />

        {/* Subtle 48px Grid Lines */}
        <div
          className="absolute inset-0 opacity-40 z-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Random Light Green Tiles (Snapped to 48px Grid) */}
        {RANDOM_GREEN_SQUARES.map((tile, idx) => (
          <div
            key={idx}
            className="absolute z-0"
            style={{
              left: `${tile.col * 48}px`,
              top: `${tile.row * 48}px`,
              width: "48px",
              height: "48px",
              backgroundColor: `rgba(16, 185, 129, ${tile.opacity})`,
            }}
          />
        ))}
      </div>

      {/* Main Inner Container (Exact arrangement from Ma'am Cess) */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pt-24 pb-6 md:px-10 md:pt-28 md:pb-8 relative z-10 justify-between">
        {/* Top Subheader Tag Line */}
        <div className="mb-6 flex items-center gap-4 md:mb-8">
          <span className="border border-emerald-500 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-transparent">
            AI/ML RESEARCHER · WEB DEVELOPER
          </span>
          <span className="hidden h-px w-16 bg-emerald-400 sm:block" />
          <span className="hidden font-mono text-[10px] uppercase text-neutral-500 sm:block tracking-wider">
            PHILIPPINES
          </span>
        </div>

        {/* Center 2-Column Grid with Vertical Divider Line */}
        <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 md:items-center">
          {/* Left Column (md:col-span-7) */}
          <div className="relative z-10 md:col-span-7">
            {/* Pre-title */}
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-neutral-500 md:text-sm font-semibold">
              I SPECIALIZED IN
            </p>

            {/* Dynamic Rotating Headline (Rock-solid visibility, zero text overlap!) */}
            <div className="relative min-h-[2.8rem] sm:min-h-[3.2rem] md:min-h-[3.8rem] flex items-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={rotationIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight text-neutral-900 w-full"
                >
                  {currentDomain.prefix}{" "}
                  <span className="text-emerald-500 font-extrabold">
                    {currentDomain.accent}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* 5 Progress Bars (Direct match to the 5 domains) */}
            <div className="mt-3 flex gap-1.5 md:mt-4">
              {DOMAIN_ROTATIONS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setRotationIndex(idx)}
                  className="relative h-1 w-8 sm:w-10 overflow-hidden bg-neutral-200 hover:bg-neutral-300 transition-colors"
                  aria-label={`Jump to domain ${idx + 1}`}
                >
                  {idx === rotationIndex && (
                    <motion.span
                      className="absolute inset-0 origin-left bg-emerald-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 3.2, ease: "linear" }}
                    />
                  )}
                  {idx < rotationIndex && <span className="absolute inset-0 bg-emerald-500" />}
                </button>
              ))}
            </div>

            {/* Dropdown Selector: READING AS (Exact rectangular outline from Image 2) */}
            <div className="mt-6 flex flex-col items-start relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="h-10 w-full sm:w-[240px] rounded-none border border-neutral-300 bg-white font-mono text-[11px] uppercase hover:border-emerald-500 flex items-center justify-between px-3 transition-colors shadow-2xs"
              >
                <span className="text-neutral-500">READING AS</span>
                <span className="font-bold text-neutral-900 flex items-center gap-1.5">
                  {audienceLabels[audienceKey]}
                  <ChevronDown className="h-3.5 w-3.5 text-emerald-500" />
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[240px] border border-neutral-200 bg-white shadow-lg z-30 font-mono text-[11px] uppercase">
                  {(["anyone", "recruiters", "researchers"] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setAudienceKey(key);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2.5 hover:bg-neutral-50 transition-colors ${
                        audienceKey === key ? "font-bold text-emerald-600 bg-emerald-50/40" : "text-neutral-700"
                      }`}
                    >
                      {audienceLabels[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bio Paragraph */}
            <p className="mt-4 mb-6 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg font-sans">
              {audienceBios[audienceKey]}
            </p>

            {/* Solid Emerald CTA Button */}
            <div className="mb-2 flex items-center justify-start gap-4">
              <a
                href="#capabilities"
                className="rounded-none font-mono text-xs uppercase bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3.5 font-bold tracking-wider inline-flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>VIEW SERVICES</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column with Vertical Divider Line (md:col-span-5) */}
          <div className="relative flex justify-center md:col-span-5 md:items-center">
            <div className="w-full border-l-0 md:border-l md:border-neutral-200 pl-0 md:pl-8 lg:pl-10">
              <ParametricGeometricCore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
