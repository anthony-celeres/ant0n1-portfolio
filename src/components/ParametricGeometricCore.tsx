"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles, Layers } from "lucide-react";
import { motion } from "framer-motion";

type TopologyKey = "ICOSA" | "HYPER" | "OCTA" | "DODECA" | "TORUS" | "MATRIX";
type RenderStyle = "HYBRID" | "WIREFRAME" | "NODES";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Point4D {
  x: number;
  y: number;
  z: number;
  w: number;
}

interface TopologyDef {
  key: TopologyKey;
  label: string;
  fullName: string;
  formula: string;
  euler: string;
  generate: () => {
    vertices: Point3D[] | Point4D[];
    edges: [number, number][];
    is4D?: boolean;
  };
}

// Golden Ratio Constant
const PHI = (1 + Math.sqrt(5)) / 2;

// 1. Icosahedron (12 Vertices, 30 Edges)
function generateIcosahedron(): { vertices: Point3D[]; edges: [number, number][] } {
  const norm = Math.sqrt(1 + PHI * PHI);
  const a = 1 / norm;
  const b = PHI / norm;
  const scale = 0.95;

  const rawVertices: Point3D[] = [
    { x: -a, y: b, z: 0 },
    { x: a, y: b, z: 0 },
    { x: -a, y: -b, z: 0 },
    { x: a, y: -b, z: 0 },
    { x: 0, y: -a, z: b },
    { x: 0, y: a, z: b },
    { x: 0, y: -a, z: -b },
    { x: 0, y: a, z: -b },
    { x: b, y: 0, z: -a },
    { x: b, y: 0, z: a },
    { x: -b, y: 0, z: -a },
    { x: -b, y: 0, z: a },
  ].map((v) => ({ x: v.x * scale, y: v.y * scale, z: v.z * scale }));

  const edges: [number, number][] = [];
  const edgeDistThreshold = (2 / norm) * scale * 1.05;

  for (let i = 0; i < rawVertices.length; i++) {
    for (let j = i + 1; j < rawVertices.length; j++) {
      const dx = rawVertices[i].x - rawVertices[j].x;
      const dy = rawVertices[i].y - rawVertices[j].y;
      const dz = rawVertices[i].z - rawVertices[j].z;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (Math.abs(d - (2 / norm) * scale) < 0.08) {
        edges.push([i, j]);
      }
    }
  }

  return { vertices: rawVertices, edges };
}

// 2. 4D Tesseract / Hypercube (16 Vertices, 32 Edges in 4D)
function generateTesseract(): { vertices: Point4D[]; edges: [number, number][]; is4D: boolean } {
  const s = 0.65;
  const vertices: Point4D[] = [];

  for (let i = 0; i < 16; i++) {
    vertices.push({
      x: (i & 1 ? 1 : -1) * s,
      y: (i & 2 ? 1 : -1) * s,
      z: (i & 4 ? 1 : -1) * s,
      w: (i & 8 ? 1 : -1) * s,
    });
  }

  const edges: [number, number][] = [];
  for (let i = 0; i < 16; i++) {
    for (let j = i + 1; j < 16; j++) {
      const diff = i ^ j;
      if (diff === 1 || diff === 2 || diff === 4 || diff === 8) {
        edges.push([i, j]);
      }
    }
  }

  return { vertices, edges, is4D: true };
}

