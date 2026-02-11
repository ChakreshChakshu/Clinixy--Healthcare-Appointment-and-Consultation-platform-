import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { 
  Activity, Calendar, CheckCircle2, Clock, Phone, FileSpreadsheet, 
  Heart, Brain, Baby, Sparkles, Bone, Smile, Eye, UserRound, 
  Zap, Stethoscope, Thermometer, Search, ShieldCheck, Users, 
  Globe, ArrowRight, Twitter, Linkedin, Instagram, Moon, Sun
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
      className="min-h-screen bg-white dark:bg-[#000000] font-sans text-[#0F172A] dark:text-white transition-colors duration-500 selection:bg-[#10B981] selection:text-white"
    >
      {/* --- NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
        isScrolled ? 'bg-white/95 dark:bg-[#000000]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-3 shadow-md' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-[#0F172A] dark:bg-[#10B981] rounded-lg flex items-center justify-center group-hover:bg-[#10B981] dark:group-hover:bg-white transition-colors">
              <Activity size={18} className="text-[#10B981] dark:text-white group-hover:text-white dark:group-hover:text-[#10B981] transition-colors" />
            </div>
            <span className="font-black text-lg tracking-tighter italic uppercase text-[#0F172A] dark:text-white">Clinixy</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#334155] dark:text-gray-400">
            <button onClick={() => scrollToSection('find-doctor')} className="hover:text-[#10B981] transition-colors cursor-pointer">Find Doctors</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-[#10B981] transition-colors cursor-pointer">Services</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#10B981] transition-colors cursor-pointer">How it works</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-[#10B981] transition-colors cursor-pointer">Reviews</button>
            
          </div>

          <div className="flex items-center gap-5">
            
            <Link to="/login" className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-[#0F172A] dark:text-white hover:text-[#10B981] cursor-pointer transition-colors">Login</Link>
            <Link to="/register" className="bg-[#0F172A] dark:bg-[#10B981] text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#10B981] dark:hover:bg-white dark:hover:text-[#000000] transition-all cursor-pointer shadow-lg shadow-gray-200 dark:shadow-none">
              Join Now
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-[#0F172A] dark:text-[#10B981] transition-all cursor-pointer hover:scale-110 active:scale-90"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/15 rounded-full mb-8 border border-[#10B981]/20 dark:bg-[#10B981]/10 dark:border-[#10B981]/30"
            >
              <span className="text-[9px] font-black text-[#059669] dark:text-[#10B981] uppercase tracking-widest leading-none">Best Online Medical Platform</span>
            </motion.div>

            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[1] mb-8 text-[#0F172A] dark:text-white"
            >
              Find Doctors. <br /> <span className="text-[#10B981]">Book Instantly.</span>
            </motion.h1>

            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="max-w-md text-[#475569] dark:text-gray-400 text-sm md:text-base font-semibold mb-10 leading-relaxed"
            >
              No more waiting in long lines. Search for verified specialists and book your appointments from the comfort of your home.
            </motion.p>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button onClick={() => scrollToSection('find-doctor')} className="group bg-[#0F172A] dark:bg-[#10B981] text-white px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#10B981] dark:hover:bg-white dark:hover:text-[#000000] transition-all shadow-xl cursor-pointer">
                Book Now <Calendar size={16} />
              </button>
              <div className="flex items-center gap-3 px-6 py-4 bg-[#F8FAFC] dark:bg-[#000000] rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
                <CheckCircle2 size={16} className="text-[#10B981]" />
                <span className="text-[9px] font-black text-[#0F172A] dark:text-white uppercase tracking-widest">100% Verified Doctors</span>
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

      {/* --- QUICK SEARCH --- */}
      <section id="find-doctor" className="py-20 px-6 bg-[#F8FAFC] dark:bg-[#0a0a0a] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black text-[#059669] dark:text-[#10B981] uppercase tracking-[0.3em] mb-4">Specialties</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4 text-[#0F172A] dark:text-white">Choose Your Specialty</h2>
            <p className="text-[#475569] dark:text-gray-400 text-sm font-bold">Find the right expert for your health concerns.</p>
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
                className="bg-white dark:bg-[#000000] p-8 rounded-[32px] border border-gray-200 dark:border-white/10 text-center hover:border-[#10B981] dark:hover:border-[#10B981] hover:shadow-xl transition-all cursor-pointer group shadow-sm"
              >
                <div className="w-12 h-12 bg-[#F8FAFC] dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300 shadow-sm text-[#10B981]">
                  {spec.icon}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#0F172A] dark:text-white leading-tight group-hover:text-[#10B981] transition-colors">{spec.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-white dark:bg-[#000000] transition-colors">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16">
      <p className="text-[10px] font-black text-[#059669] dark:text-[#10B981] uppercase tracking-[0.4em] mb-4">Our Services</p>
      <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] dark:text-white">Everything for your Health.</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {[
        { 
          t: 'Online Appointment', 
          d: 'Skip the waiting room. Book your slot online in seconds.', 
          ic: <Clock size={18}/>, 
          img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2000&auto=format&fit=crop' 
        },
        { 
          t: 'Digital Prescriptions', 
          d: 'Get your medicines prescribed online and access them anywhere.', 
          ic: <FileSpreadsheet size={18}/>, 
          img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop' 
        },
        { 
          t: '24/7 Support', 
          d: 'Our health assistants are here to help you anytime, anywhere.', 
          ic: <Phone size={18}/>, 
          img: 'https://media.istockphoto.com/id/1589093340/photo/businesswoman-holding-smartphone-showing-virtual-24-7-with-clock-worldwide-nonstop-and-full.webp?a=1&b=1&s=612x612&w=0&k=20&c=7PBsPxTP0uM9Qyb6pJTcoqnJrraILyel6wtdORgK6T0=' 
        },
      ].map((s, i) => (
        <div key={i} className="group bg-white dark:bg-[#000000] rounded-[32px] overflow-hidden border border-gray-200 dark:border-white/10 hover:shadow-2xl hover:border-[#10B981]/30 transition-all cursor-pointer">
          <div className="h-48 w-full overflow-hidden bg-gray-100">
            <img 
              src={s.img} 
              alt={s.t} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
          </div>
          <div className="p-8">
            <div className="w-10 h-10 bg-[#F8FAFC] dark:bg-white/5 rounded-xl flex items-center justify-center mb-6 text-[#10B981] shadow-sm">
              {s.ic}
            </div>
            <h3 className="text-xs font-black mb-3 uppercase tracking-tight text-[#0F172A] dark:text-white">
              {s.t}
            </h3>
            <p className="text-[#475569] dark:text-gray-400 text-[11px] font-bold leading-relaxed">
              {s.d}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* --- HOW IT WORKS --- */}
      <section id="how-it-works" className="py-24 px-6 bg-[#0F172A] dark:bg-[#000000] text-white rounded-[60px] mx-4 md:mx-10 overflow-hidden relative transition-colors border dark:border-white/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
            <h2 className="text-4xl font-black tracking-tighter">Simple 3-Step Process</h2>
            <p className="text-[#94A3B8] font-bold text-sm mt-4 uppercase tracking-widest">Aise kaam karega Clinixy aapke liye.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-20">
            {[
              { n: '01', t: 'Find a Doctor', d: 'Apni bimari ke hisab se best specialist search karein.' },
              { n: '02', t: 'Book Slot', d: 'Apne pasand ke time aur date par appointment fix karein.' },
              { n: '03', t: 'Visit or Consult', d: 'Clinic jayein ya online consult karein bina kisi wait ke.' }
            ].map((step, i) => (
              <div key={i} className="space-y-4">
                <div className="text-6xl font-black text-[#10B981]/20 mb-6">{step.n}</div>
                <h4 className="text-sm font-black uppercase tracking-widest text-[#10B981]">{step.t}</h4>
                <p className="text-gray-300 dark:text-gray-400 text-xs font-medium leading-relaxed px-4">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section id="reviews" className="py-24 px-6 bg-white dark:bg-[#000000] transition-colors">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-black tracking-tighter text-[#0F172A] dark:text-white mb-16">What Our <br/><span className="text-[#10B981]">Patients Say.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { r: "Booking was very fast, and the experience with the doctor was great.", n: "Aman Verma" },
              { r: "Best platform for online health records. Minimal and Clean.", n: "Sanya Gupta" },
              { r: "Managing appointments has now become very easy.", n: "Rahul Singh" }
            ].map((rev, i) => (
              <div key={i} className="bg-[#F8FAFC] dark:bg-[#050505] p-8 rounded-[32px] border border-gray-200 dark:border-white/5 shadow-sm hover:shadow-md transition-all cursor-default">
                <p className="text-[#475569] dark:text-gray-400 text-xs italic font-bold mb-6 leading-relaxed">"{rev.r}"</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#0F172A] dark:text-white">— {rev.n}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#F8FAFC] dark:bg-[#000000] pt-24 pb-12 border-t border-gray-200 dark:border-white/5 px-6 md:px-12 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-[#0F172A] dark:bg-[#10B981] rounded-xl flex items-center justify-center shadow-lg">
                  <Activity size={20} className="text-[#10B981] dark:text-black" />
                </div>
                <span className="font-black text-xl tracking-tighter italic uppercase text-[#0F172A] dark:text-white">Clinixy</span>
              </div>
              <p className="text-[#475569] dark:text-gray-400 text-[11px] font-bold leading-relaxed max-w-xs uppercase tracking-wider">
                Revolutionizing patient care through intelligent digital infrastructure. 
                Your health journey, unified in one secure platform.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'Twitter', icon: <Twitter size={14} /> },
                  { name: 'LinkedIn', icon: <Linkedin size={14} /> },
                  { name: 'Instagram', icon: <Instagram size={14} /> }
                ].map((social) => (
                  <button 
                    key={social.name} 
                    className="w-9 h-9 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[#475569] dark:text-gray-400 hover:text-white hover:bg-[#10B981] transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-[10px] font-black text-[#0F172A] dark:text-white uppercase tracking-[0.3em]">Platform</p>
                <div className="flex flex-col gap-4 text-[10px] font-bold text-[#475569] dark:text-gray-400 uppercase tracking-widest">
                  <button onClick={() => scrollToSection('find-doctor')} className="hover:text-[#10B981] text-left transition-colors cursor-pointer">Find Doctors</button>
                  <button onClick={() => scrollToSection('services')} className="hover:text-[#10B981] text-left transition-colors cursor-pointer">Infrastructure</button>
                  <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#10B981] text-left transition-colors cursor-pointer">The Process</button>
                  <button onClick={() => scrollToSection('reviews')} className="hover:text-[#10B981] text-left transition-colors cursor-pointer">Testimonials</button>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-[10px] font-black text-[#0F172A] dark:text-white uppercase tracking-[0.3em]">Support</p>
                <div className="flex flex-col gap-4 text-[10px] font-bold text-[#475569] dark:text-gray-400 uppercase tracking-widest">
                  <Link to="/login" className="hover:text-[#10B981] transition-colors cursor-pointer">Account Login</Link>
                  <Link to="/register" className="hover:text-[#10B981] transition-colors cursor-pointer">Provider Portal</Link>
                  <a href="#" className="hover:text-[#10B981] transition-colors cursor-pointer">Help Center</a>
                  <a href="#" className="hover:text-[#10B981] transition-colors cursor-pointer">Privacy Policy</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <p className="text-[10px] font-black text-[#0F172A] dark:text-white uppercase tracking-[0.3em]">Stay Updated</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL" 
                  className="w-full bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl px-5 py-4 text-[10px] font-bold uppercase tracking-widest focus:border-[#10B981] outline-none transition-all shadow-sm text-[#0F172A] dark:text-white"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0F172A] dark:bg-[#10B981] text-white p-2.5 rounded-xl hover:bg-[#10B981] dark:hover:bg-white dark:hover:text-[#000000] transition-all cursor-pointer">
                  <ArrowRight size={14} />
                </button>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Phone size={14} className="text-[#10B981]" />
                <p className="text-[10px] font-black text-[#0F172A] dark:text-white tracking-widest">+91 1800-CLINIXY</p>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-300 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 dark:text-gray-600">
            <p className="text-[9px] font-black uppercase tracking-[0.4em]">
              © 2026 Clinixy Integrated Systems. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={12} className="text-[#10B981]" />
                <span className="text-[9px] font-black uppercase tracking-widest">End-to-End Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-[#10B981]" />
                <span className="text-[9px] font-black uppercase tracking-widest">Verified Healthcare Provider</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;