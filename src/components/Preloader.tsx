import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Under 2 seconds branded intro
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 800); // Allow exit animation to complete
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white dark:bg-[#080E1E] text-text dark:text-white select-none shadow-2xl transition-colors"
        >
          <div className="relative flex flex-col items-center">
            {/* Animated Logo & Flight Arc */}
            <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Outer rotating dashed ring */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#287DFA"
                  strokeOpacity="0.4"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
              </svg>

              <motion.img
                src="/logo.png"
                alt="Easy Trip Logo"
                className="w-20 h-20 object-contain drop-shadow-xl z-10"
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: [0.2, 1.08, 1], opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Brand typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center"
            >
              <span className="inline-block text-[11px] uppercase tracking-widest text-primary dark:text-blue-400 bg-primary-soft dark:bg-blue-950/60 px-3 py-0.5 rounded-full font-bold mb-2">
                Durgapur &bull; Asansol
              </span>
              <h1 className="font-heading text-2xl md:text-3xl tracking-tight text-text dark:text-white font-extrabold">
                EASY TRIP
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeInOut" }}
                className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-2.5"
              />
              <span className="block text-xs tracking-wider text-text-muted dark:text-slate-400 font-medium mt-2">
                Travel Made Easy
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
