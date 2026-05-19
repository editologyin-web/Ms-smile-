/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  const phoneNumber = '916383101336';
  const message = encodeURIComponent("Hello! I'd like to book a premium consultation at M.S. Smile Fit.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-10 right-10 z-[60]"
    >
      <div className="relative group">
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-6 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <div className="bg-medical-primary text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-2xl">
            Direct Concierge
          </div>
        </div>

        {/* Pulse effect */}
        <div className="absolute inset-0 accent-gradient rounded-full animate-ping opacity-20" />
        
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 accent-gradient text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 border-2 border-white"
        >
          <MessageCircle size={24} fill="currentColor" />
          
          {/* Small notification badge */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-medical-luxury rounded-full border-2 border-white" />
        </a>
      </div>
    </motion.div>
  );
}
