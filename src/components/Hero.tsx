import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { siteContent } from '../data/content';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface HeroProps {
  onPlanTrip: () => void;
  onExplorePackages: () => void;
}

export function Hero({ onPlanTrip, onExplorePackages }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Slow video playback and pause when out of view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.85;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-slate-950 pt-28 pb-16 lg:pb-24 select-none"
    >
      {/* Background Video / Image with Parallax & Scrim */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={siteContent.hero.posterImage}
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 opacity-90 brightness-[0.82] contrast-[1.08]"
          >
            <source src={siteContent.hero.videoUrl} type="video/mp4" />
            <img
              src={siteContent.hero.posterImage}
              alt="Himalayan mountain landscape and ocean sunset"
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={siteContent.hero.posterImage}
            alt="Scenic mountain and ocean backdrop"
            className="w-full h-full object-cover opacity-90 brightness-[0.82] contrast-[1.08]"
          />
        )}

        {/* Natural Cinematic Scrims - Clean, no blue shade wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/90 backdrop-blur-md border border-white/60 dark:border-slate-700 shadow-md mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-primary font-bold">
              {siteContent.hero.eyebrow}
            </span>
            <span className="text-xs text-accent font-bold">&bull;</span>
            <span className="text-xs uppercase tracking-wider text-text-muted dark:text-slate-300 font-semibold hidden sm:inline">
              Durgapur &bull; Asansol
            </span>
          </motion.div>

          {/* Masked Slide-up Headline */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="font-heading hero-title font-extrabold text-white tracking-tight drop-shadow-md"
            >
              Discover India & <br className="hidden sm:inline" />
              <span className="text-white underline decoration-accent decoration-4 underline-offset-8">
                The World
              </span>{" "}
              with Easy Trip Tour &amp; Travels
            </motion.h1>
          </div>

          {/* Body Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="space-y-4 max-w-2xl text-white/95 text-base sm:text-lg lg:text-xl font-medium leading-relaxed drop-shadow-sm"
          >
            <p>{siteContent.hero.body}</p>
            <p className="text-white/90 text-sm sm:text-base border-l-4 border-accent pl-3.5 py-1 bg-black/20 backdrop-blur-xs rounded-r-lg">
              {siteContent.hero.body2}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-5"
          >
            {/* Primary Filled Orange CTA */}
            <button
              onClick={onPlanTrip}
              className="px-8 py-4 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 text-center btn-accent-glow focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {siteContent.hero.cta1}
            </button>

            {/* Secondary White Filled/Glass CTA */}
            <button
              onClick={onExplorePackages}
              className="px-8 py-4 rounded-btn bg-white hover:bg-slate-100 text-[#0F294D] font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {siteContent.hero.cta2}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom Bar: Stats + Tagline + Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 pt-6 border-t border-white/20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            <span className="font-heading text-base sm:text-lg text-white font-bold tracking-tight drop-shadow-sm">
              {siteContent.hero.tagline}
            </span>
          </div>

          {/* Agency Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full md:w-auto">
            {siteContent.hero.stats.map((stat, i) => (
              <div key={i} className="flex flex-col p-2.5 rounded-card bg-white/10 dark:bg-slate-900/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-sm">
                <span className="font-heading text-lg sm:text-xl font-extrabold text-white">
                  {stat.value}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">
                  {stat.label}
                </span>
                <span className="text-[10px] text-white/70">{stat.desc}</span>
              </div>
            ))}
          </div>

          {/* Scroll Down Prompt */}
          <button
            onClick={onExplorePackages}
            aria-label="Scroll down to explore"
            className="hidden lg:flex items-center space-x-2 text-xs uppercase tracking-wider text-white/80 hover:text-white transition-colors font-bold focus:outline-none"
          >
            <span>Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