// 3. Dual Concentric Octahedron (12 Vertices, 30 Edges)
function generateOctahedron(): { vertices: Point3D[]; edges: [number, number][] } {
  const outerScale = 1.0;
  const innerScale = 0.52;

  const base: Point3D[] = [
    { x: 1, y: 0, z: 0 },
    { x: -1, y: 0, z: 0 },
    { x: 0, y: 1, z: 0 },
    { x: 0, y: -1, z: 0 },
    { x: 0, y: 0, z: 1 },
    { x: 0, y: 0, z: -1 },
  ];

  const outer = base.map((p) => ({ x: p.x * outerScale, y: p.y * outerScale, z: p.z * outerScale }));
  const inner = base.map((p) => ({ x: p.x * innerScale, y: p.y * innerScale, z: p.z * innerScale }));

  const vertices = [...outer, ...inner];
  const edges: [number, number][] = [
    // Outer edges
    [0, 2], [0, 3], [0, 4], [0, 5],
    [1, 2], [1, 3], [1, 4], [1, 5],
    [2, 4], [2, 5], [3, 4], [3, 5],
    // Inner edges
    [6, 8], [6, 9], [6, 10], [6, 11],
    [7, 8], [7, 9], [7, 10], [7, 11],
    [8, 10], [8, 11], [9, 10], [9, 11],
    // Radial struts connecting inner to outer
    [0, 6], [1, 7], [2, 8], [3, 9], [4, 10], [5, 11],
  ];

  return { vertices, edges };
}

// 4. Dodecahedron (20 Vertices, 30 Edges)
function generateDodecahedron(): { vertices: Point3D[]; edges: [number, number][] } {
  const invPhi = 1 / PHI;
  const scale = 0.55;

  const raw: Point3D[] = [
    // (±1, ±1, ±1)
    { x: 1, y: 1, z: 1 },
    { x: 1, y: 1, z: -1 },
    { x: 1, y: -1, z: 1 },
    { x: 1, y: -1, z: -1 },
    { x: -1, y: 1, z: 1 },
    { x: -1, y: 1, z: -1 },
    { x: -1, y: -1, z: 1 },
    { x: -1, y: -1, z: -1 },
    // (0, ±1/phi, ±phi)
    { x: 0, y: invPhi, z: PHI },
    { x: 0, y: invPhi, z: -PHI },
    { x: 0, y: -invPhi, z: PHI },
    { x: 0, y: -invPhi, z: -PHI },
    // (±1/phi, ±phi, 0)
    { x: invPhi, y: PHI, z: 0 },
    { x: invPhi, y: -PHI, z: 0 },
    { x: -invPhi, y: PHI, z: 0 },
    { x: -invPhi, y: -PHI, z: 0 },
    // (±phi, 0, ±1/phi)
    { x: PHI, y: 0, z: invPhi },
    { x: PHI, y: 0, z: -invPhi },
    { x: -PHI, y: 0, z: invPhi },
    { x: -PHI, y: 0, z: -invPhi },
  ].map((p) => ({ x: p.x * scale, y: p.y * scale, z: p.z * scale }));

  const edges: [number, number][] = [];
  const targetDist = 2 * invPhi * scale;

  for (let i = 0; i < raw.length; i++) {
    for (let j = i + 1; j < raw.length; j++) {
      const dx = raw[i].x - raw[j].x;
      const dy = raw[i].y - raw[j].y;
      const dz = raw[i].z - raw[j].z;
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (Math.abs(d - targetDist) < 0.05) {
        edges.push([i, j]);
      }
    }
  }

  return { vertices: raw, edges };
}

// 5. Parametric Torus Ring (Geodesic Ribbon)
function generateTorus(): { vertices: Point3D[]; edges: [number, number][] } {
  const majorR = 0.72;
  const minorR = 0.32;
  const uSteps = 12;
  const vSteps = 6;

  const vertices: Point3D[] = [];
  const edges: [number, number][] = [];

  for (let u = 0; u < uSteps; u++) {
    const theta = (u / uSteps) * Math.PI * 2;
    for (let v = 0; v < vSteps; v++) {
      const phi = (v / vSteps) * Math.PI * 2;
      const x = (majorR + minorR * Math.cos(phi)) * Math.cos(theta);
      const y = (majorR + minorR * Math.cos(phi)) * Math.sin(theta);
      const z = minorR * Math.sin(phi);
      vertices.push({ x, y, z });

      const currIdx = u * vSteps + v;
      // Connect along minor ring (v)
      const nextVIdx = u * vSteps + ((v + 1) % vSteps);
      edges.push([currIdx, nextVIdx]);

      // Connect along major ring (u)
      const nextUIdx = ((u + 1) % uSteps) * vSteps + v;
      edges.push([currIdx, nextUIdx]);
    }
  }

  return { vertices, edges };
}

