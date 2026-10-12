import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, ArrowRight, Sun, Moon, MessageSquare } from 'lucide-react';
import { siteContent } from '../data/content';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export function MenuOverlay({
  isOpen,
  onClose,
  onNavigate,
  isDarkMode = false,
  onToggleDarkMode,
}: MenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Esc key and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(href);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          initial={{ opacity: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
          animate={{ opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          exit={{ opacity: 0, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-white/98 dark:bg-[#080E1E]/98 backdrop-blur-2xl text-text dark:text-slate-100 flex flex-col justify-between p-6 md:p-12 lg:p-16 overflow-y-auto"
        >
          {/* Header row inside overlay */}
          <div className="flex items-center justify-between border-b border-border dark:border-[#1D3063] pb-6">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Easy Trip Logo"
                className="w-9 h-9 object-contain drop-shadow-sm shrink-0"
              />
              <span className="font-heading text-xl tracking-tight font-extrabold text-text dark:text-white">
                EASY TRIP
              </span>
              <span className="text-xs uppercase tracking-wider text-primary bg-primary-soft dark:bg-blue-900/40 px-2.5 py-0.5 rounded-full font-bold">
                Menu
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Theme toggle in mobile overlay */}
              {onToggleDarkMode && (
                <button
                  onClick={onToggleDarkMode}
                  aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  className="p-2.5 rounded-btn border border-border dark:border-[#1D3063] bg-white dark:bg-[#111D3D] text-text dark:text-amber-400 hover:border-primary/50 transition-all shadow-soft-sm flex items-center justify-center"
                  title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                >
                  {isDarkMode ? (
                    <Sun className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-700" />
                  )}
                </button>
              )}

              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close menu"
                className="flex items-center space-x-2 text-text dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors px-4 py-2 rounded-btn border border-border dark:border-[#1D3063] hover:border-primary bg-white dark:bg-[#111D3D] shadow-soft-sm"
              >
                <span className="text-xs uppercase tracking-wider font-bold">Close</span>
                <X className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-auto py-10">
            {/* Navigation Links Column */}
            <nav className="lg:col-span-7 flex flex-col space-y-4 md:space-y-6">
              <span className="text-xs uppercase tracking-wider text-text-muted font-bold mb-2">
                Navigation
              </span>
              {siteContent.nav.links.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.45 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex items-baseline text-left w-full hover:translate-x-3 transition-transform duration-300"
                  >
                    <span className="text-xs md:text-sm font-mono text-primary mr-4 tracking-tight font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-heading text-3xl md:text-5xl lg:text-6xl text-text group-hover:text-primary transition-colors font-extrabold">
                      {link.label}
                    </span>
                    <ArrowRight className="w-6 h-6 ml-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Agency Details Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-border dark:border-[#1D3063] pt-8 lg:pt-0 lg:pl-12 space-y-8"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-text-muted dark:text-slate-400 font-bold block mb-4">
                  Quick Enquiries &amp; Support
                </span>
                <div className="space-y-3">
                  {siteContent.agency.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.tel || `+91${phone.raw}`}`}
                      className="flex items-center space-x-3 text-lg md:text-xl text-text dark:text-slate-100 hover:text-primary dark:hover:text-blue-400 transition-colors font-bold"
                    >
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <span>{phone.formatted}</span>
                    </a>
                  ))}
                  
                  {/* Direct WhatsApp Action in Menu */}
                  <a
                    href={`https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(
                      'Hello Easy Trip Tour & Travels! I would like to enquire about holiday packages.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-sm md:text-base text-[#25D366] hover:text-[#20bd5a] transition-colors font-bold pt-1"
                  >
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp: {siteContent.agency.phones[0].formatted}</span>
                  </a>

                  <a
                    href={`mailto:${siteContent.agency.email}`}
                    className="flex items-center space-x-3 text-sm md:text-base text-text-muted dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors pt-1 font-medium"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>{siteContent.agency.email}</span>
                  </a>
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-text-muted dark:text-slate-400 font-bold block mb-3">
                  Branch Locations
                </span>
                <div className="space-y-3">
                  {siteContent.contact.offices.map((office) => (
                    <div key={office.id} className="text-sm p-3 rounded-card bg-bg-alt dark:bg-[#111D3D] border border-border dark:border-[#1D3063] border-l-4 border-l-primary">
                      <p className="font-bold text-text dark:text-white">{office.title}</p>
                      <p className="text-text-muted dark:text-slate-400 text-xs mt-0.5">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleLinkClick("#booking-section")}
                  className="w-full py-4 px-6 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all btn-accent-glow"
                >
                  {siteContent.nav.cta}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Footer row inside overlay */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-border dark:border-[#1D3063] text-xs text-text-muted dark:text-slate-400 font-medium">
            <p>{siteContent.agency.tagline}</p>
            <p className="mt-2 sm:mt-0">{siteContent.footer.copyright}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
