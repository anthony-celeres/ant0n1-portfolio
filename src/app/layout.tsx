import type { Metadata } from "next";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AskAnthonyChat from "@/components/AskAnthonyChat";

export const metadata: Metadata = {
  title: "Anthony Celeres — Full-Stack Software Engineer & Systems Builder",
  description:
    "Personal portfolio and engineering lab of Anthony Celeres. Systems architecture, high-performance web applications, and 0-to-1 production software.",
  keywords: [
    "Anthony Celeres",
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Systems Architecture",
    "Manila Developer",
  ],
  authors: [{ name: "Anthony Celeres" }],
  creator: "Anthony Celeres",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anthonyceleres.com",
    title: "Anthony Celeres — Full-Stack Software Engineer & Systems Builder",
    description:
      "Turning complex specifications into clean, scalable software. Full-stack engineering, performance tuning, and 0-to-1 MVPs.",
    siteName: "Anthony Celeres Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Celeres — Full-Stack Software Engineer & Systems Builder",
    description:
      "Turning complex specifications into clean, scalable software. Full-stack engineering, performance tuning, and 0-to-1 MVPs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#ffffff] text-[#09090b] antialiased selection:bg-black selection:text-white relative">
        <CursorFollower />
        <Navbar />
        {children}
        <Footer />
        <AskAnthonyChat />
      </body>
    </html>
  );
}
