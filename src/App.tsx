import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingForm } from './components/BookingForm';
import { About } from './components/About';
import { UpcomingTours } from './components/UpcomingTours';
import { DomesticTours } from './components/DomesticTours';
import { InternationalTours } from './components/InternationalTours';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MenuOverlay } from './components/MenuOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { initSmoothScroll, smoothScrollTo } from './utils/scroll';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useDarkMode } from './hooks/useDarkMode';
import { MessageSquare } from 'lucide-react';
import { siteContent } from './data/content';

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [selectedTourType, setSelectedTourType] = useState<string>('Domestic');
  const prefersReducedMotion = useReducedMotion();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Initialize Lenis smooth scroll synced with GSAP
  useEffect(() => {
    const lenis = initSmoothScroll(prefersReducedMotion);
    return () => {
      lenis?.destroy();
    };
  }, [prefersReducedMotion]);

  // Navigation scroll helper
  const handleNavigate = (href: string) => {
    smoothScrollTo(href);
  };

  // Pre-fill destination from card CTAs & scroll to booking form
  const handleSelectDestination = (destinationName: string, tourType: string = 'Domestic') => {
    setSelectedDestination(destinationName);
    setSelectedTourType(tourType);
    smoothScrollTo('#booking-section', -40);
  };

  const handlePlanInternational = (destinationName?: string) => {
    setSelectedTourType('International');
    if (destinationName) {
      setSelectedDestination(destinationName);
    }
    smoothScrollTo('#booking-section', -40);
  };

  const handlePlanTrip = () => {
    smoothScrollTo('#booking-section', -40);
  };

  const handleExplorePackages = () => {
    smoothScrollTo('#upcoming-tours', -40);
  };

  return (
    <div className="relative min-h-screen bg-bg dark:bg-[#080E1E] text-text dark:text-slate-100 selection:bg-primary-soft selection:text-primary-dark transition-colors duration-300 overflow-x-hidden">

      {/* Desktop custom cursor */}
      <CustomCursor />

      {/* Preloader intro */}
      <Preloader onComplete={() => {}} />

      {/* Top Navbar */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Full-screen Menu Overlay */}
      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onPlanTrip={handlePlanTrip}
          onExplorePackages={handleExplorePackages}
        />

        {/* 2. Floating Booking Form Card */}
        <BookingForm
          prefilledDestination={selectedDestination}
          prefilledTourType={selectedTourType}
        />

        {/* 2.5. Upcoming Tours 2026 Calendar Section (Smooth Swipe Window) */}
        <UpcomingTours onSelectDestination={handleSelectDestination} />

        {/* 3. About Us Section */}
        <About onPlanTrip={handlePlanTrip} />

        {/* 4. Domestic Tours Section */}
        <DomesticTours
          onSelectDestination={handleSelectDestination}
          onGeneralEnquiry={handlePlanTrip}
        />

        {/* 5. International Tours Section */}
        <InternationalTours
          onPlanInternational={handlePlanInternational}
        />

        {/* 6. Reviews & Testimonials Section */}
        <Reviews onPlanTrip={handlePlanTrip} />

        {/* 7. FAQ Section */}
        <FAQ />

        {/* 8. Contact Us Section */}
        <Contact onGetQuote={handlePlanTrip} />
      </main>

      {/* 9. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectDestination={(dest) => handleSelectDestination(dest, 'Domestic')}
      />

      {/* Floating WhatsApp Quick Action Button for Desktop */}
      <a
        href={`https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(
          'Hello Easy Trip Tour & Travels! I would like to enquire about holiday tour packages.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Easy Trip on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center space-x-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        <MessageSquare className="w-4 h-4 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider font-sans">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}

export default App;
