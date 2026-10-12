import { Phone, Mail, ArrowUp, MessageSquare } from 'lucide-react';
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

            {/* Social Media Handles */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white font-bold block mb-2.5">
                Follow Us On Social Media
              </span>
              <div className="flex items-center space-x-2.5">
                <a
                  href={siteContent.agency.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Easy Trip on Facebook"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10 group"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                <a
                  href={siteContent.agency.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Easy Trip on Instagram"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10 group"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>

                <a
                  href={siteContent.agency.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to Easy Trip on YouTube"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-white/10 group"
                  title="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418zM15.194 12 10 9.1v5.8l5.194-2.9z" />
                  </svg>
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

        {/* Bottom Copyright, Social Links & Back to Top */}
        <div className="pt-6 border-t border-[#1C355E] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9AAEC9]">
          <p>{siteContent.footer.copyright}</p>

          {/* Social Links Strip */}
          <div className="flex items-center space-x-4">
            <span className="text-[11px] uppercase tracking-wider text-white/60 font-semibold hidden sm:inline">
              Follow Us:
            </span>
            <a
              href={siteContent.agency.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1877F2] transition-colors flex items-center space-x-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              <span>Facebook</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href={siteContent.agency.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E4405F] transition-colors flex items-center space-x-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
              <span>Instagram</span>
            </a>
            <span className="text-white/20">&bull;</span>
            <a
              href={siteContent.agency.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF0000] transition-colors flex items-center space-x-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.812.418zM15.194 12 10 9.1v5.8l5.194-2.9z" />
              </svg>
              <span>YouTube</span>
            </a>
          </div>

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
