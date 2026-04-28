import { Download } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28 px-6 border-t border-border overflow-hidden">
      {/* Background radial gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center top, oklch(0.78 0.18 142 / 0.08) 0%, transparent 60%)',
        }}
      />
      
      {/* Subtle dramatic sky fade */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'url(https://media.forgecdn.net/attachments/722/537/dramatic_skys_new_background_2-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
          Install once.
          <br />
          Forget it&apos;s there.
        </h2>
        <p className="text-base text-muted-foreground mt-6 max-w-xl mx-auto">
          87 MB. No account. No installer wizard. Double-click and play.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-9">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-smooth animate-btn-glow"
          >
            <Download className="w-4 h-4" />
            Download Pulse Client
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border text-foreground font-medium text-sm hover:bg-surface transition-smooth"
          >
            View source
          </a>
        </div>
      </div>
    </section>
  );
}
