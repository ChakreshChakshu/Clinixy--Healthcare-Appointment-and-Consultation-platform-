import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  Calendar, CheckCircle2, Clock, Phone, FileSpreadsheet, 
  Heart, Brain, Baby, Sparkles, Bone, Smile, Eye, UserRound, 
  Zap, Stethoscope, Thermometer, Activity,Search
} from 'lucide-react';

import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-white dark:bg-black font-sans text-primary dark:text-white transition-colors duration-500 selection:bg-accent selection:text-white"
    >
      <Navbar 
        isScrolled={isScrolled} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
        scrollToSection={scrollToSection} 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-accent/15 rounded-full mb-8 border border-accent/20 dark:bg-accent/10 dark:border-accent/30"
            >
              <span className="text-[9px] font-black text-accent uppercase tracking-widest leading-none">Best Online Medical Platform</span>
            </motion.div>

            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[1] mb-8 text-primary dark:text-white"
            >
              Find Doctors. <br /> <span className="text-accent">Book Instantly.</span>
            </motion.h1>

            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="max-w-md text-graphite dark:text-gray-400 text-sm md:text-base font-semibold mb-10 leading-relaxed"
            >
              No more waiting in long lines. Search for verified specialists and book your appointments from the comfort of your home.
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={() => scrollToSection('find-doctor')} className="group bg-primary dark:bg-accent text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-accent dark:hover:bg-white dark:hover:text-black transition-all shadow-xl cursor-pointer">
                Book Now <Calendar size={16} />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-surface dark:bg-black rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <CheckCircle2 size={16} className="text-accent" />
                <span className="text-[9px] font-black text-primary dark:text-white uppercase tracking-widest">100% Verified Doctors</span>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }}
            className="relative hidden lg:block h-[550px] rounded-[40px] overflow-hidden border border-gray-200 dark:border-white/5 shadow-2xl"
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=600&auto=format&fit=crop" 
              alt="Doctor Consultation" 
              className="w-full h-full object-cover dark:opacity-60 dark:brightness-90 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* --- QUICK SEARCH (Specialties) --- */}
      <section id="find-doctor" className="py-24 px-6 bg-surface dark:bg-black transition-all duration-500">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-6 border border-primary/20"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Specialties</span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6 text-graphite dark:text-white"
      >
        Choose Your <span className="text-primary">Specialty</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest"
      >
        Connect with world-class specialists tailored to your needs.
      </motion.p>
    </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Cardiology', icon: <Heart size={18} /> },
              { name: 'Neurology', icon: <Brain size={18} /> },
              { name: 'Pediatrics', icon: <Baby size={18} /> },
              { name: 'Dermatology', icon: <Sparkles size={18} /> },
              { name: 'Orthopedic', icon: <Bone size={18} /> },
              { name: 'Dentistry', icon: <Smile size={18} /> },
              { name: 'Ophthalmology', icon: <Eye size={18} /> },
              { name: 'Gynecology', icon: <UserRound size={18} /> },
              { name: 'Psychiatry', icon: <Zap size={18} /> },
              { name: 'Urology', icon: <Thermometer size={18} /> },
              { name: 'Gastroenterology', icon: <Stethoscope size={18} /> },
              { name: 'Pulmonology', icon: <Activity size={18} /> }
            ].map((spec, i) => (
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                key={i} 
                className="bg-white dark:bg-black p-8 rounded-[32px] border border-gray-200 dark:border-white/10 text-center hover:border-accent dark:hover:border-accent hover:shadow-xl transition-all cursor-pointer group shadow-sm"
              >
                <div className="w-12 h-12 bg-surface dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm text-accent">
                  {spec.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white leading-tight group-hover:text-accent transition-colors">{spec.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-4">Our Services</p>
            <h2 className="text-4xl font-black tracking-tighter text-primary dark:text-white">Everything for your Health.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: 'Online Appointment', d: 'Skip the waiting room. Book your slot online in seconds.', ic: <Clock size={18}/>, img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop' },
              { t: 'Digital Prescriptions', d: 'Get your medicines prescribed online and access them anywhere.', ic: <FileSpreadsheet size={18}/>, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop' },
              { t: '24/7 Support', d: 'Our health assistants are here to help you anytime, anywhere.', ic: <Phone size={18}/>, img: 'https://media.istockphoto.com/id/1589093340/photo/businesswoman-holding-smartphone-showing-virtual-24-7-with-clock-worldwide-nonstop-and-full.webp?a=1&b=1&s=612x612&w=0&k=20&c=7PBsPxTP0uM9Qyb6pJTcoqnJrraILyel6wtdORgK6T0=' },
            ].map((s, i) => (
              <div key={i} className="group bg-white dark:bg-black rounded-[32px] overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:border-accent/30 transition-all cursor-pointer">
                <div className="h-48 w-full overflow-hidden bg-gray-100">
                  <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 bg-surface dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-accent shadow-sm">{s.ic}</div>
                  <h3 className="text-xs font-black mb-3 uppercase tracking-tight text-primary dark:text-white">{s.t}</h3>
                  <p className="text-graphite dark:text-gray-400 text-[11px] font-bold leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* --- HOW IT WORKS SECTION --- */}
<section id="how-it-works" className="py-24 px-6 bg-graphite dark:bg-black text-white rounded-[60px] mx-4 md:mx-10 overflow-hidden relative transition-all duration-500 border border-white/5 selection:bg-primary selection:text-white">
  
  <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-80" />
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-80" />

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[10px] font-black text-accent uppercase tracking-[0.4em] bg-accent/10 px-4 py-2 rounded-full border border-accent/20"
      >
        Workflow
      </motion.span>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black tracking-tighter mt-6 uppercase"
      >
        Simple 3-Step <span className="text-primary">Process</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 dark:text-gray-500 font-bold text-sm mt-4 uppercase tracking-widest max-w-lg mx-auto"
      >
        Seamlessly connecting you to world-class healthcare in minutes.
      </motion.p>
    </div>

    <div className="grid md:grid-cols-3 gap-12 relative">
      {/* Connecting Line for Desktop - Subtle in Dark Mode */}
      <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent z-0" />

      {[
        { 
          n: '01', 
          t: 'Search Specialist', 
          d: 'Browse through our verified network of top-rated doctors based on your specific health concerns.',
          icon: <Search size={24} className="text-primary" />
        },
        { 
          n: '02', 
          t: 'Schedule Visit', 
          d: 'Pick a convenient time slot and confirm your appointment with instant digital confirmation.',
          icon: <Calendar size={24} className="text-accent" />
        },
        { 
          n: '03', 
          t: 'Receive Care', 
          d: 'Consult with your doctor via secure video call or visit the clinic without waiting in any queue.',
          icon: <CheckCircle2 size={24} className="text-white" />
        }
      ].map((step, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2 }}
          whileHover={{ y: -10 }}
          className="group relative space-y-6 p-8 rounded-[40px] bg-white/5 dark:bg-white/[0.02] border border-white/10 dark:border-white/[0.05] hover:border-primary/50 dark:hover:border-primary/30 transition-all duration-500 backdrop-blur-sm shadow-2xl shadow-black/50"
        >
          <div className="absolute -top-6 -right-4 text-7xl font-black text-white/5 dark:text-white/[0.03] group-hover:text-primary/10 transition-colors italic select-none">
            {step.n}
          </div>

          <div className="w-14 h-14 bg-graphite dark:bg-black border border-white/10 dark:border-white/[0.08] rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:border-primary/50">
            {step.icon}
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-black uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
              {step.t}
            </h4>
            <p className="text-gray-400 dark:text-gray-500 text-xs font-semibold leading-relaxed">
              {step.d}
            </p>
          </div>

          <div className="pt-4">
            <div className="h-1 w-12 bg-white/10 dark:bg-white/5 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-700" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* --- REVIEWS --- */}
      <section id="reviews" className="py-24 px-6 bg-white dark:bg-black transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter text-primary dark:text-white mb-16">What Our <br/><span className="text-accent">Patients Say.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { r: "Booking was very fast, and the experience with the doctor was great.", n: "Aman Verma" },
              { r: "Best platform for online health records. Minimal and Clean.", n: "Sanya Gupta" },
              { r: "Managing appointments has now become very easy.", n: "Rahul Singh" }
            ].map((rev, i) => (
              <div key={i} className="bg-surface dark:bg-[#050505] p-8 rounded-[32px] border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all cursor-default">
                <p className="text-graphite dark:text-gray-400 text-xs italic font-bold mb-6 leading-relaxed">"{rev.r}"</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-white">— {rev.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer scrollToSection={scrollToSection} />
    </motion.div>
  );
};

export default Home;