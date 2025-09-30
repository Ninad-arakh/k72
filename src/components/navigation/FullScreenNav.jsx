import React from "react";
import menu11 from "../../assets/menu1.1.png";
import menu1 from "../../assets/menu1.jpg";
import menu2 from "../../assets/menu2.png";
import menu21 from "../../assets/menu2.1.jpg";
import blogs from "../../assets/menu3.gif"

const FullScreenNav = () => {
  return (
    <div id="fullScreenNav" className="absolute h-screen w-screen bg-black ">
      <div className="mt-[10vw] overflow-hidden">
        <div className="link border-t-[0.1px] relative">
          <h1 className="text-[6vw] font-[font2] leading-[0.8] pt-3  uppercase text-center ">
            Projects
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
            <div className=" flex gap-8 items-center whitespace-nowrap moveX">
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to see everything </h2>
              <img src={menu11} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to see everything </h2>
              <img src={menu1} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to see everything </h2>
              <img src={menu11} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to see everything </h2>
            </div>
          </div>
        </div>
        <div className="link border-t-[0.1px] relative">
          <h1 className="text-[6vw] font-[font2] leading-[0.8] pt-3  uppercase text-center ">
            Agency
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
            <div className=" flex gap-8 items-center whitespace-nowrap moveX">
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to know everything</h2>
              <img src={menu2} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to know everything</h2>
              <img src={menu2} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to know everything</h2>
              <img src={menu2} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to know everything</h2>
            </div>
          </div>
        </div>
        <div className="link border-t-[0.1px] relative">
          <h1 className="text-[6vw] font-[font2] leading-[0.8] pt-3  uppercase text-center ">
            Contact
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
            <div className=" flex gap-8 items-center whitespace-nowrap moveX">
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to send a fax</h2>
              <img src={menu21} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to send a fax</h2>
              <img src={menu21} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to send a fax</h2>
              <img src={menu21} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">to send a fax</h2>
            </div>
          </div>
        </div>
        <div className="link border-t-[0.1px]  border-b-[0.5px]  relative">
          <h1 className="text-[6vw] font-[font2] leading-[0.8] pt-3  uppercase text-center ">
            Blogs
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#d3fd50] text-black">
            <div className=" flex gap-8 items-center whitespace-nowrap moveX">
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">read the articles</h2>
              <img src={blogs} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">read the articles</h2>
              <img src={blogs} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">read the articles</h2>
              <img src={blogs} className="w-48 py-2 h-20 rounded-full shrink-0" />
              <h2 className="text-[6vw] font-[font2] leading-[0.8] pt-3 uppercase text-center ">read the articles</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
