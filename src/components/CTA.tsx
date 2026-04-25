import { Download } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
          Install once.
          <br />
          Forget it's there.
        </h2>
        <p className="text-base text-muted-foreground mt-6 max-w-xl mx-auto">
          24 MB. No account. No installer wizard. Double-click and play.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-9">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-smooth"
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
