import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Smartphone,
  Calendar,
  Clock,
  Users,
  Car,
  Navigation,
  ChevronDown,
} from "lucide-react";

import { bookingTabs as tabs, outstationOptions, localOptions } from "../data";

export default function CabBooking() {
  const [activeTab, setActiveTab] = useState("Outstation");
  const [tripType, setTripType] = useState("Round Trip");

  useEffect(() => {
    setTripType(activeTab === "Outstation" ? "Round Trip" : "Local Rental");
  }, [activeTab]);

  const currentOptions = activeTab === "Outstation" ? outstationOptions : localOptions;

  return (
    <div className="relative w-full max-w-6xl overflow-visible rounded-none sm:rounded-[32px] border-y sm:border-x border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-6 md:p-8">
      <div className="relative z-10 w-full">
        {/* Header Ribbon */}
        <div className="mb-6 rounded-[24px] border border-[#31468e]/10 bg-gradient-to-r from-[#31468e] via-[#3d56aa] to-[#31468e] p-[1px] shadow-[0_10px_28px_rgba(49,70,142,0.16)]">
          <div className="rounded-[23px] bg-[linear-gradient(135deg,#31468e_0%,#3d56aa_100%)] px-5 py-5 text-center text-white">
            <p className="mb-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
              Premium Cab Booking
            </p>
            <h2 className="text-xl font-black sm:text-2xl lg:text-3xl tracking-tight">
              All India Cab Services
            </h2>
          </div>
        </div>

        {/* Top Tabs */}
        <div className="mb-6 rounded-2xl border border-slate-200/70 bg-slate-100/80 p-1.5">
          <div className="grid grid-cols-2 gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative overflow-hidden rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 sm:text-base ${
                    isActive
                      ? "bg-[#31468e] text-white shadow-[0_8px_20px_rgba(49,70,142,0.20)]"
                      : "text-slate-600 hover:bg-white hover:text-[#31468e]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Trip Types Selection */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {currentOptions.map((type) => {
            const isSelected = tripType === type.title;

            return (
              <button
                key={type.title}
                onClick={() => setTripType(type.title)}
                className={`group relative overflow-hidden rounded-[24px] border p-5 text-left transition-all duration-300 ${
                  isSelected
                    ? "border-[#31468e]/20 bg-gradient-to-br from-[#31468e] to-[#425cb8] text-white shadow-[0_14px_28px_rgba(49,70,142,0.18)]"
                    : "border-slate-200 bg-white text-slate-800 hover:border-[#31468e]/30 hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                }`}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                      isSelected
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-[#31468e]/10 bg-[#31468e]/5 text-[#31468e]"
                    }`}
                  >
                    {type.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold sm:text-lg truncate">{type.title}</h3>

                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                          isSelected ? "border-white bg-white" : "border-slate-300 bg-transparent"
                        }`}
                      >
                        {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-[#31468e]" />}
                      </div>
                    </div>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isSelected ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {type.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="w-full h-px bg-slate-200 mb-8" />

        {/* Dynamic Booking Form Fields */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tripType}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* Pickup Location */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
              <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Pick-up City
              </label>
              <div className="flex items-center text-slate-700">
                <MapPin size={18} className="mr-2 text-[#31468e] shrink-0" />
                <input
                  type="text"
                  placeholder="Enter City or Airport"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 font-bold"
                />
              </div>
            </div>

            {/* Drop Location */}
            {tripType !== "Local Rental" && (
              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
                <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Drop City
                </label>
                <div className="flex items-center text-slate-700">
                  <Navigation size={18} className="mr-2 text-[#31468e] shrink-0" />
                  <input
                    type="text"
                    placeholder={
                      tripType === "Airport Transfer"
                        ? "Enter Hotel / Drop Area"
                        : "Enter Destination City"
                    }
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 font-bold"
                  />
                </div>
              </div>
            )}

            {/* Package / Hours */}
            {tripType === "Local Rental" && (
              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
                <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Rental Package
                </label>
                <div className="relative flex items-center text-slate-700">
                  <Clock size={18} className="mr-2 text-[#31468e] shrink-0" />
                  <select className="w-full bg-transparent text-sm outline-none font-bold cursor-pointer appearance-none">
                    <option>8 Hrs | 80 Kms</option>
                    <option>12 Hrs | 120 Kms</option>
                    <option>24 Hrs | Unlimited</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-0 text-slate-400 pointer-events-none" />
                </div>
              </div>
            )}

            {/* Pickup Date */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
              <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Pick-up Date
              </label>
              <div className="flex items-center text-slate-700 relative">
                <Calendar size={18} className="mr-2 text-[#31468e] shrink-0" />
                <input
                  type="date"
                  className="w-full bg-transparent text-sm outline-none font-bold cursor-pointer"
                />
              </div>
            </div>

            {/* Return Date */}
            {tripType === "Round Trip" && (
              <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
                <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Return Date
                </label>
                <div className="flex items-center text-slate-700 relative">
                  <Calendar size={18} className="mr-2 text-[#31468e] shrink-0" />
                  <input
                    type="date"
                    className="w-full bg-transparent text-sm outline-none font-bold cursor-pointer"
                  />
                </div>
              </div>
            )}

            {/* Pickup Time */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
              <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Pick-up Time
              </label>
              <div className="flex items-center text-slate-700 relative">
                <Clock size={18} className="mr-2 text-[#31468e] shrink-0" />
                <input
                  type="time"
                  className="w-full bg-transparent text-sm outline-none font-bold cursor-pointer"
                />
              </div>
            </div>

            {/* Car Type */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5 lg:col-span-2">
              <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Cab Category
              </label>
              <div className="relative flex items-center text-slate-700">
                <Car size={18} className="mr-2 text-[#31468e] shrink-0" />
                <select className="w-full bg-transparent text-sm outline-none font-bold cursor-pointer appearance-none">
                  <option>Hatchback (Mini) - 4 Seater</option>
                  <option>Sedan (Dzire/Etios) - 4 Seater</option>
                  <option>SUV (Ertiga/Innova) - 6 Seater</option>
                  <option>Premium SUV (Innova Crysta) - 7 Seater</option>
                  <option>Tempo Traveller - 12+ Seater</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Passengers */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
              <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Passengers
              </label>
              <div className="relative flex items-center text-slate-700">
                <Users size={18} className="mr-2 text-[#31468e] shrink-0" />
                <select className="w-full bg-transparent text-sm outline-none font-bold cursor-pointer appearance-none">
                  <option>1-4 Persons</option>
                  <option>5-6 Persons</option>
                  <option>7-9 Persons</option>
                  <option>10+ Persons</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/50 p-3 shadow-sm transition-all hover:border-[#31468e]/30 focus-within:border-[#31468e]/50 focus-within:bg-white focus-within:ring-4 focus-within:ring-[#31468e]/5">
              <label className="mb-1.5 ml-1 block text-[10px] font-black uppercase tracking-widest text-slate-500">
                Mobile No.
              </label>
              <div className="flex items-center text-slate-700">
                <Smartphone size={18} className="mr-2 text-[#31468e] shrink-0" />
                <span className="text-sm font-bold border-r border-slate-300 pr-2 mr-2">+91</span>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 font-bold"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <button
          className="group relative w-full overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#31468e_0%,#3f58b2_60%,#31468e_100%)] px-6 py-5 text-base font-black tracking-wide text-white shadow-[0_14px_30px_rgba(49,70,142,0.20)] transition-all sm:text-lg mt-4 hover:opacity-95"
          onClick={() => alert("Booking initiated!")}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            EXPLORE CABS & PRICES
          </span>
        </button>
      </div>
    </div>
  );
}