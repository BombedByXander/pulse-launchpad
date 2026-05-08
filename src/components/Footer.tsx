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
      <footer className="relative border-t border-border px-6 pb-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2.5 text-foreground">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-sm border border-foreground/35 bg-foreground text-[10px] font-semibold text-background">
                  P
                </span>
                <span className="font-display text-sm font-semibold">ProdByXander!</span>
              </div>
              <p className="max-w-[260px] text-xs leading-relaxed text-muted-foreground">
                15 y/o software developer and web designer making mods, websites, and
                software that is meant to feel fun instead of flat.
              </p>
            </div>
            {cols.map((column) => (
              <div key={column.title}>
                <h4 className="mb-4 text-mono-eyebrow">{column.title}</h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link} className="text-[13px] text-muted-foreground">
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
            <p className="text-mono-eyebrow !text-[10px]">Copyright 2026 ProdByXander!</p>
            <p className="text-mono-eyebrow !text-[10px]">Portfolio mode - Pulse switch in header</p>
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
    <footer className="relative border-t border-border px-6 pb-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 grid gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2.5 text-foreground">
              <PulseLogo size={16} pulse />
              <span className="font-display text-sm font-semibold">Pulse Client</span>
            </div>
            <p className="max-w-[220px] text-xs leading-relaxed text-muted-foreground">
              A lightweight, performance-focused Minecraft launcher.
            </p>
          </div>
          {cols.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-mono-eyebrow">{column.title}</h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-muted-foreground transition-smooth hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-mono-eyebrow !text-[10px]">
            Copyright 2026 Pulse - Not affiliated with Mojang or Microsoft
          </p>
          <p className="text-mono-eyebrow !text-[10px]">v2.4.1 - build 8842</p>
        </div>
      </div>
    </footer>
  );
}
