const rows = [
  { label: "OS", value: "Windows 10+, macOS 11+, Linux (glibc 2.31+)" },
  { label: "CPU", value: "Any x86-64 or ARM64 from 2014 onward" },
  { label: "RAM", value: "2 GB minimum - 4 GB recommended" },
  { label: "GPU", value: "OpenGL 3.3 / Metal / Vulkan capable" },
  { label: "Disk", value: "196MB free (launcher + JVM)" },
  { label: "Java", value: "Bundled - nothing to install" },
];

export function Requirements() {
  return (
    <section id="requirements" className="relative border-t border-border px-6 py-28">
      <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-3">
        <div>
          <p className="text-mono-eyebrow mb-3">/ Requirements</p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Runs where
            <br />
            others won't.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            If your machine boots a modern browser, it runs Pulse. We test
            against the lowest-end hardware in active use, not the spec sheet.
          </p>
        </div>

        <div className="lg:col-span-2">
          <dl className="border-t border-border">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-3 gap-6 border-b border-border py-4"
              >
                <dt className="text-mono-eyebrow pt-0.5">{row.label}</dt>
                <dd className="col-span-2 font-mono text-sm text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
