const particles = [
  { left: "8%", top: "16%", size: 3, delay: "0s", duration: "10s" },
  { left: "18%", top: "34%", size: 2, delay: "1.2s", duration: "13s" },
  { left: "29%", top: "10%", size: 4, delay: "0.8s", duration: "11s" },
  { left: "42%", top: "22%", size: 2, delay: "2.4s", duration: "12s" },
  { left: "57%", top: "12%", size: 3, delay: "1.7s", duration: "9s" },
  { left: "66%", top: "30%", size: 2, delay: "3s", duration: "14s" },
  { left: "78%", top: "18%", size: 4, delay: "0.4s", duration: "12s" },
  { left: "88%", top: "28%", size: 2, delay: "2.8s", duration: "10s" },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${particle.top}-${index}`}
          className="absolute rounded-full bg-white/45 shadow-[0_0_12px_rgba(255,255,255,0.35)] animate-float-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
