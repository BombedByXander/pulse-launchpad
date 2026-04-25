import { motion } from "framer-motion";
import { Zap, Package, Sparkles, Shield, Globe2, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Maximum FPS",
    desc: "Up to 5x performance boost with our custom-built render engine and memory optimization.",
  },
  {
    icon: Package,
    title: "100+ Mods Bundled",
    desc: "All your favorite mods preconfigured. No setup, no conflicts, just launch and play.",
  },
  {
    icon: Sparkles,
    title: "Premium Cosmetics",
    desc: "Stand out with exclusive capes, wings, hats, emotes and bandanas built for the client.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat Friendly",
    desc: "Trusted by major servers including Hypixel, Mineplex and 1000+ networks worldwide.",
  },
  {
    icon: Globe2,
    title: "Cross-Version",
    desc: "Play any version from 1.7 to 1.21 with a single launcher. Switch instantly.",
  },
  {
    icon: Rocket,
    title: "Instant Launch",
    desc: "Boots in under 3 seconds. Get from desktop to game faster than ever before.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            / Built for performance
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Everything you need.
            <br />
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pulse Client takes the guesswork out of optimizing Minecraft. One install,
            zero configuration, infinite possibilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-smooth overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
