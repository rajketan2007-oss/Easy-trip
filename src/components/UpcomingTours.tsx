import { useState, useRef, useEffect, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Phone,
  Flame,
  ArrowRight,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { siteContent } from '../data/content';

export interface UpcomingTour {
  id: string;
  month: 'NOVEMBER' | 'DECEMBER';
  monthLabel: string;
  date: string;
  fullDate: string;
  year: string;
  destination: string;
  duration: string;
  price: string;
  priceNum: number;
  priceSuffix: string;
  image: string;
  tag: string;
  highlight: string;
  badge?: string;
  seatsStatus?: string;
}

interface UpcomingToursProps {
  onSelectDestination?: (destinationName: string, tourType?: string) => void;
}

export function UpcomingTours({ onSelectDestination }: UpcomingToursProps) {
  const [activeMonthFilter, setActiveMonthFilter] = useState<'ALL' | 'NOVEMBER' | 'DECEMBER'>('ALL');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Mouse drag-to-scroll state
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  // Filter tours
  const allTours = siteContent.upcomingTours.tours as unknown as UpcomingTour[];
  const filteredTours = activeMonthFilter === 'ALL'
    ? allTours
    : allTours.filter((tour) => tour.month === activeMonthFilter);

  // Check scroll bounds
  const updateScrollState = () => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)));
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [filteredTours]);

  // Scroll buttons
  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const cardWidth = el.querySelector<HTMLElement>('[data-tour-card]')?.offsetWidth || 340;
    const distance = direction === 'left' ? -cardWidth * 1.2 : cardWidth * 1.2;

    el.scrollBy({
      left: distance,
      behavior: 'smooth',
    });
  };

  // Mouse drag handling
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    const el = scrollContainerRef.current;
    if (!el) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.4; // drag multiplier
    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setTimeout(() => setIsDragging(false), 50);
    }
  };

  // Format WhatsApp Link for each tour
  const getWhatsAppLink = (tour: UpcomingTour) => {
    const message = `Hello Easy Trip Tour & Travels! ✈️\n\nI want to book my seat for the upcoming tour from your 2026 Tour Calendar:\n\n📍 Destination: ${tour.destination}\n📅 Departure Date: ${tour.date} ${tour.year}\n⏱️ Duration: ${tour.duration}\n💰 Price: ${tour.price} ${tour.priceSuffix}\n\nPlease share the detailed day-wise itinerary and booking confirmation details.`;
    return `https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const generalWhatsAppLink = `https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(
    'Hello Easy Trip! 🌟 I am interested in your 2026 Tour Calendar fixed departures (November & December). Please share package details and seat availability.'
  )}`;

  return (
    <section
      id="upcoming-tours"
      className="relative py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#070D1B] text-[#0F294D] dark:text-slate-100 transition-colors duration-300 overflow-hidden border-y border-slate-200 dark:border-blue-950/40"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 dark:bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-6"
        >
          <div className="max-w-2xl">
            {/* Top Eyebrow Badges */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-pill bg-primary-soft dark:bg-blue-950/70 border border-primary/20 dark:border-blue-800/40 text-primary-dark dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-soft-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              <span>{siteContent.upcomingTours.eyebrow}</span>
              <span className="inline-block w-1 h-1 rounded-full bg-primary" />
              <span className="text-accent font-extrabold">2026 CALENDAR</span>
            </div>

            <h2 className="font-heading section-title font-extrabold text-[#0F294D] dark:text-white tracking-tight">
              {siteContent.upcomingTours.title}
            </h2>

            <p className="mt-2 text-base sm:text-lg font-semibold text-accent flex items-center gap-2">
              <span>{siteContent.upcomingTours.subtitle}</span>
            </p>

            <p className="mt-2 text-text-muted dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {siteContent.upcomingTours.tagline}
            </p>
          </div>

          {/* Month Filter Tabs & Navigation Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:self-end">
            {/* Filter Pills */}
            <div className="inline-flex items-center p-1 bg-white dark:bg-[#111D3D] rounded-pill border border-slate-200 dark:border-[#1D3063] shadow-sm">
              <button
                onClick={() => {
                  setActiveMonthFilter('ALL');
                  scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-pill text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeMonthFilter === 'ALL'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-text-muted dark:text-slate-300 hover:text-text dark:hover:text-white'
                }`}
              >
                All Tours ({allTours.length})
              </button>
              <button
                onClick={() => {
                  setActiveMonthFilter('NOVEMBER');
                  scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-pill text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeMonthFilter === 'NOVEMBER'
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-text-muted dark:text-slate-300 hover:text-text dark:hover:text-white'
                }`}
              >
                Nov 2026 (3)
              </button>
              <button
                onClick={() => {
                  setActiveMonthFilter('DECEMBER');
                  scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`px-4 py-2 rounded-pill text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeMonthFilter === 'DECEMBER'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-text-muted dark:text-slate-300 hover:text-text dark:hover:text-white'
                }`}
              >
                Dec 2026 (11)
              </button>
            </div>

            {/* Desktop Navigation Chevrons */}
            <div className="hidden sm:flex items-center space-x-2">
              <button
                onClick={() => scrollByAmount('left')}
                disabled={!canScrollLeft}
                aria-label="Previous tours"
                className={`p-2.5 rounded-full border transition-all duration-200 ${
                  canScrollLeft
                    ? 'bg-white dark:bg-[#111D3D] border-slate-200 dark:border-[#1D3063] text-text dark:text-white hover:bg-slate-100 dark:hover:bg-[#192a54] hover:scale-105 active:scale-95 shadow-sm'
                    : 'bg-slate-100 dark:bg-[#0c162f] border-slate-200/50 dark:border-blue-950/40 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollByAmount('right')}
                disabled={!canScrollRight}
                aria-label="Next tours"
                className={`p-2.5 rounded-full border transition-all duration-200 ${
                  canScrollRight
                    ? 'bg-white dark:bg-[#111D3D] border-slate-200 dark:border-[#1D3063] text-text dark:text-white hover:bg-slate-100 dark:hover:bg-[#192a54] hover:scale-105 active:scale-95 shadow-sm'
                    : 'bg-slate-100 dark:bg-[#0c162f] border-slate-200/50 dark:border-blue-950/40 text-slate-300 dark:text-slate-600 cursor-not-allowed'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Swipe Helper Hint */}
        <div className="flex sm:hidden items-center justify-between text-xs text-text-muted dark:text-slate-400 mb-3 px-1 font-medium">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-ping" />
            Swipe cards smoothly to explore
          </span>
          <span className="font-mono font-bold text-primary dark:text-blue-400">
            {filteredTours.length} departures
          </span>
        </div>

        {/* SWIPEABLE CAROUSEL CONTAINER */}
        <div className="relative -mx-4 sm:mx-0">
          <div
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y',
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-1 py-4 scroll-smooth select-none"
          >
            {filteredTours.map((tour, index) => {
              const whatsappUrl = getWhatsAppLink(tour);

              return (
                <div
                  key={tour.id}
                  data-tour-card
                  style={{ scrollSnapAlign: 'start' }}
                  className="w-[82vw] sm:w-[340px] md:w-[360px] shrink-0 rounded-card bg-white dark:bg-[#111D3D] border border-slate-200 dark:border-[#1D3063] hover:border-primary/50 dark:hover:border-blue-400/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Media Top Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={tour.image}
                      alt={`${tour.destination} Tour by Easy Trip`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Top Row: Date Pill & Month Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      {/* Fixed Departure Date Badge */}
                      <span className="px-3 py-1.5 rounded-pill bg-white/95 dark:bg-[#080E1E]/90 text-primary-dark dark:text-blue-300 font-extrabold text-xs shadow-md flex items-center space-x-1.5 border border-white/60 dark:border-blue-900/60 backdrop-blur-sm">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span className="tracking-tight">{tour.date}</span>
                      </span>

                      {/* Month & Badge */}
                      <span
                        className={`px-2.5 py-1 rounded-pill text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md backdrop-blur-sm ${
                          tour.month === 'NOVEMBER'
                            ? 'bg-amber-600/90 border border-amber-400/40'
                            : 'bg-blue-600/90 border border-blue-400/40'
                        }`}
                      >
                        {tour.month}
                      </span>
                    </div>

                    {/* Bottom of Image: Tag & Duration */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] font-bold text-accent uppercase tracking-wider block drop-shadow-sm">
                          {tour.tag}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl font-black tracking-tight text-white drop-shadow-md">
                          {tour.destination}
                        </h3>
                      </div>

                      {/* Duration Tag */}
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/20 flex items-center space-x-1 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>{tour.duration}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                    {/* Key Highlights */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{tour.seatsStatus || 'Confirmed Batch'}</span>
                        </span>

                        {tour.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent-soft dark:bg-orange-950/60 text-accent border border-accent/20">
                            {tour.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-text-muted dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {tour.highlight}
                      </p>
                    </div>

                    {/* Price & Divider */}
                    <div className="pt-3 border-t border-slate-100 dark:border-blue-900/40">
                      <div className="flex items-baseline justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold text-text-muted dark:text-slate-400 tracking-wider">
                            Special Fixed Rate
                          </span>
                          <div className="flex items-baseline space-x-1.5">
                            <span className="text-xl sm:text-2xl font-black text-primary dark:text-blue-400 tracking-tight">
                              {tour.price}
                            </span>
                            <span className="text-xs font-bold text-text-muted dark:text-slate-400">
                              {tour.priceSuffix}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 block">
                            #{String(index + 1).padStart(2, '0')} of {filteredTours.length}
                          </span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold block">
                            Per Person
                          </span>
                        </div>
                      </div>

                      {/* BOOK NOW VIA WHATSAPP ACTION BUTTON */}
                      <div className="mt-4 pt-1 flex flex-col gap-2">
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            if (isDragging) e.preventDefault();
                          }}
                          className="w-full py-3 px-4 rounded-btn bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 text-center group/btn"
                        >
                          {/* WhatsApp icon */}
                          <svg
                            className="w-4 h-4 fill-current shrink-0 transition-transform group-hover/btn:rotate-12"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.21C8.88 7.21 8.63 7.27 8.42 7.5C8.21 7.72 7.62 8.28 7.62 9.42C7.62 10.55 8.45 11.65 8.56 11.8C8.68 11.96 10.2 14.3 12.54 15.31C14.49 16.15 14.88 15.99 15.3 15.95C15.72 15.91 16.67 15.39 16.86 14.85C17.06 14.31 17.06 13.85 17 13.76C16.94 13.66 16.78 13.61 16.54 13.49C16.29 13.37 15.09 12.78 14.86 12.7C14.64 12.62 14.48 12.58 14.32 12.82C14.16 13.06 13.69 13.61 13.55 13.77C13.41 13.93 13.27 13.95 13.03 13.83C12.79 13.71 12.01 13.45 11.08 12.63C10.36 11.98 9.87 11.18 9.73 10.94C9.59 10.7 9.71 10.57 9.84 10.45C9.95 10.34 10.08 10.16 10.21 10.02C10.33 9.88 10.37 9.77 10.45 9.61C10.53 9.45 10.49 9.31 10.43 9.19C10.37 9.07 9.89 7.89 9.69 7.41C9.5 6.94 9.3 7 9.15 7C9.02 6.99 8.88 7.21 9.04 7.21Z" />
                          </svg>
                          <span>Book Now on WhatsApp</span>
                        </a>

                        {/* Optional Quick Link to Site Booking Form */}
                        {onSelectDestination && (
                          <button
                            type="button"
                            onClick={() => onSelectDestination(tour.destination, 'Domestic')}
                            className="text-[11px] font-semibold text-text-muted hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors py-1 text-center"
                          >
                            Or enquire via web form &rarr;
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Swipe Progress Bar & Count Status */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-72 bg-slate-200 dark:bg-[#111D3D] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-200"
              style={{ width: `${Math.max(15, scrollProgress)}%` }}
            />
          </div>

          <div className="text-xs text-text-muted dark:text-slate-400 flex items-center gap-2">
            <span className="font-semibold text-accent">* PP = Per Person</span>
            <span>&bull;</span>
            <span>Fixed Group Departures</span>
            <span>&bull;</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Confirmed Batches</span>
          </div>
        </div>

        {/* BOTTOM POSTER-STYLE HIGHLIGHT BANNER */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#0F294D] via-[#102B54] to-[#0A1B33] text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/40 relative overflow-hidden">
          {/* Subtle background world map / plane watermark */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <Send className="w-72 h-72 text-white" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-accent" />
                <span>{siteContent.upcomingTours.sloganBottom}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Plan Your Escape with Easy Trip
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Ready to book your holiday for Shimla, Goa, Kerala, Kashmir, Silk Route, Andaman or Rajasthan?
                Connect directly with our branch desks or message us on WhatsApp for fast seat confirmation!
              </p>

              {/* Office Location Badges */}
              <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start text-xs text-slate-300">
                <span className="px-3 py-1 rounded-pill bg-white/10 border border-white/15 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent" />
                  Newton Sector Market, DGP-05
                </span>
                <span className="px-3 py-1 rounded-pill bg-white/10 border border-white/15 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent" />
                  Cinema Hall, City Centre, DGP-16
                </span>
                <span className="px-3 py-1 rounded-pill bg-white/10 border border-white/15 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-accent" />
                  Opp. Asansol Bus Stand, ADDA Block D
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Action Banner CTA */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={generalWhatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-btn bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm uppercase tracking-wider shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2.5 group"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.04 7.21C8.88 7.21 8.63 7.27 8.42 7.5C8.21 7.72 7.62 8.28 7.62 9.42C7.62 10.55 8.45 11.65 8.56 11.8C8.68 11.96 10.2 14.3 12.54 15.31C14.49 16.15 14.88 15.99 15.3 15.95C15.72 15.91 16.67 15.39 16.86 14.85C17.06 14.31 17.06 13.85 17 13.76C16.94 13.66 16.78 13.61 16.54 13.49C16.29 13.37 15.09 12.78 14.86 12.7C14.64 12.62 14.48 12.58 14.32 12.82C14.16 13.06 13.69 13.61 13.55 13.77C13.41 13.93 13.27 13.95 13.03 13.83C12.79 13.71 12.01 13.45 11.08 12.63C10.36 11.98 9.87 11.18 9.73 10.94C9.59 10.7 9.71 10.57 9.84 10.45C9.95 10.34 10.08 10.16 10.21 10.02C10.33 9.88 10.37 9.77 10.45 9.61C10.53 9.45 10.49 9.31 10.43 9.19C10.37 9.07 9.89 7.89 9.69 7.41C9.5 6.94 9.3 7 9.15 7C9.02 6.99 8.88 7.21 9.04 7.21Z" />
                </svg>
                <span>Book on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:${siteContent.agency.phones[0].tel}`}
                className="w-full sm:w-auto px-6 py-4 rounded-btn bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider border border-white/20 hover:border-white/40 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>Call Us Now</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
