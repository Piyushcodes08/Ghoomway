import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ShieldCheck, TrendingUp, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPartner = () => {
  const benefits = [
    {
      title: "Guaranteed Earnings",
      description: "Consistent intercity bookings directly from our premium corporate and retail clients.",
      icon: TrendingUp,
    },
    {
      title: "Real-time Support",
      description: "24/7 dedicated partner helpline for on-trip emergencies and routing assistance.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Payouts",
      description: "No hidden deductions. Get settled weekly exactly as per the completed trip logs.",
      icon: Handshake,
    },
  ];

  return (
    <section id="partner" className="py-16 md:py-28 bg-slate-900 overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f2ca1c]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#31468e]/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2ca1c]/10 border border-[#f2ca1c]/20 text-[#f2ca1c] font-bold uppercase tracking-widest text-[11px] mb-4">
                Partner With Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Apni gaadi<br/> <span className="text-[#f2ca1c]">GhoomWay</span> ke saath register karein.
              </h2>
              <p className="text-xl font-medium text-slate-300 mb-2">
                Aur apna career grow karein.
              </p>
              <p className="text-base text-slate-400 mb-10 leading-relaxed max-w-md">
                Join India's fastest-growing premium mobility fleet. We respect our driving partners and provide them with the best-in-class earning opportunities.
              </p>
            </motion.div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="text-[#f2ca1c]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-1">{benefit.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-slate-900">Partner Application</h3>
                <p className="text-sm font-bold text-slate-500 mt-2">Fast approval within 48 hours</p>
              </div>
              
              <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest ml-1">Owner Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#31468e] transition-all font-medium"
                    placeholder="E.g. Ramesh Kumar"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#31468e] transition-all font-medium"
                      placeholder="+91"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest ml-1">City</label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#31468e] transition-all font-medium"
                      placeholder="E.g. Delhi NCR"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-slate-500 text-[10px] font-black uppercase tracking-widest ml-1">Vehicle Details</label>
                  <select defaultValue="" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#31468e] transition-all font-medium appearance-none">
                    <option value="" disabled>Select Vehicle Type</option>
                    <option value="sedan">Sedan (Dzire, Etios, etc.)</option>
                    <option value="suv">SUV (Innova, Ertiga, etc.)</option>
                    <option value="luxury">Luxury (Fortuner, Camry, etc.)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#31468e] hover:bg-[#20316b] text-white font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 group text-lg shadow-lg shadow-[#31468e]/30 mt-4"
                >
                  Apply Now <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-center mt-6 text-xs text-slate-500 font-medium">
                  By submitting, you agree to our <Link to="/about" className="text-[#31468e] underline">Terms of Partnership</Link>.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPartner;
