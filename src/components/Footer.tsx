import { PulseLogo } from "./PulseLogo";

type SiteMode = "portfolio" | "pulse";

interface FooterProps {
  mode: SiteMode;
}

export function Footer({ mode }: FooterProps) {
  if (mode === "portfolio") {
    const cols = [
      {
        title: "Focus",
        links: ["Mods", "Websites", "Software projects"],
      },
      {
        title: "Current",
        links: ["Pulse Client", "ProdByXander! Portfolio", "Xander's Arcade"],
      },
    ];

    return (
      <footer className="relative border-t border-border px-6 pt-16 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-14">
            <div>
              <div className="flex items-center gap-2.5 mb-3 text-foreground">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-foreground/35 bg-foreground text-[10px] font-semibold text-background">
                  P
                </span>
                <span className="font-display font-semibold text-sm">ProdByXander!</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[260px]">
                15 y/o software developer and web designer making mods, websites, and
                software that is meant to feel fun instead of flat.
              </p>
            </div>
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-mono-eyebrow mb-4">{c.title}</h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l} className="text-[13px] text-muted-foreground">
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-6 border-t border-border">
            <p className="text-mono-eyebrow !text-[10px]">© 2026 ProdByXander!</p>
            <p className="text-mono-eyebrow !text-[10px]">Portfolio mode · Pulse switch in header</p>
          </div>
        </div>
      </footer>
    );
  }

  const cols = [
    {
      title: "Product",
      links: ["Download", "Features", "Benchmarks"],
    },
    {
      title: "Docs",
      links: ["Install guide", "JVM tuning", "Mod profiles", "FAQ"],
    },
  ];

  return (
    <footer className="relative border-t border-border px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-foreground">
              <PulseLogo size={16} pulse />
              <span className="font-display font-semibold text-sm">Pulse Client</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
              A lightweight, performance-focused Minecraft launcher.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-mono-eyebrow mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[13px] text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pt-6 border-t border-border">
          <p className="text-mono-eyebrow !text-[10px]">
            © 2026 Pulse · Not affiliated with Mojang or Microsoft
          </p>
          <p className="text-mono-eyebrow !text-[10px]">v2.4.1 · build 8842</p>
        </div>
      </div>
    </footer>
  );
}
