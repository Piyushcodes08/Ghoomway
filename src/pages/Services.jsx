import { motion } from "framer-motion";
import { servicesData } from "../data";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: "easeOut",
    },
  }),
};

export default function Services() {
  return (
    <section
      id="service-2"
      className="relative overflow-hidden bg-white py-12 md:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f7fbff_40%,#eef9f9_100%)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(49,70,142,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(49,70,142,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-[15px] md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-bold leading-tight text-[#31468e] sm:text-5xl md:text-6xl">
            Premium <span className="text-[#f2ca1c]">Services</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Experience comfort, safety, and luxury with our wide range of cab services mapped to every travel need.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div className="relative h-[278px] overflow-hidden rounded-[26px] border border-white/60 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[3px] group-hover:brightness-50"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

                {/* Content */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <div className="translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-inner">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h5 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                      {service.title}
                    </h5>
                  </div>
                </div>

                {/* Button */}
                <div className="absolute left-1/2 top-[110%] -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:top-[85%] group-hover:opacity-100">
                  <button
                    className={`inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-bold text-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ${service.buttonColor} hover:text-white`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}