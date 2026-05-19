/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh Kumar',
    position: 'Professional Athlete',
    rating: 5,
    comment: "The integrated approach at M.S. Smile Fit is revolutionary. My recovery from an ACL injury was coordinated perfectly with my dental health, ensuring whole-body wellness.",
  },
  {
    name: 'Anjali Sharma',
    position: 'CEO, Tech Innovations',
    rating: 5,
    comment: "Experience clinical excellence like never before. The attention to detail in their aesthetic dentistry is unparalleled. Truly a premium experience in Chennai.",
  },
  {
    name: 'Suresh V',
    position: 'Senior Architect',
    rating: 5,
    comment: "Pristine facilities and highly technical care. They utilize the latest modern equipment while maintaining a deeply compassionate patient relationship.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-medical-bg py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-[1px] bg-medical-luxury" />
            <span className="text-medical-luxury font-bold uppercase tracking-[0.3em] text-xs">Testimonials</span>
            <span className="w-10 h-[1px] bg-medical-luxury" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif text-medical-primary leading-[1.1]"
          >
            Clinical Trust <br />
            <span className="italic text-medical-accent">Personified.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative group pt-10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0">
                <Quote className="text-medical-luxury/10 w-24 h-24" />
              </div>
              
              <div className="glass-card p-12 relative z-10 h-full flex flex-col items-center text-center">
                <div className="flex gap-1 mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="#C5A059" className="text-medical-luxury" />
                  ))}
                </div>
                
                <p className="text-xl font-serif text-medical-primary/80 leading-relaxed italic mb-10 flex-1">
                  "{review.comment}"
                </p>
                
                <div className="w-12 h-[1px] bg-medical-luxury mb-6" />
                
                <h4 className="text-lg font-serif font-bold text-medical-primary">{review.name}</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold text-medical-primary/40 mt-1">{review.position}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <div className="inline-block glass-card px-10 py-5">
            <div className="flex items-center gap-6">
              <div className="text-left">
                <p className="text-3xl font-serif text-medical-primary">4.9 ★</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-medical-primary/40">Official Store Rating</p>
              </div>
              <div className="w-[1px] h-10 bg-medical-primary/10" />
              <a 
                href="https://google.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-widest text-medical-accent hover:text-medical-primary transition-colors"
              >
                View on Google
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
