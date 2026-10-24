# Anthony Celeres — Monotone & Geometric Portfolio

> High-craft, buttery-smooth personal developer portfolio inspired by Ma'am Princess (Cess) Ventures's interactive UX, reimagined with a strict **Monotone (Black, White, Gray) & Geometrics** brand identity.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Key Highlights & UX Features

- **Strict Monotone & Geometric Design Language**:
  - High-contrast pure black (`#080808`), crisp white (`#ffffff`), and charcoal grays.
  - Isometric grid textures, coordinate stamps, and geometric glyphs (`▲`, `■`, `◆`, `✦`, `✕`).
  - Ultra-sharp typography: `Space Grotesk` (headings) and `Space Mono` (technical coordinates, badges, and numbers).
- **Interactive Hero (Inspired by Ma'am Cess)**:
  - **Dynamic Rotating Headline**: Automatically cycles through value propositions with animated transitions and progress bars.
  - **Perspective Switcher**: Visitors can switch between `"For Founders"`, `"For Recruiters"`, and `"For Engineers"` to tailor the bio.
  - **Geometric Terminal & Arsenal Dock**: An interactive UNIX CLI (`help`, `skills`, `projects`, `contact`, `clear`) + draggable geometric tech tokens on an isometric grid.
- **Infinite Geometric Marquee**: Smooth, GPU-accelerated ticker loop with geometric delimiters.
- **Capabilities Matrix (`01`–`04`)**: Modular service packages with scope checklists, deliverables, and timelines.
- **Featured Builds & Case Studies**: Filterable project gallery (`Full-Stack`, `AI/ML`, `Systems`, `UI/UX`) with metrics and source links.
- **4-Phase Engineering Process**: Methodology breakdown on a coordinate dot matrix.
- **Interactive Collaborative Canvas**: Live drag-and-drop board where visitors can drop stamps and pin notes.
- **High-Impact Contact Banner**: Inverted high-contrast section with 1-click email copy (and subtle confetti), Calendly, and social links.
- **Live Manila Clock & Coordinate Ticker**: Real-time timezone counter and status stamps in the header and footer.

---

## 🚀 Getting Started

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 🛠️ Customizing Your Content

All personal information, projects, services, social links, and terminal commands are centralized in one file:

📂 `src/data/portfolioData.ts`

You can customize:
- `name`, `title`, `location`, `email`, `socials`
- `hero.rotations` (Rotating headline phrases)
- `hero.audiencePerspectives` (Text for Founders, Recruiters, and Engineers)
- `capabilities` (Services, deliverables, timelines)
- `projects` (Case studies, metrics, demo & github links)
- `experience` (Career timeline & milestones)
- `terminalCommands` (CLI responses)
- `dockTokens` (Draggable tech badges)

---

## 🌐 Deployment

Deploy with one click to **Vercel** or **Cloudflare Pages**:
```bash
npx vercel
```
