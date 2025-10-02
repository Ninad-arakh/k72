import React, { useContext, useRef } from "react";
import logo from "../../assets/logo.svg"
import { NavbarContext } from "../../context/NavContext";

const Navebar = () => {
    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)

  return (
    <div className="flex z-21 fixed top-0 w-screen justify-between">
        <img src={logo} alt="logo" className="w-44 cursor-pointer -mt-7 -ml-5 invert brightness-200 " />
      <div onClick={() => setNavOpen(true)} 
        onMouseEnter={()=>
        navGreenRef.current.style.height = "100%"
        }
        onMouseLeave={()=>{
        navGreenRef.current.style.height = "0%"
        }}

        className="bg-black relative w-52 h-12"
      >
        <div ref={navGreenRef} className="absolute w-full h-0 top-0 bg-[#d3fd50] transition-all"></div>
        <div className="relative flex flex-col gap-1 items-end justify-center h-10 cursor-pointer px-6">
          <div className="w-12 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navebar;
