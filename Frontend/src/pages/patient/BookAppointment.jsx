import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Filter, MapPin, Star, Clock, ChevronRight, 
  ChevronLeft, Activity, ShieldCheck, CheckCircle2, 
  ArrowRight, X, Calendar, CreditCard, Award
} from "lucide-react";

// --- Mock Data ---
const DOCTORS = [
  {
    id: 1,
    name: "Dr. Rahul Sharma",
    specialty: "Senior Cardiologist",
    hospital: "City Heart Institute, New Delhi",
    rating: 4.9,
    reviews: "1.2k",
    experience: "15+ Years",
    fee: "₹1,200",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
    about: "Expert in interventional cardiology with a focus on minimally invasive heart surgeries."
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    specialty: "Neurologist",
    hospital: "NeuroCare Hospital, Mumbai",
    rating: 4.8,
    reviews: "800+",
    experience: "12+ Years",
    fee: "₹1,500",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400",
    about: "Specialized in neurodegenerative disorders and advanced migraine treatments."
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    specialty: "Dermatologist",
    hospital: "Skin Clinic, Bangalore",
    rating: 4.7,
    reviews: "2.1k",
    experience: "10+ Years",
    fee: "₹1,000",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400",
    about: "Focused on cosmetic dermatology and laser-based skin rejuvenation."
  }
];

