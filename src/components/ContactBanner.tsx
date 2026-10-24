"use client";

import React from "react";
import { Github, Linkedin, Twitter, ExternalLink, Mail, Instagram } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactBanner() {
  const socials = [
    {
      platform: "twitter",
      url: PORTFOLIO_DATA.socials.twitter,
      icon: Twitter,
      label: "Twitter / X",
    },
    {
      platform: "linkedin",
      url: PORTFOLIO_DATA.socials.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      platform: "github",
      url: PORTFOLIO_DATA.socials.github,
      icon: Github,
      label: "GitHub",
    },
    {
      platform: "calendly",
      url: PORTFOLIO_DATA.calendlyUrl,
      icon: ExternalLink,
      label: "Book a Call",
    },
    {
      platform: "email",
      url: `mailto:${PORTFOLIO_DATA.email}`,
      icon: Mail,
      label: "Direct Email",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-emerald-500 py-14 px-5 text-white md:px-10 md:py-28 select-none"
    >
      <div className="mx-auto max-w-[1440px] text-center">
        {/* Massive Monospace Headline (Exact match to "Connect with me") */}
        <h2 className="font-mono text-4xl font-bold leading-tight md:text-7xl lg:text-8xl tracking-tight text-white">
          Connect with me
        </h2>

        {/* Email Block with Thin Horizontal Borders */}
        <div className="my-8 md:my-12 border-y border-white/30 py-6 md:py-8">
          <p className="font-mono text-xs uppercase mb-2 text-white/80 tracking-widest font-semibold">
            EMAIL
          </p>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="break-all text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold font-sans hover:opacity-80 transition-opacity text-white tracking-tight"
          >
            {PORTFOLIO_DATA.email}
          </a>
        </div>

        {/* Circular Outline Social Buttons Row (Exact match to Cess's circular icons) */}
        <div className="flex flex-wrap gap-3.5 justify-center mt-6 md:mt-8">
          {socials.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 md:h-11 md:w-11 items-center justify-center rounded-full border border-white/60 text-white transition-all hover:bg-white hover:text-emerald-600 hover:scale-110 active:scale-95 shadow-sm"
                aria-label={`Connect on ${s.label}`}
              >
                <IconComponent className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
