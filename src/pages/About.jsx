import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Globe, ShieldCheck, Gamepad2 } from "lucide-react";
import cinematicBg from "../assets/cenematic-bg.jpg";
import CarGame from "../components/CarGame";

const About = () => {
  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Award },
    { label: "Happy Travelers", value: "50k+", icon: Users },
    { label: "Destinations Covered", value: "100+", icon: Globe },
    { label: "Safety Verified", value: "100%", icon: ShieldCheck },
  ];

  const values = [
    {
      title: "Premium Comfort",
      description: "We provide the most luxurious and comfortable travel experience tailored to your needs.",
    },
    {
      title: "Reliability",
      description: "Our fleet and drivers are punctual and professionally trained for your peace of mind.",
    },
  
  ];

  return (
    <section id="about" className="relative bg-white py-12 md:py-24 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

      <div className="w-full max-w-7xl mx-auto px-[15px] md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cinematicBg}
                alt="Premium Travel Experience"
                className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Since 2014</p>
                <h3 className="text-2xl font-bold">Redefining Modern Travel</h3>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-indigo-600 rounded-2xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
              About Our Journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
              We Craft <span className="text-indigo-600">Unforgettable</span> Travel Stories
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Founded on the belief that travel should be more than just moving from A to B, we strive to provide a premium, seamless, and personalized experience for every traveler. Our commitment to excellence has made us a leader in the industry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-1.5 h-12 bg-indigo-600 rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Game Section - New Interactive Addition */}
        <div className="mb-16 md:mb-24 mt-16 md:mt-24 -mx-[15px] md:mx-0 w-[calc(100%+30px)] md:w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-slate-50 rounded-none md:rounded-[2.5rem] pt-8 pb-0 md:p-12 border-y md:border border-slate-200 shadow-inner overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="md:w-1/3 px-[15px] md:px-0">
                <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
                  <Gamepad2 className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Interactive <span className="text-indigo-600">Lounge</span></h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  While we handle your journey, enjoy our custom mini-game. Test your reflexes and see if you have what it takes to be a pro driver!
                </p>
                <div className="flex gap-4">
                  <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Platform</p>
                    <p className="text-sm font-bold text-slate-700 uppercase">React Engine</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-[10px] uppercase font-bold text-slate-400 mb-1 tracking-widest">Experience</p>
                    <p className="text-sm font-bold text-slate-700 uppercase">Pure Fun</p>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 w-full">
                <CarGame />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-24 bg-indigo-900 rounded-[2rem] md:rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-10 h-10 text-indigo-300 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-indigo-200 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
