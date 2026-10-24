"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Cpu, CornerDownLeft, RotateCcw } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface CommandLog {
  id: string;
  command: string;
  output: string;
  timestamp: string;
}

export default function GeometricTerminal() {
  const [activeTab, setActiveTab] = useState<"terminal" | "arsenal">("terminal");
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "init-1",
      command: "neofetch",
      output: `SYSTEM: CELERES_CORE v2.4 (x86_64-darwin)\nROLE:   Full-Stack Systems Builder\nSTACK:  Next.js · TypeScript · Node.js · PostgreSQL\nSTATUS: Active & Available for Sprints / Advisory\nType 'help' or click quick commands below.`,
      timestamp: "00:01",
    },
  ]);

  const terminalScrollRef = useRef<HTMLDivElement>(null);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setLogs([]);
      setInputVal("");
      return;
    }

    let result = "";
    if (trimmed === "help") {
      result = PORTFOLIO_DATA.terminalCommands.help;
    } else if (trimmed === "whoami") {
      result = PORTFOLIO_DATA.terminalCommands.whoami;
    } else if (trimmed === "skills" || trimmed === "stack") {
      result = PORTFOLIO_DATA.terminalCommands.skills;
    } else if (trimmed === "projects") {
      result = PORTFOLIO_DATA.terminalCommands.projects;
    } else if (trimmed === "contact") {
      result = PORTFOLIO_DATA.terminalCommands.contact;
    } else if (trimmed.startsWith("echo ")) {
      result = trimmed.slice(5);
    } else if (trimmed === "cat resume" || trimmed === "resume") {
      result = "RESUME: Anthony Celeres | Computer Science | Software Engineer\nDirect email: anthonyceleres.dev@gmail.com";
    } else if (trimmed === "matrix") {
      result = "▲ ■ ◆ ✕ ● ✦ ▲ ■ ◆ ✕ ● ✦\n[GEOMETRIC MONOTONE RUNTIME ACTIVATED]";
    } else {
      result = `command not found: "${trimmed}". Type 'help' to see valid commands.`;
    }

    const newLog: CommandLog = {
      id: `${Date.now()}-${Math.random()}`,
      command: trimmed,
      output: result,
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setLogs((prev) => [...prev, newLog]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  useEffect(() => {
    // Only scroll the internal terminal container, NEVER scroll the browser window
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [logs]);

  const [tokens] = useState(PORTFOLIO_DATA.dockTokens);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  return (
    <div className="w-full bg-white border border-neutral-300 shadow-xl overflow-hidden font-mono text-xs">
      {/* Window Title Bar */}
      <div className="h-10 bg-[#f4f4f5] border-b border-neutral-200 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-none border border-neutral-400 bg-neutral-300" />
            <span className="w-2.5 h-2.5 rounded-none border border-neutral-400 bg-neutral-400" />
            <span className="w-2.5 h-2.5 rounded-none border border-neutral-400 bg-neutral-500" />
          </div>
          <span className="text-[11px] text-neutral-700 font-bold ml-2">
            DEV_SESSION // 01
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center bg-white border border-neutral-300 p-0.5">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`px-3 py-1 flex items-center gap-1.5 text-[10px] uppercase font-bold transition-colors ${
              activeTab === "terminal"
                ? "bg-black text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            <Terminal className="w-3 h-3" />
            <span>TERMINAL</span>
          </button>
          <button
            onClick={() => setActiveTab("arsenal")}
            className={`px-3 py-1 flex items-center gap-1.5 text-[10px] uppercase font-bold transition-colors ${
              activeTab === "arsenal"
                ? "bg-black text-white"
                : "text-neutral-600 hover:text-black"
            }`}
          >
            <Cpu className="w-3 h-3" />
            <span>ARSENAL [◆]</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Interactive Terminal */}
      {activeTab === "terminal" && (
        <div className="p-4 sm:p-5 flex flex-col h-[380px] sm:h-[420px] bg-white">
          {/* Scrollable Output Box */}
          <div
            ref={terminalScrollRef}
            className="flex-1 overflow-y-auto space-y-3 pr-2 select-text font-mono"
          >
            {logs.map((log) => (
              <div key={log.id} className="space-y-1">
                <div className="flex items-center gap-2 text-neutral-600">
                  <span className="text-black font-bold">anthony@celeres</span>
                  <span className="text-neutral-400">::</span>
                  <span className="text-neutral-600">~</span>
                  <span className="text-black font-semibold">$ {log.command}</span>
                </div>
                <pre className="text-neutral-800 whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-neutral-300 text-[11px]">
                  {log.output}
                </pre>
              </div>
            ))}
          </div>

          {/* Quick Command Chips */}
          <div className="pt-3 pb-2 border-t border-neutral-200 flex flex-wrap gap-1.5 items-center">
            <span className="text-[10px] text-neutral-500 uppercase mr-1 font-bold">QUICK:</span>
            {["whoami", "skills", "projects", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 border border-neutral-300 bg-[#f4f4f5] text-neutral-800 hover:bg-black hover:text-white hover:border-black text-[10px] font-semibold transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Interactive Command Input */}
          <div className="pt-2 border-t border-neutral-200 flex items-center gap-2">
            <span className="text-black font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command ('help', 'skills', etc)..."
              className="flex-1 bg-transparent text-black font-mono text-xs focus:outline-none placeholder:text-neutral-400"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              disabled={!inputVal.trim()}
              className="p-1.5 text-neutral-500 hover:text-black disabled:opacity-30 transition-colors"
              title="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Geometric Arsenal Dock */}
      {activeTab === "arsenal" && (
        <div className="p-4 sm:p-5 flex flex-col h-[380px] sm:h-[420px] bg-[#fafafa] relative geo-grid-bg select-none">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <div>
              <p className="text-[11px] font-bold text-black uppercase">
                GEOMETRIC TECH ARSENAL
              </p>
              <p className="text-[10px] text-neutral-500">
                Drag modules onto the isometric coordinate matrix.
              </p>
            </div>
            <button
              onClick={() => setSelectedToken(null)}
              className="p-1 text-neutral-500 hover:text-black"
              title="Reset view"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Isometric Interactive Matrix */}
          <div className="flex-1 relative my-3 border border-neutral-300 bg-white/90 p-4 flex flex-wrap content-start gap-3 overflow-hidden shadow-inner">
            <div className="absolute top-2 right-2 text-[9px] text-neutral-400 font-mono">
              [GRID_COORDINATES: X:64 Y:32]
            </div>

            {tokens.map((token) => (
              <motion.div
                key={token.id}
                drag
                dragConstraints={{ left: -10, right: 220, top: -5, bottom: 150 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedToken(token.id)}
                className={`cursor-grab active:cursor-grabbing p-3 border ${
                  selectedToken === token.id
                    ? "border-black bg-black text-white shadow-md"
                    : "border-neutral-300 bg-white text-black hover:border-black shadow-sm"
                } flex items-center gap-2 transition-colors`}
              >
                <span className="text-base font-bold">{token.symbol}</span>
                <div>
                  <div className="font-bold text-[11px] leading-tight">
                    {token.label}
                  </div>
                  <div
                    className={`text-[9px] ${
                      selectedToken === token.id
                        ? "text-neutral-300"
                        : "text-neutral-500"
                    }`}
                  >
                    {token.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detail Bar */}
          <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[10px] text-neutral-600">
            <span>
              STATUS: {tokens.length} MODULES LOADED
            </span>
            <span className="text-neutral-400">CLICK TO INSPECT · DRAG TO ARRANGE</span>
          </div>
        </div>
      )}

      {/* Footer Info Strip */}
      <div className="px-4 py-2 bg-[#f4f4f5] border-t border-neutral-200 flex items-center justify-between text-[10px] text-neutral-500">
        <span className="flex items-center gap-1.5 font-semibold text-black">
          <span className="w-1.5 h-1.5 bg-black rounded-none" />
          SESSION_LIVE
        </span>
        <span>LATENCY: 12ms</span>
      </div>
    </div>
  );
}
