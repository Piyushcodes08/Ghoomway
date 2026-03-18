import React from "react";
import { motion } from "framer-motion";

// Assets
import img1 from "../assets/jaselmair.jpg";
import img2 from "../assets/temple.jpg";
import img3 from "../assets/round-trip.jpg";
import img4 from "../assets/solo-trip.jpg";
import img5 from "../assets/temple2.jpg";
import img6 from "../assets/taxi.jpg";
import img7 from "../assets/aitport.jpg";
import img8 from "../assets/service (1).jpg";

const galleryImages = [
  { id: 1, src: img1, title: "Golden Sands", category: "Nature" },
  { id: 2, src: img2, title: "Ancient Spirits", category: "Heritage" },
  { id: 3, src: img3, title: "Open Roads", category: "Adventure" },
  { id: 4, src: img4, title: "Solo Explorer", category: "Personal" },
  { id: 5, src: img5, title: "Temple Peace", category: "Heritage" },
  { id: 6, src: img6, title: "Smart City", category: "Business" },
  { id: 7, src: img7, title: "Travel High", category: "Airport" },
  { id: 8, src: img8, title: "Premium Service", category: "Luxury" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-12 md:py-24 bg-slate-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-[15px] md:px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Journey In Pictures
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            The <span className="text-indigo-500 underline decoration-indigo-500 underline-offset-8">Ghoomway</span> Gallery
          </h2>
          <p className="max-w-2xl mx-auto mt-8 text-slate-400 text-lg leading-relaxed">
            Capturing the essence of travel, one mile at a time. Explore our collection of premium travel experiences and happy moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group h-48 sm:h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-bold text-indigo-200 mb-1 tracking-widest">{image.category}</span>
                <h4 className="text-xl font-bold text-white mb-2">{image.title}</h4>
                <div className="w-8 h-1 bg-white rounded-full group-hover:w-full transition-all duration-500 delay-100" />
              </div>

              {/* View Icon (Optional decoration) */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-75">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between p-6 md:p-10 rounded-[2rem] bg-indigo-600 shadow-xl shadow-indigo-400/20 text-center md:text-left"
        >
          <div className="mb-6 md:mb-0">
             <h4 className="text-2xl font-bold text-white mb-2">Want to see more of our journeys?</h4>
             <p className="text-indigo-100">Follow our social media channels for daily travel inspiration.</p>
          </div>
          <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105">
            Follow @Ghoomway
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
