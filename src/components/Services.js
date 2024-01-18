import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
import { fadeIn } from "../variants";
//motion
import { motion } from "framer-motion";

const servises = [
  {
    name: "UI/Ux Designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam optio nam adipisci amet nulla, distinctio doloremque rerum quisquam excepturi?",
    link: "Learn more",
  },
  {
    name: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam optio nam adipisci amet nulla, distinctio doloremque rerum quisquam excepturi?",
    link: "Learn more",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam optio nam adipisci amet nulla, distinctio doloremque rerum quisquam excepturi?",
    link: "Learn more",
  },
  {
    name: "Product BInder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam optio nam adipisci amet nulla, distinctio doloremque rerum quisquam excepturi?",
    link: "Learn more",
  },
  // {
  //   name: "UI/Ux Designer",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aliquam optio nam adipisci amet nulla, distinctio doloremque rerum quisquam excepturi?",
  //   link: "Learn more",
  // },
];

const Services = () => {
  return (
    <section className="section mt-20 lg:mt-0 " id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & img*/}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent  mb-6">What I do</h2>
            <h3 className="h3 max-w-[445px] mb-14">
              I'm a Freelance Front-End Developer with over 4 years of
              experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1"
          >
            {/* servises List */}
            <div>
              {servises.map((servise, index) => {
                const { name, description, link } = servise;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className=" max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ml-2">
                      <a
                        href="#"
                        className="btn h-9 w-9 mb-[40px] flex justify-center items-center"
                      >
                        {" "}
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {" "}
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
