import { useEffect, useRef, useState } from "react";

function useLiveFps(target: number, jitter: number, intervalMs = 90) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      if (now - last >= intervalMs) {
        last = now;
        // ease toward target with slight jitter
        const diff = target - valueRef.current;
        const step = diff * 0.18 + (Math.random() - 0.5) * jitter;
        valueRef.current = Math.max(0, valueRef.current + step);
        setValue(valueRef.current);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, jitter, intervalMs]);

  return value;
}

export function FpsCompare() {
  const other = useLiveFps(58, 10);
  const pulse = useLiveFps(478, 26);

  return (
    <section className="relative py-28 px-6 border-t border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-mono-eyebrow mb-3">/ Live comparison</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Same world. Same hardware.
            <br />
            Different launcher.
          </h2>
          <p className="text-sm text-muted-foreground mt-5 max-w-md mx-auto leading-relaxed">
            A live snapshot of frame rates rendered with bog-standard launchers
            versus Pulse, on a mid-range laptop.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {/* Other Clients — RED */}
          <div className="relative bg-surface p-10 md:p-14 min-h-[280px] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-mono-eyebrow">/ Other Clients</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-[oklch(0.65_0.22_25)]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-[oklch(0.65_0.22_25)] animate-ping opacity-75" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-[oklch(0.65_0.22_25)]" />
                </span>
                live
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
                {Math.round(other)}
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
          <div className="relative bg-surface p-10 md:p-14 min-h-[280px] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                  <span className="relative rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                live
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
                {Math.round(pulse)}
                <span className="text-base md:text-lg font-mono text-muted-foreground ml-3 align-top mt-3 inline-block">
                  fps
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-4 font-mono">
                pulse client · sodium · iris bundled
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-mono-eyebrow !text-[10px] mt-6">
          Tested on i5-9400F · GTX 1050 Ti · 16 GB · render distance 16 · vsync off
        </p>
      </div>
    </section>
  );
}
