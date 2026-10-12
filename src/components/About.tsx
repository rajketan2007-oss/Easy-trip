import { CheckCircle, ShieldCheck, HeartHandshake, Compass, Users2, Sparkles, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/content';

interface AboutProps {
  onPlanTrip: () => void;
}

export function About({ onPlanTrip }: AboutProps) {
  const icons = [
    Compass,
    Sparkles,
    Users2,
    HeartHandshake,
    CheckCircle,
    ShieldCheck,
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-bg-alt dark:bg-[#091124] text-text dark:text-slate-100 border-t border-b border-border dark:border-[#1D3063]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-primary font-bold mb-3">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            <span>{siteContent.about.eyebrow}</span>
          </div>
          <h2 className="font-heading section-title font-extrabold text-text dark:text-white tracking-tight">
            {siteContent.about.subtitle}
          </h2>
        </div>

        {/* Split Layout: Narrative & Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative with P1 Pull-Quote */}
          <div className="lg:col-span-6 space-y-8">
            {/* P1 Large Pull-quote styling (Clean Booking Platform Card) */}
            <div className="relative p-6 sm:p-8 rounded-card bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] shadow-card transition-colors">
              <span className="font-sans text-6xl text-primary/20 dark:text-primary/30 absolute -top-3 left-4 select-none leading-none font-black">
                “
              </span>
              <p className="text-lg sm:text-xl text-text dark:text-slate-100 font-semibold italic leading-relaxed pt-2">
                {siteContent.about.p1}
              </p>
            </div>

            {/* Paragraphs P2, P3, P4 */}
            <div className="space-y-5 text-text-muted dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>{siteContent.about.p2}</p>
              <p>{siteContent.about.p3}</p>
              <p>{siteContent.about.p4}</p>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onPlanTrip}
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-btn bg-[#287DFA] hover:bg-[#0F4BD2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 btn-primary-glow focus:outline-none focus:ring-2 focus:ring-[#287DFA]"
              >
                <span>{siteContent.about.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Parallax Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Image 1: Main top tall */}
              <div className="space-y-4">
                <div className="relative group overflow-hidden rounded-card aspect-[4/5] shadow-card border border-border dark:border-[#1D3063] bg-white dark:bg-[#111D3D]">
                  <img
                    src={siteContent.about.collageImages[0].url}
                    alt={siteContent.about.collageImages[0].alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
                    {siteContent.about.collageImages[0].caption}
                  </span>
                </div>

                {/* Sub badge */}
                <div className="p-4 rounded-card bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] shadow-soft-sm">
                  <span className="text-[11px] uppercase tracking-wider text-primary dark:text-blue-400 font-bold block">
                    Local Care
                  </span>
                  <p className="text-xs text-text-muted dark:text-slate-300 font-medium mt-1">
                    Serving families &amp; groups across Durgapur, Asansol &amp; Raniganj.
                  </p>
                </div>
              </div>

              {/* Column 2: Offset images */}
              <div className="space-y-4 pt-8 sm:pt-12">
                <div className="relative group overflow-hidden rounded-card aspect-square shadow-card border border-border dark:border-[#1D3063] bg-white dark:bg-[#111D3D]">
                  <img
                    src={siteContent.about.collageImages[1].url}
                    alt={siteContent.about.collageImages[1].alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
                    {siteContent.about.collageImages[1].caption}
                  </span>
                </div>

                <div className="relative group overflow-hidden rounded-card aspect-[4/5] shadow-card border border-border dark:border-[#1D3063] bg-white dark:bg-[#111D3D]">
                  <img
                    src={siteContent.about.collageImages[2].url}
                    alt={siteContent.about.collageImages[2].alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-wider text-white drop-shadow-sm">
                    {siteContent.about.collageImages[2].caption}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Easy Trip? - 6 Feature Cards */}
        <div className="mt-20 lg:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold block mb-2">
              Our Commitment
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-text dark:text-white">
              {siteContent.about.whyChooseTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.about.whyChoosePoints.map((point, index) => {
              const IconComp = icons[index % icons.length];
              return (
                <div
                  key={point.title}
                  className="group p-6 rounded-card bg-white dark:bg-[#111D3D] hover:bg-white dark:hover:bg-[#15244C] border border-border dark:border-[#1D3063] hover:border-primary/40 dark:hover:border-primary/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Blue circular icon badge */}
                    <div className="w-12 h-12 rounded-full bg-primary-soft dark:bg-blue-950/60 text-primary dark:text-blue-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white transition-all shadow-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-base sm:text-lg font-bold text-text dark:text-white group-hover:text-primary transition-colors">
                      {point.title}
                    </h4>
                    <p className="mt-2 text-sm text-text-muted dark:text-slate-300 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
