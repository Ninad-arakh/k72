import React from "react";
import img1 from "../../assets/menu2.1.jpg";
import img2 from "../../assets/menu1.1.png";

const ProjectCard = ({imgs}) => {
  return (
    <>
      <div className=" md:w-1/2 transition-all rounded-none h-full group  hover:rounded-4xl overflow-hidden relative">
        <img src={imgs.img1} className="h-full w-full object-cover" alt="" />
        <div className="md:opacity-0 group-hover:opacity-100 transition-all md:absolute w-full h-full md:bg-black/25 top-0 left-0 flex justify-center items-center">
          <h2 className="uppercase font-[font2] text-3xl md:text-6xl rounded-full px-6 md:border-2 pt-3 ">
            see the project
          </h2>
        </div>
      </div>
      <div className=" md:w-1/2 transition-all rounded-none h-full group  hover:rounded-4xl overflow-hidden relative">
        <img src={imgs.img2} className="h-full w-full object-cover" alt="" />
        <div className="md:opacity-0 group-hover:opacity-100 transition-all md:absolute w-full h-full md:bg-black/25 top-0 left-0 flex justify-center items-center">
          <h2 className="uppercase font-[font2] text-3xl md:text-6xl rounded-full px-6 md:border-2 pt-3 ">
            see the project
          </h2>
        </div>
      </div>
      </>
  );
};

export default ProjectCard;
