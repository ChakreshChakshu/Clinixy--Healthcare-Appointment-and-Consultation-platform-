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
  const {loginUser,loading}=useAuth()
  const [errors, setErrors] = useState({});

  const loginFeatures = [
    { title: "Secure Access", desc: "Multi-factor authentication for data protection.", icon: <Key className="text-[#10B981]" size={32} /> },
    { title: "Real-time Sync", desc: "Access reports on any device instantly.", icon: <Activity className="text-[#10B981]" size={32} /> },
    { title: "Verified Network", desc: "Connected with 10k+ certified professionals.", icon: <ShieldCheck className="text-[#10B981]" size={32} /> }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActiveTab((prev) => (prev + 1) % loginFeatures.length), 4500);
    return () => clearInterval(timer);
  }, []);


  const handlesubmit = async (e ) => {
    e.preventDefault();


    const formdata = {
      email,
      password
    }

    await loginUser(formdata)



  }





  return (
    <div className="h-screen w-full flex overflow-hidden font-sans bg-[#F8FAFC] relative">

      <motion.div
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
        className="flex-1 h-full flex flex-col justify-center px-8 md:px-20 lg:px-24 bg-[#F8FAFC] z-10"
      >
        <div className="max-w-md w-full mx-auto text-left">
          <div className="mb-10">
            <h3 className="text-4xl font-black text-[#0F172A] tracking-tighter">Welcome Back</h3>
            <p className="text-gray-500 font-medium mt-3 italic text-sm">Enter your details to access dashboard.</p>
          </div>

          <form onSubmit={handlesubmit} className="space-y-6" >
            <div className="space-y-1.5">
              <label className="text-[11px] font-black text-[#0F172A]/60 uppercase tracking-widest ml-1">Email Identity</label>
              <div className="relative">
                <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.email ? 'text-[#EF4444]' : 'text-gray-400'}`} size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={`w-full pl-14 pr-5 py-4 bg-white border-2 rounded-[20px] shadow-sm outline-none transition-all text-[#0F172A] font-semibold ${errors.email ? 'border-[#EF4444]' : 'border-transparent focus:border-[#2563EB]'}`}
                />
              </div>
              {errors.email && <p className="text-[10px] text-[#EF4444] font-bold ml-2 uppercase tracking-tight">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center mr-1">
                <label className="text-[11px] font-black text-[#0F172A]/60 uppercase tracking-widest ml-1">Password</label>
                <a href="#" className="text-[11px] font-bold text-[#2563EB] uppercase hover:underline tracking-wider">Forgot?</a>
              </div>
              <div className="relative group">
                <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.password ? 'text-[#EF4444]' : 'text-gray-400'}`} size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`w-full pl-14 pr-12 py-4 bg-white border-2 rounded-[20px] shadow-sm outline-none transition-all text-[#0F172A] font-semibold ${errors.password ? 'border-[#EF4444]' : 'border-transparent focus:border-[#2563EB]'}`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2563EB]">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-[10px] text-[#EF4444] font-bold ml-2 uppercase tracking-tight">{errors.password}</p>}
            </div>

            <button
                         type="submit"
                         disabled={loading}
                         className="w-full bg-[#2563EB] text-white py-5 rounded-[22px] font-bold text-lg 
             flex items-center justify-center gap-3 hover:bg-blue-700 transition-all 
             shadow-xl shadow-blue-500/10 active:scale-[0.98] mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                       >
                         {loading ? (
                           <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                         ) : (
                           <>
                             Sign In <ArrowRight size={20} />
                           </>
                         )}
                       </button>
          </form>

          <div className="mt-12 text-center border-t border-gray-100 pt-8">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-tight">
              New to Clinixy? <Link to="/register" className="text-[#10B981] hover:underline ml-2 transition-colors">Join free</Link>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        layoutId="auth-slider"
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="hidden lg:flex w-[45%] bg-[#0F172A] relative z-20 p-16 flex-col justify-between text-white overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.2)]"
      >
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-lg">
            <Activity size={24} className="text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter italic text-white uppercase tracking-tighter">Clinixy</span>
        </div>

        <div className="relative z-10 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-white/5 rounded-[24px] flex items-center justify-center border border-white/10 shadow-2xl">
                {loginFeatures[activeTab].icon}
              </div>
              <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white">
                Your Health <br /> <span className="text-[#10B981]">Our Priority.</span>
              </h2>
              <p className="text-gray-300 text-xl max-w-sm font-medium leading-relaxed italic">
                {loginFeatures[activeTab].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-3 relative z-10">
          {loginFeatures.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all ${activeTab === i ? 'w-10 bg-[#2563EB]' : 'w-2 bg-gray-700'}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;