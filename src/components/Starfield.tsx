"use client";

import { useEffect, useState } from "react";

export function Starfield() {
  const [stars, setStars] = useState<{ id: number; left: string; top: string; size: string; delay: string }[]>([]);

  useEffect(() => {
    const starCount = 100;
    const newStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-star-blink"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
