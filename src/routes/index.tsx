import { useCallback, useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  TerminalSquare,
  WandSparkles,
  Monitor,
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
import { ModeTransition } from "@/components/ModeTransition";

type SiteMode = "portfolio" | "pulse";

const modeStorageKey = "site-mode";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ProdByXander!" },
      {
        name: "description",
        content:
          "ProdByXander! portfolio with a full Pulse Client mode switch built into the site shell.",
      },
      {
        property: "og:title",
        content: "ProdByXander!",
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
  // pending = the mode we're animating TOWARD; null = no transition active
  const [pendingMode, setPendingMode] = useState<SiteMode | null>(null);

  useEffect(() => {
    const storedMode = window.localStorage.getItem(modeStorageKey);
    if (storedMode === "portfolio" || storedMode === "pulse") {
      setMode(storedMode);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(modeStorageKey, mode);
  }, [mode]);

  // Title animation effect
  useEffect(() => {
    if (mode === "pulse") {
      document.title = "Pulse Client";
      return;
    }

    const label = "ProdByXander!";
    let index = 0;
    let direction: "forward" | "backward" = "forward";
    let timeoutId = 0;

    const tick = () => {
      if (direction === "forward") {
        index = Math.min(label.length, index + 1);
        document.title = label.slice(0, index);
        if (index === label.length) {
          timeoutId = window.setTimeout(() => {
            direction = "backward";
            tick();
          }, 1100);
          return;
        }
        timeoutId = window.setTimeout(tick, 120);
        return;
      }

      index = Math.max(0, index - 1);
      document.title = label.slice(0, index) || "";
      if (index === 0) {
        timeoutId = window.setTimeout(() => {
          direction = "forward";
          tick();
        }, 280);
        return;
      }
      timeoutId = window.setTimeout(tick, 65);
    };

    document.title = "";
    timeoutId = window.setTimeout(tick, 180);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [mode]);

  // Called by Navbar / portfolio CTAs instead of setMode directly
  const handleModeChange = useCallback(
    (next: SiteMode) => {
      if (next === mode || pendingMode !== null) return;
      setPendingMode(next);
    },
    [mode, pendingMode],
  );

  // Called when the animation canvas signals "done" (black screen moment)
  const handleTransitionComplete = useCallback(() => {
    if (pendingMode !== null) {
      setMode(pendingMode);
      // Scroll to top after the content swap
      window.scrollTo({ top: 0 });
    }
    // Tiny delay so the new content mounts before the overlay disappears
    setTimeout(() => setPendingMode(null), 80);
  }, [pendingMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CursorGlow />

      {/* Spell transition overlay */}
      {pendingMode !== null && (
        <ModeTransition
          mode={mode}
          targetMode={pendingMode}
          onComplete={handleTransitionComplete}
        />
      )}

      <Navbar mode={mode} onModeChange={handleModeChange} />
      <main>
        {mode === "portfolio" ? (
          <PortfolioMode onModeChange={handleModeChange} />
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
      eyebrow: "Featured project",
      summary:
        "A performance-first Minecraft launcher with its own full product-mode version inside this site.",
      stats: "Landing page, benchmarks, install flow",
      cta: "Open Pulse Client mode",
      action: () => onModeChange("pulse"),
      accent: "text-accent",
    },
    {
      title: "ProdByXander! Portfolio",
      eyebrow: "This website",
      summary:
        "A portfolio-first homepage that can flip into a full product site instead of just swapping one hero section.",
      stats: "React, layout, mode switch",
      cta: "Back to the top",
      href: "#",
    },
    {
      title: "Xander's Arcade",
      eyebrow: "Games + unblocker",
      summary:
        "A browser hub for games and proxy tools built for school devices, with a faster and more playful front end.",
      stats: "Games, proxy, school-device focus",
      cta: "Visit xandersarcade.vercel.app",
      href: "https://xandersarcade.vercel.app",
    },
  ];

  const capabilities = [
    {
      icon: Monitor,
      title: "Website design",
      desc: "Landing pages and interface-heavy sites that feel sharper and more custom than a template.",
    },
    {
      icon: WandSparkles,
      title: "Game mod ideas",
      desc: "Usually I tweak games to make them more ridiculous, fun, or unexpected instead of just balanced.",
    },
    {
      icon: TerminalSquare,
      title: "Software builds",
      desc: "Launchers, tools, and web software that actually ships instead of stopping at a concept.",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden px-6 pt-28 pb-24">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,oklch(0.78_0.18_142_/_0.16),transparent_35%),radial-gradient(circle_at_80%_20%,oklch(0.96_0.002_250_/_0.08),transparent_30%)]" />
          <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_78%)]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-mono-eyebrow mb-5">/ Portfolio mode</p>
            <h1 className="text-5xl font-semibold leading-[0.96] tracking-tight sm:text-6xl md:text-7xl">
              ProdByXander!
            </h1>
            <p className="mt-5 text-lg font-medium text-foreground/90 md:text-xl">
              15 y/o Software Developer & Web Designer
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I typically mod games to make them more interesting and comical, along with
              making my own websites and softwares too.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
              >
                View projects
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
        </div>
      </section>

      <section id="work" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-2xl">
            <p className="text-mono-eyebrow mb-3">/ Selected work</p>
            <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl">
              Stuff I've been building lately.
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
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer" : undefined}
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
              Mods, websites, and software with a little more personality.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              I like making projects that feel fun to use, not just clean enough to pass.
              Sometimes that means a launcher site, sometimes it means game mods, and
              sometimes it means making a website feel less flat and more alive.
            </p>
            <p>
              The Pulse Client switch in the header is there because I wanted the portfolio to
              feel like a real home base while still letting one project open up into its own
              full site.
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
    </>
  );
}
