import React from 'react';
import { Activity, Twitter, Linkedin, Instagram, ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = ({ scrollToSection }) => {
  return (
    <footer className="bg-surface dark:bg-black pt-24 pb-12 border-t border-gray-200 dark:border-white/5 px-6 md:px-12 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary dark:bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <Activity size={20} className="text-accent dark:text-black" />
              </div>
              <span className="font-black text-xl tracking-tighter italic uppercase text-primary dark:text-white">Clinixy</span>
            </div>
            <p className="text-graphite dark:text-gray-400 text-[11px] font-bold leading-relaxed max-w-xs uppercase tracking-wider">
              Revolutionizing patient care through intelligent digital infrastructure. 
              Your health journey, unified in one secure platform.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button key={i} className="w-9 h-9 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-graphite dark:text-gray-400 hover:text-white hover:bg-accent transition-all duration-300 cursor-pointer shadow-sm">
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-[10px] font-black text-primary dark:text-white uppercase tracking-[0.3em]">Platform</p>
              <div className="flex flex-col gap-4 text-[10px] font-bold text-graphite dark:text-gray-400 uppercase tracking-widest">
                <button onClick={() => scrollToSection('find-doctor')} className="hover:text-accent text-left transition-colors cursor-pointer">Find Doctors</button>
                <button onClick={() => scrollToSection('services')} className="hover:text-accent text-left transition-colors cursor-pointer">Infrastructure</button>
                <button onClick={() => scrollToSection('how-it-works')} className="hover:text-accent text-left transition-colors cursor-pointer">The Process</button>
                <button onClick={() => scrollToSection('reviews')} className="hover:text-accent text-left transition-colors cursor-pointer">Testimonials</button>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] font-black text-primary dark:text-white uppercase tracking-[0.3em]">Support</p>
              <div className="flex flex-col gap-4 text-[10px] font-bold text-graphite dark:text-gray-400 uppercase tracking-widest">
                <Link to="/login" className="hover:text-accent transition-colors cursor-pointer">Account Login</Link>
                <Link to="/register" className="hover:text-accent transition-colors cursor-pointer">Provider Portal</Link>
                <a href="#" className="hover:text-accent transition-colors cursor-pointer">Help Center</a>
                <a href="#" className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <p className="text-[10px] font-black text-primary dark:text-white uppercase tracking-[0.3em]">Stay Updated</p>
            <div className="relative group">
              <input type="email" placeholder="ENTER EMAIL" className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 text-[10px] font-bold uppercase tracking-widest focus:border-accent outline-none transition-all shadow-sm text-primary dark:text-white" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary dark:bg-accent text-white p-2.5 rounded-xl hover:bg-accent dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer">
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Phone size={14} className="text-accent" />
              <p className="text-[10px] font-black text-primary dark:text-white tracking-widest">+91 1800-CLINIXY</p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-300 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 dark:text-gray-600">
          <p className="text-[9px] font-black uppercase tracking-[0.4em]">© 2026 Clinixy Integrated Systems. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-accent" />
              <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-accent" />
              <span className="text-[9px] font-black uppercase tracking-widest">Verified Healthcare Provider</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;