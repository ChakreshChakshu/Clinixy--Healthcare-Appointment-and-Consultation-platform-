import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Stethoscope, Building2, Mail, Lock, ArrowRight, Activity, Eye, EyeOff, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Register = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const { registerUser, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [strength, setStrength] = useState({ score: 0, label: "", color: "bg-gray-200" });

  const requirements = [
    { label: "At least 6 characters", test: (p) => p.length >= 6 },
    { label: "Contains uppercase", test: (p) => /[A-Z]/.test(p) },
    { label: "Contains a number", test: (p) => /[0-9]/.test(p) },
    { label: "Special character", test: (p) => /[^A-Za-z0-9]/.test(p) },
  ];

  const checkStrength = (pass) => {
    let score = 0;
    requirements.forEach(req => { if (req.test(pass)) score++; });

    const levels = [
      { label: "Too Weak", color: "bg-red-500" },
      { label: "Weak", color: "bg-orange-500" },
      { label: "Fair", color: "bg-yellow-500" },
      { label: "Strong", color: "bg-primary" },
      { label: "Very Strong", color: "bg-accent" }
    ];

    setStrength({ 
      score: (score / 4) * 100, 
      label: pass.length > 0 ? levels[score].label : "", 
      color: pass.length > 0 ? levels[score].color : "bg-gray-200" 
    });
  };

  const features = [
    { title: "For Patients", desc: "Manage health records and book appointments instantly.", icon: <User className="text-accent" size={32} /> },
    { title: "For Doctors", desc: "Streamline practice with smart digital prescriptions.", icon: <Stethoscope className="text-accent" size={32} /> },
    { title: "For Clinics", desc: "Centralized management for staff and inventory.", icon: <Building2 className="text-accent" size={32} /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveTab((prev) => (prev + 1) % features.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!name.trim()) newErrors.name = "Full Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) newErrors.email = "Invalid email format";
    if (password.length < 6) newErrors.password = "Password is too weak";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await registerUser({ name, email, password });
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden font-sans bg-surface relative">
      {/* LEFT SIDE - INFO SLIDER (Enhanced Colors) */}
      <motion.div 
        layoutId="auth-slider" 
        className="hidden lg:flex w-[45%] h-full bg-graphite relative z-20 p-16 flex-col justify-between text-white overflow-hidden shadow-[10px_0_30px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-xl border border-white/10">
            <Activity size={24} className="text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter italic text-white uppercase">CLINIXY</span>
        </div>

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab} 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 30 }} 
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-white/[0.03] backdrop-blur-md rounded-[28px] flex items-center justify-center border border-white/10 shadow-2xl">
                {features[activeTab].icon}
              </div>
              <h2 className="text-6xl font-black leading-[1.1] tracking-tighter text-white">
                Modern Care <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Refined.
                </span>
              </h2>
              <p className="text-gray-400 text-xl italic font-medium max-w-sm leading-relaxed border-l-2 border-primary/30 pl-6">
                {features[activeTab].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="flex gap-2">
            {features.map((_, i) => (
              <motion.div 
                key={i} 
                animate={{ width: activeTab === i ? 40 : 8, backgroundColor: activeTab === i ? '#2563EB' : '#1e293b' }}
                className="h-2 rounded-full transition-all duration-300" 
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* RIGHT SIDE - FORM SECTION */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 h-full flex flex-col justify-center px-8 md:px-20 lg:px-24 bg-surface z-10">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8 text-left">
            <h3 className="text-4xl font-black text-graphite tracking-tighter">Create Account</h3>
            <p className="text-gray-400 font-medium mt-2 italic text-sm">Join the world's smartest health hub.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1 text-left">
              <label className="text-[10px] font-black text-graphite/60 uppercase tracking-widest ml-1">Full Name</label>
              <div className="relative">
                <User className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.name ? 'text-red-500' : 'text-gray-400'}`} size={18} />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className={`w-full pl-14 pr-5 py-3.5 bg-white border-2 rounded-[18px] shadow-sm outline-none transition-all text-graphite font-semibold ${errors.name ? 'border-red-500' : 'border-transparent focus:border-primary'}`} />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label className="text-[10px] font-black text-graphite/60 uppercase tracking-widest ml-1">Email Identity</label>
              <div className="relative">
                <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} size={18} />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" className={`w-full pl-14 pr-5 py-3.5 bg-white border-2 rounded-[18px] shadow-sm outline-none transition-all text-graphite font-semibold ${errors.email ? 'border-red-500' : 'border-transparent focus:border-primary'}`} />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label className="text-[10px] font-black text-graphite/60 uppercase tracking-widest ml-1">Password</label>
              <div className="relative group">
                <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${password.length > 0 ? (strength.score > 70 ? 'text-accent' : 'text-orange-400') : 'text-gray-400'}`} size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); checkStrength(e.target.value); }}
                  placeholder="••••••••••••"
                  className={`w-full pl-14 pr-12 py-3.5 bg-white border-2 rounded-[18px] shadow-sm outline-none transition-all text-graphite font-semibold 
                    ${password.length > 0 ? (strength.score < 40 ? 'border-red-400' : strength.score < 75 ? 'border-yellow-400' : 'border-accent') : 'border-transparent focus:border-primary'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-3 px-1">
                {requirements.map((req, i) => {
                  const isMet = req.test(password);
                  return (
                    <div key={i} className="flex items-center gap-2">
                      {isMet ? <CheckCircle2 size={12} className="text-accent" /> : <Circle size={12} className="text-gray-300" />}
                      <span className={`text-[9px] font-bold uppercase tracking-tighter ${isMet ? 'text-graphite' : 'text-gray-400'}`}>
                        {req.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="h-1.5 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${strength.score}%` }} className={`h-full ${strength.color} transition-all duration-500`} />
              </div>
            </div>

            <button type="submit" disabled={loading} className="cursor-pointer w-full bg-primary text-white py-4 rounded-[20px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl active:scale-[0.98] mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div> : <>Get Started <ArrowRight size={20} /></>}
            </button>
          </form>

          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">
              Member already? <Link to="/login" className="text-primary hover:underline ml-1 transition-colors">Log in here</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;