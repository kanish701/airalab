import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#161515] border border-white/10 text-white shadow-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-300 group backdrop-blur-md"
          aria-label="Scroll to top"
        >
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-300" />
          
          <ArrowUp size={20} className="relative z-10 stroke-[2px]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;