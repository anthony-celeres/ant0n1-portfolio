"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = PORTFOLIO_DATA.experience;

  return (
    <section id="experience" className="py-20 md:py-28 px-6 md:px-12 border-b border-neutral-200 bg-[#fafafa]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="pb-12 border-b border-neutral-200 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2 font-medium">
              EXPERIENCE
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Where I have{" "}
              <span className="underline decoration-black decoration-4 underline-offset-8">
                built.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-600 font-sans leading-relaxed">
            Computer science foundation paired with hands-on experience shipping web applications and tech infrastructure.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="mt-12 space-y-6">
          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-6 sm:p-8 border border-neutral-200 bg-white hover:border-black transition-all hover:shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Period & Role */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="inline-block px-2.5 py-0.5 border border-neutral-300 font-mono text-[11px] text-neutral-700 font-semibold bg-neutral-50">
                    {item.period}
                  </span>
                  <h3 className="font-sans text-xl font-bold text-black pt-1">
                    {item.role}
                  </h3>
                  <div className="font-mono text-xs text-neutral-500">
                    {item.organization} · {item.location}
                  </div>
                </div>

                {/* Description & Highlights */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-neutral-700 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 text-xs font-mono text-neutral-600">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-neutral-400 mt-1.5 shrink-0 rounded-full" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-neutral-100 text-neutral-600 font-mono text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