const BookAppointment = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDocClick = (doc) => {
    setSelectedDoc(doc);
    setBookingStep(1);
  };

  const closeBooking = () => {
    setSelectedDoc(null);
    setSelectedDate("");
    setSelectedTime("");
  };

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-indigo-100 overflow-x-hidden">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="h-20 border-b border-slate-100 px-6 lg:px-12 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-100">
            <Activity size={22} />
          </div>
          <span className="text-xl font-black tracking-tight tracking-tighter">MEDICORE</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-400">
          <span className="text-indigo-600">Find Doctors</span>
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Medicines</span>
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Lab Tests</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-slate-900">Sign In</button>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all">Get Started</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- SEARCH & HERO --- */}
        {!selectedDoc && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-5xl font-black leading-tight mb-6">Find the best <span className="text-indigo-600">specialists</span><br />near you.</h1>
            <div className="flex flex-col md:flex-row gap-4 max-w-3xl bg-white p-2 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <Search className="text-slate-400" size={20} />
                <input type="text" placeholder="Search by name or specialty..." className="w-full outline-none font-medium text-slate-600" />
              </div>
              <div className="w-[1px] bg-slate-100 hidden md:block my-2" />
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <MapPin className="text-slate-400" size={20} />
                <input type="text" placeholder="New Delhi, India" className="w-full outline-none font-medium text-slate-600" />
              </div>
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-[1.5rem] font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
                Search
              </button>
            </div>
          </motion.div>
        )}

        {/* --- DOCTOR LISTING --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {!selectedDoc && DOCTORS.map((doc) => (
              <motion.div
                layoutId={`card-${doc.id}`}
                key={doc.id}
                onClick={() => handleDocClick(doc)}
                className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100/40 transition-all cursor-pointer group flex flex-col"
              >
                <div className="relative mb-6 overflow-hidden rounded-[2rem]">
                  <motion.img layoutId={`img-${doc.id}`} src={doc.image} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl flex items-center gap-1.5 shadow-sm">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-black">{doc.rating}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{doc.name}</h3>
                  <p className="text-indigo-600 font-bold text-sm mb-4">{doc.specialty}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-slate-50 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-100">{doc.experience} Exp</span>
                    <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-100">Verified</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Fee</p>
                    <p className="text-xl font-black text-slate-900">{doc.fee}</p>
                  </div>
                  <div className="h-12 w-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors shadow-lg">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- BOOKING MODAL / FULLSCREEN VIEW --- */}
        <AnimatePresence>
          {selectedDoc && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-white flex flex-col lg:flex-row overflow-hidden"
            >
              {/* Left Column: Doctor Profile */}
              <div className="lg:w-1/3 bg-slate-900 p-8 lg:p-16 text-white flex flex-col h-full overflow-y-auto">
                <button onClick={closeBooking} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-bold text-sm mb-12">
                  <X size={20} /> Close Preview
                </button>
                
                <motion.img layoutId={`img-${selectedDoc.id}`} src={selectedDoc.image} className="w-32 h-32 rounded-[2rem] object-cover mb-8 border-4 border-white/10 shadow-2xl" />
                
                <h2 className="text-4xl font-black mb-2">{selectedDoc.name}</h2>
                <p className="text-indigo-400 font-bold text-lg mb-6">{selectedDoc.specialty}</p>
                <p className="text-slate-400 leading-relaxed mb-10">{selectedDoc.about}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                    <Award className="text-indigo-400 mb-2" size={20} />
                    <p className="text-xl font-black">{selectedDoc.experience}</p>
                    <p className="text-[10px] uppercase font-bold text-slate-500">Professional</p>
                  </div>
                  <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                    <CheckCircle2 className="text-emerald-400 mb-2" size={20} />
                    <p className="text-xl font-black">{selectedDoc.reviews}</p>
                    <p className="text-[10px] uppercase font-bold text-slate-500">Patient Feedbacks</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Booking */}
              <div className="flex-1 bg-white p-8 lg:p-20 flex flex-col h-full overflow-y-auto">
                <div className="max-w-xl mx-auto w-full">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-black tracking-tighter">Book Appointment</h3>
                    <div className="flex gap-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`h-1.5 w-12 rounded-full transition-all duration-500 ${bookingStep >= i ? "bg-indigo-600" : "bg-slate-100"}`} />
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {bookingStep === 1 && (
                      <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Select Date</p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {["15 Feb", "16 Feb", "17 Feb", "18 Feb"].map(d => (
                            <button key={d} onClick={() => setSelectedDate(d)} className={`p-6 rounded-[2.5rem] border-2 transition-all flex flex-col items-center gap-1 ${selectedDate === d ? "border-indigo-600 bg-indigo-50" : "border-slate-50 bg-slate-50/50 hover:border-slate-200"}`}>
                              <span className="text-2xl font-black text-slate-900">{d.split(' ')[0]}</span>
                              <span className="text-xs font-bold text-slate-400 uppercase">{d.split(' ')[1]}</span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {bookingStep === 2 && (
                      <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                        <p className="text-slate-400 font-black text-xs uppercase tracking-widest">Available Slots</p>
                        <div className="grid grid-cols-2 gap-3">
                          {["09:00 AM", "11:30 AM", "02:00 PM", "05:00 PM", "06:30 PM", "08:00 PM"].map(t => (
                            <button key={t} onClick={() => setSelectedTime(t)} className={`py-5 rounded-2xl font-black transition-all border-2 ${selectedTime === t ? "bg-slate-900 border-slate-900 text-white shadow-xl" : "bg-white border-slate-100 hover:border-indigo-600"}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {bookingStep === 3 && (
                      <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
                        <div className="bg-indigo-50/50 p-8 rounded-[2.5rem] border border-indigo-100">
                          <div className="flex items-center gap-4 mb-8">
                            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                              <ShieldCheck className="text-indigo-600" size={24} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900">Secure Consultation</p>
                              <p className="text-xs text-slate-500">Encrypted payment & data protection</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex justify-between text-sm"><span className="text-slate-400 font-bold uppercase">Date & Time</span><span className="font-black">{selectedDate} at {selectedTime}</span></div>
                            <div className="h-[1px] bg-indigo-100 w-full" />
                            <div className="flex justify-between items-center"><span className="text-lg font-black text-slate-900">Total Payable</span><span className="text-3xl font-black text-indigo-600">{selectedDoc.fee}</span></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-12 flex gap-4">
                    {bookingStep > 1 && (
                      <button onClick={() => setBookingStep(bookingStep - 1)} className="h-16 w-16 rounded-2xl border-2 border-slate-100 flex items-center justify-center hover:bg-slate-50">
                        <ChevronLeft size={24} />
                      </button>
                    )}
                    <button 
                      onClick={() => bookingStep === 3 ? alert("Confirmed!") : setBookingStep(bookingStep + 1)}
                      disabled={(bookingStep === 1 && !selectedDate) || (bookingStep === 2 && !selectedTime)}
                      className="flex-1 h-16 bg-indigo-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all disabled:opacity-30"
                    >
                      {bookingStep === 3 ? "Complete Booking" : "Proceed Next"}
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default BookAppointment