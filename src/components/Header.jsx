import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import flag from "../assets/Flag_of_India.svg.png";
import logo from "../assets/logo.png";
import { Plus } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-2 transition-all duration-500 font-poppins  z-50 ${
        scrolled ? "bg-white " : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link className="w-35 object-cover h-35 flex items-center ">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Nav (Animated Hide) */}
        <nav
          className={`flex space-x-8 transition-all duration-500 ease-in-out transform hidden lg:block ${
            scrolled
              ? "opacity-0 -translate-y-4 scale-95 pointer-events-none"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          <Link className="text-base text-white font-semibold hover:text-yellow-500">Home</Link>
          <Link className="text-base text-white font-semibold hover:text-yellow-500">About</Link>
          <Link className="text-base text-white font-semibold hover:text-yellow-500">Services</Link>
          <Link className="text-base text-white font-semibold hover:text-yellow-500">Contact</Link>
        </nav>

        {/* Toggle Button (Animated Show) */}

        <div className="space-x-3 flex items-center ">
          <button className="text-base border-none rounded-2xl px-3 py-2 font-semibold inline-flex items-center space-x-2 bg-white text-black">
            <img
              src={flag}
              alt="flag"
              className="rounded-full h-6 w-6 object-cover"
            />
            <span>En</span>
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-base transition-all duration-500 ease-in-out transform border-none rounded-2xl capitalize px-3 py-2 font-semibold bg-white text-black flex items-center gap-2 cursor-pointer z-50 ${
              scrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <Plus
              className="w-5 h-5 transition-transform duration-500"
              style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            />

            <span className="relative h-6 overflow-hidden">
              <span
                className={`block transition-all duration-500 ${
                  menuOpen
                    ? "-translate-y-6 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                Menu
              </span>

              <span
                className={`absolute left-0 top-0 block transition-all duration-500 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
              >
                Close
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Animated Dropdown Menu */}
      <div
        className={`fixed top-0 right-0 h-screen lg:w-3/5 w-full rounded-tl-4xl rounded-bl-4xl ${
          scrolled && menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Yellow Layer */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-yellow-400 transition-transform duration-700 ease-in-out ${
            scrolled && menuOpen
              ? "translate-x-0 rounded-tl-4xl rounded-bl-4xl"
              : "translate-x-full rounded-tl-4xl rounded-bl-4xl"
          }`}
        />
        {/* White Layer */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-white transition-transform duration-700 ease-in-out ${
            scrolled && menuOpen
              ? "translate-x-0 delay-150 rounded-tl-4xl rounded-bl-4xl"
              : "translate-x-full delay-150 rounded-tl-4xl rounded-bl-4xl"
          }`}
        />

        {/* Gray Layer */}
        <div
          className={`absolute top-0 right-0 w-full h-full bg-[#e3e1de] transition-transform duration-700 ease-in-out ${
            scrolled && menuOpen
              ? "translate-x-0 delay-300 rounded-tl-4xl rounded-bl-4xl"
              : "translate-x-full delay-300 rounded-tl-4xl rounded-bl-4xl"
          }`}
        >
          {/* Menu Content */}
          <ul
            className={`relative z-50 h-full flex flex-col justify-center text-black transition-opacity duration-500 ${
              scrolled && menuOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <li
              className="
    border-b border-black/20
    bg-gradient-to-l from-[#e3e1de] to-yellow-400
    bg-[length:0%_100%]
    bg-right
    bg-no-repeat
    hover:bg-[length:100%_100%]
    transition-all duration-500 ease-in-out
  "
            >
              <a className="block px-6 py-4 text-7xl font-semibold cursor-pointer">
                Home
              </a>
            </li>
            <li
              className=" border-b border-black/20
    bg-gradient-to-l from-[#e3e1de] to-yellow-400
    bg-[length:0%_100%]
    bg-right
    bg-no-repeat
    hover:bg-[length:100%_100%]
    transition-all duration-500 ease-in-out"
            >
              <a className="block px-6 py-4 text-7xl font-semibold cursor-pointer">
                About
              </a>
            </li>
            <li
              className=" border-b border-black/20
    bg-gradient-to-l from-[#e3e1de] to-yellow-400
    bg-[length:0%_100%]
    bg-right
    bg-no-repeat
    hover:bg-[length:100%_100%]
    transition-all duration-500 ease-in-out"
            >
              <a className="block px-6 py-4 text-7xl font-semibold cursor-pointer">
                Services
              </a>
            </li>
            <li
              className=" border-b border-black/20
    bg-gradient-to-l from-[#e3e1de] to-yellow-400
    bg-[length:0%_100%]
    bg-right
    bg-no-repeat
    hover:bg-[length:100%_100%]
    transition-all duration-500 ease-in-out"
            >
              <a className="block px-6 py-4 text-7xl font-semibold cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
