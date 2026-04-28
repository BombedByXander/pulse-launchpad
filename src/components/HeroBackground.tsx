import type { ReactNode } from "react";

interface HeroBackgroundProps {
  children: ReactNode;
}

export function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <div className="relative">
      {/* Dramatic sky background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(https://media.forgecdn.net/attachments/722/537/dramatic_skys_new_background_2-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          filter: 'blur(1px)',
        }}
      />
      
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Gradient overlay - seamless fade at bottom */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(10, 10, 10, 0.4) 50%, rgba(10, 10, 10, 0.75) 80%, #0a0a0a 100%)',
        }}
      />

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
