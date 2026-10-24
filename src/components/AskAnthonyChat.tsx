"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  followUps?: string[];
}

const DEFAULT_QUESTIONS = [
  "What does Ton do?",
  "What's his AI/ML experience?",
  "What has he built?",
  "Why would you hire Ton?",
  "How fast does he ship MVPs?",
];

export default function AskAnthonyChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "ai-initial",
      sender: "ai",
      text: "Hi there! I'm Ton's interactive portfolio assistant. I can answer questions about his systems engineering experience, featured projects, tech stack, and availability. What would you like to explore? ✨",
      timestamp: "Just now",
      followUps: [
        "What does Ton do?",
        "What's his AI/ML experience?",
        "What has he built?",
        "Why would you hire Ton?",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  // Knowledge retrieval engine grounded in Anthony's portfolio data
  const generateResponse = (query: string): { text: string; followUps: string[] } => {
    const q = query.toLowerCase();

    if (q.includes("do") || q.includes("build") || q.includes("service") || q.includes("role")) {
      return {
        text:
          "Oh, great question! Anthony is a full-stack software engineer and systems builder. He helps founders and teams turn ambitious ideas into scalable, production-ready products people enjoy!\n\n" +
          "He specializes in high-throughput backend architecture, sub-second UI latency, and rapid 0-to-1 MVP execution using Next.js, TypeScript, and modern distributed systems. ✨",
        followUps: [
          "What's his AI/ML experience?",
          "What has he built?",
          "Why would you hire Anthony?",
        ],
      };
    }

    if (q.includes("ai") || q.includes("ml") || q.includes("machine learning") || q.includes("llm")) {
      return {
        text:
          "Anthony has hands-on experience integrating AI & LLM workflows into production apps! For example, in Nexus, he built a financial compliance intelligence pipeline using pgvector embeddings and LLM tool calling.\n\n" +
          "He focuses on practical AI: agentic workflows, semantic search, local embeddings, and latency-optimized inference pipelines. 🧠",
        followUps: [
          "What has he built?",
          "What's his tech stack?",
          "Why would you hire Anthony?",
        ],
      };
    }

    if (q.includes("built") || q.includes("project") || q.includes("aura") || q.includes("nexus") || q.includes("vortex")) {
      return {
        text:
          "Anthony has engineered several high-impact software systems:\n\n" +
          "• AuraOS: Minimalist browser desktop OS with offline sync and sub-16ms latency.\n" +
          "• Nexus: AI compliance and taxonomy engine powered by pgvector.\n" +
          "• Vortex: Real-time telemetry pipeline ingesting 10,000+ events/sec with Redis & Go.\n" +
          "• Synapse: High-efficiency developer utilities built with WebAssembly.\n\n" +
          "You can explore all of them in the Featured Projects section below! 🚀",
        followUps: [
          "What's his tech stack?",
          "How fast does he ship MVPs?",
          "Why would you hire Anthony?",
        ],
      };
    }

    if (q.includes("why") || q.includes("hire") || q.includes("reason") || q.includes("strength")) {
      return {
        text:
          "Why hire Anthony?\n\n" +
          "1. Full-Stack Mastery: Equally comfortable profiling SQL query execution plans as crafting buttery 60fps micro-interactions.\n" +
          "2. Zero Tech Debt Mentality: Writes clean, type-safe, maintainable code designed to scale from day one.\n" +
          "3. Founder Alignment: Thinks about product metrics, user adoption, and shipping velocity—not just tickets. 💡",
        followUps: [
          "How fast does he ship MVPs?",
          "What does Anthony do?",
          "What has he built?",
        ],
      };
    }

    if (q.includes("fast") || q.includes("mvp") || q.includes("timeline") || q.includes("sprint")) {
      return {
        text:
          "Anthony specializes in 1-to-2 week 0-to-1 MVP Sprints. He identifies the critical path, cuts non-essential fluff, and delivers production-grade applications complete with authentication, database migrations, and CI/CD ready for users and investors. ⚡",
        followUps: [
          "What does Anthony do?",
          "What's his AI/ML experience?",
          "Why would you hire Anthony?",
        ],
      };
    }

    if (q.includes("stack") || q.includes("technolog") || q.includes("skills") || q.includes("language")) {
      return {
        text:
          "Anthony's primary technical stack:\n\n" +
          "• Frontend: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion\n" +
          "• Backend: Node.js, Go, Python (FastAPI), Express\n" +
          "• Databases & Cache: PostgreSQL, pgvector, Redis, Supabase\n" +
          "• Infra & Tooling: Docker, Vercel, AWS primitives, Git CI/CD. 🛠️",
        followUps: [
          "What has he built?",
          "What's his AI/ML experience?",
          "Why would you hire Anthony?",
        ],
      };
    }

    // Default response
    return {
      text:
        `Anthony is a Manila-based software engineer who builds scalable web apps and distributed systems globally. ` +
        `Feel free to ask about his background, or email him directly at ${PORTFOLIO_DATA.email}! ✨`,
      followUps: [
        "What does Anthony do?",
        "What has he built?",
        "Why would you hire Anthony?",
      ],
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(text);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        followUps: response.followUps,
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "ai-initial",
        sender: "ai",
        text: "Chat reset! What would you like to know about Anthony? ✨",
        timestamp: "Just now",
        followUps: DEFAULT_QUESTIONS.slice(0, 4),
      },
    ]);
    setInputValue("");
  };

  return (
    <>
      {/* Floating Pill Trigger Button (Hidden when chat modal is open, exactly like Ma'am Cess) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40"
          >
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open AI chat assistant"
              className="flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6 py-3 font-sans text-[15px] font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-[18px] h-[18px] fill-white/20" />
              <span>Ask Ton ✦</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Drawer / Modal (Responsive Mobile Bottom-Sheet & Desktop Floating Card) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop Scrim */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/25 backdrop-blur-[2px] z-40 sm:hidden"
            />

            {/* Chat Modal / Sheet (Direct match to Ma'am Cess's screenshot media_1791310874134.png) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-x-0 bottom-0 sm:bottom-6 sm:right-6 sm:inset-x-auto z-50 w-full sm:w-[420px] h-[82vh] sm:h-[580px] max-h-[92vh] bg-white border-t sm:border border-neutral-200/90 rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col font-sans"
            >
              {/* Header (Exact match: 'Ask Cess ✦' + 'Ready' + '✕') */}
              <div className="px-5 py-3.5 border-b border-neutral-100 flex items-center justify-between bg-white shrink-0">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 flex items-center gap-1.5 leading-none">
                    <span>Ask Ton</span>
                    <span className="text-emerald-500 text-sm">✦</span>
                  </h3>
                  <p className="text-xs text-neutral-500 font-normal mt-1 leading-none">
                    Ready
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {messages.length > 1 && (
                    <button
                      onClick={handleResetChat}
                      title="Reset conversation"
                      className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    title="Close chat"
                    className="p-1.5 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chat Message Scrollable Container */}
              <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4 bg-white">
                {messages.map((msg, index) => {
                  const isLastAi =
                    msg.sender === "ai" &&
                    (index === messages.length - 1 ||
                      (index === messages.length - 2 && isTyping));

                  return (
                    <div key={msg.id} className="space-y-3">
                      {/* User Bubble (Vibrant solid accent: Emerald Green) */}
                      {msg.sender === "user" ? (
                        <div className="flex justify-end">
                          <div className="max-w-[85%] rounded-2xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white shadow-2xs">
                            {msg.text}
                          </div>
                        </div>
                      ) : (
                        /* AI Bubble (Soft tinted rounded card matching Cess's light card) */
                        <div className="flex flex-col items-start max-w-[92%]">
                          <div className="w-full rounded-2xl bg-[#f8f9fa] border border-neutral-100/90 p-4 text-sm leading-relaxed text-neutral-800 whitespace-pre-wrap shadow-2xs">
                            {msg.text}
                          </div>

                          {/* "YOU MIGHT ALSO ASK" follow-up pills (Exact match to screenshot) */}
                          {msg.followUps && msg.followUps.length > 0 && isLastAi && !isTyping && (
                            <div className="mt-3.5 w-full">
                              <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                                YOU MIGHT ALSO ASK
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {msg.followUps.map((question) => (
                                  <button
                                    key={question}
                                    type="button"
                                    onClick={() => handleSendMessage(question)}
                                    className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-xs text-neutral-700 hover:border-emerald-500 hover:text-emerald-600 transition-colors shadow-2xs font-sans text-left"
                                  >
                                    {question}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Animated Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs py-2 px-3 bg-[#f8f9fa] rounded-full w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>

              {/* Input Area (Pill text input + Circular Send Button + Disclaimer) */}
              <div className="px-5 pt-3 pb-4 border-t border-neutral-100 bg-white shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  {/* Oval pill text input */}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about Ton..."
                    className="flex-1 h-11 px-4 text-sm bg-white border border-neutral-200 rounded-full text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />

                  {/* Circular Send Button (Exact match to Cess's round send icon button) */}
                  <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className="w-11 h-11 rounded-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-white flex items-center justify-center shrink-0 shadow-sm transition-all active:scale-95"
                    aria-label="Send query"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </form>

                {/* Privacy & Grounded Statement (Exact copy from Cess's footer) */}
                <p className="text-[11px] text-neutral-500 mt-2.5 leading-snug">
                  Answers are grounded in my resume and portfolio. Nothing else about you is stored.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
