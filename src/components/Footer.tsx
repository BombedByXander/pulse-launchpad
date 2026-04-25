import logo from "@/assets/pulse-logo.png";

export function Footer() {
  const cols = [
    {
      title: "Product",
      links: ["Download", "Features", "Mods", "Cosmetics", "Changelog"],
    },
    {
      title: "Community",
      links: ["Discord", "Twitter", "YouTube", "Reddit", "Forums"],
    },
    {
      title: "Support",
      links: ["Help Center", "Bug Reports", "Status", "Contact"],
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "EULA", "Cookies"],
    },
  ];

  return (
    <footer className="relative border-t border-border px-6 lg:px-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="" width={32} height={32} loading="lazy" />
              <span className="font-display font-bold text-lg">
                PULSE<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The next-generation Minecraft client built for performance,
              competitive play, and creative freedom.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            © 2026 Pulse Client · Not affiliated with Mojang or Microsoft
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            v2.4.1 · build 8842
          </p>
        </div>
      </div>
    </footer>
  );
}
