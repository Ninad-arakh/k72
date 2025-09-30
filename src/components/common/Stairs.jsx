import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = () => {
  const stairParentRef = useRef(null);
  const currentPath =useLocation().pathname

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParentRef.current, {
      display: "block",
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParentRef.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: "0%",
    });
  },[currentPath]);
  return (
    <div ref={stairParentRef} className=" w-full h-screen z-20 top-0 fixed">
      <div className="flex w-full h-full ">
        <div className="stairs w-1/5 h-full bg-black"></div>
        <div className="stairs w-1/5 h-full bg-black"></div>
        <div className="stairs w-1/5 h-full bg-black"></div>
        <div className="stairs w-1/5 h-full bg-black"></div>
        <div className="stairs w-1/5 h-full bg-black"></div>
      </div>
    </div>
  );
};

export default Stairs;
