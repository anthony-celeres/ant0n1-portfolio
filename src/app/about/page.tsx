"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Code2, Database, Layers, Sparkles, Terminal as TerminalIcon, ShieldCheck, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import GeometricTerminal from "@/components/GeometricTerminal";
import ContactBanner from "@/components/ContactBanner";
import { motion } from "framer-motion";

export default function AboutPage() {
  const principles = [
    {
      index: "01",
      title: "Zero Tech Debt Mentality",
      description:
        "Writing clean, modular, self-documenting code with strong boundaries. I build systems designed to be understood and extended six months from now, not just hacked together for today.",
      icon: ShieldCheck,
    },
    {
      index: "02",
      title: "Type Safety & Predictable State",
      description:
        "Strict TypeScript from schema to UI component. Compile-time guarantees eliminate entire classes of runtime exceptions and make refactoring fearless.",
      icon: Code2,
    },
    {
      index: "03",
      title: "Performance & Sub-16ms Latency",
      description:
        "Obsessed with 60fps interactions, optimized database indexes, small bundle sizes, and zero layout shifts. Software should feel instant and tactile.",
      icon: Zap,
    },
    {
      index: "04",
      title: "Founder Alignment & Velocity",
      description:
        "Engineering serves product and business outcomes. I cut unnecessary fluff, identify the critical path to value, and deliver production-ready code with relentless velocity.",
      icon: Sparkles,
    },
  ];

  const skillCategories = [
    {
      title: "Frontend & Interfaces",
      icon: Layers,
      skills: ["Next.js 15 (App Router)", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 Canvas", "WebSockets"],
    },
    {
      title: "Backend & Systems",
      icon: TerminalIcon,
      skills: ["Node.js", "Express", "Python (FastAPI)", "Go", "REST APIs", "GraphQL", "tRPC", "Microservices"],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "pgvector", "Redis", "ClickHouse", "Supabase", "MongoDB", "IndexedDB"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Code2,
      skills: ["Docker", "Git & GitHub Actions", "CI/CD Pipelines", "Vercel", "AWS Primitives", "Linux / UNIX"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#09090b] pt-24 md:pt-32">
      {/* Hero Header */}
      <section className="px-6 md:px-12 max-w-[1280px] mx-auto pb-16 border-b border-neutral-200">
        <div className="flex items-center gap-2 font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            HOME
          </Link>
          <span>/</span>
          <span className="text-emerald-600 font-bold">ABOUT</span>
        </div>

        <div className="inline-flex items-center border border-emerald-500 text-emerald-600 font-mono text-xs px-3 py-1 mb-6">
          <span>[ 01 // ABOUT · FULL-STACK SOFTWARE ENGINEER ]</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] mb-6">
          Engineering scalable web systems with{" "}
          <span className="underline decoration-emerald-500 decoration-4 underline-offset-8">
            architectural rigor.
          </span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed">
          I am <strong>Anthony Celeres</strong> (TON), a Manila-based software engineer building high-performance web applications, distributed backend microservices, and 0-to-1 products for founders and engineering teams globally.
        </p>
      </section>

      {/* Narrative Bio & Quick Telemetry */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6 text-neutral-700 leading-relaxed font-sans text-base md:text-lg">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
              BACKGROUND & NARRATIVE
            </h2>
            <p>
              My journey began in Computer Science with a relentless curiosity for how systems operate beneath the abstractions—from memory models and algorithmic complexity to distributed data consensus.
            </p>
            <p>
              Today, I bridge the gap between heavy backend engineering and buttery, responsive user interfaces. I believe software shouldn't just function correctly; it should feel lightweight, reactive, and engineered with craft.
            </p>
            <p>
              Whether partnering with early-stage founders to ship complete MVPs in rapid 1-to-2 week sprints, or profiling and de-lagging legacy enterprise codebases, I focus on ruthless simplification, strict type safety, and code that scales effortlessly.
            </p>
          </div>

          {/* Right Quick Telemetry Card */}
          <div className="lg:col-span-5 bg-neutral-50 border border-neutral-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-neutral-500">SYSTEM TELEMETRY</span>
                <span className="font-mono text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-neutral-200/60">
                  <span className="text-neutral-500">OPERATING LOCATION:</span>
                  <span className="text-neutral-900 font-semibold">MANILA, PHILIPPINES</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200/60">
                  <span className="text-neutral-500">AVAILABILITY:</span>
                  <span className="text-emerald-700 font-bold">OPEN FOR SPRINTS / ADVISORY</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200/60">
                  <span className="text-neutral-500">DEGREE:</span>
                  <span className="text-neutral-900 font-semibold">B.S. COMPUTER SCIENCE (HONORS)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-200/60">
                  <span className="text-neutral-500">PRIMARY FOCUS:</span>
                  <span className="text-neutral-900 font-semibold">FULL-STACK & SYSTEMS</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-500">COMMUNICATION:</span>
                  <span className="text-neutral-900 font-semibold">ASYNC-FIRST / SLACK / DISCORD</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="w-full py-3 bg-neutral-900 hover:bg-black text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors font-semibold"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Engineering Principles */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            CORE ETHOS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Engineering Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.index}
                className="p-8 border border-neutral-200 bg-white hover:border-emerald-500/80 transition-all hover:shadow-sm group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-neutral-400 group-hover:text-emerald-600 font-bold transition-colors">
                    [{p.index}]
                  </span>
                  <div className="p-2 bg-neutral-100 text-neutral-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-sans text-xl font-bold text-neutral-900 mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Experience Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            TRACK RECORD
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Career & Academic Experience
          </h2>
        </div>

        <div className="space-y-10">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 border border-neutral-200 bg-white hover:border-emerald-500/60 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-neutral-100 mb-6">
                <div>
                  <h3 className="font-sans text-2xl font-bold text-neutral-900">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs text-emerald-600 uppercase tracking-wider font-semibold mt-1">
                    {exp.organization} · {exp.location}
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 self-start sm:self-auto">
                  {exp.period}
                </span>
              </div>

              <p className="font-sans text-base text-neutral-700 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="space-y-2 mb-6">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 bg-neutral-50 border border-neutral-200 text-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Engineering Arsenal Matrix */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            ARSENAL
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Skills & Technology Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="p-6 border border-neutral-200 bg-neutral-50/50">
                <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-wider text-neutral-900">
                  <Icon className="w-4 h-4 text-emerald-600" />
                  <span>{cat.title}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-white border border-neutral-200 font-mono text-xs text-neutral-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Interactive Terminal */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-8">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            INTERACTIVE RUNTIME
          </div>
          <h2 className="font-sans text-3xl font-extrabold text-neutral-900">
            Command-Line Terminal
          </h2>
          <p className="font-sans text-sm text-neutral-600 mt-1">
            Query system stats, skills, and background directly via the interactive shell.
          </p>
        </div>

        <GeometricTerminal />
      </motion.section>

      {/* Contact Banner */}
      <ContactBanner />
    </main>
  );
}
