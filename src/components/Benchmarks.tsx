const benchmarks = [
  { device: "Intel UHD 620 · i5-8250U", vanilla: 39, pulse: 184 },
  { device: "Apple M1 · 8 GB", vanilla: 112, pulse: 690 },
  { device: "GTX 1050 Ti · i5-9400F", vanilla: 96, pulse: 520 },
  { device: "RTX 3060 · Ryzen 5 5600X", vanilla: 188, pulse: 1120 },
  { device: "Steam Deck · APU", vanilla: 60, pulse: 290 },
];

export function Benchmarks() {
  const max = Math.max(...benchmarks.map((b) => b.pulse));

  return (
    <section id="benchmarks" className="relative py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 mb-14">
          <div className="lg:col-span-1">
            <p className="text-mono-eyebrow mb-3">/ Benchmarks</p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              Real numbers.
              <br />
              Real hardware.
            </h2>
            <p className="text-sm text-muted-foreground mt-5 leading-relaxed max-w-sm">
              Average FPS over a 60-second benchmark in a fixed superflat world,
              render distance 16, vsync off. Lower is better for the gray bar.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {benchmarks.map((b) => (
              <div key={b.device}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-mono text-xs text-muted-foreground">{b.device}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    <span className="text-foreground">{b.pulse}</span> fps
                    <span className="opacity-60"> / {b.vanilla}</span>
                  </span>
                </div>
                <div className="relative h-1.5 bg-surface rounded-full overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-muted-foreground/40"
                    style={{ width: `${(b.vanilla / max) * 100}%` }}
                  />
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground"
                    style={{ width: `${(b.pulse / max) * 100}%`, mixBlendMode: "screen" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border">
          {[
            { v: "+312%", l: "Avg FPS gain" },
            { v: "1.84s", l: "Cold start" },
            { v: "87 MB", l: "Installer size" },
            { v: "0", l: "Tracking calls" },
          ].map((s) => (
            <div key={s.l} className="border-r border-b border-border p-6">
              <div className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                {s.v}
              </div>
              <div className="text-mono-eyebrow mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
