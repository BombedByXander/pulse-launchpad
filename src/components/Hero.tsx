import { useCallback, useRef, useState } from "react";
import { Download } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";

const releaseDownloadUrl =
  "https://github.com/BombedByXander/pulse-launchpad/releases/download/v1.1.1/PulseClient.zip";

export function Hero() {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadState, setDownloadState] = useState<"idle" | "downloading" | "done">("idle");
  const resetTimeoutRef = useRef<number | null>(null);

  const clearResetTimeout = () => {
    if (resetTimeoutRef.current !== null) {
      window.clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  };

  const finishDownload = useCallback(() => {
    clearResetTimeout();
    setDownloadProgress(100);
    setDownloadState("done");
    resetTimeoutRef.current = window.setTimeout(() => {
      setDownloadState("idle");
      setDownloadProgress(0);
      resetTimeoutRef.current = null;
    }, 1400);
  }, []);

  const handleDownload = useCallback(async () => {
    if (downloadState === "downloading") return;

    clearResetTimeout();
    setDownloadState("downloading");
    setDownloadProgress(8);

    try {
      const response = await fetch(releaseDownloadUrl);
      if (!response.ok || !response.body) {
        throw new Error("Download stream unavailable");
      }

      const total = Number(response.headers.get("content-length") ?? "0");
      const reader = response.body.getReader();
      const chunks: Uint8Array[] = [];
      let received = 0;
      let fallbackProgress = 8;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!value) continue;

        chunks.push(value);
        received += value.length;

        if (total > 0) {
          setDownloadProgress(Math.min(96, Math.round((received / total) * 100)));
        } else {
          fallbackProgress = Math.min(92, fallbackProgress + 6);
          setDownloadProgress(fallbackProgress);
        }
      }

      const blob = new Blob(chunks, { type: "application/zip" });
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "PulseClient.zip";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(objectUrl);
      finishDownload();
    } catch {
      window.open(releaseDownloadUrl, "_blank", "noopener,noreferrer");
      setDownloadProgress(88);
      window.setTimeout(() => finishDownload(), 650);
    }
  }, [downloadState, finishDownload]);

  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">
      <FloatingParticles />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(https://images.steamusercontent.com/ugc/1822275871101931378/C55C48144D45B16C1321AA3226A52C8E5FB13EBE/)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "blur(1px)",
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          maskImage: "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] overflow-hidden">
        <div className="absolute inset-x-[-8%] bottom-[-12%] h-[88%] animate-footer-haze rounded-[999px] bg-[radial-gradient(ellipse_at_center,oklch(0.96_0.002_250_/_0.16),oklch(0.96_0.002_250_/_0.06)_38%,transparent_72%)] blur-2xl" />
        <div
          className="absolute inset-x-0 bottom-0 h-full animate-grain-drift opacity-[0.1]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 240 240\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.92\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
            maskImage: "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_top,oklch(0.14_0.003_250_/_0.58),oklch(0.14_0.003_250_/_0.12)_46%,transparent_88%)] backdrop-blur-[2px]" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
        <div className="absolute left-1/2 bottom-[10%] h-[48%] w-[72%] -translate-x-1/2 animate-grid-swell rounded-[999px] opacity-85">
          <div className="absolute inset-0 grid-bg animate-grid-drift opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_24%,black_54%,transparent_88%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.96_0.002_250_/_0.1),transparent_62%)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-full bg-[linear-gradient(to_top,oklch(0.14_0.003_250_/_0.46),transparent_72%)]" />
      </div>

      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-10 flex justify-center">
          <div
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span
              className="font-mono text-white !text-[11px] uppercase tracking-wider"
              style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
            >
              v1.1.1 · stable
            </span>
          </div>
        </div>

        <h1
          className="mx-auto max-w-4xl text-center text-[44px] font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl"
          style={{
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.5), 0 4px 40px rgba(0, 0, 0, 0.3)",
          }}
        >
          A lightweight launcher
          <br />
          built for raw FPS.
        </h1>

        <p
          className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed md:text-lg"
          style={{
            color: "rgb(255, 255, 255)",
            textShadow: "0 2px 12px rgba(0, 0, 0, 0.5), 0 4px 24px rgba(0, 0, 0, 0.3)",
          }}
        >
          3x your current FPS with Pulse Client - a heavily optimized, lightweight
          Minecraft client designed for maximum FPS on all devices.
        </p>

        <div
          id="download"
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-start"
        >
          <div className="w-full max-w-[252px]">
            <button
              type="button"
              onClick={handleDownload}
              disabled={downloadState === "downloading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90 disabled:cursor-wait disabled:opacity-85 animate-btn-glow"
              aria-live="polite"
            >
              <Download className="h-4 w-4" />
              {downloadState === "downloading" ? "Downloading..." : "Download for Windows"}
            </button>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full rounded-full bg-accent transition-[width] duration-200 ease-out"
                style={{ width: `${downloadProgress}%` }}
              />
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-smooth hover:bg-surface"
            style={{
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4), 0 8px 40px rgba(0, 0, 0, 0.2)",
            }}
          >
            macOS · Linux
          </a>
        </div>

        <p
          className="mt-4 text-center font-mono !text-[11px] uppercase tracking-wider text-white"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
        >
          Free · 87 MB installer · Electron · Java 21 bundled
        </p>
        <p
          className="mt-1.5 text-center font-mono text-[11px] text-white"
          style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
        >
          Guided setup wizard - installs in under a minute.
        </p>

        <div className="mx-auto mt-20 max-w-3xl">
          <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-elevated">
            <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="text-mono-eyebrow !text-[10px]">pulse-client · launch.log</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-muted-foreground">
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
