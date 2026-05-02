import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { PulseLogo } from "./PulseLogo";

type SiteMode = "portfolio" | "pulse";

interface NavbarProps {
  mode: SiteMode;
  onModeChange: (mode: SiteMode) => void;
}

export function Navbar({ mode, onModeChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const portfolioLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];

  const pulseLinks = [
    { label: "Features", href: "#features" },
    { label: "Benchmarks", href: "#benchmarks" },
    { label: "Requirements", href: "#requirements" },
  ];

  const links = mode === "portfolio" ? portfolioLinks : pulseLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-foreground">
          {mode === "pulse" ? (
            <>
              <PulseLogo size={18} pulse />
              <span className="font-display font-semibold text-[15px] tracking-tight">
                Pulse Client
              </span>
            </>
          ) : (
            <>
              <span className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-sm border border-foreground/35 bg-foreground text-background">
                B
              </span>
              <span className="font-display font-semibold text-[15px] tracking-tight">
                BombedByXander
              </span>
            </>
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-muted-foreground hover:text-foreground transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {mode === "portfolio" ? (
            <button
              type="button"
              onClick={() => onModeChange("pulse")}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground font-medium text-[13px] hover:opacity-90 transition-smooth"
            >
              Pulse Client
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onModeChange("portfolio")}
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-md border border-border text-foreground font-medium text-[13px] hover:bg-surface transition-smooth"
            >
              Portfolio
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-3 gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-2 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                onModeChange(mode === "portfolio" ? "pulse" : "portfolio");
                setOpen(false);
              }}
              className="mt-2 rounded-md border border-border px-2 py-2.5 text-left text-sm text-foreground hover:bg-surface transition-smooth"
            >
              {mode === "portfolio" ? "Open Pulse Client" : "Open Portfolio"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
