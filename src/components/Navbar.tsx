/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#services' },
  { name: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'py-4 translate-y-2'
          : 'py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "flex items-center justify-between transition-all duration-500 rounded-full px-8 py-3",
          isScrolled ? "bg-white/80 backdrop-blur-xl shadow-premium border border-white/40" : "bg-transparent"
        )}>
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full accent-gradient flex items-center justify-center text-white font-serif font-bold text-xs">
              MS
            </div>
            <h1 className="text-lg font-serif font-bold tracking-tight text-medical-primary">
              M.S. Smile <span className="text-medical-accent italic">Fit</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold uppercase tracking-[0.2em] text-medical-primary/60 hover:text-medical-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
             <button
                onClick={() => setIsDark(!isDark)}
                className="w-10 h-10 rounded-full border border-medical-luxury/20 flex items-center justify-center text-medical-luxury hover:bg-medical-luxury hover:text-white transition-all"
             >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
             </button>
             <a
              href="#contact"
              className="text-xs font-bold uppercase tracking-widest border-b border-medical-luxury text-medical-luxury hover:text-medical-primary hover:border-medical-primary transition-all"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-medical-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-24 left-6 right-6 glass-card p-10 flex flex-col items-center gap-8 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-medical-primary hover:text-medical-accent"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-premium w-full text-center"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
