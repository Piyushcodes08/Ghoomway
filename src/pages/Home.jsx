import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroSlider from "../components/HeroSlider";
import CabBooking from "../components/CabBooking";

const Home = () => {
  const triggerRef = useRef(null);

  const isInView = useInView(triggerRef, {
    once: true,
    amount: 0.4,
  });

  return (
    <div className="bg-white">
      <HeroSlider />

      {/* Separate trigger for animation */}
      <div ref={triggerRef} className="h-[2px] w-full" />

    <motion.section
      className="relative z-10 -mt-16 md:-mt-32 flex w-full justify-center px-0 sm:px-6 lg:px-8 py-8 md:py-16"
        initial={false}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 120 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <CabBooking />
      </motion.section>
    </div>
  );
};

export default Home;