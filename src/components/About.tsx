/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white">
      <div className="section-spacing grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Vertical Text Side */}
        <div className="hidden lg:flex lg:col-span-1 justify-center">
          <p className="vertical-text text-medical-primary/20 font-bold tracking-[0.5em] text-[10px]">
            ESTABLISHED MEDICAL EXCELLENCE — CHENNAI
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative z-10">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000"
                alt="Elite Clinical Environment"
                className="w-full h-full object-cover grayscale-[0.8] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Absolute positioned decorative elements */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 accent-gradient rounded-full opacity-10 blur-3xl" />
            <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-32 h-32 border-4 border-medical-luxury opacity-20 rounded-full" />
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="absolute -bottom-6 -left-6 z-20 bg-medical-primary p-8 rounded-3xl text-white shadow-2xl max-w-[200px]"
            >
              <p className="text-4xl font-serif mb-1">15y+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/50">Clinical Expertise</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-medical-luxury font-bold uppercase tracking-widest text-xs">Our Philosophy</span>
            <div className="flex-1 h-[1px] bg-medical-luxury/20" />
          </div>
          
          <h2 className="text-5xl md:text-6xl text-medical-primary leading-tight mb-8">
            Tailored Solutions <br />
            <span className="italic text-medical-accent">for Human Form.</span>
          </h2>
          
          <p className="text-lg text-medical-primary/70 mb-8 leading-relaxed font-medium">
            M.S. Smile Fit was founded on the principle that healthcare should be as precise 
            as it is compassionate. We specialize in integrated care that bridges the gap 
            between oral health and physical mobility.
          </p>

          <div className="space-y-6 mb-12">
            {[
              { title: 'Digital Precision', desc: 'Advanced diagnostics for accurate results.' },
              { title: 'Holistic Recovery', desc: 'Integrated dental and physio protocols.' },
              { title: 'Luxury Comfort', desc: 'Pristine environments designed for peace.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <CheckCircle2 className="text-medical-accent shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-medical-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-medical-primary/50 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-outline">
            Discover Our Story
          </a>
        </motion.div>
      </div>
    </section>
  );
}
