import React from "react";
import Video from "../components/Home/Video";
import HomeTopText from "../components/Home/HomeTopText";
import HomeBottomText from "../components/Home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="relative w-screen h-screen text-white flex flex-col overflow-hidden justify-between ">
        <HomeTopText />
        <HomeBottomText />

      </div>
    </div>
  );
};

export default Home;
