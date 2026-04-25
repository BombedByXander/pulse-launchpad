import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Showcase } from "@/components/Showcase";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pulse Client — Play smoother. Win faster." },
      {
        name: "description",
        content:
          "Pulse Client is the next-gen Minecraft modpack built for performance, packed with 100+ mods, and engineered for competitive play. Free download.",
      },
      { property: "og:title", content: "Pulse Client — Play smoother. Win faster." },
      {
        property: "og:description",
        content:
          "The next-generation Minecraft client. 500% FPS boost, 100+ mods bundled, premium cosmetics. Free forever.",
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
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
