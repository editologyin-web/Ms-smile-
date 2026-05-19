/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MapPin, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-medical-primary text-white pt-32 pb-16 overflow-hidden relative">
      {/* Decorative Branding */}
      <div className="absolute top-0 right-0 py-32 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[25vw] font-serif font-bold leading-none translate-x-1/4">SMILE</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 accent-gradient rounded-full flex items-center justify-center text-white font-serif font-bold text-sm italic">
                MS
              </div>
              <h1 className="text-2xl font-serif font-bold tracking-tight">
                M.S. Smile <span className="text-medical-accent italic">Fit.</span>
              </h1>
            </div>
            <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-md font-medium italic">
              "Redefining the standard of care through technical mastery and human connection."
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              {['Home', 'About', 'Expertise', 'Reviews'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-medical-accent transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-8">Clinical services</h4>
            <ul className="space-y-4 text-sm font-bold text-white/60">
              {[
                'Aesthetic Dentistry',
                'Oral Surgery',
                'Kinetic Physio',
                'Sports Rehab',
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-8">Newsletter</h4>
            <p className="text-sm text-white/40 mb-8 font-medium">Join our health circle for exclusive medical insights.</p>
            <div className="flex border-b border-white/20 pb-4">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none w-full"
              />
              <button className="text-medical-accent font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-white/5">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            © {new Date().getFullYear()} M.S. Smile Fit / Premium Clinical Care Group
          </p>
          <div className="flex gap-10 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
