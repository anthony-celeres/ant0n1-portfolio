"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Process() {
  const steps = PORTFOLIO_DATA.process;

  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-200 bg-[#fafafa] geo-grid-bg relative overflow-hidden">

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="pb-12 border-b border-neutral-200">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            HOW IT WORKS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 max-w-3xl">
            Engineering speed,{" "}
            <span className="underline decoration-emerald-500 decoration-4 underline-offset-8">
              architectural rigor.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 font-sans max-w-xl leading-relaxed">
            Move fast without breaking production. A straightforward process to turn ideas into reliable software.
          </p>
        </div>

        {/* 4 Clean Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 bg-white border border-neutral-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold text-emerald-600 mb-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500" />
                  <span>PHASE 0{idx + 1}</span>
                </div>
                <h3 className="font-sans text-xl font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-100 mt-6 text-[11px] font-mono text-neutral-400">
                GATE_0{idx + 1} :: VERIFIED ✓
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
