import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="h-12 w-auto bg-indigo-700 m-0 p-0">
      <a href="/">
        <button
          className="text-white text-md p-4 justify-center items-center bg-indigo-700 rounded-r-full 
         hover:bg-indigo-600 focus:outline-none focus:ring-2  
           w-52 transition duration-500 ease-in-out"
        >
          Make it your own
        </button>
      </a>
    </div>
  );
};

export default Footer;
