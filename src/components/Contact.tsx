import { Phone, MessageSquare, Mail, Globe, MapPin, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content';

interface ContactProps {
  onGetQuote: () => void;
}

export function Contact({ onGetQuote }: ContactProps) {
  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-bg-alt dark:bg-[#091124] text-text dark:text-slate-100 border-t border-border dark:border-[#1D3063]/60 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold block mb-4">
            {siteContent.contact.title}
          </span>
          <h2 className="font-heading section-title font-extrabold text-text dark:text-white tracking-tight">
            {siteContent.contact.subtitle}
          </h2>
          <p className="mt-5 text-text-muted dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            {siteContent.contact.body}
          </p>

          {/* Direct Action CTAs Bar with the 3 exact colours */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Call Primary (Blue Filled) */}
            <a
              href={`tel:${siteContent.agency.phones[0].tel || `+91${siteContent.agency.phones[0].raw}`}`}
              className="px-8 py-4 rounded-btn bg-[#287DFA] hover:bg-[#0F4BD2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center space-x-2.5 btn-primary-glow focus:outline-none focus:ring-2 focus:ring-[#287DFA]"
            >
              <Phone className="w-4 h-4" />
              <span>{siteContent.contact.ctas.call} ({siteContent.agency.phones[0].formatted})</span>
            </a>

            {/* WhatsApp (Green Filled #25D366) */}
            <a
              href={`https://wa.me/${siteContent.agency.whatsappNumber}?text=${encodeURIComponent(
                'Hello Easy Trip Tour & Travels! I would like to enquire about holiday tour packages.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-btn bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{siteContent.contact.ctas.whatsapp}</span>
            </a>

            {/* Quote Button (Orange Filled) */}
            <button
              onClick={onGetQuote}
              className="px-8 py-4 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all btn-accent-glow focus:outline-none focus:ring-2 focus:ring-[#FF7A1A]"
            >
              <span>{siteContent.contact.ctas.quote}</span>
            </button>
          </div>
        </div>

        {/* Contact Info & Office Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          {/* Left Column: Direct Phone numbers, Email & Web */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-card bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] shadow-card transition-colors">
              <h3 className="font-heading text-xl font-bold text-text dark:text-white mb-6 flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-primary-soft dark:bg-blue-950/60 text-primary dark:text-blue-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>Call or WhatsApp Our Desks</span>
              </h3>

              <div className="space-y-4">
                {siteContent.agency.phones.map((p, i) => (
                  <div key={p.raw} className="flex items-center justify-between pb-3 border-b border-border dark:border-[#1D3063]/70 last:border-0 last:pb-0">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-text-muted dark:text-slate-400 font-bold block">
                        Line 0{i + 1} {p.isPrimary && '(Primary)'}
                      </span>
                      <a
                        href={`tel:${p.tel || `+91${p.raw}`}`}
                        className="text-lg font-bold text-text dark:text-white hover:text-primary dark:hover:text-blue-400 transition-colors"
                      >
                        {p.formatted}
                      </a>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={`tel:${p.tel || `+91${p.raw}`}`}
                        className="p-2.5 rounded-full bg-primary-soft dark:bg-blue-950/60 hover:bg-primary text-primary dark:text-blue-400 hover:text-white dark:hover:bg-primary dark:hover:text-white transition-colors"
                        aria-label={`Call ${p.formatted}`}
                        title={`Call ${p.formatted}`}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                      <a
                        href={`https://wa.me/91${p.raw}?text=${encodeURIComponent(
                          `Hello Easy Trip Tour & Travels! I would like to enquire about holiday tour packages with Line 0${i + 1}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-full bg-green-50 dark:bg-emerald-950/50 hover:bg-[#25D366] text-[#25D366] dark:text-emerald-400 hover:text-white dark:hover:bg-[#25D366] dark:hover:text-white transition-colors"
                        aria-label={`WhatsApp ${p.formatted}`}
                        title={`WhatsApp ${p.formatted}`}
                      >
                        <MessageSquare className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email & Web */}
              <div className="mt-8 pt-6 border-t border-border dark:border-[#1D3063]/70 space-y-3">
                <a
                  href={`mailto:${siteContent.agency.email}`}
                  className="flex items-center space-x-3 text-sm text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-primary dark:text-blue-400" />
                  <span>{siteContent.agency.email}</span>
                </a>
                <a
                  href={`https://${siteContent.agency.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-sm text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors font-medium"
                >
                  <Globe className="w-4 h-4 text-primary dark:text-blue-400" />
                  <span>{siteContent.agency.website}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Branch Office Cards with Open in Maps */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="font-heading text-xl font-bold text-text dark:text-white mb-4 flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-primary-soft dark:bg-blue-950/60 text-primary dark:text-blue-400 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span>Visit Our Offices</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {siteContent.contact.offices.map((office) => {
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${office.title}, ${office.address}`
                )}`;

                return (
                  <div
                    key={office.id}
                    className="p-6 rounded-card bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] hover:border-primary/40 dark:hover:border-primary/60 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary dark:text-blue-400 px-2.5 py-0.5 rounded-pill bg-primary-soft dark:bg-blue-950/60 inline-block mb-3 border border-primary/10 dark:border-blue-900/40">
                        {office.city}
                      </span>
                      <h4 className="font-heading text-base font-bold text-text dark:text-white">
                        {office.title}
                      </h4>
                      <p className="mt-2 text-xs text-text-muted dark:text-slate-300 leading-relaxed font-normal">
                        {office.address}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-border dark:border-[#1D3063]/70">
                      <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 transition-colors"
                      >
                        <span>Open in Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Note on walk-ins */}
            <div className="p-4 rounded-card bg-white dark:bg-[#111D3D] border border-border dark:border-[#1D3063] shadow-soft-sm text-xs text-text-muted dark:text-slate-300 flex items-center space-x-2.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span>
                All 3 offices are open Monday to Saturday for itinerary planning, ticket reservations &amp; document collection.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
