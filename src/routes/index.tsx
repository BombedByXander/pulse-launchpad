import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FpsCompare } from "@/components/FpsCompare";
import { Benchmarks } from "@/components/Benchmarks";
import { Requirements } from "@/components/Requirements";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pulse Client" },
      {
        name: "description",
        content:
          "Pulse Client is a stripped-down, performance-first Minecraft launcher. 87 MB install, zero telemetry, consistently higher frames on every machine.",
      },
      {
        property: "og:title",
        content: "Pulse Client",
      },
      {
        property: "og:description",
        content:
          "Stable, fast, performance-focused. 87 MB install. Bundled JVM. No telemetry.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <FpsCompare />
        <Features />
        <Benchmarks />
        <Requirements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
