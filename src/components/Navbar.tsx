"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Exact arrangement from Ma'am Cess: Home -> About -> Services -> Projects
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "PROJECTS", href: "/projects" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b px-5 transition-all duration-300 md:px-10 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-neutral-200"
            : "bg-white/80 backdrop-blur-sm border-neutral-200/80"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between md:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="font-mono text-lg font-bold uppercase text-neutral-900 transition-colors hover:text-emerald-600"
          >
            TON.
          </Link>

          {/* Desktop Nav: HOME -> ABOUT -> SERVICES -> PROJECTS -> CONTACT ↗ */}
          <nav className="hidden items-center gap-10 font-mono text-xs uppercase md:flex" aria-label="Main">
            {navLinks.map((item) => {
              const isActive = isLinkActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-1 transition-colors hover:text-emerald-600 ${
                    isActive
                      ? "text-emerald-600 border-b-2 border-emerald-500 font-bold pb-0.5"
                      : "text-neutral-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Solid Emerald Contact Button */}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="rounded-none font-mono text-xs uppercase bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 flex items-center gap-1.5 transition-colors shadow-sm ml-2 cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-none p-2 text-neutral-900 md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-white px-6 pb-24 pt-8 border-b border-neutral-200 transition-all md:hidden animate-in fade-in duration-200">
          <nav className="border-t border-neutral-200" aria-label="Mobile">
            {navLinks.map((item, idx) => {
              const isActive = isLinkActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-baseline gap-4 border-b border-neutral-200 py-5 font-mono text-xl uppercase transition-colors hover:text-emerald-600 ${
                    isActive ? "text-emerald-600 font-bold" : "text-neutral-900"
                  }`}
                >
                  <span className="text-xs text-neutral-400 font-mono">0{idx + 1}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="pt-6">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="w-full rounded-none bg-emerald-500 text-white py-3.5 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
