import { Cpu, HardDrive, Gauge, Lock, Code2, Workflow } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Frame-first rendering",
    desc: "Sodium-based render path with chunk culling, async mesh build, and zero render-thread blocking.",
  },
  {
    icon: HardDrive,
    title: "87 MB install",
    desc: "No Electron, no embedded browser, no analytics SDKs. The launcher itself stays out of your way.",
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
    desc: "Verified on Intel HD 4000, Apple M1, and integrated AMD Vega — same launcher, same results.",
  },
  {
    icon: Code2,
    title: "Open mod profile",
    desc: "Drop in any Fabric or Quilt mod. Profiles are plain JSON — version, share, audit them.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-mono-eyebrow mb-3">/ Features</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Performance is a feature.
            <br />
            <span className="text-muted-foreground">Everything else is noise.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative p-8 border-r border-b border-border hover:bg-surface/50 transition-smooth"
              >
                <Icon className="w-4 h-4 text-muted-foreground mb-6" strokeWidth={1.5} />
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
