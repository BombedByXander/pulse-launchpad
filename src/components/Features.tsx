import { Cpu, HardDrive, Gauge, Lock, Code2, Workflow } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Frame-first rendering",
    desc: "Sodium-based render path with chunk culling, async mesh build, and zero render-thread blocking.",
  },
  {
    icon: HardDrive,
    title: "196MB install",
    desc: "Built with Electron, no embedded browser, and no analytics SDKs. The launcher itself stays out of your way.",
  },
  {
    icon: Cpu,
    title: "Memory-tuned JVM",
    desc: "Ships with OpenJDK 21 + Shenandoah GC flags pre-tuned. No more pasting JVM args from forums.",
  },
  {
    icon: Lock,
    title: "Minimal telemetry",
    desc: "No tracking, no phone-home. The client never talks to a server you didn't open.",
  },
  {
    icon: Workflow,
    title: "Stable on old hardware",
    desc: "Verified on Intel HD 4000, Apple M1, and integrated AMD Vega - same launcher, same results.",
  },
  {
    icon: Code2,
    title: "Open mod profile",
    desc: "Drop in any Fabric or Quilt mod. Profiles are plain JSON - version, share, audit them.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative border-t border-border px-6 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-mono-eyebrow mb-3">/ Features</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Performance is a feature.
            <br />
            <span className="text-muted-foreground">Everything else is noise.</span>
          </h2>
        </div>

        <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative border-b border-r border-border p-8 transition-smooth hover:bg-surface/50"
              >
                <Icon className="mb-6 h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="mb-2 text-base font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
