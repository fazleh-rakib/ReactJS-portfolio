import React from "react";
//motion
import { motion } from "framer-motion";
//varient
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Laatest <br /> Work.
              </h2>
              <p className="max-w-sm mb-16">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet voluptatum explicabo sit asperiores, officia recusandae
                beatae delectus accusamus accusantium neque!
              </p>
              <button className="btn btn-sm">View All Projects</button>
            </div>
            {/* img */}
            <div className="group relative overflow-hidden border-2 border-white/20 rounded-xl">
              <div>
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-300"
                  src={img1}
                  alt=""
                />
                {/* pre title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 z-50 transition-all duration-500">
                  <span className="text-gradient font-bold">UI/UX Designe</span>
                </div>
                {/*  title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 z-50 transition-all duration-800">
                  <span className="text-white text-3xl ">Project Title</span>
                </div>
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Work;
