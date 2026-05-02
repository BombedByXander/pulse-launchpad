import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Layers3,
  Mail,
  Monitor,
  Rocket,
  Sparkles,
  TerminalSquare,
  WandSparkles,
} from "lucide-react";
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
import { PulseLogo } from "@/components/PulseLogo";

type SiteMode = "portfolio" | "pulse";

const modeStorageKey = "site-mode";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "BombedByXander" },
      {
        name: "description",
        content:
          "Portfolio-first landing page for BombedByXander with a full Pulse Client mode switch built into the site shell.",
      },
      {
        property: "og:title",
        content: "BombedByXander",
      },
      {
        property: "og:description",
        content:
          "Portfolio-first landing page with a full Pulse Client mode you can switch into from the header.",
      },
    ],
  }),
});

function Index() {
  const [mode, setMode] = useState<SiteMode>("portfolio");

  useEffect(() => {
    const storedMode = window.localStorage.getItem(modeStorageKey);
    if (storedMode === "portfolio" || storedMode === "pulse") {
      setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(modeStorageKey, mode);
  }, [mode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CursorGlow />
      <Navbar mode={mode} onModeChange={setMode} />
      <main>
        {mode === "portfolio" ? (
          <PortfolioMode onModeChange={setMode} />
        ) : (
          <PulseMode />
        )}
      </main>
      <Footer mode={mode} />
    </div>
  );
}

function PulseMode() {
  return (
    <>
      <Hero />
      <FpsCompare />
      <Features />
      <Benchmarks />
      <Requirements />
      <CTA />
    </>
  );
}

function PortfolioMode({ onModeChange }: { onModeChange: (mode: SiteMode) => void }) {
  const projects = [
    {
      title: "Pulse Client",
      eyebrow: "Featured launch",
      summary:
        "A performance-first Minecraft launcher presented as a fully switchable product mode inside this site.",
      stats: "Landing, benchmarks, install story",
      cta: "Open Pulse Client mode",
      action: () => onModeChange("pulse"),
      accent: "text-accent",
    },
    {
      title: "Interface Systems",
      eyebrow: "Front-end craft",
      summary:
        "Navigation, layout rhythm, motion, and dense UI tuned so product pages feel intentional instead of generic.",
      stats: "React, Tailwind, interaction polish",
      cta: "Scroll the portfolio",
      href: "#stack",
    },
    {
      title: "Launch Surfaces",
      eyebrow: "Visual direction",
      summary:
        "Sites that start useful on first paint: high-signal hero sections, faster scanning, and cleaner conversion paths.",
      stats: "Hero design, narrative, conversion",
      cta: "See the approach",
      href: "#about",
    },
  ];

  const capabilities = [
    {
      icon: Monitor,
      title: "Front-end builds",
      desc: "Product pages, dashboards, and marketing surfaces that feel crisp on desktop and mobile.",
    },
    {
      icon: WandSparkles,
      title: "Visual refinement",
      desc: "Sharper typography, stronger hierarchy, and interfaces with a point of view instead of a template feel.",
    },
    {
      icon: TerminalSquare,
      title: "Implementation depth",
      desc: "Real repo work: Vercel fixes, stateful UI changes, metadata cleanup, and production-facing polish.",
    },
  ];

  const stack = [
    "React + TypeScript",
    "TanStack Router / Start",
    "Vite + Vercel",
    "Tailwind CSS",
    "Motion and interaction polish",
    "Product-style storytelling",
  ];

  return (
    <>
      <section className="relative overflow-hidden px-6 pt-28 pb-24">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.18_142_/_0.16),transparent_35%),radial-gradient(circle_at_80%_20%,oklch(0.96_0.002_250_/_0.08),transparent_30%)]" />
          <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.9fr] lg:items-end">
            <div>
              <p className="text-mono-eyebrow mb-5">/ Portfolio mode</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl md:text-7xl">
                BombedByXander builds launch-ready interfaces with product energy.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                This site now opens as a portfolio first. In the top-right corner, the
                <span className="text-foreground"> Pulse Client </span>
                switch turns the whole experience into the launcher site instead of just
                swapping a single section.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
                >
                  View selected work
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => onModeChange("pulse")}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-surface"
                >
                  Jump into Pulse Client
                  <PulseLogo size={15} />
                </button>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border shadow-elevated">
              <div className="bg-surface px-6 py-5">
                <p className="text-mono-eyebrow mb-2">/ Snapshot</p>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                    <Blocks className="h-4 w-4 text-foreground" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Front-end, launch pages, and interactive product storytelling
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Built to feel deliberate, not prefab.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-px bg-border">
                <div className="bg-surface px-6 py-5">
                  <p className="text-mono-eyebrow mb-2">/ Current mode</p>
                  <p className="text-2xl font-semibold tracking-tight">Portfolio</p>
                </div>
                <div className="bg-surface px-6 py-5">
                  <p className="text-mono-eyebrow mb-2">/ Alternate mode</p>
                  <p className="text-2xl font-semibold tracking-tight">Pulse Client</p>
                </div>
                <div className="bg-surface px-6 py-5">
                  <p className="text-mono-eyebrow mb-2">/ Focus</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    High-signal design, ship-ready implementation, cleaner storytelling.
                  </p>
                </div>
                <div className="bg-surface px-6 py-5">
                  <p className="text-mono-eyebrow mb-2">/ Style</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Dark utility, restrained motion, sharper hierarchy, better conversion flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-mono-eyebrow mb-3">/ Selected work</p>
            <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
              Projects that lean product-first, not template-first.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col justify-between rounded-lg border border-border bg-surface px-6 py-6 shadow-card"
              >
                <div>
                  <p className="text-mono-eyebrow mb-3">{project.eyebrow}</p>
                  <h3 className={`text-2xl font-semibold tracking-tight ${project.accent ?? ""}`}>
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-8">
                  <p className="text-mono-eyebrow mb-4">{project.stats}</p>
                  {"action" in project ? (
                    <button
                      type="button"
                      onClick={project.action}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-smooth hover:text-accent"
                    >
                      {project.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <a
                      href={project.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-smooth hover:text-accent"
                    >
                      {project.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-mono-eyebrow mb-3">/ About</p>
            <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
              Clean structure, better pacing, and enough personality to stick.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              The through-line here is simple: make the site useful on first contact, then
              make it memorable. That means clearer hierarchy, faster reading, and controls
              that feel like part of the story instead of decoration.
            </p>
            <p>
              Instead of burying the product work in a portfolio, the portfolio now lives as
              the default layer and the product site exists as its own full mode. The switch
              in the header is the hook, but the real value is that the whole information
              architecture pivots with it.
            </p>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-lg border border-border bg-surface p-5">
                    <Icon className="mb-4 h-4 w-4 text-accent" />
                    <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-mono-eyebrow mb-3">/ Stack and approach</p>
              <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
                The build side matters as much as the visual side.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              The site work here is meant to ship, not just mock up well. Routing, deploy
              fixes, content systems, motion, and polish all count.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-surface p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {stack.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-md border border-border bg-background px-4 py-4 text-sm text-foreground"
                  >
                    <span className="mr-3 text-mono-eyebrow align-middle">{String(index + 1).padStart(2, "0")}</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface p-8">
              <div className="space-y-5">
                <div>
                  <p className="text-mono-eyebrow mb-2">/ What changes with the switch</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Navigation, feature sections, CTA language, footer structure, and page
                    intent all change together so the Pulse side feels like a real product
                    site, not a themed overlay.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <p className="text-sm font-semibold text-foreground">Mode-aware site shell</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Portfolio by default. Product by intent. One URL, two narratives.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Rocket className="h-4 w-4 text-accent" />
                    <p className="text-sm font-semibold text-foreground">Product-ready base</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Built so you can keep iterating on the portfolio and still use the Pulse
                    Client mode as a live case study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-mono-eyebrow mb-3">/ Contact</p>
          <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
            Want the polished product site version?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Use the header switch to open Pulse Client mode, or keep scrolling this portfolio
            version if the point is to show the broader front-end and launch-page work.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:xjc.galaxy@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              xjc.galaxy@gmail.com
            </a>
            <a
              href="https://github.com/BombedByXander"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-surface"
            >
              <ArrowUpRight className="h-4 w-4" />
              github.com/BombedByXander
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
