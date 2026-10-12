import { useState, useEffect, useRef } from 'react';
import { Menu, Compass, ArrowUpRight, Sun, Moon, Phone } from 'lucide-react';
import { siteContent } from '../data/content';

interface NavbarProps {
  onOpenMenu: () => void;
  onNavigate: (href: string) => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function Navbar({ onOpenMenu, onNavigate, isDarkMode = false, onToggleDarkMode }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  // Magnetic button effect ref
  const magneticBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past top
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 10) {
          setIsVisible(false); // scrolling down
        } else if (lastScrollY.current - currentScrollY > 10) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic button hover interaction on desktop
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = magneticBtnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    const btn = magneticBtnRef.current;
    if (!btn) return;
    btn.style.transform = 'translate(0px, 0px)';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled
          ? 'py-3.5 bg-white/95 dark:bg-[#080E1E]/95 backdrop-blur-md border-b border-border dark:border-[#1D3063] shadow-soft'
          : 'py-4.5 bg-white/90 dark:bg-[#080E1E]/90 backdrop-blur-md border-b border-border/80 dark:border-[#1D3063]/80 shadow-soft-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={() => onNavigate('#hero')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          aria-label="Easy Trip Tour and Travels Home"
        >
          <img
            src="/logo.png"
            alt="Easy Trip Tour and Travels Logo"
            className="w-11 h-11 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <div>
            <span className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-text dark:text-white block group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
              EASY TRIP
            </span>
            <span className="text-[10px] uppercase tracking-wider text-text-muted dark:text-slate-400 block -mt-1 font-bold">
              Tour & Travels
            </span>
          </div>
        </button>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          {siteContent.nav.links.map((link) => (
            <button
              key={link.label}
              onClick={() => onNavigate(link.href)}
              className="text-text dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors py-1 relative group focus:outline-none"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right CTA, Dark Mode Toggle & Menu Trigger */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Quick Call Button on Mobile */}
          <a
            href={`tel:${siteContent.agency.phones[0].tel || '+919233300333'}`}
            aria-label={`Call Easy Trip ${siteContent.agency.phones[0].formatted}`}
            className="sm:hidden p-2.5 rounded-btn bg-primary-soft dark:bg-blue-950/60 text-primary dark:text-blue-400 hover:bg-primary hover:text-white transition-colors border border-primary/20 dark:border-blue-800/40 shadow-soft-sm flex items-center justify-center"
            title={`Call ${siteContent.agency.phones[0].formatted}`}
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Dark / Light Mode Toggle Button */}
          {onToggleDarkMode && (
            <button
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-btn border border-border dark:border-[#1D3063] bg-white dark:bg-[#111D3D] text-text dark:text-amber-400 hover:border-primary/50 transition-all duration-300 shadow-soft-sm focus:outline-none focus:ring-2 focus:ring-primary flex items-center justify-center"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 hover:text-primary transition-colors" />
              )}
            </button>
          )}

          {/* Filled Orange "Plan Your Trip" CTA button */}
          <button
            ref={magneticBtnRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onNavigate('#booking-section')}
            className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 btn-accent-glow focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <span>{siteContent.nav.cta}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Full-screen Menu Trigger */}
          <button
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="flex items-center space-x-2 px-3.5 sm:px-4 py-2.5 rounded-btn border border-border dark:border-[#1D3063] hover:border-primary/50 bg-white dark:bg-[#111D3D] text-text dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-all duration-300 shadow-soft-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <span className="text-xs uppercase tracking-wider font-bold hidden md:inline">
              Menu
            </span>
            <Menu className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </header>
  );
}
