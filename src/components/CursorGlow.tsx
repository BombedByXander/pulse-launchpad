import { useEffect, useRef, useState } from "react";

/**
 * Brighter grid reveal that follows the user's cursor.
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
    let visible = false;

    const updatePosition = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      el.style.setProperty("--cursor-x", `${x}px`);
      el.style.setProperty("--cursor-y", `${y}px`);
      el.style.opacity = visible ? "1" : "0";
      raf = requestAnimationFrame(updatePosition);
    };

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      visible = true;
    };

    const onLeave = () => {
      visible = false;
    };

    el.style.setProperty("--cursor-x", `${x}px`);
    el.style.setProperty("--cursor-y", `${y}px`);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(updatePosition);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[5] opacity-0 transition-opacity duration-150 will-change-transform"
      style={{
        background:
          "linear-gradient(oklch(1 0 0 / 0.18) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.18) 1px, transparent 1px), radial-gradient(circle at var(--cursor-x) var(--cursor-y), oklch(0.96 0.002 250 / 0.12) 0%, oklch(0.78 0.18 142 / 0.18) 34%, transparent 72%)",
        backgroundSize: "48px 48px, 48px 48px, 100% 100%",
        backgroundPosition: "0 0, 0 0, center",
        maskImage:
          "radial-gradient(circle 220px at var(--cursor-x) var(--cursor-y), black 0, black 38%, transparent 76%)",
        WebkitMaskImage:
          "radial-gradient(circle 220px at var(--cursor-x) var(--cursor-y), black 0, black 38%, transparent 76%)",
        mixBlendMode: "screen",
        filter: "brightness(1.18) blur(0.15px)",
      }}
    />
  );
}
