export function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Download", "Features", "Benchmarks", "Changelog"],
    },
    {
      title: "Docs",
      links: ["Install guide", "JVM tuning", "Mod profiles", "FAQ"],
    },
    {
      title: "Community",
      links: ["GitHub", "Discord", "Issue tracker"],
    },
  ];

  return (
    <footer className="relative border-t border-border px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
                <rect x="6" y="6" width="6" height="6" fill="currentColor" />
              </svg>
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
