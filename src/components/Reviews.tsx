import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Heart, Video, Newspaper, Award, MessageSquare, X, Star, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteContent, type ReviewCard } from '../data/content';

interface ReviewsProps {
  onPlanTrip: () => void;
}

export function Reviews({ onPlanTrip }: ReviewsProps) {
  const [selectedCard, setSelectedCard] = useState<ReviewCard | null>(null);
  const [isMoreReviewsOpen, setIsMoreReviewsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<ReviewCard | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCard(null);
        setSelectedVideo(null);
        setIsMoreReviewsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getIconForType = (type: ReviewCard['type']) => {
    switch (type) {
      case 'video':
        return Video;
      case 'article':
        return Newspaper;
      case 'recognition':
        return Award;
      default:
        return MessageSquare;
    }
  };

  const handleCardClick = (card: ReviewCard) => {
    if (card.type === 'video') {
      setSelectedVideo(card);
    } else {
      setSelectedCard(card);
    }
  };

  const handleWatchReviewsCta = () => {
    const videoCard = siteContent.reviews.cards.find((c) => c.type === 'video') || siteContent.reviews.cards[1];
    setSelectedVideo(videoCard);
  };

  return (
    <section id="reviews" className="relative py-20 lg:py-32 bg-bg-alt dark:bg-[#091124] text-text dark:text-slate-100 overflow-hidden border-t border-b border-border dark:border-[#1D3063]/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold mb-3">
            <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
            <span>{siteContent.reviews.eyebrow}</span>
          </div>
          <h2 className="font-heading section-title font-extrabold text-text dark:text-white tracking-tight">
            {siteContent.reviews.title}
          </h2>
          <p className="mt-4 text-text-muted dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {siteContent.reviews.body}
          </p>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.reviews.cards.map((card) => {
            const Icon = getIconForType(card.type);
            const isVideo = card.type === 'video';

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card)}
                className="group relative rounded-card overflow-hidden bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] hover:border-primary/50 dark:hover:border-blue-500/60 transition-all duration-300 flex flex-col justify-between shadow-card hover:shadow-card-hover cursor-pointer"
              >
                {/* Media Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt dark:bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Play button overlay if video */}
                  {isVideo ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(card);
                      }}
                      aria-label="Play video testimonial"
                      className="absolute inset-0 flex items-center justify-center group/play focus:outline-none"
                    >
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-glow-primary group-hover/play:scale-110 group-hover/play:bg-primary-dark transition-all duration-300">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </button>
                  ) : (
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-border dark:border-slate-700 flex items-center justify-center text-primary dark:text-blue-400 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  <span className="absolute bottom-3 left-4 text-[10px] uppercase font-bold tracking-wider text-primary dark:text-blue-300 px-3 py-1 rounded-pill bg-white/95 dark:bg-[#080E1E]/95 border border-white dark:border-[#1D3063] shadow-soft-sm">
                    {card.source}
                  </span>
                </div>

                {/* Information content */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white dark:bg-[#111D3D] transition-colors">
                  <div>
                    {/* 5-Star Rating */}
                    <div className="flex items-center space-x-1 text-amber-400 mb-2.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                      <span className="text-xs font-bold text-text dark:text-white ml-1.5">5.0</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-text dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-text-muted dark:text-slate-300 mt-2 italic leading-relaxed font-normal">
                      {card.placeholderNote}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border dark:border-[#1D3063]/70 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(card);
                      }}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 group-hover:text-primary-dark dark:group-hover:text-blue-300 transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[10px] text-[#25D366] font-mono font-bold flex items-center space-x-1">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span>Verified</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Watch Reviews Button -> Opens Video Testimonial Reel */}
          <button
            type="button"
            onClick={handleWatchReviewsCta}
            className="w-full sm:w-auto px-8 py-4 rounded-btn bg-white dark:bg-[#111D3D] hover:bg-primary-soft dark:hover:bg-[#15244C] border border-border dark:border-[#1D3063] hover:border-primary/40 dark:hover:border-primary/60 text-text dark:text-white hover:text-primary dark:hover:text-blue-300 font-bold text-xs uppercase tracking-wider shadow-soft-sm transition-all duration-300 flex items-center justify-center space-x-2 focus:outline-none"
          >
            <Play className="w-4 h-4 fill-current text-primary dark:text-blue-400" />
            <span>{siteContent.reviews.cta1}</span>
          </button>

          {/* Read More Reviews Button -> Opens Full Customer Reviews Modal */}
          <button
            type="button"
            onClick={() => setIsMoreReviewsOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-btn bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 btn-primary-glow focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span>{siteContent.reviews.cta2}</span>
          </button>
        </div>
      </div>

      {/* 1. Dedicated Review / Article / Diary Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white dark:bg-[#111D3D] rounded-card overflow-hidden border border-border dark:border-[#1D3063] shadow-floating max-h-[90vh] flex flex-col my-auto"
            >
              {/* Header with image banner */}
              <div className="relative h-48 sm:h-56 bg-slate-900 shrink-0">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

                <button
                  onClick={() => setSelectedCard(null)}
                  aria-label="Close review details"
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary text-white">
                      {selectedCard.source}
                    </span>
                    <span className="text-[10px] text-[#25D366] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full border border-green-500/30 flex items-center space-x-1 font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified Traveller Story</span>
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {selectedCard.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border dark:border-[#1D3063]">
                  <div>
                    <span className="text-sm font-bold text-text dark:text-white block">
                      {selectedCard.author || 'Easy Trip Customer'}
                    </span>
                    <span className="text-xs text-text-muted dark:text-slate-400 flex items-center space-x-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-primary" />
                      <span>{selectedCard.location || 'Durgapur / Asansol'}</span>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-text dark:text-white">5.0 / 5.0</span>
                  </div>
                </div>

                {/* Highlights */}
                {selectedCard.highlights && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 block mb-2">
                      Trip Highlights &amp; Inclusions
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCard.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="px-3 py-1 rounded-pill bg-primary-soft dark:bg-blue-950/50 text-primary-dark dark:text-blue-200 text-xs font-medium border border-primary/20 dark:border-blue-800/40"
                        >
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Full story */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted dark:text-slate-400 block mb-2">
                    Traveller Review &amp; Experience
                  </span>
                  <p className="text-sm sm:text-base text-text dark:text-slate-200 leading-relaxed font-normal bg-bg-alt dark:bg-[#080E1E] p-4 sm:p-5 rounded-card border border-border dark:border-[#1D3063]/60">
                    &ldquo;{selectedCard.fullStory || selectedCard.placeholderNote}&rdquo;
                  </p>
                </div>

                {/* Action button inside modal */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-text-muted dark:text-slate-400">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{selectedCard.date || 'Verified Booking'}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCard(null);
                      onPlanTrip();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 btn-accent-glow"
                  >
                    <span>Plan Similar Holiday</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Customer Video Testimonial Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white dark:bg-[#111D3D] rounded-card p-6 sm:p-8 border border-border dark:border-[#1D3063] shadow-floating text-center my-auto"
            >
              <button
                onClick={() => setSelectedVideo(null)}
                aria-label="Close video testimonial"
                className="absolute top-4 right-4 p-2 rounded-full border border-border dark:border-[#1D3063] text-text-muted dark:text-slate-300 hover:text-text dark:hover:text-white hover:bg-bg-alt dark:hover:bg-[#15244C] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-14 h-14 rounded-full bg-primary-soft dark:bg-blue-950/60 border border-primary/20 dark:border-blue-800/40 flex items-center justify-center mx-auto text-primary dark:text-blue-400 mb-4 shadow-sm">
                <Video className="w-7 h-7" />
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-text dark:text-white mb-1">
                {selectedVideo.title}
              </h3>
              <p className="text-xs text-primary dark:text-blue-400 font-bold uppercase tracking-wider mb-4">
                {selectedVideo.author || 'Dr. Alok Ray & Friends'} &bull; {selectedVideo.location || 'Asansol & Durgapur'}
              </p>

              {/* Realistic video reel simulation */}
              <div className="relative aspect-video bg-black rounded-card overflow-hidden border border-border dark:border-[#1D3063] shadow-md group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src={selectedVideo.videoUrl || "https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-on-the-beach-41727-large.mp4"}
                    type="video/mp4"
                  />
                  <img
                    src={selectedVideo.image}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Verified Video Reel</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left text-white pointer-events-none">
                  <div className="flex text-amber-400 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm font-medium drop-shadow-md line-clamp-2">
                    &ldquo;{selectedVideo.fullStory}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-btn border border-border dark:border-[#1D3063] text-text dark:text-white text-xs font-bold uppercase tracking-wider hover:bg-bg-alt dark:hover:bg-slate-800 transition-colors"
                >
                  Close Player
                </button>
                <button
                  onClick={() => {
                    setSelectedVideo(null);
                    onPlanTrip();
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors btn-accent-glow"
                >
                  Enquire About This Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. "Read More Reviews" Full Drawer / Modal */}
      <AnimatePresence>
        {isMoreReviewsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setIsMoreReviewsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-white dark:bg-[#111D3D] rounded-card p-6 sm:p-8 border border-border dark:border-[#1D3063] shadow-floating max-h-[90vh] flex flex-col my-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-border dark:border-[#1D3063] shrink-0">
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold block mb-1">
                    Customer Testimonials
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-text dark:text-white">
                    More Verified Reviews from Durgapur &amp; Asansol
                  </h3>
                </div>

                <button
                  onClick={() => setIsMoreReviewsOpen(false)}
                  aria-label="Close all reviews"
                  className="p-2 rounded-full border border-border dark:border-[#1D3063] text-text-muted dark:text-slate-300 hover:text-text dark:hover:text-white hover:bg-bg-alt dark:hover:bg-[#15244C] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reviews List */}
              <div className="py-6 overflow-y-auto space-y-4">
                {siteContent.reviews.additionalReviews?.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-card bg-bg-alt dark:bg-[#080E1E] border border-border dark:border-[#1D3063] hover:border-primary/40 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div>
                        <h4 className="font-heading text-base font-bold text-text dark:text-white">
                          {item.name}
                        </h4>
                        <span className="text-xs text-text-muted dark:text-slate-400 flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-primary" />
                          <span>{item.location} &bull; Tour: <strong>{item.tour}</strong></span>
                        </span>
                      </div>

                      <div className="flex items-center space-x-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-text-muted dark:text-slate-300 leading-relaxed font-normal">
                      &ldquo;{item.comment}&rdquo;
                    </p>

                    <div className="mt-3 pt-2 border-t border-border/70 dark:border-[#1D3063]/50 flex items-center justify-between text-[11px] text-text-muted dark:text-slate-400 font-mono">
                      <span>{item.date}</span>
                      <span className="text-[#25D366] font-bold flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Traveler</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-border dark:border-[#1D3063] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                <a
                  href={`https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Easy Trip! I want to share my travel review / feedback.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#25D366] hover:text-[#20bd5a] flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Share Your Experience on WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setIsMoreReviewsOpen(false);
                    onPlanTrip();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all btn-accent-glow"
                >
                  Plan Your Holiday Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
