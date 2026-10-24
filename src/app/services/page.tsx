"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ChevronDown, Clock, Layers, Rocket, ShieldCheck, Terminal as TerminalIcon, Wrench } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import ContactBanner from "@/components/ContactBanner";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const detailedServices = [
    {
      index: "01",
      title: "End-to-End Web Systems Architecture",
      tag: "Full-Cycle Engineering",
      icon: Layers,
      timeline: "2 – 4 Weeks",
      overview:
        "Complete system design from database schemas and API contracts to pixel-perfect, reactive frontends built with modern type safety.",
      deliverables: [
        "Scalable Next.js 15 (App Router) & React 19 architecture",
        "Robust REST, GraphQL, or tRPC API services",
        "PostgreSQL schema design with strict constraints & indexing",
        "Secure JWT / OAuth authentication and Role-Based Access Control (RBAC)",
        "End-to-end type safety across the entire application stack",
      ],
      idealFor: "Startups and companies needing a scalable foundation built right the first time.",
      cta: "Discuss Architecture",
    },
    {
      index: "02",
      title: "Rapid 0-to-1 MVP Sprints",
      tag: "Product Execution",
      icon: Rocket,
      timeline: "1 – 2 Weeks",
      overview:
        "Transform product specs or rough mockups into a working, deployed application ready for real users and investor pitches.",
      deliverables: [
        "Rapid prototyping with production-grade Next.js & TypeScript",
        "Essential core user workflows engineered without bloat",
        "Stripe / payment gateway integration & webhook processing",
        "Automated deployment pipeline to Vercel or AWS with CI/CD",
        "Self-documenting codebase ready for your future team",
      ],
      idealFor: "Founders looking to validate a hypothesis, secure funding, or launch fast.",
      cta: "Kickoff MVP Sprint",
    },
    {
      index: "03",
      title: "Codebase Audit & De-Lagging",
      tag: "Performance Tuning",
      icon: Wrench,
      timeline: "3 – 7 Days",
      overview:
        "Diagnose and eliminate UI jank, stuttering animations, slow database queries, and architectural technical debt.",
      deliverables: [
        "Full frontend profiling (bundle size diet, memoization, render tree optimization)",
        "Database query profiling (EXPLAIN ANALYZE, missing indexes, connection pooling)",
        "Refactoring messy components into clean, testable contracts",
        "Actionable performance report with benchmarked before/after metrics",
        "Zero Layout Shift (CLS) and sub-16ms frame rate guarantees",
      ],
      idealFor: "Teams suffering from slow page loads, escalating cloud costs, or buggy interfaces.",
      cta: "Schedule Audit",
    },
    {
      index: "04",
      title: "Fractional Engineering Advisory",
      tag: "Ongoing Partnership",
      icon: ShieldCheck,
      timeline: "Monthly Retainer",
      overview:
        "Dedicated engineering muscle and advisory for leadership teams that need senior technical direction as they scale.",
      deliverables: [
        "Architectural RFC reviews and database schema consultations",
        "Code reviews and engineering best practices enforcement",
        "High-priority feature spikes and complex bug resolutions",
        "Async Slack/Discord collaboration with rapid turnaround",
        "Interview assistance for hiring your internal engineering team",
      ],
      idealFor: "Founders without a technical co-founder or engineering leads needing senior bandwidth.",
      cta: "Explore Retainer",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Deconstruct & Scope",
      description:
        "Every engagement begins by eliminating ambiguity. We dissect your requirements, identify edge cases, and cut unnecessary fluff to focus strictly on what delivers value.",
    },
    {
      step: "02",
      title: "Architectural Blueprint",
      description:
        "Before writing code, schemas, interface contracts, state machines, and data flows are mapped. A solid architectural blueprint prevents costly rewrites.",
    },
    {
      step: "03",
      title: "Relentless Sprints",
      description:
        "High-velocity development cycles with end-of-day commits. You get working preview links, tangible milestones, and clear async progress updates every week.",
    },
    {
      step: "04",
      title: "Harden, Benchmark & Ship",
      description:
        "Rigorous performance testing, Lighthouse verification, database index audits, and automated deployment pipelines ensuring a rock-solid production release.",
    },
  ];

  const faqs = [
    {
      q: "How soon can we kick off a project?",
      a: "Depending on current sprint commitments, most projects can kick off within 3 to 7 business days following initial scoping and alignment.",
    },
    {
      q: "How does communication work during the engagement?",
      a: "I work async-first via Slack, Discord, or Linear, with shared GitHub repositories for transparent commits. We also do short weekly demo check-ins to review working software.",
    },
    {
      q: "Who owns the code and intellectual property?",
      a: "You retain 100% full intellectual property ownership. All code, documentation, and configuration files are transferred directly to your repositories from day one.",
    },
    {
      q: "Can you collaborate with our existing engineering team?",
      a: "Yes. I routinely integrate into existing teams, adopting your branch workflows, participating in pull request reviews, and mentoring junior developers.",
    },
    {
      q: "What tech stack do you recommend for new projects?",
      a: "My primary production stack is Next.js 15 (App Router), TypeScript, PostgreSQL, and Tailwind CSS. For heavy background workloads, I pair this with Node.js, Go, or Python (FastAPI).",
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
          <span className="text-emerald-600 font-bold">SERVICES</span>
        </div>

        <div className="inline-flex items-center border border-emerald-500 text-emerald-600 font-mono text-xs px-3 py-1 mb-6">
          <span>[ 02 // SERVICES · ENGINEERING CAPABILITIES ]</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] mb-6">
          High-impact software engineering &{" "}
          <span className="underline decoration-emerald-500 decoration-4 underline-offset-8">
            systems architecture.
          </span>
        </h1>

        <p className="font-sans text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed">
          I provide hands-on technical execution for startups, founders, and teams. From rapid 0-to-1 MVP builds to full-stack system architectures and codebase performance optimization.
        </p>
      </section>

      {/* Detailed Services Grid */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            OFFERINGS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Available Capabilities & Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.index}
                className="p-8 border border-neutral-200 bg-white hover:border-emerald-500/80 transition-all hover:shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs text-neutral-400 group-hover:text-emerald-600 font-bold transition-colors">
                        [{svc.index}] // {svc.tag}
                      </span>
                      {svc.index === "02" && (
                        <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-300">
                          ant<span className="font-extrabold text-neutral-900">0</span>n<span className="font-extrabold text-neutral-900">1</span> // 0➔1
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-neutral-100 text-neutral-700 flex items-center gap-1.5 shrink-0">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {svc.timeline}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-neutral-100 text-neutral-800 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-sans text-2xl font-bold text-neutral-900 leading-tight">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6">
                    {svc.overview}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <div className="font-mono text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                      WHAT IS DELIVERED:
                    </div>
                    {svc.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-neutral-50 border border-neutral-150 mb-6 text-xs text-neutral-600 font-sans">
                    <span className="font-semibold text-neutral-800">Ideal For:</span> {svc.idealFor}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase text-emerald-600 hover:text-emerald-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{svc.cta}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 4-Phase Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            METHODOLOGY
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            How Projects Are Executed
          </h2>
          <p className="font-sans text-sm text-neutral-600 mt-2 max-w-2xl">
            A battle-tested 4-phase framework designed to eliminate guesswork, prevent scope bloat, and maintain high velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 border border-neutral-200 bg-white hover:border-neutral-900 transition-colors"
            >
              <div className="font-mono text-2xl font-extrabold text-emerald-600 mb-4">
                {step.step}
              </div>
              <h3 className="font-sans text-lg font-bold text-neutral-900 mb-2">
                {step.title}
              </h3>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Accordion */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 px-6 md:px-12 max-w-[1280px] mx-auto border-b border-neutral-200"
      >
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-2 font-semibold">
            COMMON QUESTIONS
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-neutral-200 bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between font-sans text-base font-bold text-neutral-900 hover:text-emerald-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-emerald-600" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 pt-1 text-sm text-neutral-600 font-sans leading-relaxed border-t border-neutral-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Contact Banner */}
      <ContactBanner />
    </main>
  );
}
