import React from "react";
import { 
  Award, Users, Globe, ShieldCheck, MapPin, 
  Car, Plane, Map, Briefcase, Sparkles, Navigation, 
  Facebook, Instagram, Twitter, Youtube
} from "lucide-react";

// ==========================
// Image Assets Imports
// ==========================
import imgJas from "./assets/jaselmair.jpg";
import imgTemple1 from "./assets/temple.jpg";
import imgRoundTrip from "./assets/round-trip.jpg";
import imgSoloTrip from "./assets/solo-trip.jpg";
import imgTemple2 from "./assets/temple2.jpg";
import imgTaxi from "./assets/taxi.jpg";
import imgAirport from "./assets/aitport.jpg";
import imgPremiumService from "./assets/service (1).jpg";

// ==========================
// Theme Colors
// ==========================
export const themeColors = {
  blue: "#31468e",
  yellow: "#f2ca1c",
};

// ==========================
// 1. Header Nav Links
// ==========================
export const navLinks = ["home", "about", "destinations", "services", "gallery", "contact"];

// ==========================
// 2. Destinations Data
// ==========================
export const destinationsData = [
  { id: 1, name: "Jaisalmer", location: "Rajasthan", rating: 4.9, image: imgJas, price: "₹4,500" },
  { id: 2, name: "Golden Temple", location: "Amritsar", rating: 5.0, image: imgTemple1, price: "₹3,200" },
  { id: 3, name: "Mountain Retreat", location: "Himachal", rating: 4.8, image: imgRoundTrip, price: "₹5,800" },
  { id: 4, name: "Coastal Drive", location: "Goa", rating: 4.7, image: imgSoloTrip, price: "₹6,500" },
  { id: 5, name: "Heritage Tour", location: "Varanasi", rating: 4.9, image: imgTemple2, price: "₹4,000" },
];

// ==========================
// 3. About Section Data
// ==========================
export const aboutStats = [
  { label: "Years of Excellence", value: "10+", icon: Award },
  { label: "Happy Travelers", value: "50k+", icon: Users },
  { label: "Destinations Covered", value: "100+", icon: Globe },
  { label: "Safety Verified", value: "100%", icon: ShieldCheck },
];

export const aboutValues = [
  { title: "Premium Comfort", description: "We provide the most luxurious and comfortable travel experience tailored to your needs." },
  { title: "Reliability", description: "Our fleet and drivers are punctual and professionally trained for your peace of mind." },
];

// ==========================
// 4. Services Data
// ==========================
export const servicesData = [
  { title: "City Rides", image: imgTaxi, icon: Car, buttonColor: "hover:bg-[#31468e]" },
  { title: "Airport Transfers", image: imgAirport, icon: Plane, buttonColor: "hover:bg-sky-500" },
  { title: "Outstation Trips", image: imgRoundTrip, icon: Map, buttonColor: "hover:bg-emerald-500" },
  { title: "Corporate Travel", image: imgSoloTrip, icon: Briefcase, buttonColor: "hover:bg-slate-700" },
  { title: "Luxury Rentals", image: imgPremiumService, icon: Sparkles, buttonColor: "hover:bg-amber-500" },
  { title: "Heritage Tours", image: imgTemple2, icon: ShieldCheck, buttonColor: "hover:bg-rose-500" },
];

// ==========================
// 5. Cab Booking Data
// ==========================
export const bookingTabs = ["Outstation", "Local / Airport"];

export const outstationOptions = [
  { title: "Round Trip", subtitle: "Perfect for return journeys with comfort and flexibility.", icon: <Map className="text-xl" /> },
  { title: "One Way Trip", subtitle: "Ideal for single route travel with transparent pricing.", icon: <Navigation className="text-xl" /> },
];

export const localOptions = [
  { title: "Local Rental", subtitle: "Flexible hours for city rides, meetings, and day travel.", icon: <Car className="text-xl" /> },
  { title: "Airport Transfer", subtitle: "Smooth airport pickups and drop-offs with reliable service.", icon: <Plane className="text-xl" /> },
];

// ==========================
// 6. Gallery Data
// ==========================
export const galleryImages = [
  { id: 1, src: imgJas, title: "Golden Sands", category: "Nature" },
  { id: 2, src: imgTemple1, title: "Ancient Spirits", category: "Heritage" },
  { id: 3, src: imgRoundTrip, title: "Open Roads", category: "Adventure" },
  { id: 4, src: imgSoloTrip, title: "Solo Explorer", category: "Personal" },
  { id: 5, src: imgTemple2, title: "Temple Peace", category: "Heritage" },
  { id: 6, src: imgTaxi, title: "Smart City", category: "Business" },
  { id: 7, src: imgAirport, title: "Travel High", category: "Airport" },
  { id: 8, src: imgPremiumService, title: "Premium Service", category: "Luxury" },
];

// ==========================
// 7. Popular Search Data
// ==========================
export const popularCities = [
  "Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Ajmer",
  "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Dwarka", "Somnath",
  "Mumbai", "Pune", "Nashik", "Nagpur", "Mahabaleshwar", "Lonavala",
  "Agra", "Varanasi", "Lucknow", "Ayodhya", "Mathura", "Prayagraj"
];

export const popularAttractions = [
  "Hawa Mahal", "City Palace Udaipur", "Amer Fort", "Mehrangarh Fort", "Jaisalmer Sam Dunes",
  "Statue of Unity", "Somnath Temple", "Gir National Park", "Rann of Kutch", "Sabarmati Ashram",
  "Gateway of India", "Marine Drive", "Elephanta Caves", "Siddhi Vinayak", "Ajanta Ellora",
  "Taj Mahal", "Kashi Vishwanath", "Bara Imambara", "Sangam Prayagraj", "Prem Mandir Vrindavan"
];

// ==========================
// 8. Footer Data
// ==========================
export const footerQuickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Destinations", href: "#destinations" },
  { name: "Our Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const footerSocialLinks = [
  { icon: Facebook, href: "#", color: "hover:text-[#31468e]" },
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  { icon: Youtube, href: "#", color: "hover:text-red-500" },
];
