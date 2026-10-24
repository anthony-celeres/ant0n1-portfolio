import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-32">
      <div className="font-mono text-xs uppercase tracking-widest text-emerald-600 mb-3 font-semibold">
        [ 404 // ROUTE NOT FOUND ]
      </div>
      <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4">
        Page Not Found
      </h1>
      <p className="font-sans text-neutral-600 max-w-md mb-8 text-sm">
        The coordinates you requested do not exist in the system catalog.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
      >
        <ArrowLeft className="w-4 h-4 text-emerald-400" />
        <span>Return to Home</span>
      </Link>
    </main>
  );
}
