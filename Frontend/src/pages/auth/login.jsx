import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, ShieldCheck, Activity, Key, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  
  const { loginUser, loading } = useAuth();

  const loginFeatures = [
    { title: "Secure Access", desc: "Multi-factor authentication for data protection.", icon: <Key className="text-accent" size={32} /> },
    { title: "Real-time Sync", desc: "Access reports on any device instantly.", icon: <Activity className="text-accent" size={32} /> },
    { title: "Verified Network", desc: "Connected with 10k+ certified professionals.", icon: <ShieldCheck className="text-accent" size={32} /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveTab((prev) => (prev + 1) % loginFeatures.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const validate = () => {
    let newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email identity format";
    }
    
    if (!password) {
      newErrors.password = "Please enter your password";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const formdata = {
        email,
        password
      };
      await loginUser(formdata);
    }
  };

  return (
    <div className="h-screen w-full flex overflow-hidden font-sans bg-surface relative">
      
      {/* FORM SECTION (LEFT) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        exit={{ opacity: 0, x: 20 }}
        className="flex-1 h-full flex flex-col justify-center px-8 md:px-20 lg:px-24 bg-surface z-10"
      >
        <div className="max-w-md w-full mx-auto text-left">
          <div className="mb-10">
            <h3 className="text-4xl font-black text-graphite tracking-tighter">Welcome Back</h3>
            <p className="text-gray-500 font-medium mt-3 italic text-sm">Enter your details to access dashboard.</p>
          </div>

          <form onSubmit={handlesubmit} className="space-y-6" noValidate>
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-graphite/60 uppercase tracking-widest ml-1">Email Identity</label>
              <div className="relative">
                <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-500' : 'text-gray-400'}`} size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if(errors.email) setErrors({...errors, email: ""}); }}
                  placeholder="name@example.com"
                  className={`w-full pl-14 pr-5 py-4 bg-white border-2 rounded-[20px] shadow-sm outline-none transition-all text-graphite font-semibold ${errors.email ? 'border-red-500' : 'border-transparent focus:border-primary'}`}
                />
              </div>
              {errors.email && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-tight">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center mr-1">
                <label className="text-[11px] font-black text-graphite/60 uppercase tracking-widest ml-1">Password</label>
                <a href="#" className="text-[11px] font-bold text-primary hover:text-blue-700 uppercase hover:underline tracking-wider">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.password ? 'text-red-500' : 'text-gray-400'}`} size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if(errors.password) setErrors({...errors, password: ""}); }}
                  placeholder="••••••••••••"
                  className={`w-full pl-14 pr-12 py-4 bg-white border-2 rounded-[20px] shadow-sm outline-none transition-all text-graphite font-semibold ${errors.password ? 'border-red-500' : 'border-transparent focus:border-primary'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-[10px] text-red-500 font-bold ml-2 uppercase tracking-tight">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full bg-primary text-white py-5 rounded-[22px] font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-primary/20 active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>Sign In <ArrowRight size={20} /></>
              )}
            </button>
          </form>

          <div className="mt-12 text-center border-t border-gray-100 pt-8">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tight">
              New to Clinixy? <Link to="/register" className="text-accent hover:underline ml-2 transition-colors">Join free</Link>
            </p>
          </div>
        </div>
      </motion.div>

      {/* INFO SLIDER (RIGHT) - Enhanced with Graphite base */}
      <motion.div
        layoutId="auth-slider"
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="hidden lg:flex w-[45%] bg-graphite relative z-20 p-16 flex-col justify-between text-white overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.3)]"
      >
        {/* Background Decorative Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-primary to-blue-700 rounded-xl flex items-center justify-center shadow-xl border border-white/10">
            <Activity size={24} className="text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter italic text-white uppercase">Clinixy</span>
        </div>

        <div className="relative z-10 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="w-20 h-20 bg-white/[0.03] backdrop-blur-md rounded-[28px] flex items-center justify-center border border-white/10 shadow-2xl">
                {loginFeatures[activeTab].icon}
              </div>
              
              <div className="space-y-4">
                <h2 className="text-6xl font-black leading-[1.1] tracking-tighter text-white">
                  Your Health <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Our Priority.
                  </span>
                </h2>
                <p className="text-gray-400 text-xl max-w-sm font-medium leading-relaxed italic border-l-2 border-primary/30 pl-6">
                  {loginFeatures[activeTab].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="flex gap-2">
            {loginFeatures.map((_, i) => (
              <motion.div 
                key={i} 
                animate={{ 
                  width: activeTab === i ? 40 : 8,
                  backgroundColor: activeTab === i ? '#2563EB' : '#1e293b'
                }}
                className="h-2 rounded-full transition-all duration-300" 
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;