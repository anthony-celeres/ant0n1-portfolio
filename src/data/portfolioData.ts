export interface Project {
  id: string;
  title: string;
  slug: string;
  category: "Full-Stack" | "Systems" | "AI / ML" | "UI / UX";
  tagline: string;
  description: string;
  metrics: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  accentSymbol: string;
}

export interface Capability {
  index: string;
  title: string;
  tag: string;
  description: string;
  deliverables: string[];
  timeline: string;
  ctaText: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const PORTFOLIO_DATA = {
  name: "Anthony Celeres",
  handle: "anthonyceleres",
  title: "Full-Stack Software Engineer & Systems Builder",
  location: "Manila, Philippines · Available Globally",
  email: "anthonyceleres.dev@gmail.com",
  calendlyUrl: "https://calendly.com",
  socials: {
    github: "https://github.com/anthonyceleres",
    linkedin: "https://linkedin.com/in/anthonyceleres",
    twitter: "https://x.com",
  },
  hero: {
    badge: "SYS:ACTIVE // READY FOR PRODUCTION",
    subheadline: "I help founders, engineering leads, and teams:",
    rotations: [
      "ARCHITECT SCALABLE FULL-STACK SYSTEMS.",
      "TURN COMPLEX SPECS INTO CLEAN CODE.",
      "SHIP PRODUCTION-READY MVPs AT SPEED.",
      "ELIMINATE TECH DEBT & JANKY UX.",
    ],
    audiencePerspectives: {
      researchers: {
        label: "For Researchers",
        tag: "Empirical Discovery",
        text: "Collaborating on applied AI, RAG evaluation, or empirical discovery? I partner with researchers to translate mathematical proofs, open hypotheses, and RFCs into robust, reproducible codebases and benchmarked systems.",
      },
      recruiters: {
        label: "For Recruiters",
        tag: "Technical Rigor",
        text: "Computer Science background with strong command over Next.js, TypeScript, modern backends, database design, and systems engineering. Clean, self-documenting code with proactive ownership.",
      },
      engineers: {
        label: "For Engineers",
        tag: "System Craftsmanship",
        text: "Obsessed with predictable state, type safety, low latency, and zero layout thrashing. I believe in modular design patterns, testable contracts, and shipping software built to last.",
      },
    },
  },
  tickerItems: [
    "FULL-STACK ARCHITECTURE",
    "NEXT.JS & TYPESCRIPT",
    "DISTRIBUTED SYSTEMS",
    "AI/ML INTEGRATIONS",
    "DATABASE OPTIMIZATION",
    "ZERO LAG EXPERIENCES",
    "CLEAN CODE PATTERNS",
  ],
  capabilities: [
    {
      index: "01",
      title: "End-to-End Web Systems",
      tag: "Core Engineering",
      description: "Full-cycle architecture from database schema and API contracts to pixel-perfect, reactive frontends.",
      deliverables: [
        "Scalable Next.js & React architectures",
        "Robust REST / GraphQL / tRPC APIs",
        "PostgreSQL / MongoDB schema design",
        "Authentication, RBAC, and secure session flows",
      ],
      timeline: "2-4 weeks",
      ctaText: "Discuss Architecture",
    },
    {
      index: "02",
      title: "Rapid 0-to-1 MVP Sprint",
      tag: "Product Execution",
      description: "Transform ideas or mockups into a working, deployed application ready for initial users and investor demos.",
      deliverables: [
        "Rapid prototyping with production-grade tech",
        "Essential core features built without bloat",
        "Automated deployment & CI/CD pipeline",
        "Integrated payment gateways & analytics",
      ],
      timeline: "1-2 weeks",
      ctaText: "Kickoff MVP",
    },
    {
      index: "03",
      title: "Codebase Audit & De-Lagging",
      tag: "Performance Tuning",
      description: "Eliminate stutter, slow API calls, re-rendering bottlenecks, and architectural spaghetti.",
      deliverables: [
        "Full frontend profiling & bundle size diet",
        "Database indexing & query optimization",
        "Refactoring messy components into clean contracts",
        "Actionable performance audit report",
      ],
      timeline: "3-7 days",
      ctaText: "Audit My Code",
    },
    {
      index: "04",
      title: "Technical Advisory & Retainer",
      tag: "Ongoing Partnership",
      description: "Dedicated engineering muscle and advisory for teams that need consistent technical direction as they scale.",
      deliverables: [
        "Code reviews & architectural RFC guidance",
        "Developer mentoring and standards enforcement",
        "High-priority feature spikes and bug fixes",
        "Direct Slack / Discord async collaboration",
      ],
      timeline: "Monthly Retainer",
      ctaText: "Explore Retainer",
    },
  ] as Capability[],
  projects: [
    {
      id: "project-1",
      title: "AuraOS — Geometric Workspace",
      slug: "aura-os",
      category: "Full-Stack",
      tagline: "Minimalist browser workspace with local-first sync and zero latency.",
      description:
        "Engineered an offline-first workspace combining markdown note-taking, Kanban boards, and canvas plotting. Built with custom indexedDB synchronization and sub-16ms frame times.",
      metrics: ["<16ms UI latency", "Offline-first sync", "100% TypeScript"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "IndexedDB", "WebSockets"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
      featured: true,
      year: "2025",
      accentSymbol: "◆",
    },
    {
      id: "project-2",
      title: "Nexus — AI Compliance Engine",
      slug: "nexus-compliance",
      category: "AI / ML",
      tagline: "Intelligent document verification and regulatory risk detection engine.",
      description:
        "A microservices system that ingests multi-format financial filings and parses them against compliance taxonomies using vector embeddings and structured LLM tool-calling.",
      metrics: ["99.2% parsing accuracy", "4x faster review cycles", "Zero hallucinations"],
      technologies: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Next.js"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
      featured: true,
      year: "2025",
      accentSymbol: "▲",
    },
    {
      id: "project-3",
      title: "Vortex — High-Throughput Analytics",
      slug: "vortex-analytics",
      category: "Systems",
      tagline: "Real-time telemetry ingestion pipeline and dashboard with sub-second queries.",
      description:
        "Designed an event tracking pipeline processing incoming webhook streams. Features streaming aggregation with ClickHouse and an ultra-lean Canvas-rendered dashboard.",
      metrics: ["10k+ events/sec", "Zero downtime deploy", "Instant aggregation"],
      technologies: ["Go", "ClickHouse", "Redis", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
      featured: true,
      year: "2024",
      accentSymbol: "■",
    },
    {
      id: "project-4",
      title: "Synapse — Developer Toolkit",
      slug: "synapse-toolkit",
      category: "UI / UX",
      tagline: "Accessible, keyboard-first developer tools utility in a modern dark terminal UI.",
      description:
        "A suite of everyday developer utilities: regex testing, JWT debugger, color-space converters, and SQL formatter. 100% client-side with zero telemetry.",
      metrics: ["100% Client-side", "Zero external trackers", "Keyboard-first navigation"],
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "WebAssembly"],
      demoUrl: "https://github.com/anthonyceleres",
      githubUrl: "https://github.com/anthonyceleres",
      featured: false,
      year: "2024",
      accentSymbol: "✕",
    },
  ] as Project[],
  experience: [
    {
      period: "2024 – PRESENT",
      role: "Lead Systems & Full-Stack Engineer",
      organization: "Autonomous Projects & Tech Advisory",
      location: "Manila · Remote",
      description:
        "Architecting modern web applications, high-throughput microservices, and AI-enabled product workflows for early-stage startups and high-growth ventures.",
      highlights: [
        "Shipped 5+ production-grade web products with 99.9% uptime SLA.",
        "Refactored legacy bottlenecks to reduce initial page load times by over 60%.",
        "Instituted strict TypeScript safety and automated GitHub Actions CI/CD workflows.",
      ],
      skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "System Design"],
    },
    {
      period: "2023 – 2024",
      role: "Full-Stack Software Engineer",
      organization: "Product & Technology Labs",
      location: "Manila, Philippines",
      description:
        "Engineered customer-facing user interfaces, RESTful microservices, and integrated relational databases for scalable enterprise clients.",
      highlights: [
        "Collaborated with cross-functional product and design teams on design systems.",
        "Implemented secure JWT/OAuth authentication pipelines and role-based permissions.",
        "Optimized complex SQL queries, decreasing average p95 response time by 45%.",
      ],
      skills: ["React", "Express", "TypeScript", "MongoDB", "Tailwind CSS", "Git"],
    },
    {
      period: "2020 – 2024",
      role: "B.S. in Computer Science",
      organization: "University Academic Program",
      location: "Manila, Philippines",
      description:
        "Graduated with honors. Deep concentration in Data Structures, Distributed Systems, Software Engineering, and Algorithms.",
      highlights: [
        "Lead developer for university capstone project on distributed data processing.",
        "Active member of developer society organizing technical workshops and hackathons.",
      ],
      skills: ["Data Structures", "Algorithms", "Operating Systems", "Networking"],
    },
  ] as ExperienceItem[],
  process: [
    {
      step: "01",
      title: "Deconstruct & Scope",
      description:
        "Every project starts with ruthlessly cutting ambiguity. We define technical boundaries, eliminate unnecessary complexity, and identify the critical path to value.",
    },
    {
      step: "02",
      title: "Architectural Blueprint",
      description:
        "Before writing lines of code, I map schemas, interface contracts, and state flows. A clean blueprint prevents rewriting things later.",
    },
    {
      step: "03",
      title: "Relentless Sprints",
      description:
        "High-velocity development cycles with end-of-day commits. You see working code, real interfaces, and tangible milestones every week.",
    },
    {
      step: "04",
      title: "Harden, Benchmark & Ship",
      description:
        "Rigorous performance benchmarks, Lighthouse audits, zero layout shifts, and automated deployment pipelines into production.",
    },
  ],
  terminalCommands: {
    help: "Available commands:\n  whoami     - Learn about Anthony Celeres\n  skills     - View engineering arsenal & tech stack\n  projects   - List featured engineering works\n  contact    - Retrieve direct contact endpoints\n  clear      - Clear terminal screen\n  echo [msg] - Print custom message",
    whoami: "Anthony Celeres · Full-Stack Software Engineer & Systems Builder based in Manila. Focused on high-performance web systems, clean architecture, and 0-to-1 product execution.",
    skills: "CORE STACK:\n  Languages:   TypeScript, JavaScript, Python, SQL, Go\n  Frontend:    Next.js (App Router), React, Tailwind CSS, Framer Motion\n  Backend:     Node.js, Express, FastAPI, PostgreSQL, Redis, Supabase\n  DevOps/Ops:  Docker, Git, CI/CD, Linux/UNIX, Vercel",
    projects: "FEATURED BUILDS:\n  1. AuraOS              (Offline-first workspace, <16ms sync)\n  2. Nexus Compliance    (AI document parsing engine)\n  3. Vortex Analytics    (High-throughput telemetry ingestion)\n  4. Synapse Toolkit     (Keyboard-first developer utility suite)",
    contact: "DIRECT CONTACT:\n  Email:    anthonyceleres.dev@gmail.com\n  GitHub:   github.com/anthonyceleres\n  LinkedIn: linkedin.com/in/anthonyceleres",
  },
  dockTokens: [
    { id: "ts", symbol: "◆", label: "TypeScript", role: "Type Safety" },
    { id: "next", symbol: "■", label: "Next.js", role: "Framework" },
    { id: "arch", symbol: "▲", label: "Architecture", role: "System Design" },
    { id: "py", symbol: "✕", label: "Python", role: "AI & Scripting" },
    { id: "db", symbol: "●", label: "PostgreSQL", role: "Data Storage" },
    { id: "docker", symbol: "✦", label: "Docker", role: "Containers" },
  ],
};
