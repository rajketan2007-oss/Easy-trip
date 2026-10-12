import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { siteContent } from '../data/content';

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 lg:py-32 bg-white dark:bg-[#080E1E] text-text dark:text-slate-100 border-t border-border dark:border-[#1D3063]/60 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-primary dark:text-blue-400 font-bold mb-3">
            <HelpCircle className="w-4 h-4 text-primary dark:text-blue-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading section-title font-extrabold text-text dark:text-white tracking-tight">
            {siteContent.faq.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted dark:text-slate-300 font-medium">
            {siteContent.faq.subtitle}
          </p>
        </div>

        {/* Accessible Accordion List in Trip.com style */}
        <div className="space-y-4">
          {siteContent.faq.items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-card border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-primary-soft dark:bg-blue-950/40 border-primary/30 dark:border-blue-700/50 shadow-soft-sm'
                    : 'bg-white dark:bg-[#111D3D] border-border dark:border-[#1D3063] hover:border-primary/40 dark:hover:border-primary/60 shadow-soft-sm'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${item.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${item.id}`}
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <span className="font-heading text-base sm:text-xl font-bold text-text dark:text-white flex items-baseline">
                    <span className="text-xs font-mono text-primary dark:text-blue-400 font-bold mr-3 tracking-tight">
                      0{index + 1}
                    </span>
                    {item.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary text-white border-primary rotate-180'
                        : 'bg-bg-alt dark:bg-slate-800 text-primary dark:text-blue-400 border-border dark:border-slate-700'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 text-sm sm:text-base text-text-muted dark:text-slate-300 leading-relaxed border-t border-primary/10 dark:border-blue-900/40 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
