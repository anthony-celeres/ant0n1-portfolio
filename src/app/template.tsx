"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure clean scroll to top on section/page navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.36,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
    >
      {/* Architectural Emerald Route Pulse Beam */}
      <motion.div
        key={`beam-${pathname}`}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 z-[100] origin-left pointer-events-none"
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </motion.div>
  );
}
