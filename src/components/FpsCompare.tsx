import { useCountUp } from "@/hooks/useCountUp";

export function FpsCompare() {
  const other = useCountUp(70, 1800);
  const pulse = useCountUp(465, 2400);

  return (
    <section className="relative overflow-hidden border-t border-border px-6 py-28">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-mono-eyebrow mb-3">/ Side-by-side</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Same world. Same hardware.
            <br />
            Different launcher.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Average sustained frame rate during a 60-second world load, captured
            on identical hardware.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          <div
            ref={other.ref}
            className="relative flex min-h-[280px] flex-col justify-between bg-surface p-10 md:p-14"
          >
            <div className="flex items-center justify-between">
              <span className="text-mono-eyebrow">/ Other Clients</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.65_0.22_25)]">
                avg
              </span>
            </div>

            <div>
              <div
                className="font-display font-semibold tracking-tight tabular-nums leading-none text-[oklch(0.65_0.22_25)]"
                style={{
                  fontSize: "clamp(72px, 12vw, 144px)",
                  textShadow: "0 0 60px oklch(0.65 0.22 25 / 0.35)",
                }}
              >
                {Math.round(other.value)}
                <span className="ml-3 mt-3 inline-block align-top font-mono text-base text-muted-foreground md:text-lg">
                  fps
                </span>
              </div>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                vanilla - forge - stock launchers
              </p>
            </div>
          </div>

          <div
            ref={pulse.ref}
            className="relative flex min-h-[280px] flex-col justify-between bg-surface p-10 md:p-14"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                avg
              </span>
              <span className="text-mono-eyebrow">Pulse Client /</span>
            </div>

            <div className="text-right">
              <div
                className="font-display font-semibold tracking-tight tabular-nums leading-none text-accent"
                style={{
                  fontSize: "clamp(72px, 12vw, 144px)",
                  textShadow: "0 0 60px oklch(0.78 0.18 142 / 0.35)",
                }}
              >
                {Math.round(pulse.value)}
                <span className="ml-3 mt-3 inline-block align-top font-mono text-base text-muted-foreground md:text-lg">
                  fps
                </span>
              </div>
              <p className="mt-4 font-mono text-xs text-muted-foreground">
                pulse client - sodium - lithium
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-mono-eyebrow !text-[10px]">
          Tested on Ryzen 5 5500 - GTX 1060 Gaming X - 16 GB - render distance 16 - vsync OFF
        </p>
      </div>
    </section>
  );
}
