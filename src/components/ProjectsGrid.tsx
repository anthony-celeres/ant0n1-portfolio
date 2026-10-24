"use client";

import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion } from "framer-motion";

export default function ProjectsGrid() {
  const projects = PORTFOLIO_DATA.projects;

  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 border-b border-neutral-200 bg-[#f0f9f4] geo-dot-subtle relative overflow-hidden">

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="pb-10 border-b border-neutral-200">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            SELECTED PROJECTS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            Things I have{" "}
            <span className="underline decoration-emerald-500 decoration-4 underline-offset-8">
              built.
            </span>
          </h2>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="group border border-neutral-200 bg-white hover:border-emerald-500 transition-all flex flex-col justify-between shadow-sm hover:shadow-lg"
              >
                {/* Visual Header / Banner */}
                <div className="p-8 border-b border-neutral-100 bg-[#fafbfc] flex flex-col justify-between min-h-[160px]">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-4">
                    <span className="font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 border border-emerald-200/60">
                      {project.category}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  <div>
                    <h3 className="font-sans text-2xl font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-neutral-500 mt-1">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                    {project.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-neutral-100">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-neutral-100 text-neutral-700 border border-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-2 font-mono text-xs font-bold">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                          <span>LIVE DEMO</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-900 hover:underline"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>SOURCE</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
        </div>
      </div>
    </section>
  );
}
