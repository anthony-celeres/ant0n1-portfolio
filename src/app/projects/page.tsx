"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Code2, Cpu, Sparkles, Filter, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ContactBanner from "@/components/ContactBanner";
import { motion, AnimatePresence } from "framer-motion";

interface ExtendedProject {
  id: string;
  title: string;
  category: "Full-Stack" | "Systems" | "AI / ML" | "UI / UX";
  tagline: string;
  year: string;
  accentSymbol: string;
  problem: string;
  solution: string;
  metrics: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("ALL");
  const categories = ["ALL", "Full-Stack", "AI / ML", "Systems", "UI / UX"];

  const expandedProjects: ExtendedProject[] = [
    {
      id: "project-1",
      title: "AuraOS — Geometric Workspace",
      category: "Full-Stack",
      tagline: "Minimalist browser workspace with local-first sync and zero latency.",
      year: "2025",
      accentSymbol: "◆",
      problem:
        "Modern cloud productivity apps suffer from sluggish load times, bloated telemetry bundles, and dependency on constant online connectivity.",
      solution:
        "Engineered an offline-first workspace combining markdown notes, interactive kanban, and canvas plotting. Leveraged custom IndexedDB replication with WebSocket reconciliation, delivering instantaneous sub-16ms frame render times.",
      metrics: ["<16ms UI latency", "Offline-first sync", "100% TypeScript", "Zero layout shift"],
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "IndexedDB", "WebSockets"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
    },
    {
      id: "project-2",
      title: "Nexus — AI Compliance Engine",
      category: "AI / ML",
      tagline: "Intelligent document verification and regulatory risk detection engine.",
      year: "2025",
      accentSymbol: "▲",
      problem:
        "Financial institutions manually audit thousands of complex SEC and regulatory filings, causing multi-day review bottlenecks and human fatigue errors.",
      solution:
        "Constructed an asynchronous ingestion pipeline that parses multi-format filings into hierarchical chunks, extracts cross-referenced risk factors via pgvector embeddings, and verifies outputs using deterministic tool-calling constraints.",
      metrics: ["99.2% parsing accuracy", "4x faster review cycles", "Zero hallucinations", "Sub-2s search"],
      technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Next.js", "Docker"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
    },
    {
      id: "project-3",
      title: "Vortex — High-Throughput Analytics",
      category: "Systems",
      tagline: "Real-time telemetry ingestion pipeline and dashboard with sub-second queries.",
      year: "2024",
      accentSymbol: "■",
      problem:
        "High-frequency event analytics pipelines frequently choke during webhook traffic spikes, overwhelming traditional relational databases.",
      solution:
        "Architected an event buffer streaming incoming webhook telemetry through Redis into ClickHouse columnar storage. Frontend visualizes multi-million row datasets via lightweight HTML5 Canvas rendering.",
      metrics: ["10k+ events/sec", "Zero downtime deploy", "Instant aggregation", "ClickHouse columnar"],
      technologies: ["Go", "ClickHouse", "Redis", "TypeScript", "HTML5 Canvas", "Docker"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
    },
    {
      id: "project-4",
      title: "Synapse — Developer Toolkit",
      category: "UI / UX",
      tagline: "Accessible, keyboard-first developer tools utility in a modern dark terminal UI.",
      year: "2024",
      accentSymbol: "✕",
      problem:
        "Web-based developer tools (regex testers, JWT decoders, SQL formatters) are often cluttered with invasive ads, third-party trackers, and clumsy input forms.",
      solution:
        "Created an ultra-lean, privacy-first developer utility suite running 100% in the browser with WebAssembly modules. Features Vim-style keyboard shortcuts and zero external analytics.",
      metrics: ["100% Client-side", "Zero external trackers", "Keyboard-first navigation", "WASM modules"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "WebAssembly", "TypeScript"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
    },
    {
      id: "project-5",
      title: "HyperScale — Distributed DB Gateway",
      category: "Systems",
      tagline: "Intelligent connection pooler and adaptive rate limiter for serverless APIs.",
      year: "2024",
      accentSymbol: "●",
      problem:
        "Serverless functions opening direct connections to relational databases cause connection exhaustion during sudden traffic spikes.",
      solution:
        "Designed an edge proxy gateway that multiplexes incoming queries through a persistent connection pool with token-bucket rate limiting and circuit breakers.",
      metrics: ["90% connection reduction", "Sub-5ms proxy overhead", "Automatic failover"],
      technologies: ["Go", "PostgreSQL", "Redis", "Docker", "Prometheus"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
    },
    {
      id: "project-6",
      title: "Chronos — Resilient Job Scheduler",
      category: "Full-Stack",
      tagline: "Fault-tolerant distributed job orchestrator with PostgreSQL advisory locks.",
      year: "2023",
      accentSymbol: "✦",
      problem:
        "Scheduled background tasks in multi-instance cloud deployments risk duplicate execution and deadlocks without complex infrastructure overhead.",
      solution:
        "Implemented a lightweight task runner relying on PostgreSQL transaction-level advisory locks to guarantee exactly-once execution semantics across auto-scaling worker nodes.",
      metrics: ["Exactly-once semantics", "Zero Redis dependency", "Auto retry backoff"],
      technologies: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "Docker"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
    },
  ];

  const filteredProjects =
    filter === "ALL"
      ? expandedProjects
      : expandedProjects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-white text-[#09090b] pt-24 md:pt-32">
      {/* Hero Header */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto pb-16 border-b border-neutral-200">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-emerald-600 font-bold">PROJECTS</span>
        </div>

        <div className="inline-flex items-center border border-emerald-500 text-emerald-600 font-mono text-xs px-3 py-1 mb-6">
          <span>[ 03 // PROJECTS · COMPLETE SYSTEMS CATALOG ]</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] mb-6">
          Selected works &{" "}
          <span className="underline decoration-emerald-500 decoration-4 underline-offset-8">
            systems catalog.
          </span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed">
          A deep dive into production web applications, distributed backend microservices, AI compliance workflows, and developer utilities engineered for speed and reliability.
        </p>
      </section>

      {/* Filter Tabs & Case Studies */}
      <section className="py-16 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200">
        {/* Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-neutral-200 mb-12">
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-neutral-500">
            <Filter className="w-3.5 h-3.5 text-emerald-600" />
            <span>FILTER BY DOMAIN:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const count =
                cat === "ALL"
                  ? expandedProjects.length
                  : expandedProjects.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all border ${
                    filter === cat
                      ? "bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-emerald-500"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.article
                key={proj.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.2 }}
                className="border border-neutral-200 bg-white p-8 md:p-10 hover:border-emerald-500/80 transition-all hover:shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-neutral-100 mb-6">
                  <div>
                    <div className="flex items-center gap-2.5 font-mono text-xs mb-2">
                      <span className="text-emerald-600 font-bold">{proj.accentSymbol}</span>
                      <span className="text-neutral-500 uppercase tracking-widest">{proj.category}</span>
                      <span className="text-neutral-300">·</span>
                      <span className="text-neutral-400 font-mono">{proj.year}</span>
                    </div>
                    <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-neutral-900">
                      {proj.title}
                    </h2>
                    <p className="font-sans text-base text-neutral-600 mt-1">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-neutral-200 hover:border-neutral-900 text-neutral-700 hover:text-neutral-900 font-mono text-xs uppercase tracking-wider transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Problem & Solution Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-5 bg-neutral-50 border border-neutral-150">
                    <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2">
                      THE CHALLENGE:
                    </div>
                    <p className="font-sans text-sm text-neutral-700 leading-relaxed">
                      {proj.problem}
                    </p>
                  </div>

                  <div className="p-5 bg-emerald-50/50 border border-emerald-200/80">
                    <div className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold mb-2">
                      ARCHITECTURAL SOLUTION:
                    </div>
                    <p className="font-sans text-sm text-neutral-800 leading-relaxed">
                      {proj.solution}
                    </p>
                  </div>
                </div>

                {/* Verified Metrics Strip */}
                <div className="mb-6">
                  <div className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-3">
                    VERIFIED BENCHMARKS:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {proj.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 bg-neutral-50 border border-neutral-200 font-mono text-xs text-neutral-800 font-semibold"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-neutral-100">
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider mr-2">
                    STACK:
                  </span>
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-white border border-neutral-200 font-mono text-xs text-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Architectural Pillars */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            ENGINEERING STANDARDS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Pillars Behind Every Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-emerald-600 font-bold mb-3">[01]</div>
            <h3 className="font-sans text-xl font-bold text-neutral-900 mb-2">Local-First UI</h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">
              Optimistic updates, instant state hydration, and client caching that ensure zero perception of network latency.
            </p>
          </div>

          <div className="p-8 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-emerald-600 font-bold mb-3">[02]</div>
            <h3 className="font-sans text-xl font-bold text-neutral-900 mb-2">Zero-Cost Abstractions</h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">
              Avoiding framework overhead where standard web APIs excel. Keeping bundle sizes minimal and runtime execution fast.
            </p>
          </div>

          <div className="p-8 border border-neutral-200 bg-white">
            <div className="font-mono text-xs text-emerald-600 font-bold mb-3">[03]</div>
            <h3 className="font-sans text-xl font-bold text-neutral-900 mb-2">Observable Telemetry</h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed">
              Structured logging, schema-validated metrics, and error boundaries so production bugs can be diagnosed in seconds.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Banner */}
      <ContactBanner />
    </main>
  );
}
