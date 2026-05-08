const benchmarks = [
  { device: "Intel UHD 620 - i5-8250U", vanilla: 39, pulse: 184 },
  { device: "Apple M1 - 8 GB", vanilla: 112, pulse: 690 },
  { device: "GTX 1050 Ti - i5-9400F", vanilla: 96, pulse: 520 },
  { device: "RTX 3060 - Ryzen 5 5600X", vanilla: 188, pulse: 1120 },
  { device: "Steam Deck - APU", vanilla: 60, pulse: 290 },
];

export function Benchmarks() {
  const max = Math.max(...benchmarks.map((benchmark) => benchmark.pulse));

  return (
    <section id="benchmarks" className="relative border-t border-border px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 mb-14 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-mono-eyebrow mb-3">/ Benchmarks</p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
              Real numbers.
              <br />
              Real hardware.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Average FPS over a 60-second benchmark in a fixed superflat world,
              render distance 16, vsync off. Lower is better for the gray bar.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-2">
            {benchmarks.map((benchmark) => (
              <div key={benchmark.device}>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{benchmark.device}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    <span className="text-foreground">{benchmark.pulse}</span> fps
                    <span className="opacity-60"> / {benchmark.vanilla}</span>
                  </span>
                </div>
                <div className="relative h-1.5 overflow-hidden rounded-full bg-surface">
                  <div
                    className="absolute left-0 top-0 h-full bg-muted-foreground/40"
                    style={{ width: `${(benchmark.vanilla / max) * 100}%` }}
                  />
                  <div
                    className="absolute left-0 top-0 h-full bg-foreground"
                    style={{ width: `${(benchmark.pulse / max) * 100}%`, mixBlendMode: "screen" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
          {[
            { v: "+441%", l: "Avg FPS gain" },
            { v: "1.84s", l: "Cold start" },
            { v: "196MB", l: "Installer size" },
            { v: "0", l: "Tracking calls" },
          ].map((stat) => (
            <div key={stat.l} className="border-b border-r border-border p-6">
              <div className="font-display text-2xl md:text-3xl font-semibold tracking-tight">
                {stat.v}
              </div>
              <div className="mt-1 text-mono-eyebrow">{stat.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
