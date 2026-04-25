import { motion } from "framer-motion";
import { Download, Apple, Monitor } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Pulse rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary/40 animate-pulse-ring"
            style={{ animationDelay: `${i * 1}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary shadow-glow" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            Version 2.4 — Now Live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          Play smoother.
          <br />
          <span className="text-gradient">Win faster.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Pulse Client is the next-generation Minecraft modpack engineered for
          performance, packed with mods, and built for competitive play.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          id="download"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-strong hover:-translate-y-1 transition-smooth"
          >
            <Download className="w-5 h-5" />
            Download Pulse Client
            <span className="text-xs font-mono opacity-70 ml-1">FREE</span>
          </a>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Monitor className="w-4 h-4" /> Windows
            </span>
            <span className="flex items-center gap-1.5">
              <Apple className="w-4 h-4" /> macOS
            </span>
            <span className="font-mono">Linux</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto"
        >
          {[
            { value: "2.5M+", label: "Active Players" },
            { value: "500+", label: "FPS Boost" },
            { value: "100+", label: "Mods Built-in" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-4xl font-display font-bold text-gradient">
                {s.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
