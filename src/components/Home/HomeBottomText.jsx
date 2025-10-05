import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="flex justify-center mb-5 sm:mb-0 gap-5 items-center font-[font2] w-full ">
      <Link
        to="/projects"
        className="md:text-[6.5vw] text-[5vw] uppercase border-4 border-white px-10 rounded-full hover:border-[#d3fd50] hover:text-[#d3fd50] "
      >
        Projects
      </Link>
      <Link
        to="/agence"
        className="md:text-[6.5vw] text-[5vw] uppercase border-4 border-white px-10 rounded-full hover:border-[#d3fd50] hover:text-[#d3fd50] "
      >
        Agence
      </Link>
    </div>
  );
};

export default HomeBottomText;
