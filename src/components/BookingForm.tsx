import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Phone, Users, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteContent } from '../data/content';

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  tourType: string;
  destination: string;
  departureDate: string;
  travelersCount: string;
  approxBudget: string;
}

interface BookingFormProps {
  prefilledDestination?: string;
  prefilledTourType?: string;
}

export function BookingForm({ prefilledDestination, prefilledTourType }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);
  const [submittedWaUrl, setSubmittedWaUrl] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      tourType: prefilledTourType || 'Domestic',
      destination: prefilledDestination || '',
      departureDate: '',
      travelersCount: '2',
      approxBudget: '₹25,000 – ₹50,000',
    },
  });

  const selectedTourType = watch('tourType') || prefilledTourType || 'Domestic';

  // Update fields when prefill props change
  useEffect(() => {
    if (prefilledDestination) {
      setValue('destination', prefilledDestination);
    }
  }, [prefilledDestination, setValue]);

  useEffect(() => {
    if (prefilledTourType) {
      setValue('tourType', prefilledTourType);
    }
  }, [prefilledTourType, setValue]);

  const onSubmit = async (data: BookingFormData) => {
    // 1. Build pre-filled WhatsApp message
    const waText = encodeURIComponent(
      `✈️ *Travel Quote Enquiry — Easy Trip Tour & Travels*\n\n` +
      `👤 *Name:* ${data.fullName}\n` +
      `📞 *Phone:* ${data.phoneNumber}\n` +
      `🏷️ *Tour Category:* ${data.tourType}\n` +
      `📍 *Destination:* ${data.destination || 'Open to suggestions'}\n` +
      `📅 *Departure Date:* ${data.departureDate || 'Flexible'}\n` +
      `👥 *Travellers:* ${data.travelersCount}\n` +
      `💰 *Approx Budget:* ${data.approxBudget}\n\n` +
      `Please provide available holiday packages and itinerary details!`
    );

    const whatsappUrl = `https://wa.me/919233300333?text=${waText}`;

    setSubmittedData(data);
    setSubmittedWaUrl(whatsappUrl);
    setIsSubmitted(true);
    
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#287DFA', '#FF7A1A', '#25D366', '#EAF2FF'],
      });
    } catch {
      // Confetti fallback safely ignored
    }

    console.log('[Easy Trip Backend Hook] New Travel Quote Enquiry:', data);

    // Open WhatsApp in new tab after a brief pause so user sees the success state
    setTimeout(() => {
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Pop-up blocked fallback is handled by the prominent direct button
      }
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setSubmittedWaUrl('');
    reset();
  };

  return (
    <section id="booking-section" className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 lg:-mt-16 mb-16">
      <div className="bg-white dark:bg-[#111D3D] rounded-card p-6 sm:p-10 lg:p-12 shadow-floating dark:shadow-[0_20px_50px_rgba(0,0,0,0.55)] border border-border dark:border-[#1D3063] transition-colors">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-primary-soft dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs uppercase tracking-wider font-bold mb-3 border border-primary/20 dark:border-blue-700/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast &amp; Personalized Itinerary</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-text dark:text-white tracking-tight">
            {siteContent.bookingForm.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-text-muted dark:text-slate-300 font-medium">
            {siteContent.bookingForm.subheading}
          </p>
        </div>

        {/* Tab-Style Pill Selector for Tour Type (Mobile horizontal scroll + Desktop centered) */}
        <div className="flex justify-center mb-8">
          <div className="bg-bg-alt dark:bg-[#080E1E] p-1.5 rounded-pill border border-border dark:border-[#1D3063] flex overflow-x-auto no-scrollbar max-w-full sm:flex-wrap sm:justify-center items-center gap-1.5 scroll-smooth">
            {siteContent.bookingForm.tourTypes.map((type) => {
              const isSelected = selectedTourType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setValue('tourType', type)}
                  className={`px-4 sm:px-5 py-2 rounded-pill text-xs font-bold transition-all duration-200 shrink-0 ${
                    isSelected
                      ? 'bg-[#287DFA] text-white shadow-md'
                      : 'text-text-muted dark:text-slate-400 hover:text-text dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-800/80'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Form State or Success View */}
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    {...register('fullName', {
                      required: 'Please enter your full name',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' },
                    })}
                    className={`w-full px-4 py-3 rounded-input bg-white dark:bg-[#080E1E] border ${
                      errors.fullName ? 'border-error ring-1 ring-error' : 'border-border dark:border-[#1D3063]'
                    } text-text dark:text-white placeholder-text-muted/60 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium`}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-error font-semibold">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                    Phone / WhatsApp Number <span className="text-accent">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="phoneNumber"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      {...register('phoneNumber', {
                        required: 'Please enter your 10-digit mobile number',
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: 'Please enter a valid 10-digit Indian phone number',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-input bg-white dark:bg-[#080E1E] border ${
                        errors.phoneNumber ? 'border-error ring-1 ring-error' : 'border-border dark:border-[#1D3063]'
                      } text-text dark:text-white placeholder-text-muted/60 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium`}
                    />
                    <Phone className="w-4 h-4 text-primary absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                  {errors.phoneNumber && (
                    <p className="mt-1.5 text-xs text-error font-semibold">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                {/* Preferred Destination */}
                <div>
                  <label htmlFor="destination" className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                    Preferred Destination
                  </label>
                  <div className="relative">
                    <input
                      id="destination"
                      type="text"
                      placeholder="e.g. Kashmir, Shimla-Manali, Bali..."
                      {...register('destination')}
                      className="w-full px-4 py-3 rounded-input bg-white dark:bg-[#080E1E] border border-border dark:border-[#1D3063] text-text dark:text-white placeholder-text-muted/60 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                    <MapPin className="w-4 h-4 text-primary absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Departure Date */}
                <div>
                  <label htmlFor="departureDate" className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                    Departure Date
                  </label>
                  <div className="relative">
                    <input
                      id="departureDate"
                      type="date"
                      {...register('departureDate')}
                      className="w-full px-4 py-3 rounded-input bg-white dark:bg-[#080E1E] border border-border dark:border-[#1D3063] text-text dark:text-white text-sm focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Number of Travellers */}
                <div>
                  <label htmlFor="travelersCount" className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                    Number of Travellers
                  </label>
                  <div className="relative">
                    <input
                      id="travelersCount"
                      type="number"
                      min="1"
                      max="100"
                      placeholder="e.g. 2 adults, 1 child"
                      {...register('travelersCount')}
                      className="w-full px-4 py-3 rounded-input bg-white dark:bg-[#080E1E] border border-border dark:border-[#1D3063] text-text dark:text-white placeholder-text-muted/60 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-primary dark:focus:border-blue-400 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                    />
                    <Users className="w-4 h-4 text-primary absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Selected Tour Type display pill */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                    Active Tour Category
                  </label>
                  <div className="px-4 py-3 rounded-input bg-primary-soft dark:bg-blue-950/40 border border-primary/20 dark:border-blue-800/40 text-primary-dark dark:text-blue-300 font-bold text-sm flex items-center justify-between">
                    <span>{selectedTourType} Package</span>
                    <span className="text-[10px] uppercase tracking-wider text-primary dark:text-blue-400 bg-white dark:bg-[#111D3D] px-2 py-0.5 rounded-full border border-primary/30 dark:border-blue-700/50">Selected</span>
                  </div>
                </div>
              </div>

              {/* Approximate Budget */}
              <div className="pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-text dark:text-slate-200 mb-2">
                  Approximate Budget per Person
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {siteContent.bookingForm.budgetRanges.map((budget) => (
                    <label
                      key={budget}
                      className="relative flex items-center justify-center p-3 text-xs font-semibold rounded-input border border-border dark:border-[#1D3063] bg-bg-alt dark:bg-[#080E1E] hover:border-primary/50 cursor-pointer transition-all has-[:checked]:border-primary dark:has-[:checked]:border-blue-400 has-[:checked]:bg-primary-soft dark:has-[:checked]:bg-blue-900/40 has-[:checked]:text-primary-dark dark:has-[:checked]:text-blue-300 text-text dark:text-slate-200"
                    >
                      <input
                        type="radio"
                        value={budget}
                        {...register('approxBudget')}
                        className="sr-only"
                      />
                      <span>{budget}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit CTA & Trust Indicator */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border dark:border-[#1D3063]">
                <div className="flex items-center space-x-2.5 text-xs text-text-muted dark:text-slate-400 font-medium">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>
                    Instant quote enquiry via official WhatsApp (92333 00333). No spam.
                  </span>
                </div>

                {/* Full-width / Prominent Orange CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-btn bg-[#FF7A1A] hover:bg-[#E8660B] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2.5 btn-accent-glow focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <span>{siteContent.bookingForm.cta}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 px-4"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 flex items-center justify-center text-[#25D366]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-text dark:text-white">
                Thank You, {submittedData?.fullName}!
              </h3>
              <p className="mt-2 text-text-muted dark:text-slate-300 max-w-lg mx-auto text-sm sm:text-base font-medium">
                Your travel quote enquiry for <strong>{submittedData?.destination || 'your trip'}</strong> has been received. We are opening your pre-filled WhatsApp message to our travel desk right now.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a
                  href={
                    submittedWaUrl ||
                    `https://wa.me/919233300333?text=${encodeURIComponent(
                      `Hello Easy Trip! Following up on my enquiry for ${submittedData?.destination || 'my tour package'}. Name: ${submittedData?.fullName}`
                    )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-btn bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-btn border border-border dark:border-[#1D3063] text-text dark:text-slate-200 text-xs uppercase tracking-wider font-bold hover:border-primary hover:text-primary transition-colors bg-white dark:bg-[#080E1E] shadow-soft-sm"
                >
                  Plan Another Trip
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
