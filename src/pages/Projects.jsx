import React, { useRef, useEffect } from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { imgs } from "../components/common/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  // Create a ref to store all project card elements
  const projectRefs = useRef([]);
  
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Select all project cards
    const projects = projectRefs.current;

    // Create a GSAP timeline for sequential animation
    projects.forEach((project, index) => {
      gsap.fromTo(
        project,
        {
          height: '50px',
          opacity: 0.15,
          y: 100, // Start 100px below
          scale: 0.95, // Slightly scaled down
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 70%", // Start when the top of the card is 80% from the top of the viewport
            end: "top 20%", // End when the top of the card is 20% from the top
            scrub: 1, // Smooth scrubbing tied to scroll
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
            // markers: true, // Uncomment for debugging
          },
        }
      );
    });
  }, []);

  return (
    <div className="p-3 min-h-screen">
      <div className="pt-[30vh]">
        <h2 className="font-[font2] text-[8vw] uppercase text-center">
          Projects
        </h2>
      </div>

      <div className="mt-10">
        {imgs.map((img, index) => (
          <div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)} // Assign ref to each card
            className="hero flex gap-3 w-full mb-2"
            style={{ minHeight: "80vh" }} // Adjusted height for better spacing
          >
            <ProjectCard imgs={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;