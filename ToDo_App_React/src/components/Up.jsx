import React from "react";
import { useState, useEffect } from "react";

const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-indigo-800 text-white p-2 rounded-full 
         hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700
          focus:ring-opacity-50 w-80 transition duration-400 ease-in-out"
        style={{ display: isVisible ? "inline" : "none" }}
      >
        Scroll Up
      </button>
    </div>
  );
};

export default Up;
