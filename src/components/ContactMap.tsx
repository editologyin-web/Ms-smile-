/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

const CLINIC_LOCATION = { lat: 13.0975, lng: 80.2818 };

export default function ContactMap() {
  return (
    <section id="contact" className="bg-white overflow-hidden">
      <div className="section-spacing grid lg:grid-cols-2 gap-24 items-start">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-medical-luxury" />
            <span className="text-medical-luxury font-bold uppercase tracking-[0.3em] text-xs">Direct Access</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif text-medical-primary leading-[1.1] mb-12">
            Clinical <br />
            <span className="italic text-medical-accent">Consultation.</span>
          </h2>

          <div className="space-y-12 mb-16">
            <div className="flex gap-8">
              <MapPin className="text-medical-luxury shrink-0" size={28} />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-medical-primary/40 mb-3">The Address</h4>
                <p className="text-xl font-serif text-medical-primary leading-relaxed">
                  98/4, Shanmugarayan St, Thayapa,<br />
                  Seven Wells South, George Town,<br />
                  Chennai – 600001
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <Phone className="text-medical-luxury shrink-0" size={28} />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-medical-primary/40 mb-3">Appointments</h4>
                <p className="text-2xl font-serif text-medical-primary group-hover:text-medical-accent transition-colors">
                  06383101336
                </p>
                <p className="text-xs font-bold text-medical-accent mt-2 uppercase tracking-widest">Available 10AM - 9PM</p>
              </div>
            </div>

            <div className="flex gap-8">
              <Clock className="text-medical-luxury shrink-0" size={28} />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-medical-primary/40 mb-3">Operating Hours</h4>
                <div className="space-y-2 text-medical-primary font-medium">
                  <p>Mon – Sat / 10:00 – 13:00</p>
                  <p>Mon – Sat / 17:00 – 21:00</p>
                  <p className="text-medical-accent/60 italic font-serif">Sunday / By Appointment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-10 bg-medical-bg/50 border-medical-luxury/10">
             <h4 className="text-2xl font-serif mb-8 text-medical-primary">Secure a Callback</h4>
             <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-medical-primary/40 ml-1">Patient Name</label>
                 <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full bg-white px-6 py-4 rounded-2xl border border-medical-primary/5 focus:border-medical-accent outline-none shadow-sm transition-all font-medium"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest font-bold text-medical-primary/40 ml-1">Contact Number</label>
                 <input 
                  type="tel" 
                  placeholder="+91" 
                  className="w-full bg-white px-6 py-4 rounded-2xl border border-medical-primary/5 focus:border-medical-accent outline-none shadow-sm transition-all font-medium"
                 />
               </div>
               <button className="sm:col-span-2 btn-premium flex items-center justify-center gap-3">
                 Request Immediate Callback
                 <ArrowRight size={20} />
               </button>
             </form>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="h-[700px] w-full rounded-[3rem] overflow-hidden shadow-2xl relative border-[20px] border-white ring-1 ring-medical-primary/5"
        >
          {!hasValidKey ? (
            <div className="w-full h-full bg-medical-luxury/5 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 border-4 border-medical-luxury/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-medical-accent/5 rounded-full blur-3xl" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative z-10"
              >
                <div className="w-20 h-20 rounded-full accent-gradient flex items-center justify-center text-white mx-auto mb-8 shadow-2xl">
                  <MapPin size={32} />
                </div>
                <h3 className="text-4xl font-serif text-medical-primary mb-6 italic">Geographic <br />Position.</h3>
                <div className="max-w-xs p-10 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-2xl mx-auto">
                  <p className="text-2xl font-serif text-medical-primary mb-2">George Town</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-medical-primary/50 leading-relaxed">
                    98/4, Shanmugarayan St, Chennai
                  </p>
                  <div className="mt-8 pt-8 border-t border-medical-primary/5">
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-xs font-bold uppercase tracking-widest text-medical-accent hover:text-medical-primary transition-colors flex items-center justify-center gap-2"
                    >
                      Open Directions <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            <APIProvider apiKey={API_KEY} version="weekly">
              <Map
                defaultCenter={CLINIC_LOCATION}
                defaultZoom={15}
                mapId="PREMIUM_CLINIC_MAP"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                style={{ width: '100%', height: '100%' }}
                disableDefaultUI={true}
                zoomControl={true}
              >
                <AdvancedMarker position={CLINIC_LOCATION}>
                  <div className="medical-gradient p-4 rounded-full shadow-2xl border-4 border-white">
                    <Pin background="transparent" borderColor="transparent" glyphColor="#fff" scale={1.5}>
                       <div className="text-white font-serif font-bold text-sm italic">MS</div>
                    </Pin>
                  </div>
                </AdvancedMarker>
              </Map>
            </APIProvider>
          )}
          
          <div className="absolute bottom-10 left-10 right-10 flex gap-4">
             <div className="flex-1 glass-card px-8 py-5 flex items-center justify-between">
                <div>
                   <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-medical-primary/40">Private Parking</p>
                   <p className="text-sm font-bold text-medical-primary">Available On-site</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-medical-luxury/20 flex items-center justify-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-medical-luxury" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
