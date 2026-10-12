import { useState } from 'react';
import { Globe2, ArrowUpRight, Plane } from 'lucide-react';
import { siteContent } from '../data/content';

interface InternationalToursProps {
  onPlanInternational: (destination?: string) => void;
}

export function InternationalTours({ onPlanInternational }: InternationalToursProps) {
  // 3D card tilt effect state
  const [tiltCard, setTiltCard] = useState<{ id: string; x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14; // max 7 deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTiltCard({ id, x, y });
  };

  const handleMouseLeave = () => {
    setTiltCard(null);
  };

  return (
    <section
      id="international-tours"
      className="relative py-24 lg:py-36 bg-gradient-to-br from-[#0B1A3A] via-[#0E2554] to-[#071328] dark:from-[#050B17] dark:via-[#09152E] dark:to-[#03070E] text-white overflow-hidden shadow-inner transition-colors duration-300"
    >
      {/* Background Soft Ambient Light Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Infinite Marquee of Outlined Destination Names */}
      <div className="relative py-4 border-b border-white/15 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {siteContent.internationalTours.destinationsList.concat(siteContent.internationalTours.destinationsList).map((dest, i) => (
            <span
              key={`${dest}-${i}`}
              className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase text-stroke hover:text-white/40 transition-colors px-6 sm:px-10 cursor-pointer inline-block"
              onClick={() => onPlanInternational(dest)}
            >
              {dest} &bull;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-white bg-white/15 px-3.5 py-1.5 rounded-pill font-bold mb-3 border border-white/20 backdrop-blur-md">
            <Globe2 className="w-4 h-4 text-accent animate-spin [animation-duration:15s]" />
            <span>{siteContent.internationalTours.title}</span>
          </div>
          <h2 className="font-heading section-title font-extrabold text-white tracking-tight">
            {siteContent.internationalTours.subtitle}
          </h2>
          <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed font-medium">
            {siteContent.internationalTours.body}
          </p>
        </div>

        {/* 3D Tilt Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.internationalTours.cards.map((card) => {
            const isTilted = tiltCard?.id === card.name;
            const tiltX = isTilted ? tiltCard.x : 0;
            const tiltY = isTilted ? tiltCard.y : 0;

            return (
              <div
                key={card.name}
                onMouseMove={(e) => handleMouseMove(e, card.name)}
                onMouseLeave={handleMouseLeave}
                onClick={() => onPlanInternational(card.name)}
                style={{
                  transform: `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
                  transition: isTilted ? 'none' : 'transform 0.5s ease-out',
                }}
                className="group relative rounded-card overflow-hidden aspect-[4/5] cursor-pointer shadow-xl hover:shadow-2xl border border-white/20 dark:border-white/10 bg-slate-900"
              >
                {/* Background Image */}
                <img
                  src={card.image}
                  alt={`Scenic travel view of ${card.name}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="px-3.5 py-1.5 rounded-pill bg-white text-primary font-bold text-[11px] uppercase tracking-wider shadow-sm flex items-center space-x-1.5">
                      <Plane className="w-3.5 h-3.5 text-accent" />
                      <span>International</span>
                    </span>

                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all shadow-sm">
                      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white group-hover:text-accent-soft transition-colors drop-shadow-md">
                      {card.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 mt-1 font-medium drop-shadow-sm">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Destinations Cloud */}
        <div className="mt-16 p-8 rounded-card bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                20+ International Gateways
              </span>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                Custom visas, air tickets, boutique stays &amp; local guide coordination from Durgapur &amp; Asansol.
              </p>
            </div>

            <button
              onClick={() => onPlanInternational()}
              className="px-8 py-4 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 shrink-0 btn-accent-glow focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {siteContent.internationalTours.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
