import { Download } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Dramatic sky background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(https://images.steamusercontent.com/ugc/1822275871101931378/C55C48144D45B16C1321AA3226A52C8E5FB13EBE/)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'blur(1px)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
        }}
      />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none overflow-hidden">
        <div className="absolute left-1/2 bottom-[10%] h-[48%] w-[72%] -translate-x-1/2 animate-grid-swell rounded-[999px] opacity-85">
          <div className="absolute inset-0 grid-bg animate-grid-drift opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_24%,black_54%,transparent_88%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.96_0.002_250_/_0.1),transparent_62%)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_top,oklch(0.14_0.003_250_/_0.46),transparent_72%)]" />
      </div>
      
      {/* subtle background grid only */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto">
        {/* status pill */}
        <div className="flex justify-center mb-10">
          <div 
            className="group inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/50"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            <span 
              className="text-white !text-[11px] font-mono uppercase tracking-wider"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
            >
              v1.1.1 · stable
            </span>
          </div>
        </div>

        <h1 
          className="text-center text-[44px] sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight max-w-4xl mx-auto"
          style={{ textShadow: '0 2px 20px rgba(0, 0, 0, 0.5), 0 4px 40px rgba(0, 0, 0, 0.3)' }}
        >
          A lightweight launcher
          <br />
          built for raw FPS.
        </h1>

        <p 
          className="text-center text-base md:text-lg max-w-xl mx-auto mt-7 leading-relaxed"
          style={{ color: 'rgb(255, 255, 255)', textShadow: '0 2px 12px rgba(0, 0, 0, 0.5), 0 4px 24px rgba(0, 0, 0, 0.3)' }}
        >
          3x your current FPS with Pulse Client — a heavily optimized,
          lightweight Minecraft client designed for maximum FPS on all devices.
        </p>

        <div
          id="download"
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-10"
        >
          <a
            href="https://github.com/BombedByXander/pulse-launchpad/releases/download/v1.1.1/PulseClient.zip"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-smooth animate-btn-glow"
          >
            <Download className="w-4 h-4" />
            Download for Windows
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-surface transition-smooth"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4), 0 8px 40px rgba(0, 0, 0, 0.2)' }}
          >
            macOS · Linux
          </a>
        </div>

        <p 
          className="text-center text-white mt-4 !text-[11px] font-mono uppercase tracking-wider"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
        >
          Free · 87 MB installer · Electron · Java 21 bundled
        </p>
        <p 
          className="text-center text-[11px] text-white mt-1.5 font-mono"
          style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
        >
          Guided setup wizard — installs in under a minute.
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
