import { useEffect, useRef, useState } from "react";

type SiteMode = "portfolio" | "pulse";

interface ModeTransitionProps {
  mode: SiteMode;
  onComplete: () => void;
  targetMode: SiteMode;
}

/**
 * Cartoon spell-cast transition overlay.
 * Renders a full-screen canvas burst + SVG rune ring, then fades out.
 */
export function ModeTransition({ mode, onComplete, targetMode }: ModeTransitionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"burst" | "hold" | "fade" | "done">("burst");

  // Color palettes per target mode
  const palette =
    targetMode === "pulse"
      ? {
          core: "oklch(0.78 0.18 142)", // green accent
          coreDark: "#0f6b3c",
          ring: "#22ff88",
          spark: ["#22ff88", "#ffffff", "#aaffcc", "#00ffaa", "#88ffdd"],
          glow: "rgba(34,255,136,",
          bg: "rgba(10,40,20,",
        }
      : {
          core: "oklch(0.96 0.002 250)", // near-white / portfolio neutral
          coreDark: "#1a2040",
          ring: "#c8d8ff",
          spark: ["#c8d8ff", "#ffffff", "#aabbff", "#ddeeff", "#8899cc"],
          glow: "rgba(180,200,255,",
          bg: "rgba(10,14,40,",
        };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    // --- Particle system ---
    const N_SPARKS = 110;
    const N_RUNES = 18;
    type Spark = {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; size: number;
      color: string; trail: { x: number; y: number }[];
    };
    type Rune = {
      angle: number; radius: number; angVel: number;
      char: string; opacity: number; size: number;
    };

    const runeChars = ["᛫", "ᚱ", "ᚨ", "ᛏ", "ᚹ", "ᛖ", "ᚾ", "ᚦ", "ᛊ", "ᛗ", "✦", "◈", "⬡", "⬢", "◉", "⬟", "✧", "⟐"];

    const sparks: Spark[] = Array.from({ length: N_SPARKS }, (_, i) => {
      const angle = (i / N_SPARKS) * Math.PI * 2 + Math.random() * 0.3;
      const speed = 4 + Math.random() * 14;
      return {
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 55 + Math.random() * 35,
        size: 2 + Math.random() * 5,
        color: palette.spark[Math.floor(Math.random() * palette.spark.length)],
        trail: [],
      };
    });

    const runes: Rune[] = Array.from({ length: N_RUNES }, (_, i) => ({
      angle: (i / N_RUNES) * Math.PI * 2,
      radius: 80 + Math.random() * 60,
      angVel: (Math.random() - 0.5) * 0.06,
      char: runeChars[i % runeChars.length],
      opacity: 0,
      size: 14 + Math.random() * 10,
    }));

    let frame = 0;
    let raf = 0;
    let shockwaveR = 0;
    let phase2Started = false;
    let fadeStartFrame = 0;

    const tick = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Background ink wash ---
      const washProgress = Math.min(1, frame / 28);
      const washEased = 1 - Math.pow(1 - washProgress, 3);
      ctx.fillStyle = palette.bg + (washEased * 0.88) + ")";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- Shockwave ring ---
      shockwaveR = frame * 38;
      const swAlpha = Math.max(0, 1 - frame / 22);
      if (swAlpha > 0) {
        ctx.beginPath();
        ctx.arc(cx, cy, shockwaveR, 0, Math.PI * 2);
        ctx.strokeStyle = palette.glow + swAlpha + ")";
        ctx.lineWidth = 18 - frame * 0.7;
        ctx.stroke();
      }

      // --- Central glow orb ---
      const orbR = Math.min(180, frame * 12);
      const orbAlpha = Math.max(0, 1 - frame / 50) * 0.7;
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, orbR);
      grd.addColorStop(0, palette.glow + (orbAlpha * 1.2) + ")");
      grd.addColorStop(0.4, palette.glow + (orbAlpha * 0.5) + ")");
      grd.addColorStop(1, palette.glow + "0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, orbR, 0, Math.PI * 2);
      ctx.fill();

      // --- Rune ring (appears around frame 8) ---
      if (frame >= 8) {
        runes.forEach((r) => {
          r.angle += r.angVel;
          r.opacity = Math.min(1, (frame - 8) / 20);
          const rx = cx + Math.cos(r.angle) * r.radius;
          const ry = cy + Math.sin(r.angle) * r.radius;
          ctx.save();
          ctx.globalAlpha = r.opacity * (0.5 + 0.5 * Math.sin(frame * 0.08 + r.angle));
          ctx.font = `${r.size}px monospace`;
          ctx.fillStyle = palette.ring;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowColor = palette.ring;
          ctx.shadowBlur = 12;
          ctx.fillText(r.char, rx, ry);
          ctx.restore();
        });
      }

      // --- Outer rune ring (larger, counter-rotating) ---
      if (frame >= 12) {
        const outerR = 160 + Math.min(80, (frame - 12) * 6);
        const outerOpacity = Math.min(1, (frame - 12) / 18);
        runes.forEach((r, i) => {
          if (i % 2 !== 0) return;
          const angle2 = -(r.angle * 0.7) + frame * 0.025;
          const rx = cx + Math.cos(angle2) * outerR;
          const ry = cy + Math.sin(angle2) * outerR;
          ctx.save();
          ctx.globalAlpha = outerOpacity * 0.4;
          ctx.font = `${r.size * 0.7}px monospace`;
          ctx.fillStyle = palette.ring;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.shadowColor = palette.ring;
          ctx.shadowBlur = 8;
          ctx.fillText(runeChars[(i + 5) % runeChars.length], rx, ry);
          ctx.restore();
        });
      }

      // --- Sparks ---
      sparks.forEach((s) => {
        if (s.life < s.maxLife) {
          s.trail.push({ x: s.x, y: s.y });
          if (s.trail.length > 8) s.trail.shift();
          s.x += s.vx;
          s.y += s.vy;
          s.vx *= 0.97;
          s.vy *= 0.97;
          s.vy += 0.18; // gentle gravity
          s.life++;

          const p = s.life / s.maxLife;
          const alpha = 1 - p;

          // Trail
          if (s.trail.length > 1) {
            ctx.beginPath();
            ctx.moveTo(s.trail[0].x, s.trail[0].y);
            s.trail.forEach((pt) => ctx.lineTo(pt.x, pt.y));
            ctx.strokeStyle = s.color;
            ctx.globalAlpha = alpha * 0.4;
            ctx.lineWidth = s.size * 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }

          // Spark dot
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * (1 - p * 0.6), 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = alpha;
          ctx.shadowColor = s.color;
          ctx.shadowBlur = 16;
          ctx.fill();
          ctx.globalAlpha = 1;
          ctx.shadowBlur = 0;
        }
      });

      // --- Star burst lines ---
      const lineCount = 24;
      for (let i = 0; i < lineCount; i++) {
        const ang = (i / lineCount) * Math.PI * 2 + frame * 0.01;
        const len = Math.min(280, frame * 22);
        const alpha = Math.max(0, 1 - frame / 35) * 0.55;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ang) * len, cy + Math.sin(ang) * len);
        ctx.strokeStyle = palette.ring;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // --- Center core symbol ---
      const coreScale = Math.min(1.4, frame / 10);
      const coreAlpha = Math.min(1, frame / 14);
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(frame * 0.04);
      ctx.scale(coreScale, coreScale);
      ctx.globalAlpha = coreAlpha;
      ctx.font = "bold 64px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = palette.ring;
      ctx.shadowBlur = 40;
      ctx.fillText(targetMode === "pulse" ? "⬡" : "✦", 0, 0);
      ctx.restore();
      ctx.globalAlpha = 1;

      // Phase: hold at peak, then start fade
      if (!phase2Started && frame >= 38) {
        phase2Started = true;
        fadeStartFrame = frame;
        setPhase("hold");
        setTimeout(() => setPhase("fade"), 180);
      }

      // Fade out the canvas after hold
      if (phase2Started && frame > fadeStartFrame + 10) {
        const fadeP = Math.min(1, (frame - (fadeStartFrame + 10)) / 25);
        ctx.fillStyle = `rgba(0,0,0,${fadeP})`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (fadeP >= 1) {
          cancelAnimationFrame(raf);
          setPhase("done");
          return;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase === "done") {
      onComplete();
    }
  }, [phase, onComplete]);

  return (
    <div
      className="fixed inset-0 z-[200] pointer-events-all"
      style={{ cursor: "default" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      {/* Mode label that appears during hold */}
      {(phase === "hold" || phase === "fade") && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            animation: "spell-label-in 0.25s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          <div className="text-center">
            <div
              className="font-mono text-xs uppercase tracking-[0.35em] mb-3"
              style={{ color: targetMode === "pulse" ? "#22ff88" : "#c8d8ff", opacity: 0.8 }}
            >
              switching to
            </div>
            <div
              className="text-4xl font-bold tracking-tight"
              style={{
                color: "#ffffff",
                textShadow: `0 0 40px ${targetMode === "pulse" ? "#22ff88" : "#c8d8ff"}, 0 0 80px ${targetMode === "pulse" ? "#22ff88" : "#c8d8ff"}`,
                fontFamily: "monospace",
              }}
            >
              {targetMode === "pulse" ? "⬡ Pulse Client" : "✦ Portfolio"}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spell-label-in {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
