import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benchmarks } from "@/components/Benchmarks";
import { Requirements } from "@/components/Requirements";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pulse Client — Lightweight Minecraft launcher built for FPS" },
      {
        name: "description",
        content:
          "Pulse Client is a stripped-down, performance-first Minecraft launcher. 24 MB install, zero telemetry, consistently higher frames on every machine.",
      },
      {
        property: "og:title",
        content: "Pulse Client — Lightweight Minecraft launcher built for FPS",
      },
      {
        property: "og:description",
        content:
          "Stable, fast, performance-focused. 24 MB install. Bundled JVM. No telemetry.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benchmarks />
        <Requirements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
