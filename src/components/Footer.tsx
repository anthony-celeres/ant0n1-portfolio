"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
  ];

  const socialLinks = [
    { label: "GITHUB", url: PORTFOLIO_DATA.socials.github },
    { label: "LINKEDIN", url: PORTFOLIO_DATA.socials.linkedin },
    { label: "TWITTER", url: PORTFOLIO_DATA.socials.twitter },
    { label: "CALENDLY", url: PORTFOLIO_DATA.calendlyUrl },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <footer className="bg-[#121214] px-5 py-12 text-white md:px-10 md:py-16 border-t border-neutral-800">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left Column: Brand Logo, Location & Email */}
        <div className="space-y-3">
          <Link
            href="/"
            className="font-mono text-2xl font-bold uppercase transition-colors hover:text-emerald-400 block text-white"
          >
            TON.
          </Link>
          <p className="font-mono text-xs uppercase text-white/60 tracking-wider">
            MANILA · WORLDWIDE
          </p>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="block text-sm text-white/90 hover:text-white transition-colors underline decoration-white/30 underline-offset-4"
          >
            {PORTFOLIO_DATA.email}
          </a>
        </div>

        {/* Center Column: Navigation Links (Exact match to Cess's footer nav) */}
        <nav
          aria-label="Footer"
          className="flex flex-col gap-3 font-mono text-xs uppercase md:flex-row md:gap-10"
        >
          {navLinks.map((item) => {
            const isActive = isLinkActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`py-1 transition-colors hover:text-emerald-400 ${
                  isActive ? "text-emerald-400 border-b-2 border-emerald-400 pb-0.5" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Column: Text Social Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="mx-auto mt-10 max-w-[1440px] border-t border-white/15 pt-6 font-mono text-[11px] uppercase text-white/50 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Anthony Celeres</span>
      </div>
    </footer>
  );
}
