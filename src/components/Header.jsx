import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
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
      className={clsx(
        "fixed top-0 left-0 w-full py-2 transition-all duration-500 font-poppins z-50",
        scrolled ? "bg-white" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto md:px-6 h-16 px-2 flex items-center justify-between">
        {/* Logo */}
        <Link className="md:w-25 w-20 h-auto object-cover flex items-center rounded-lg" to="/">
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={clsx(
            "flex space-x-8 transition-all duration-500 ease-in-out transform hidden lg:block z-50",
            {
              "opacity-0 -translate-y-4 scale-95 pointer-events-none": scrolled,
              "opacity-100 translate-y-0 scale-100": !scrolled,
            }
          )}
        >
          {["home", "about", "destinations", "gallery", "services", "contact"].map((item) => (
            <a
              key={item}
              href={item === "home" ? "/" : `#${item}`}
              className="text-base uppercase text-white font-semibold hover:text-[#f2ca1c] cursor-pointer"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Toggle Buttons */}
        <div className="space-x-3 flex items-center">
          <button
            className="text-base border-none rounded-2xl px-3 py-2 font-semibold inline-flex items-center space-x-2 bg-white text-black"
          >
            <img
              src={flag}
              alt="flag"
              className="rounded-full h-6 w-6 object-cover"
            />
            <span>En</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={clsx(
              "text-base transition-all duration-500 ease-in-out transform border-none rounded-2xl capitalize px-3 py-2 font-semibold bg-white text-black flex items-center gap-2 cursor-pointer z-50",
              {
                "opacity-100 translate-y-0": scrolled,
                // Fix: Added md: to pointer-events-none so it remains clickable on mobile
                "md:opacity-0 md:translate-y-4 translate-y-0 md:pointer-events-none": !scrolled,
              }
            )}
          >
            <Plus
              className="w-5 h-5 transition-transform duration-500"
              style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
            />
            <span className="relative h-6 overflow-hidden">
              <span
                className={clsx("block transition-all duration-500", {
                  "-translate-y-6 opacity-0": menuOpen,
                  "translate-y-0 opacity-100": !menuOpen,
                })}
              >
                Menu
              </span>
              <span
                className={clsx("absolute left-0 top-0 block transition-all duration-500", {
                  "translate-y-0 opacity-100": menuOpen,
                  "translate-y-6 opacity-0": !menuOpen,
                })}
              >
                Close
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Animated Dropdown Menu */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-screen lg:w-3/5 w-full rounded-tl-4xl rounded-bl-4xl",
          {
            "pointer-events-auto": menuOpen,
            "pointer-events-none": !menuOpen,
          }
        )}
      >
        {/* Yellow Layer */}
        <div
          className={clsx(
            "absolute top-0 right-0 w-full h-full bg-[#f2ca1c] transition-transform duration-700 ease-in-out rounded-tl-4xl rounded-bl-4xl",
            // Fix: Changed 'scrolled && menuOpen' to just 'menuOpen'
            { "translate-x-0": menuOpen, "translate-x-full": !menuOpen }
          )}
        />
        {/* White Layer */}
        <div
          className={clsx(
            "absolute top-0 right-0 w-full h-full bg-white transition-transform duration-700 ease-in-out rounded-tl-4xl rounded-bl-4xl delay-150",
            // Fix: Changed 'scrolled && menuOpen' to just 'menuOpen'
            { "translate-x-0": menuOpen, "translate-x-full": !menuOpen }
          )}
        />
        {/* Gray Layer */}
        <div
          className={clsx(
            "absolute top-0 right-0 w-full h-full bg-[#e3e1de] transition-transform duration-700 ease-in-out rounded-tl-4xl rounded-bl-4xl delay-300",
            // Fix: Changed 'scrolled && menuOpen' to just 'menuOpen'
            { "translate-x-0": menuOpen, "translate-x-full": !menuOpen }
          )}
        >
          {/* Menu Content */}
          <ul
            className={clsx(
              "relative z-50 h-full w-full flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden text-black transition-opacity duration-500 text-center pt-24 pb-12 lg:py-24 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/20",
              // Fix: Changed 'scrolled && menuOpen' to just 'menuOpen'
              { "opacity-100": menuOpen, "opacity-0": !menuOpen }
            )}
          >
            <div className="my-auto w-full">
            {["home", "about", "destinations", "gallery", "services", "contact"].map((item) => (
              <li
                key={item}
                className="border-b border-black/20 bg-gradient-to-l from-[#e3e1de] to-yellow-400 bg-[length:0%_100%] bg-right bg-no-repeat hover:bg-[length:100%_100%] transition-all duration-500 ease-in-out"
              >
                <a
                  href={item === "home" ? "/" : `#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 lg:py-4 2xl:py-6 text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold cursor-pointer capitalize leading-tight"
                >
                  {item}
                </a>
              </li>
            ))}
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
}