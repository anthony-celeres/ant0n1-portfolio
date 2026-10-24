import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import WaysToWork from "@/components/WaysToWork";
import Process from "@/components/Process";
import GeometricCanvas from "@/components/GeometricCanvas";
import ContactBanner from "@/components/ContactBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#09090b] selection:bg-black selection:text-white relative">
      <Hero />
      <MarqueeTicker />
      <WaysToWork />
      <Process />
      <GeometricCanvas />
      <ContactBanner />
    </main>
  );
}
