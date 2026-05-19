/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight, ArrowDownRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-medical-bg">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-medical-primary/5 -skew-x-12 translate-x-1/4" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-medical-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className="w-12 h-[1px] bg-medical-luxury" />
            <span className="text-medical-luxury font-bold uppercase tracking-[0.3em] text-xs">
              Excellence in Healthcare
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-medical-primary leading-[0.9] mb-8">
            Artistry <br />
            <span className="italic text-medical-accent">in Care.</span>
          </h1>
          
          <p className="text-xl text-medical-primary/70 max-w-lg mb-12 font-medium leading-relaxed">
            M.S. Smile Fit integrates world-class dental expertise with precision physiotherapy 
            to restore your natural rhythm and confidence.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#contact" className="btn-premium group flex items-center gap-3">
              Book Appointment
              <ArrowDownRight size={20} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </div>
          
          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-medical-primary/10 pt-10">
            <div>
              <p className="text-3xl font-serif text-medical-primary">4.9★</p>
              <p className="text-xs uppercase tracking-wider text-medical-primary/50 font-bold mt-1">Google Rating</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-medical-primary">15+</p>
              <p className="text-xs uppercase tracking-wider text-medical-primary/50 font-bold mt-1">Years Exp.</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-medical-primary">10k+</p>
              <p className="text-xs uppercase tracking-wider text-medical-primary/50 font-bold mt-1">Happy Patients</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white drop-shadow-2xl aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
              alt="Premium Dental Care"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-medical-primary/40 to-transparent" />
          </div>
          
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 z-20 glass-card p-8 max-w-[240px]"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center text-white">
                <ChevronRight size={20} />
              </div>
              <p className="font-bold text-sm">Next Generation Treatments</p>
            </div>
            <p className="text-xs text-medical-primary/60 leading-relaxed font-semibold">
              utilizing AI-guided diagnostics and digital smile design.
            </p>
          </motion.div>

          {/* Accent Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-medical-luxury opacity-20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
