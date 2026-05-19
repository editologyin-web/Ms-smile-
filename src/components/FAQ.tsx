/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What advanced dental technology do you use?',
    answer: 'We utilize AI-guided diagnostics, digital smile design software, and ultra-low radiation digital X-rays to ensure precise and safe treatments.'
  },
  {
    question: 'Do you offer integrated treatments for post-surgery rehab?',
    answer: 'Yes, our unique model integrates specialist dental and physiotherapy protocols, especially for orthopedic recovery and facial-mandibular rehabilitation.'
  },
  {
    question: 'How long are the physiotherapy sessions?',
    answer: 'Standard sessions are 45-60 minutes, consisting of evidence-based assessment and personalized kinetic movement therapy.'
  },
  {
    question: 'Is emergency dental care available?',
    answer: 'We prioritize urgent cases. Contact our direct concierge line immediately for emergency dental concerns.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-medical-bg/30 py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-medical-luxury font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Patient Intelligence</span>
          <h2 className="text-5xl font-serif text-medical-primary italic">Common Inquiries.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors hover:bg-white/5"
              >
                <span className="text-lg font-serif font-bold text-medical-primary">{faq.question}</span>
                <div className="w-8 h-8 rounded-full border border-medical-luxury/20 flex items-center justify-center text-medical-luxury shrink-0 ml-4">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-8 pb-8 text-medical-primary/60 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
