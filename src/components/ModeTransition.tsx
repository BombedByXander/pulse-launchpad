import { useEffect, useMemo, useState } from "react";

type SiteMode = "portfolio" | "pulse";

interface ModeTransitionProps {
  mode: SiteMode;
  onComplete: () => void;
  targetMode: SiteMode;
}

const TRANSITION_MS = 1180;

export function ModeTransition({ mode, onComplete, targetMode }: ModeTransitionProps) {
  const [revealed, setRevealed] = useState(false);

  const palette = useMemo(
    () =>
      targetMode === "pulse"
        ? {
            accent: "oklch(0.78 0.18 142)",
            accentSoft: "rgba(34, 255, 136, 0.22)",
            accentStrong: "rgba(34, 255, 136, 0.58)",
            base: "rgba(8, 18, 13, 0.92)",
            halo: "radial-gradient(circle at center, rgba(34,255,136,0.28), transparent 60%)",
            ring: "rgba(193, 255, 224, 0.9)",
          }
        : {
            accent: "oklch(0.9 0.03 220)",
            accentSoft: "rgba(200, 216, 255, 0.2)",
            accentStrong: "rgba(200, 216, 255, 0.5)",
            base: "rgba(10, 14, 32, 0.92)",
            halo: "radial-gradient(circle at center, rgba(200,216,255,0.24), transparent 60%)",
            ring: "rgba(240, 245, 255, 0.92)",
          },
    [targetMode],
  );

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setRevealed(true), 70);
    const completeTimer = window.setTimeout(() => onComplete(), TRANSITION_MS);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-auto"
      style={{
        background:
          targetMode === "pulse"
            ? "linear-gradient(135deg, rgba(4,12,8,0.98), rgba(11,29,20,0.96) 48%, rgba(5,12,9,0.98))"
            : "linear-gradient(135deg, rgba(6,9,19,0.98), rgba(17,22,42,0.96) 48%, rgba(8,10,20,0.98))",
      }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${revealed ? "opacity-100" : "opacity-0"}`}
        style={{ background: palette.halo }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(transparent,rgba(255,255,255,0.02),transparent)] opacity-60" />
      <div className="absolute inset-0 grid-bg opacity-[0.16]" />

      <div
        className="absolute left-1/2 top-1/2 h-[44vmin] w-[44vmin] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${palette.accentSoft} 0%, transparent 68%)`,
          animation: "mode-switch-halo 1.18s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[26vmin] w-[26vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          borderColor: palette.ring,
          boxShadow: `0 0 40px ${palette.accentStrong}, inset 0 0 30px ${palette.accentSoft}`,
          animation: "mode-switch-ring 1.18s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-[34vmin] w-[34vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border opacity-60"
        style={{
          borderColor: palette.accent,
          animation: "mode-switch-orbit 1.18s linear forwards",
        }}
      />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div
          className={`w-full max-w-3xl rounded-[30px] border border-white/10 px-6 py-8 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-700 sm:px-10 sm:py-10 ${
            revealed ? "translate-y-0 scale-100 opacity-100" : "translate-y-6 scale-[0.98] opacity-0"
          }`}
          style={{
            background: `linear-gradient(180deg, ${palette.base}, rgba(255,255,255,0.02))`,
          }}
        >
          <p
            className="font-mono text-[11px] uppercase tracking-[0.38em]"
            style={{ color: palette.ring }}
          >
            switching modes
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {targetMode === "pulse" ? "Pulse Client" : "ProdByXander!"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/72 sm:text-base">
            {targetMode === "pulse"
              ? "Loading the product view only after the transition fully resolves, so the switch feels clean and deliberate on smaller and larger screens alike."
              : "Returning to the portfolio shell after the transition closes, keeping the mode swap smooth before the next view appears."}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: palette.accent,
                boxShadow: `0 0 18px ${palette.accentStrong}`,
              }}
            />
            <div className="h-px w-24 bg-white/18 sm:w-36" />
            <span className="text-mono-eyebrow">
              {mode === "portfolio" ? "portfolio" : "pulse"} to{" "}
              {targetMode === "portfolio" ? "portfolio" : "pulse"}
            </span>
            <div className="h-px w-24 bg-white/18 sm:w-36" />
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: palette.ring,
                boxShadow: `0 0 18px ${palette.accentStrong}`,
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes mode-switch-halo {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.72); }
          35% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.38); }
        }

        @keyframes mode-switch-ring {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.62) rotate(0deg); }
          24% { opacity: 1; }
          72% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.26) rotate(14deg); }
        }

        @keyframes mode-switch-orbit {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.88) rotate(0deg); }
          20% { opacity: 0.7; }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.18) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
