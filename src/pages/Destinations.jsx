import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Assets
import img1 from "../assets/jaselmair.jpg";
import img2 from "../assets/temple.jpg";
import img3 from "../assets/round-trip.jpg";
import img4 from "../assets/solo-trip.jpg";
import img5 from "../assets/temple2.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const destinations = [
  {
    id: 1,
    name: "Jaisalmer",
    location: "Rajasthan",
    rating: 4.9,
    image: img1,
    price: "₹4,500",
  },
  {
    id: 2,
    name: "Golden Temple",
    location: "Amritsar",
    rating: 5.0,
    image: img2,
    price: "₹3,200",
  },
  {
    id: 3,
    name: "Mountain Retreat",
    location: "Himachal",
    rating: 4.8,
    image: img3,
    price: "₹5,800",
  },
  {
    id: 4,
    name: "Coastal Drive",
    location: "Goa",
    rating: 4.7,
    image: img4,
    price: "₹6,500",
  },
  {
    id: 5,
    name: "Heritage Tour",
    location: "Varanasi",
    rating: 4.9,
    image: img5,
    price: "₹4,000",
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-12 md:py-24 bg-slate-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-[15px] md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Explore the World
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Destinations</span> For Your Next Journey
            </h2>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors group"
          >
            View All Destinations <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false, spaceBetween: 20 },
            1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 30 },
            1280: { slidesPerView: 4, centeredSlides: false, spaceBetween: 30 },
          }}
          className="destinations-swiper !pb-16"
        >
          {destinations.map((dest) => (
            <SwiperSlide key={dest.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="relative group h-[450px] rounded-3xl overflow-hidden shadow-xl bg-white"
              >
                {/* Image */}
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-1 text-indigo-400 mb-2">
                        <MapPin size={14} />
                        <span className="text-xs font-bold uppercase tracking-widest">{dest.location}</span>
                      </div>
                      <h3 className="text-2xl font-bold">{dest.name}</h3>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-sm font-bold">{dest.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-white/20 pt-6 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Starting from</p>
                      <p className="text-xl font-bold">{dest.price}</p>
                    </div>
                    <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-110">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
