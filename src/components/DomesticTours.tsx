import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Compass, MapPin } from 'lucide-react';
import { siteContent } from '../data/content';

interface DomesticToursProps {
  onSelectDestination: (destinationTitle: string, tourType: string) => void;
  onGeneralEnquiry: () => void;
}

export function DomesticTours({ onSelectDestination, onGeneralEnquiry }: DomesticToursProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Filter categories
  const categories = ['All', 'Himalayas & Hills', 'Beaches & Islands', 'Heritage & Spiritual'];

  const getCategoryForTour = (id: string) => {
    if (['shimla-manali', 'kashmir', 'darjeeling-sikkim', 'meghalaya-northeast', 'leh-ladakh'].includes(id)) {
      return 'Himalayas & Hills';
    }
    if (['goa', 'kerala', 'andaman'].includes(id)) {
      return 'Beaches & Islands';
    }
    return 'Heritage & Spiritual';
  };

  const filteredTours = activeFilter === 'All'
    ? siteContent.domesticTours.destinations
    : siteContent.domesticTours.destinations.filter(
        (t) => getCategoryForTour(t.id) === activeFilter
      );

  return (
    <section id="domestic-tours" className="relative py-20 lg:py-32 bg-white dark:bg-[#080E1E] text-text dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold mb-3">
            <Compass className="w-4 h-4 text-primary dark:text-blue-400" />
            <span>{siteContent.domesticTours.eyebrow}</span>
          </div>
          <h2 className="font-heading section-title font-extrabold text-text dark:text-white tracking-tight">
            {siteContent.domesticTours.title}
          </h2>
          <p className="mt-4 text-text-muted dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {siteContent.domesticTours.intro}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-pill text-xs font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none ${
                activeFilter === cat
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-bg-alt dark:bg-[#111D3D] text-text-muted dark:text-slate-300 hover:text-text dark:hover:text-white hover:bg-white dark:hover:bg-[#15244C] border border-border dark:border-[#1D3063]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Destination Tiles Grid - Styled like Trip.com offer cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
              data-cursor="explore"
              className="group relative rounded-card overflow-hidden bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] hover:border-primary/40 dark:hover:border-primary/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with zoom hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-alt dark:bg-slate-900">
                <img
                  src={tour.image}
                  alt={tour.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Region Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-pill bg-white/95 dark:bg-[#080E1E]/90 text-primary-dark dark:text-blue-300 font-bold text-xs shadow-soft-sm flex items-center space-x-1.5 border border-white dark:border-blue-900/50">
                    <MapPin className="w-3.5 h-3.5 text-primary dark:text-blue-400" />
                    <span>{tour.tag}</span>
                  </span>
                </div>

                {/* Index badge */}
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Text & Content Block */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white dark:bg-[#111D3D] transition-colors">
                <div>
                  <h3 className="font-heading tile-title font-extrabold text-text dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    {tour.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-text-muted dark:text-slate-300 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights Chip Strip in primary-soft */}
                  <div className="mt-4 pt-4 border-t border-border dark:border-[#1D3063]/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary dark:text-blue-400 block mb-2 flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary dark:text-blue-400" />
                      <span>Highlights</span>
                    </span>
                    <div className="p-3 rounded-input bg-primary-soft dark:bg-blue-950/40 border border-primary/15 dark:border-blue-800/40 text-primary-dark dark:text-blue-200 text-xs sm:text-sm font-medium leading-relaxed">
                      {tour.highlights}
                    </div>
                  </div>
                </div>

                {/* CTA Button that fills on hover */}
                <div className="mt-6 pt-4 flex items-center justify-between border-t border-border dark:border-[#1D3063]/70">
                  <button
                    onClick={() => onSelectDestination(tour.title, 'Domestic')}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 hover:text-white dark:hover:text-white bg-transparent hover:bg-primary dark:hover:bg-primary border border-primary dark:border-blue-500/80 px-4 py-2.5 rounded-btn transition-all duration-200 group/btn"
                  >
                    <span>{tour.cta}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <span className="text-[11px] text-text-muted dark:text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline">
                    Enquire Now
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Destinations Across India Strip & Chip Cloud */}
        <div className="mt-20 pt-16 border-t border-border dark:border-[#1D3063]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold block mb-2">
              Pan-India Network
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-text dark:text-white">
              More Destinations Across India
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-text-muted dark:text-slate-300 font-medium">
              Pick any location to immediately customize an itinerary tailored for your family or group.
            </p>
          </div>

          {/* Animated 2-row auto-scrolling marquee + clickable chips */}
          <div className="relative overflow-hidden py-4">
            {/* Row 1 */}
            <div className="flex space-x-3 animate-marquee whitespace-nowrap mb-3 hover:[animation-play-state:paused]">
              {siteContent.domesticTours.moreDestinations.map((dest, i) => (
                <button
                  key={`${dest}-${i}`}
                  onClick={() => onSelectDestination(dest, 'Domestic')}
                  className="px-4 py-2 rounded-pill bg-primary-soft dark:bg-[#111D3D] hover:bg-primary dark:hover:bg-primary text-text dark:text-slate-200 hover:text-white dark:hover:text-white border border-primary/20 dark:border-[#1D3063] text-xs font-semibold transition-colors shrink-0 flex items-center space-x-1.5 shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary dark:text-blue-400 group-hover:text-white" />
                  <span>{dest}</span>
                </button>
              ))}
            </div>

            {/* Row 2 Reverse */}
            <div className="flex space-x-3 animate-marquee-reverse whitespace-nowrap hover:[animation-play-state:paused]">
              {[...siteContent.domesticTours.moreDestinations].reverse().map((dest, i) => (
                <button
                  key={`rev-${dest}-${i}`}
                  onClick={() => onSelectDestination(dest, 'Domestic')}
                  className="px-4 py-2 rounded-pill bg-primary-soft dark:bg-[#111D3D] hover:bg-primary dark:hover:bg-primary text-text dark:text-slate-200 hover:text-white dark:hover:text-white border border-primary/20 dark:border-[#1D3063] text-xs font-semibold transition-colors shrink-0 flex items-center space-x-1.5 shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary dark:text-blue-400 group-hover:text-white" />
                  <span>{dest}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Find Your Perfect Destination */}
          <div className="mt-10 text-center">
            <button
              onClick={onGeneralEnquiry}
              className="px-8 py-4 rounded-btn bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 btn-primary-glow focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {siteContent.domesticTours.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
