import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import heroImg1 from "../assets/jaselmair.jpg";
import heroImg2 from "../assets/compas-bg.jpg";
import heroImg3 from "../assets/temple2.jpg";

import "swiper/css";

const slides = [
  {
    image: heroImg1,
    title: "From city travel to round trips, we’ve got you covered.",
    description:
      "Plan your perfect round trip with our reliable cab service. Enjoy comfortable rides, professional drivers and affordable pricing.",
  },
  {
    image: heroImg2,
    title: "Affordable prices, trusted drivers, and comfortable cars.",
    description:
      "Plan your perfect round trip with our reliable cab service. Enjoy comfortable rides, professional drivers and affordable pricing.",
  },
  {
    image: heroImg3,
    title: "Book your cab in seconds and enjoy stress-free rides.",
    description:
      "Booking your cab with us is quick, simple, and reliable. Enjoy safe rides, professional drivers, and a comfortable journey every time.",
  },
];

const HeroSlider = () => {
  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-screen w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.38), rgba(0,0,0,0.12)), url(${slide.image})`,
              }}
            >
              <div className="absolute left-6 top-1/2 max-w-xl -translate-y-1/2 text-white md:left-16 lg:max-w-2xl">
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>

                <p className="mb-6 text-base leading-7 text-gray-200 md:text-lg">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="rounded-lg bg-[#31468e] px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#f2ca1c] hover:text-black">
                    Book Now
                  </button>

                  <button className="rounded-lg border border-white px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:border-[#f2ca1c] hover:bg-[#f2ca1c] hover:text-black">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;