// 6. Kinetic Coordinate Matrix (5x5 Undulating Grid)
function generateMatrix(): { vertices: Point3D[]; edges: [number, number][] } {
  const size = 5;
  const spacing = 0.38;
  const offset = ((size - 1) * spacing) / 2;

  const vertices: Point3D[] = [];
  const edges: [number, number][] = [];

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const x = c * spacing - offset;
      const y = r * spacing - offset;
      const d = Math.sqrt(x * x + y * y);
      const z = Math.cos(d * 4) * 0.22;
      vertices.push({ x, y, z });

      const curr = r * size + c;
      if (c < size - 1) edges.push([curr, curr + 1]);
      if (r < size - 1) edges.push([curr, curr + size]);
    }
  }

  return { vertices, edges };
}

const TOPOLOGIES: Record<TopologyKey, TopologyDef> = {
  ICOSA: {
    key: "ICOSA",
    label: "ICOSA",
    fullName: "ICOSAHEDRON // GEO_20",
    formula: "V:12 · E:30 · F:20",
    euler: "χ = V - E + F = 2",
    generate: generateIcosahedron,
  },
  HYPER: {
    key: "HYPER",
    label: "HYPER",
    fullName: "TESSERACT // 4D_HYPERCUBE",
    formula: "V:16 · E:32 · 4-POLYTOPE",
    euler: "PROJECTION: R⁴ → R³ → R²",
    generate: generateTesseract,
  },
  OCTA: {
    key: "OCTA",
    label: "OCTA",
    fullName: "DUAL OCTAHEDRON // NESTED",
    formula: "V:12 · E:30 · CONCENTRIC",
    euler: "SYMMETRY: O_h OCTAHEDRAL",
    generate: generateOctahedron,
  },
  DODECA: {
    key: "DODECA",
    label: "DODECA",
    fullName: "DODECAHEDRON // PENTAGONAL",
    formula: "V:20 · E:30 · F:12",
    euler: "GOLDEN RATIO Φ = 1.618",
    generate: generateDodecahedron,
  },
  TORUS: {
    key: "TORUS",
    label: "TORUS",
    fullName: "PARAMETRIC TORUS // KNOT",
    formula: "V:72 · E:144 · GEODESIC",
    euler: "SURFACE OF REVOLUTION",
    generate: generateTorus,
  },
  MATRIX: {
    key: "MATRIX",
    label: "MATRIX",
    fullName: "COORDINATE LATTICE // WAVE",
    formula: "V:25 · E:40 · KINETIC",
    euler: "DYNAMIC HARMONIC SINE",
    generate: generateMatrix,
  },
};

