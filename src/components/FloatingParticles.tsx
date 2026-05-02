const particles = [
  { left: "8%", top: "69%", size: 2, delay: "0s", duration: "8.4s" },
  { left: "10%", top: "76%", size: 3, delay: "0.4s", duration: "7.8s" },
  { left: "13%", top: "82%", size: 2, delay: "1s", duration: "9.2s" },
  { left: "16%", top: "73%", size: 2, delay: "1.6s", duration: "8.8s" },
  { left: "20%", top: "79%", size: 3, delay: "2.3s", duration: "8.1s" },
  { left: "24%", top: "70%", size: 4, delay: "0.8s", duration: "7.6s" },
  { left: "28%", top: "84%", size: 2, delay: "1.4s", duration: "8.6s" },
  { left: "31%", top: "76%", size: 2, delay: "2.5s", duration: "9s" },
  { left: "35%", top: "81%", size: 3, delay: "0.7s", duration: "8.5s" },
  { left: "39%", top: "71%", size: 2, delay: "1.1s", duration: "7.4s" },
  { left: "43%", top: "78%", size: 3, delay: "2.1s", duration: "8.7s" },
  { left: "47%", top: "83%", size: 2, delay: "0.9s", duration: "9.3s" },
  { left: "50%", top: "74%", size: 4, delay: "1.7s", duration: "7.9s" },
  { left: "54%", top: "80%", size: 2, delay: "2.6s", duration: "8.8s" },
  { left: "58%", top: "72%", size: 3, delay: "0.5s", duration: "7.7s" },
  { left: "61%", top: "84%", size: 2, delay: "1.5s", duration: "9.4s" },
  { left: "65%", top: "77%", size: 2, delay: "2.9s", duration: "8.2s" },
  { left: "69%", top: "70%", size: 3, delay: "1.2s", duration: "8.9s" },
  { left: "72%", top: "82%", size: 2, delay: "0.2s", duration: "7.5s" },
  { left: "76%", top: "74%", size: 4, delay: "1.9s", duration: "8.3s" },
  { left: "79%", top: "80%", size: 2, delay: "2.7s", duration: "8s" },
  { left: "83%", top: "71%", size: 3, delay: "0.6s", duration: "8.6s" },
  { left: "86%", top: "84%", size: 2, delay: "1.3s", duration: "9.1s" },
  { left: "89%", top: "76%", size: 2, delay: "2.2s", duration: "7.8s" },
  { left: "92%", top: "70%", size: 3, delay: "0.3s", duration: "8.4s" },
  { left: "95%", top: "81%", size: 2, delay: "1.8s", duration: "8.9s" },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((particle, index) => (
        <span
          key={`${particle.left}-${particle.top}-${index}`}
          className="absolute rounded-full bg-[oklch(0.94_0.11_98_/_0.96)] shadow-[0_0_12px_rgba(255,224,122,0.5),0_0_22px_rgba(255,224,122,0.22)] animate-firefly-particle"
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
