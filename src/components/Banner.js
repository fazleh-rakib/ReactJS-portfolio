import React from "react";
//images
import image from "../assets/avatar.svg";
import imaage2 from "../assets/picc.jpg";
//icons
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
// type animition
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* {text} */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              FAZLEH <span>RAKIB</span>
            </motion.h2>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              className="mb-6 text-[36px] lg:text-[60px] uppercase leading-[1]"
            >
              <span className="mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Ui/Ux Designer",
                  2000,
                  "Moto Vlogger..",
                  2000,
                ]}
                speed={50}
                className="text-accent font-bold"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              laudantium est facilis sapiente dignissimos aliquam illum
              laboriosam velit molestias eveniet!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg mb-2">Contact Me</button>
              <a href="" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              className=" flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="w-[350px] h-[300px] "
          >
            {/* {image} */}
            <img
              src={imaage2}
              alt=""
              className="shadow ml-4 rounded-full  h-auto align-middle border-none hidden lg:flex flex-1 max-w-[320px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
