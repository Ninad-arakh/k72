import React from "react";
import Video from "./Video";

const HomeTopText = () => {
  return (
    <div className="font-[font1] pt-3 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">The spark</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">
        Who
        <div className="h-[8vw]  rounded-[45%] overflow-hidden">
          <Video />
        </div>
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">generates</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">there</div>
      <div className="text-[9.5vw] uppercase leading-[8vw] flex items-center justify-center">creativity</div>
    </div>
  );
};

export default HomeTopText;
