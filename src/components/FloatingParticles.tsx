const particles = [
  { left: "10%", top: "68%", size: 3, delay: "0s", duration: "8s" },
  { left: "18%", top: "74%", size: 2, delay: "1.2s", duration: "9s" },
  { left: "28%", top: "70%", size: 4, delay: "0.8s", duration: "7.5s" },
  { left: "40%", top: "78%", size: 2, delay: "2.1s", duration: "8.5s" },
  { left: "52%", top: "72%", size: 3, delay: "1.5s", duration: "7.8s" },
  { left: "64%", top: "80%", size: 2, delay: "2.8s", duration: "9.4s" },
  { left: "76%", top: "73%", size: 4, delay: "0.4s", duration: "8.2s" },
  { left: "88%", top: "77%", size: 2, delay: "1.9s", duration: "7.6s" },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${particle.top}-${index}`}
          className="absolute rounded-full bg-[oklch(0.92_0.12_98_/_0.9)] shadow-[0_0_10px_rgba(255,224,122,0.45)] animate-firefly-particle"
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
