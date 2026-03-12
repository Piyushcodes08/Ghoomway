// CarCursor.jsx
import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import cursorImg from '../assets/cursor.png'

const CarCursor = () => {
  // useSpring use karne se car smooth chalegi, bina jhatke ke.
  const cursorX = useSpring(0, { stiffness: 600, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 30 });

  useEffect(() => {
    // Mouse movement ko track karne wala function
    const moveMouse = (e) => {
      // Car image ka center mouse point par lane ke liye offset
      // Agar car 40px wide hai, toh hum 20px subtract karenge.
      const carWidth = 40; 
      const carHeight = 40; // Adjust based on your image aspect ratio

      cursorX.set(e.clientX - carWidth / 2);
      cursorY.set(e.clientY - carHeight / 2);
    };

    // Event listener add karein
    window.addEventListener("mousemove", moveMouse);

    // Cleanup function: component unmount hone par listener hatayein
    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* Aapki Car ki Image */}
      <img 
        src={cursorImg} // Public folder se path
        alt="Car Cursor"
        className="w-10 h-auto" // Tailwind width (w-10 = 40px). Height auto rakhein.
      />
    </motion.div>
  );
};

export default CarCursor;