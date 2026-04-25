import { motion } from "framer-motion";
import perfImg from "@/assets/feature-performance.jpg";
import modsImg from "@/assets/feature-mods.jpg";
import cosImg from "@/assets/feature-cosmetics.jpg";

const blocks = [
  {
    id: "performance",
    eyebrow: "Performance",
    title: "Crush your FPS ceiling.",
    desc: "Our custom render pipeline rewrites Minecraft from the ground up. Experience buttery 500+ FPS on hardware that used to chug at 60.",
    img: perfImg,
    stat: "+500% FPS",
  },
  {
    id: "mods",
    eyebrow: "Mods & Shaders",
    title: "Stunning visuals, zero hassle.",
    desc: "Premium shader packs, optimized textures, and 100+ quality-of-life mods baked in. No more JAR hell or version mismatches.",
    img: modsImg,
    stat: "100+ Mods",
    reverse: true,
  },
  {
    id: "community",
    eyebrow: "Competitive Edge",
    title: "Built for PvP champions.",
    desc: "Dedicated PvP HUD, optimized network code and tournament-grade input handling. Every millisecond matters when the diamond drops.",
    img: cosImg,
    stat: "<2ms input",
  },
];

export function Showcase() {
  return (
    <section className="relative py-32 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {blocks.map((b) => (
          <motion.div
            key={b.id}
            id={b.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              b.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-smooth rounded-3xl" />
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated">
                <img
                  src={b.img}
                  alt={b.title}
                  width={1280}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto group-hover:scale-105 transition-smooth duration-700"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-primary/30">
                  <span className="font-mono text-xs text-primary">{b.stat}</span>
                </div>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                / {b.eyebrow}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                {b.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{b.desc}</p>
              <a
                href="#download"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-smooth"
              >
                Get started <span>→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
