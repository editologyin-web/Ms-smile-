/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Heart, Activity, Stethoscope, Smartphone, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Heart className="text-medical-accent" size={24} />,
    title: 'Advanced Oral Care',
    category: 'Dental Excellence',
    description: 'Precision diagnostics and painless treatments for every smile.',
  },
  {
    icon: <Activity className="text-medical-accent" size={24} />,
    title: 'Kinetic Rehabilitation',
    category: 'Motion Science',
    description: 'Evidence-based physiotherapy for recovery and performance.',
  },
  {
    icon: <ShieldCheck className="text-medical-accent" size={24} />,
    title: 'Aesthetic Dentistry',
    category: 'Cosmetic Artistry',
    description: 'Transformative smile design using the latest ceramic technologies.',
  },
  {
    icon: <Zap className="text-medical-accent" size={24} />,
    title: 'Post-Trauma Care',
    category: 'Recovery Expert',
    description: 'Specialized protocols for rapid return to daily movement.',
  },
  {
    icon: <Stethoscope className="text-medical-accent" size={24} />,
    title: 'Smart Diagnostics',
    category: 'High-Tech',
    description: 'AI-assisted imaging for ultra-low radiation medical analysis.',
  },
  {
    icon: <Smartphone className="text-medical-accent" size={24} />,
    title: 'Concierge Support',
    category: 'Patient Care',
    description: 'Dedicated medical coordination for your entire health journey.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-medical-primary py-32 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 border border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-10 h-[1px] bg-medical-accent" />
              <span className="text-medical-accent font-bold uppercase tracking-[0.3em] text-xs">Expertise</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-white leading-none"
            >
              Specialized <br />
              <span className="italic text-medical-accent">Practices.</span>
            </motion.h2>
          </div>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-white/50 text-lg max-w-md font-medium leading-relaxed mb-4"
          >
            We deploy a multi-disciplinary approach to ensure that your recovery 
            is swift and your health is maintained with the highest medical standards.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-medical-primary p-12 group hover:bg-white transition-all duration-500 cursor-pointer"
            >
              <div className="mb-10 flex justify-between items-start">
                 <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-medical-accent/10 transition-colors">
                    {service.icon}
                 </div>
                 <ArrowRight className="text-white/20 group-hover:text-medical-accent group-hover:translate-x-2 transition-all" size={20} />
              </div>
              
              <p className="text-[10px] uppercase tracking-widest font-bold text-medical-accent mb-4">
                {service.category}
              </p>
              
              <h3 className="text-2xl font-serif mb-6 text-white group-hover:text-medical-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-white/40 group-hover:text-medical-primary/60 leading-relaxed font-medium transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
