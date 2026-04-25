interface PulseLogoProps {
  size?: number;
  pulse?: boolean;
  className?: string;
}

export function PulseLogo({ size = 18, pulse = false, className = "" }: PulseLogoProps) {
  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {pulse && (
        <>
          <span
            className="absolute inset-0 border border-current opacity-40 animate-pulse-ring"
            style={{ animationDelay: "0s" }}
          />
          <span
            className="absolute inset-0 border border-current opacity-20 animate-pulse-ring"
            style={{ animationDelay: "1.4s" }}
          />
        </>
      )}
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="16" height="16" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="6" width="6" height="6" fill="currentColor" />
      </svg>
    </span>
  );
}
