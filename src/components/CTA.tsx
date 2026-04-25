import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-card border border-border overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-glow opacity-60" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          {/* Animated glow blobs */}
          <div className="absolute -top-40 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

          <div className="relative z-10 px-8 py-20 md:py-28 text-center">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Ready to feel
              <br />
              <span className="text-gradient">the pulse?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Join 2.5 million players who've already upgraded their Minecraft.
              Free forever. No account required.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-glow-strong hover:-translate-y-1 transition-smooth"
            >
              <Download className="w-5 h-5" />
              Download Now
            </a>
            <p className="mt-6 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Windows · macOS · Linux — 87 MB
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
