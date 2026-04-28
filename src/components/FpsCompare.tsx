import { useCountUp } from "@/hooks/useCountUp";

export function FpsCompare() {
  const other = useCountUp(70, 1800);
  const pulse = useCountUp(465, 2400);
  
  const otherDone = other.done;
  const pulseDone = pulse.done;

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-mono-eyebrow mb-3">/ Side-by-side</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Same world. Same hardware.
            <br />
            Different launcher.
          </h2>
          <p className="text-sm text-muted-foreground mt-5 max-w-md mx-auto leading-relaxed">
            Average sustained frame rate during a 60-second world load, captured
            on identical hardware.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {/* Other Clients — RED */}
          <div
            ref={other.ref}
            className="relative bg-surface p-10 md:p-14 min-h-[280px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="text-mono-eyebrow">/ Other Clients</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[oklch(0.65_0.22_25)]">
                avg
              </span>
            </div>

            <div>
              <div
                className={`font-display font-semibold tracking-tight tabular-nums leading-none text-[oklch(0.65_0.22_25)] ${otherDone ? 'animate-fps-glow' : ''}`}
                style={{
                  fontSize: "clamp(72px, 12vw, 144px)",
                  textShadow: "0 0 60px oklch(0.65 0.22 25 / 0.35)",
                }}
              >
                {Math.round(other.value)}
                <span className="text-base md:text-lg font-mono text-muted-foreground ml-3 align-top mt-3 inline-block">
                  fps
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-mono">
                vanilla · forge · stock launchers
              </p>
            </div>
          </div>

          {/* Pulse Client — GREEN */}
          <div
            ref={pulse.ref}
            className="relative bg-surface p-10 md:p-14 min-h-[280px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                avg
              </span>
              <span className="text-mono-eyebrow">Pulse Client /</span>
            </div>

            <div className="text-right">
              <div
                className={`font-display font-semibold tracking-tight tabular-nums leading-none text-accent ${pulseDone ? 'animate-fps-glow' : ''}`}
                style={{
                  fontSize: "clamp(72px, 12vw, 144px)",
                  textShadow: "0 0 60px oklch(0.78 0.18 142 / 0.35)",
                }}
              >
                {Math.round(pulse.value)}
                <span className="text-base md:text-lg font-mono text-muted-foreground ml-3 align-top mt-3 inline-block">
                  fps
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-mono">
                pulse client · sodium · lithium
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-mono-eyebrow !text-[10px] mt-6">
          Tested on Ryzen 5 5500 · GTX 1060 Gaming X · 16 GB · render distance 16 · vsync OFF
        </p>
      </div>
    </section>
  );
}
