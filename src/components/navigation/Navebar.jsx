import React, { useRef } from "react";
import logo from "../../assets/logo.svg"

const Navebar = () => {
    const navGreenRef = useRef(null)

  return (
    <div className="flex z-21 fixed top-0 w-screen justify-between">
        <img src={logo} alt="logo" className="w-44 cursor-pointer -mt-7 -ml-5 invert brightness-200 " />
      <div  
        onMouseEnter={()=>
        navGreenRef.current.style.height = "100%"
        }
        onMouseLeave={()=>{
        navGreenRef.current.style.height = "0%"
        }}

        className="bg-black relative w-52 h-12"
      >
        <div ref={navGreenRef} className="absolute w-full h-0 top-0 bg-[#d3fd50] transition-all"></div>
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default Navebar;
