import { Compass, Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';
import { siteContent } from '../data/content';

interface FooterProps {
  onNavigate: (href: string) => void;
  onSelectDestination: (dest: string) => void;
}

export function Footer({ onNavigate, onSelectDestination }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B1F3F] dark:bg-[#050B16] text-white pt-20 pb-12 border-t border-[#1C355E] dark:border-[#10203D] overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#1C355E] dark:border-[#10203D]">
          {/* Brand & About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Easy Trip Tour & Travels Logo"
                className="w-12 h-12 object-contain drop-shadow-md shrink-0"
              />
              <div>
                <span className="font-heading text-lg font-extrabold text-white block">
                  {siteContent.agency.name}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-accent block -mt-1 font-bold">
                  {siteContent.footer.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#9AAEC9] leading-relaxed pt-2 font-normal">
              {siteContent.footer.about}
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-[#9AAEC9]">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                <a href={`mailto:${siteContent.agency.email}`} className="hover:text-accent transition-colors font-medium">
                  {siteContent.agency.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {siteContent.agency.phones.map((phone, i) => (
                    <span key={phone.raw}>
                      <a
                        href={`tel:${phone.tel || `+91${phone.raw}`}`}
                        className="hover:text-accent font-medium transition-colors"
                        title={`Call ${phone.formatted}`}
                      >
                        {phone.formatted}
                      </a>
                      {i < siteContent.agency.phones.length - 1 && <span className="text-white/30 ml-2">&bull;</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(
                    'Hello Easy Trip Tour & Travels! I would like to enquire about holiday packages.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-[#20bd5a] font-medium transition-colors"
                >
                  WhatsApp: 92333 00333
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteContent.footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.href)}
                    className="text-[#9AAEC9] hover:text-accent transition-colors font-medium focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-white block mb-4">
              Popular Destinations
            </span>
            <div className="flex flex-wrap gap-2">
              {siteContent.footer.popularDestinations.map((dest) => (
                <button
                  key={dest}
                  onClick={() => onSelectDestination(dest)}
                  className="px-3 py-1.5 rounded-pill bg-white/10 hover:bg-accent text-[#EAF2FF] hover:text-white border border-white/15 text-xs font-medium transition-colors focus:outline-none"
                >
                  {dest}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#1C355E]">
              <span className="text-[11px] uppercase tracking-wider text-[#9AAEC9] font-bold block mb-1">
                Local Operating Centres
              </span>
              <p className="text-xs text-[#9AAEC9]/80 font-normal">
                Newton Sector Market (B-Zone, Durgapur) &bull; City Centre Cinema Hall (Durgapur) &bull; Opposite Bus Stand (Asansol)
              </p>
            </div>
          </div>
        </div>

        {/* Massive Edge-to-Edge Wordmark with Blue-to-White gradient */}
        <div className="py-12 select-none overflow-hidden text-center">
          <h2 className="font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-primary/30 to-white/10 text-3xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase whitespace-nowrap">
            {siteContent.footer.brand}
          </h2>
          <p className="font-heading text-accent font-bold text-sm sm:text-lg tracking-wider uppercase mt-2">
            &ldquo;{siteContent.footer.tagline}&rdquo;
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-[#1C355E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9AAEC9]">
          <p>{siteContent.footer.copyright}</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center space-x-2 text-[#9AAEC9] hover:text-accent transition-colors focus:outline-none font-bold"
          >
            <span className="uppercase tracking-wider text-[10px]">Back to Top</span>
            <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
