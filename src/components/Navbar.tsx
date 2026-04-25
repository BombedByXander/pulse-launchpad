import { Link } from "@tanstack/react-router";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/pulse-logo.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Performance", href: "#performance" },
    { label: "Mods", href: "#mods" },
    { label: "Community", href: "#community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/30 blur-xl group-hover:bg-primary/50 transition-smooth rounded-full" />
            <img src={logo} alt="Pulse Client" width={36} height={36} className="relative" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            PULSE<span className="text-primary">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-glow hover:shadow-glow-strong hover:-translate-y-0.5 transition-smooth"
          >
            <Download className="w-4 h-4" />
            Download
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
