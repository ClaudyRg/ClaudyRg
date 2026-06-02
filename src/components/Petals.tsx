"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PETAL_COUNT = 20;

export function Petals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(PETAL_COUNT)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            top: -20, 
            left: `${Math.random() * 100}%`,
            opacity: 0,
            scale: Math.random() * 0.5 + 0.5,
            rotate: Math.random() * 360
          }}
          animate={{ 
            top: "110%",
            left: `${(Math.random() * 20 - 10) + (i * 5)}%`,
            opacity: [0, 1, 1, 0],
            rotate: 360 + Math.random() * 360
          }}
          transition={{ 
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear"
          }}
          className="absolute w-4 h-4"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
            <path 
              d="M12 2C12 2 15 8 18 10C21 12 23 15 21 18C19 21 15 22 12 20C9 22 5 21 3 18C1 15 3 12 6 10C9 8 12 2 12 2Z" 
              fill="#f06292" 
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