export default function ParametricGeometricCore() {
  const [activeTopology, setActiveTopology] = useState<TopologyKey>("ICOSA");
  const [renderStyle, setRenderStyle] = useState<RenderStyle>("HYBRID");
  const [isExploded, setIsExploded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Physics & Rotation State
  const rotationRef = useRef({ x: 0.35, y: 0.45, z: 0.1 });
  const velocityRef = useRef({ x: 0.005, y: 0.008 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const angle4DRef = useRef(0);
  const explodeFactorRef = useRef(0);
  const pulseRipplesRef = useRef<{ radius: number; opacity: number; maxRadius: number }[]>([]);

  // Telemetry details
  const [stats, setStats] = useState({ vertices: 12, edges: 30 });

  // Update topology data
  useEffect(() => {
    const data = TOPOLOGIES[activeTopology].generate();
    setStats({
      vertices: data.vertices.length,
      edges: data.edges.length,
    });
  }, [activeTopology]);

  // Main 60FPS Canvas Render Loop
  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const render = () => {
      time += 0.016;
      angle4DRef.current += 0.012;

      // Smooth explode animation (spring towards target)
      const targetExplode = isExploded ? 1.0 : 0.0;
      explodeFactorRef.current += (targetExplode - explodeFactorRef.current) * 0.12;

      // Update rotation with inertia
      if (!isDraggingRef.current) {
        rotationRef.current.x += velocityRef.current.x;
        rotationRef.current.y += velocityRef.current.y;
        // Natural friction damping towards steady ambient orbit
        velocityRef.current.x += (0.004 - velocityRef.current.x) * 0.02;
        velocityRef.current.y += (0.007 - velocityRef.current.y) * 0.02;
      }

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const fov = Math.min(width, height) * 0.88;
      const cameraDistance = 2.4;

      // Draw faint architectural crosshair & coordinate axes
      ctx.save();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.04)";
      ctx.lineWidth = 1;
      // Horizontal & vertical center axes
      ctx.beginPath();
      ctx.moveTo(centerX - 40, centerY);
      ctx.lineTo(centerX + 40, centerY);
      ctx.moveTo(centerX, centerY - 40);
      ctx.lineTo(centerX, centerY + 40);
      ctx.stroke();

      // Outer faint alignment circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, fov * 0.44, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
      ctx.setLineDash([3, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Draw pulse ripples
      pulseRipplesRef.current = pulseRipplesRef.current.filter((ripple) => {
        ripple.radius += 2.5;
        ripple.opacity -= 0.022;
        if (ripple.opacity <= 0) return false;

        ctx.beginPath();
        ctx.arc(centerX, centerY, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${ripple.opacity * 0.7})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        return true;
      });

      // Get current topology geometry
      const topoDef = TOPOLOGIES[activeTopology];
      const model = topoDef.generate();

      // Pre-compute 3D vertices
      const rotX = rotationRef.current.x;
      const rotY = rotationRef.current.y;
      const rotZ = rotationRef.current.z;

      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

      // Project vertices to 2D
      const projected: { x: number; y: number; z: number; scale: number; origZ: number }[] = [];

      for (let i = 0; i < model.vertices.length; i++) {
        let vx = 0, vy = 0, vz = 0;

        if (model.is4D) {
          // 4D Tesseract Rotation in XW and ZW planes
          const p4 = model.vertices[i] as Point4D;
          const a4 = angle4DRef.current;
          const cos4 = Math.cos(a4), sin4 = Math.sin(a4);

          // Rotate XW
          const xRot = p4.x * cos4 - p4.w * sin4;
          const wRot = p4.x * sin4 + p4.w * cos4;

          // Project 4D to 3D with perspective
          const dist4D = 2.0;
          const pScale = dist4D / (dist4D - wRot);
          vx = xRot * pScale;
          vy = p4.y * pScale;
          vz = p4.z * pScale;
        } else if (activeTopology === "MATRIX") {
          // Dynamic kinetic sine wave undulation
          const p3 = model.vertices[i] as Point3D;
          const dist = Math.sqrt(p3.x * p3.x + p3.y * p3.y);
          vx = p3.x;
          vy = p3.y;
          vz = Math.sin(dist * 5 - time * 3.2) * 0.28;
        } else {
          const p3 = model.vertices[i] as Point3D;
          vx = p3.x;
          vy = p3.y;
          vz = p3.z;
        }

        // Apply Explode Vector (expand outwards along normal from origin)
        if (explodeFactorRef.current > 0.001) {
          const len = Math.sqrt(vx * vx + vy * vy + vz * vz) || 1;
          const explodeDist = explodeFactorRef.current * 0.42;
          vx += (vx / len) * explodeDist;
          vy += (vy / len) * explodeDist;
          vz += (vz / len) * explodeDist;
        }

        // 3D Matrix Rotation (Y -> X -> Z)
        // 1. Rotate around Y
        const x1 = vx * cosY + vz * sinY;
        const y1 = vy;
        const z1 = -vx * sinY + vz * cosY;

        // 2. Rotate around X
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // 3. Rotate around Z
        const x3 = x2 * cosZ - y2 * sinZ;
        const y3 = x2 * sinZ + y2 * cosZ;
        const z3 = z2;

        // Perspective Projection
        const zProjected = z3 + cameraDistance;
        const scale = fov / Math.max(0.2, zProjected);
        const px = centerX + x3 * scale;
        const py = centerY + y3 * scale;

        projected.push({ x: px, y: py, z: z3, scale, origZ: vz });
      }

      // Draw Edges (with atmospheric depth shading)
      if (renderStyle !== "NODES") {
        // Sort edges by average Z depth for correct back-to-front rendering
        const sortedEdges = [...model.edges].sort((a, b) => {
          const avgZA = (projected[a[0]].z + projected[a[1]].z) / 2;
          const avgZB = (projected[b[0]].z + projected[b[1]].z) / 2;
          return avgZA - avgZB;
        });

        for (const [idx1, idx2] of sortedEdges) {
          const p1 = projected[idx1];
          const p2 = projected[idx2];
          if (!p1 || !p2) continue;

          const avgZ = (p1.z + p2.z) / 2;
          // Normalize depth into 0..1 range
          const depthAlpha = Math.max(0.12, Math.min(0.85, (avgZ + 1.2) / 2.4));

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);

          // Charcoal edge lines with depth-weighted opacity
          ctx.strokeStyle = `rgba(24, 24, 27, ${depthAlpha * 0.75})`;
          ctx.lineWidth = Math.max(0.8, 1.4 * depthAlpha);
          ctx.stroke();

          // Subtle emerald highlight on closest edges
          if (avgZ > 0.35) {
            ctx.strokeStyle = `rgba(16, 185, 129, ${(avgZ - 0.35) * 0.5})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      // Draw Vertices (Glowing Emerald Nodes)
      if (renderStyle !== "WIREFRAME") {
        // Sort vertices by Z for correct halo layering
        const sortedVertices = projected
          .map((p, idx) => ({ ...p, idx }))
          .sort((a, b) => a.z - b.z);

        for (const p of sortedVertices) {
          const depthAlpha = Math.max(0.2, Math.min(1.0, (p.z + 1.2) / 2.4));
          const nodeRadius = Math.max(2, 3.8 * depthAlpha);

          // Outer Emerald Glow Halo
          if (depthAlpha > 0.4) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, nodeRadius * 2.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(16, 185, 129, ${depthAlpha * 0.22})`;
            ctx.fill();
          }

          // Main Emerald Vertex Node
          ctx.beginPath();
          ctx.arc(p.x, p.y, nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = "#10b981";
          ctx.fill();

          // High-specular center white glint for closest nodes
          if (depthAlpha > 0.7) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, nodeRadius * 0.45, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
          }
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTopology, renderStyle, isExploded]);

  // Mouse & Touch Dragging Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    const sensitivity = 0.007;
    rotationRef.current.y += dx * sensitivity;
    rotationRef.current.x += dy * sensitivity;

    velocityRef.current.y = dx * sensitivity * 0.6;
    velocityRef.current.x = dy * sensitivity * 0.6;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = false;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture lost
    }
  };

  // Click on Canvas triggers emerald pulse ripple & momentary exploded impulse
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    pulseRipplesRef.current.push({
      radius: 10,
      opacity: 0.9,
      maxRadius: 160,
    });

    // Momentary pulse if not already exploded
    if (!isExploded) {
      explodeFactorRef.current = 0.45;
    }
  };

  const currentTopo = TOPOLOGIES[activeTopology];

  return (
    <div className="w-full max-w-[360px] md:max-w-[380px] mx-auto select-none font-mono">
      {/* 3D Geometric Viewport Stage */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative aspect-square border border-neutral-200 bg-[#fafafa] overflow-hidden shadow-2xs transition-colors duration-200 hover:border-emerald-500/80 group"
      >
        {/* Architectural Corner Crosshairs (+) */}
        <span className="absolute top-1.5 left-1.5 text-neutral-400 text-xs font-mono select-none pointer-events-none leading-none z-20">
          +
        </span>
        <span className="absolute top-1.5 right-1.5 text-neutral-400 text-xs font-mono select-none pointer-events-none leading-none z-20">
          +
        </span>
        <span className="absolute bottom-1.5 left-1.5 text-neutral-400 text-xs font-mono select-none pointer-events-none leading-none z-20">
          +
        </span>
        <span className="absolute bottom-1.5 right-1.5 text-neutral-400 text-xs font-mono select-none pointer-events-none leading-none z-20">
          +
        </span>

        {/* Top HUD Telemetry Bar */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-wider pointer-events-none z-20">
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-2 py-0.5 border border-neutral-200/80 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-neutral-800 uppercase tracking-widest">
              {currentTopo.label} // 3D_CORE
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-2 py-0.5 border border-neutral-200/80 shadow-2xs text-neutral-500 text-[9px]">
            <span>60FPS</span>
            <span className="text-emerald-600 font-bold">ORBIT: ACTIVE</span>
          </div>
        </div>

        {/* The Pure HTML5 3D WebGL/Projection Canvas */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onClick={handleCanvasClick}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none z-10"
        />

        {/* Bottom HUD Telemetry Strip */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[9px] pointer-events-none z-20 text-neutral-500">
          <div className="bg-white/80 backdrop-blur-xs px-2 py-0.5 border border-neutral-200/80 shadow-2xs">
            <span className="text-neutral-700 font-semibold">{currentTopo.formula}</span>
          </div>

          <div className="hidden sm:block bg-white/80 backdrop-blur-xs px-2 py-0.5 border border-neutral-200/80 shadow-2xs text-emerald-700 font-medium">
            {isExploded ? "[EXPLODED DISASSEMBLY]" : "[DRAG · ORBIT]"}
          </div>
        </div>
      </div>

      {/* 6 Geometric Topology Switchers (Replaces emoji stickers) */}
      <div className="mt-2.5 grid grid-cols-6 gap-1">
        {(Object.keys(TOPOLOGIES) as TopologyKey[]).map((key) => {
          const topo = TOPOLOGIES[key];
          const isActive = activeTopology === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTopology(key)}
              title={topo.fullName}
              className={`h-9 flex flex-col items-center justify-center text-[10px] font-bold border transition-all ${
                isActive
                  ? "border-emerald-500 bg-emerald-500 text-white shadow-2xs"
                  : "border-neutral-200 bg-white text-neutral-700 hover:border-emerald-400 hover:bg-neutral-50 shadow-2xs"
              }`}
            >
              <span>{topo.label}</span>
            </button>
          );
        })}
      </div>

      {/* Parametric Modifiers Row */}
      <div className="mt-2 flex items-center justify-between gap-1.5 text-[10px]">
        {/* Explode / Assembly Blueprint Toggle */}
        <button
          type="button"
          onClick={() => setIsExploded((prev) => !prev)}
          className={`flex-1 h-8 px-2 flex items-center justify-center gap-1.5 border transition-colors shadow-2xs ${
            isExploded
              ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold"
              : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
          }`}
        >
          <Sparkles className="h-3 w-3 text-emerald-500" />
          <span>{isExploded ? "COLLAPSE" : "EXPLODE"}</span>
        </button>

        {/* Render Style Toggle */}
        <button
          type="button"
          onClick={() =>
            setRenderStyle((prev) =>
              prev === "HYBRID" ? "WIREFRAME" : prev === "WIREFRAME" ? "NODES" : "HYBRID"
            )
          }
          className="flex-1 h-8 px-2 flex items-center justify-center gap-1.5 border border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 transition-colors shadow-2xs"
        >
          <Layers className="h-3 w-3 text-neutral-500" />
          <span>{renderStyle}</span>
        </button>
      </div>
    </div>
  );
}
