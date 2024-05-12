import React from "react";
import { useState, useEffect } from "react";

const Up = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {};

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <button
        key="up"
        className="bg-indigo-800 text-white p-2 rounded-full 
         hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700
          focus:ring-opacity-50 w-80 transition duration-500 ease-in-out"
        onClick={scrollToTop}
      >
        Scroll Up
      </button>
    </div>
  );
};

export default Up;
