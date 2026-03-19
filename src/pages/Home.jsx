import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CabBooking from "../components/CabBooking";
import heroBg from "../assets/jaselmair.jpg";

const Home = () => {
  const triggerRef = useRef(null);

  const isInView = useInView(triggerRef, {
    once: true,
    amount: 0.4,
  });

  return (
    <div className="bg-white">
      {/* Static Hero Section */}
      <section 
        className="relative w-full flex items-center bg-cover bg-center pb-50 pt-12"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.2) 100%), url(${heroBg})`,
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-[15px] md:px-6 relative z-10 pt-16 lg:pt-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-xl md:max-w-2xl lg:max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-[#f2ca1c] uppercase bg-[#f2ca1c]/10 rounded-full border border-[#f2ca1c]/20 backdrop-blur-sm">
              All India Travel Partner
            </span>
            <h1 className="mb-6 text-5xl font-black leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
              Elevate Your <br /> <span className="text-[#f2ca1c]">Journey</span> With Us.
            </h1>
            <p className="mb-10 text-lg leading-relaxed text-slate-300 sm:text-xl font-medium max-w-2xl">
              Plan your perfect round trip with our reliable cab service. Enjoy premium comfort, professional drivers, and highly affordable pricing for every mile.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="inline-flex items-center justify-center rounded-lg bg-[#31468e] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#f2ca1c] hover:text-black">
                Book Now
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:border-[#f2ca1c] hover:bg-[#f2ca1c] hover:text-black">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Animation Hook */}
      <div ref={triggerRef} className="h-1 w-full" id="booking" />

      {/* Floating Cab Booking Area */}
      <motion.section
        className="relative z-20 -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-40 flex w-full justify-center px-[15px] sm:px-6 lg:px-8 pb-12 md:pb-24"
        initial={false}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
      >
        <CabBooking />
      </motion.section>
    </div>
  );
};

export default Home;