import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { PulseLogo } from "./PulseLogo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Benchmarks", href: "#benchmarks" },
    { label: "Requirements", href: "#requirements" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-transparent backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-white" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}>
          <PulseLogo size={18} pulse />
          <span className="font-display font-semibold text-[15px] tracking-tight">
            Pulse Client
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-white hover:text-white/80 transition-smooth"
              style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-md bg-primary text-primary-foreground font-medium text-[13px] hover:opacity-90 transition-smooth"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}
          >
            Download
          </a>
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
          </nav>
        </div>
      )}
    </header>
  );
}
