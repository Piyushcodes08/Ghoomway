import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiSmartphone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineLocalTaxi } from "react-icons/md";
import { LuPlaneTakeoff, LuMapPinned } from "react-icons/lu";

const tabs = ["Outstation", "Local / Airport"];

const outstationOptions = [
  {
    title: "Round Trip",
    subtitle: "Perfect for return journeys with comfort and flexibility.",
    icon: <LuMapPinned className="text-xl" />,
  },
  {
    title: "One Way Trip",
    subtitle: "Ideal for single route travel with transparent pricing.",
    icon: <MdOutlineLocalTaxi className="text-xl" />,
  },
];

const localOptions = [
  {
    title: "Local Rental",
    subtitle: "Flexible hours for city rides, meetings, and day travel.",
    icon: <MdOutlineLocalTaxi className="text-xl" />,
  },
  {
    title: "Airport Transfer",
    subtitle: "Smooth airport pickups and drop-offs with reliable service.",
    icon: <LuPlaneTakeoff className="text-xl" />,
  },
];

export default function CabBooking() {
  const [activeTab, setActiveTab] = useState("Outstation");
  const [tripType, setTripType] = useState("Round Trip");
  const [airportOption] = useState("From Airport / To Airport");
  const [selectedAirport, setSelectedAirport] = useState("");
  const [mobile, setMobile] = useState("");

  const currentOptions =
    activeTab === "Outstation" ? outstationOptions : localOptions;

  return (
    <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.10)] sm:p-6 md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-[#31468e]/6 blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-44 w-44 rounded-full bg-[#f2ca1c]/10 blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_55%)]" />
      </div>

      <div className="relative z-10">
        <div className="mb-6 rounded-[24px] border border-[#31468e]/10 bg-gradient-to-r from-[#31468e] via-[#3d56aa] to-[#31468e] p-[1px] shadow-[0_12px_32px_rgba(49,70,142,0.20)]">
          <div className="rounded-[23px] bg-[linear-gradient(135deg,#31468e_0%,#3d56aa_100%)] px-5 py-5 text-center text-white">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
              Premium Cab Booking
            </p>
            <h2 className="text-xl font-bold sm:text-2xl">
              All India Cab Service
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Luxury, comfort, and reliability for every journey
            </p>
          </div>
        </div>

        <div className="mb-6 rounded-2xl border border-slate-200/70 bg-slate-100/80 p-1.5">
          <div className="grid grid-cols-2 gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setTripType(
                      tab === "Outstation" ? "Round Trip" : "Local Rental"
                    );
                  }}
                  className={`relative overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:text-base ${
                    isActive
                      ? "text-white shadow-[0_10px_24px_rgba(49,70,142,0.24)]"
                      : "text-slate-600 hover:bg-white hover:text-[#31468e]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-xl bg-[#31468e]"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {currentOptions.map((type) => {
            const isSelected = tripType === type.title;

            return (
              <motion.button
                key={type.title}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setTripType(type.title)}
                className={`group relative overflow-hidden rounded-[24px] border p-5 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-[#31468e]/20 bg-gradient-to-br from-[#31468e] to-[#425cb8] text-white shadow-[0_18px_40px_rgba(49,70,142,0.22)]"
                    : "border-slate-200 bg-white text-slate-800 hover:border-[#31468e]/20 hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)]"
                }`}
              >
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#f2ca1c]/10 blur-2xl" />

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                      isSelected
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-[#31468e]/10 bg-[#31468e]/5 text-[#31468e]"
                    }`}
                  >
                    {type.icon}
                  </div>

                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold sm:text-lg">
                        {type.title}
                      </h3>

                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                          isSelected
                            ? "border-white bg-white"
                            : "border-slate-300 bg-transparent"
                        }`}
                      >
                        {isSelected && (
                          <div className="h-2.5 w-2.5 rounded-full bg-[#31468e]" />
                        )}
                      </div>
                    </div>

                    <p
                      className={`text-sm leading-6 ${
                        isSelected ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {type.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "Local / Airport" && (
            <motion.div
              key="airport-fields"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-[#31468e]/20 hover:shadow-md">
                <label className="mb-2 block text-sm font-medium text-slate-500">
                  Airport Transfer Type
                </label>
                <button className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all hover:bg-slate-100">
                  <span>{airportOption}</span>
                  <IoIosArrowDown size={18} className="text-slate-500" />
                </button>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-[#31468e]/20 hover:shadow-md">
                <label className="mb-2 block text-sm font-medium text-slate-500">
                  Airport / Pickup Location
                </label>
                <div className="flex items-center rounded-xl bg-slate-50 px-4 py-3 focus-within:ring-2 focus-within:ring-[#31468e]/20">
                  <FiMapPin size={18} className="mr-3 text-[#31468e]" />
                  <input
                    type="text"
                    placeholder="Select Airport"
                    value={selectedAirport}
                    onChange={(e) => setSelectedAirport(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mb-6 rounded-[24px] border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-[#31468e]/20 hover:shadow-md">
          <label className="mb-2 block text-sm font-medium text-slate-500">
            Mobile Number
          </label>

          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#31468e]/20 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#31468e]/10">
            <span className="mr-3 rounded-full bg-[#31468e]/8 px-3 py-1 text-sm font-semibold text-[#31468e]">
              +91
            </span>
            <FiSmartphone className="mr-3 text-[#31468e]" size={18} />
            <input
              type="text"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.01, y: -1 }}
          whileTap={{ scale: 0.99 }}
          className="group relative w-full overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#31468e_0%,#3f58b2_60%,#31468e_100%)] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(49,70,142,0.28)] transition-all sm:text-lg"
          onClick={() => alert("Booking clicked!")}
        >
          <span className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.24),transparent)] transition-transform duration-1000 group-hover:translate-x-[120%]" />
          <span className="relative z-10 flex items-center justify-center gap-3">
            Check Price & Book Cab
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#f2ca1c]" />
          </span>
        </motion.button>

        <div className="mt-5 flex items-center justify-center gap-3 text-center text-xs text-slate-500 sm:text-sm">
          <div className="h-px w-10 bg-slate-200 sm:w-16" />
          <p>Fast booking • Trusted drivers • Transparent pricing</p>
          <div className="h-px w-10 bg-slate-200 sm:w-16" />
        </div>
      </div>
    </div>
  );
}