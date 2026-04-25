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
    let visible = false;

    const updatePosition = () => {
      x += (targetX - x) * 0.18;
      y += (targetY - y) * 0.18;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
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

    el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
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
      className="pointer-events-none fixed left-0 top-0 z-[60] h-[500px] w-[500px] rounded-full opacity-0 transition-opacity duration-150 will-change-transform"
      style={{
        background:
          "radial-gradient(circle, oklch(0.78 0.18 142 / 0.25) 0%, oklch(0.78 0.18 142 / 0.1) 40%, transparent 80%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
