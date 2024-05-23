import React from "react";
import { useState, useEffect } from "react";

const FooterUp = () => {
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
    <div className="h-12 w-auto bg-indigo-700 m-0 p-0">
      <a href="https://github.com/nborcic/ToDo_App_React">
        <button
          className="text-white text-md p-4 justify-center items-center bg-indigo-700 rounded-r-full 
         hover:bg-indigo-600 focus:outline-none focus:ring-2  
           w-52 transition duration-500 ease-in-out h-6"
        >
          Make it your own
        </button>
      </a>
      <div className="flex justify-center items-center bg-indigo-700">
        {isVisible ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-indigo-800 text-white p-2 rounded-full 
         hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700
          focus:ring-opacity-50 w-80 transition duration-400 ease-in-out"
          >
            Scroll Up
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default FooterUp;
