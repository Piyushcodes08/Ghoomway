import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiSmartphone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function CabBooking() {
  const [activeTab, setActiveTab] = useState("Outstation");
  const [tripType, setTripType] = useState("Local Rental");
  const [airportOption, setAirportOption] = useState("From Airport / To Airport");
  const [selectedAirport, setSelectedAirport] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="w-[90%] bg-white rounded-3xl shadow-xl p-6"
    >
      {/* Heading */}
      <div className="bg-[#f2ca1c] text-center py-3 rounded-xl font-semibold text-lg">
        All India Cab Service
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-6">
        {["Outstation", "Local / Airport"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
              activeTab === tab
                ? "bg-[#f2ca1c] text-black"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Trip Type / Options */}
      <div className="flex gap-4 mt-6">
        {activeTab === "Outstation" ? (
          ["Round Trip", "One Way Trip"].map((type) => (
            <div
              key={type}
              onClick={() => setTripType(type)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl w-full cursor-pointer transition-colors ${
                tripType === type
                  ? "bg-[#f2ca1c] text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  tripType === type ? "bg-white border-white" : "border-black"
                }`}
              ></div>
              {type}
            </div>
          ))
        ) : (
          ["Local Rental", "Airport Transfer"].map((type) => (
            <div
              key={type}
              onClick={() => setTripType(type)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl w-full cursor-pointer transition-colors ${
                tripType === type
                  ? "bg-[#f2ca1c] text-black font-semibold"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  tripType === type ? "bg-black border-black" : "border-gray-400"
                }`}
              ></div>
              {type}
            </div>
          ))
        )}
      </div>

      {/* Local / Airport Inputs */}
      {activeTab === "Local / Airport" && (
        <div className="mt-6 flex flex-col gap-4">
          {/* Airport Option */}
          <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-xl cursor-pointer w-full">
            {airportOption}
            <IoIosArrowDown size={20} />
          </div>

          {/* Airport Selection */}
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl cursor-pointer w-full">
            <FiMapPin size={20} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Select Airport"
              value={selectedAirport}
              onChange={(e) => setSelectedAirport(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>
      )}

      {/* Mobile Number */}
      <div className="flex items-center mt-4 bg-gray-100 p-4 rounded-xl w-full">
        <span className="mr-2">+91</span>
        <FiSmartphone className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 bg-[#f2ca1c] py-4 rounded-xl font-semibold text-lg"
        onClick={() => alert("Booking clicked!")}
      >
        Check Price & Book Cab
      </motion.button>
    </motion.div>
  );
}