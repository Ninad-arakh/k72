import React from "react";

const Agence = () => {
  return (
    <div>
      <div className="section1">
        <div className="h-64 overflow-hidden w-50  absolute top-40 left-[30vw] rounded-3xl">
          <img
            className="w-full h-full object-cover "
            src="https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa"
            alt=""
          />
        </div>
        <div className="font-[font2]">
          <div className=" mt-[50vh]">
            <h1 className="text-[18vw] uppercase text-center leading-[16vw] pt-2">
              Sixty-<br></br>seventh<br></br> Twelve
            </h1>
          </div>
          <div className=" pl-[40%] mt-20 ">
            <h1 className="text-5xl ">
              {" "}
              &nbsp; &nbsp; &nbsp; &nbsp; Our curiosity fuels our creativity. We
              remain humble and say no to big egos, even yours. A brand is
              alive. It has values, a personality, a story. If we forget that,
              we may make good numbers in the short term, but we'll kill it in
              the long term. That's why we're committed to providing
              perspective, to building influential brands.
            </h1>
          </div>
        </div>
      </div>

      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
