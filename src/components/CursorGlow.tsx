import { useEffect, useRef, useState } from "react";

/**
 * Subtle radial glow that follows the user's cursor.
 * Disabled on touch devices and when the user prefers reduced motion.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.15;
      y += (targetY - y) * 0.15;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[500px] w-[500px] rounded-full will-change-transform"
      style={{
        background:
          "radial-gradient(circle, oklch(0.78 0.18 142 / 0.25) 0%, oklch(0.78 0.18 142 / 0.1) 40%, transparent 80%)",
        mixBlendMode: "screen",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
