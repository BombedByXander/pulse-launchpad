import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* subtle background grid only */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto">
        {/* status pill */}
        <div className="flex justify-center mb-10">
          <a
            href="#changelog"
            className="group inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50 hover:border-foreground/20 transition-smooth"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="text-mono-eyebrow !text-[11px]">v2.4.1 released</span>
            <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-smooth" />
          </a>
        </div>

        <h1 className="text-center text-[44px] sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight max-w-4xl mx-auto">
          A lightweight launcher
          <br />
          built for raw FPS.
        </h1>

        <p className="text-center text-base md:text-lg text-muted-foreground max-w-xl mx-auto mt-7 leading-relaxed">
          Pulse Client is a stripped-down, performance-first Minecraft launcher.
          No bloat, no telemetry, no compromises — just consistently higher
          frames on every machine.
        </p>

        <div
          id="download"
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-smooth"
          >
            <Download className="w-4 h-4" />
            Download for Windows
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-surface transition-smooth"
          >
            macOS · Linux
          </a>
        </div>

        <p className="text-center text-mono-eyebrow mt-4 !text-[11px]">
          Free · 24 MB · Java 21 bundled
        </p>

        {/* terminal-style proof block */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="rounded-lg border border-border bg-surface overflow-hidden shadow-elevated">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface-elevated">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="text-mono-eyebrow !text-[10px]">pulse-client · launch.log</span>
            </div>
            <pre className="font-mono text-[12.5px] leading-relaxed p-5 text-muted-foreground overflow-x-auto">
{`$ pulse launch --version 1.21.4
[ok]   jvm                     openjdk-21.0.4 (bundled)
[ok]   memory                  allocated 2048M / heap pre-warmed
[ok]   render                  sodium · iris · lithium · ferrite
[ok]   network                 lan-discovery off · telemetry off
[ok]   integrity               6 mods · sha256 verified
[run]  game ready in `}<span className="text-foreground">1.84s</span>{`
[fps]  baseline 142 → `}<span className="text-accent">avg 487</span>{` (+243%)`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
