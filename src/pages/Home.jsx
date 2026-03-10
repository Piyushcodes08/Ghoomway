import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Home = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        duration: 9000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full"
    >
      {/* Slide 1 */}
    <SwiperSlide>
  <div
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('src/assets/jaselmair.jpg')",
    }}
    className="relative h-screen w-full bg-cover bg-center"
  >
    {/* Content */}
    <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-16  text-white max-w-xl">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
     From city travel to round trips, we’ve got you covered.
      </h1>

      <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-6">
        Plan your perfect round trip with our reliable cab service.
        Enjoy comfortable rides, professional drivers and affordable pricing.
      </p>

  <div className="flex gap-4">
  <button className="bg-[#31468e] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-[#f2ca1c] hover:text-black  hover:border-white text-lg">
    Book Now
  </button>

  <button className="border border-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#f2ca1c] hover:border-[#f2ca1c] hover:text-black text-lg">
    Learn More
  </button>
</div>
    </div>
  </div>
</SwiperSlide>

      {/* Slide 2 */}
   <SwiperSlide>
  <div
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('src/assets/temple2.jpg')",
    }}
    className="relative h-screen w-full bg-cover bg-center"
  >
    {/* Content */}
    <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-16  text-white max-w-xl">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
     Affordable prices, trusted drivers, and comfortable cars.
      </h1>

      <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-6">
        Plan your perfect round trip with our reliable cab service.
        Enjoy comfortable rides, professional drivers and affordable pricing.
      </p>
<div className="flex gap-4">
  <button className="bg-[#31468e] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-[#f2ca1c] hover:text-black  hover:border-white text-lg">
    Book Now
  </button>

  <button className="border border-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#f2ca1c] hover:border-[#f2ca1c] hover:text-black text-lg">
    Learn More
  </button>
</div>

    </div>
  </div>
</SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
  <div
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url('src/assets/compas-bg.jpg')",
    }}
    className="relative h-screen w-full bg-cover bg-center"
  >
    {/* Content */}
    <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-16  text-white max-w-xl">

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
     Book your cab in seconds and enjoy stress-free rides.
      </h1>

      <p className="text-sm md:text-lg lg:text-xl text-gray-200 mb-6">
   Booking your cab with us is quick, simple, and reliable.
Enjoy safe rides, professional drivers, and a comfortable journey every time. 
      </p>
<div className="flex gap-4">
  <button className="bg-[#31468e] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-[#f2ca1c] hover:text-black  hover:border-white text-lg">
    Book Now
  </button>

  <button className="border border-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-[#f2ca1c] hover:border-[#f2ca1c] hover:text-black text-lg">
    Learn More
  </button>
</div>

    </div>
  </div>
</SwiperSlide>
    </Swiper>
  );
};

export default Home;
