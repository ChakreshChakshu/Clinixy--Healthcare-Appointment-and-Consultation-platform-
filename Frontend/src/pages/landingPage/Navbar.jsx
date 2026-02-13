import React from 'react';
import { Activity, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ isScrolled, isDarkMode, toggleTheme, scrollToSection }) => {
  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 ${
      isScrolled ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-primary dark:bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent dark:group-hover:bg-white transition-colors">
            <Activity size={18} className="text-accent dark:text-white group-hover:text-white dark:group-hover:text-accent transition-colors" />
          </div>
          <span className="font-black text-lg tracking-tighter italic uppercase text-primary dark:text-white">Clinixy</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-graphite dark:text-gray-400">
          <button onClick={() => scrollToSection('find-doctor')} className="hover:text-accent transition-colors cursor-pointer">Find Doctors</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors cursor-pointer">Services</button>
          <button onClick={() => scrollToSection('how-it-works')} className="hover:text-accent transition-colors cursor-pointer">How it works</button>
          <button onClick={() => scrollToSection('reviews')} className="hover:text-accent transition-colors cursor-pointer">Reviews</button>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/login" className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-primary dark:text-white hover:text-accent cursor-pointer transition-colors">Login</Link>
          <Link to="/register" className="bg-primary dark:bg-accent text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-accent dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer shadow-lg shadow-gray-200 dark:shadow-none">
            Join Now
          </Link>
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-surface dark:bg-white/5 text-primary dark:text-accent transition-all cursor-pointer hover:scale-110 active:scale-90"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;