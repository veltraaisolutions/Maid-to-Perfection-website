"use client";
import { useEffect, useState } from "react";

const images = [
  "/backgrounds/bg-1.jpeg",
  "/backgrounds/bg-2.jpeg",
  "/backgrounds/bg-3.jpeg",
];

export default function ParallaxBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      // Split scroll range into 3 equal thirds
      const third = docHeight / 3;
      const index = Math.min(Math.floor(scrollY / third), 2);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${src}')`,
            opacity: i === activeIndex ? 1 : 0,
            backgroundAttachment: "fixed", // parallax effect
          }}
        />
      ))}
    </div>
  );
}
