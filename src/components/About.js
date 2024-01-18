import React from "react";
// countup
import CountUp from "react-countup";
// intersection observe hook
import { useInView } from "react-intersection-observer";
//mootion
import { motion } from "framer-motion";
//varient
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className="section flex items-center"
      id="about"
      ref={ref}
    >
      <div className="container mx-auto">
        <div className="grid grid-col-1 lg:grid-cols-2 items-center gap-x-20 gap-y-0 h-screen">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[550px] w-full  mix-blend-lighten bg-top "
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
          >
            <motion.h2
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              className="h2 text-accent font-bold"
            >
              About me.
            </motion.h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Front-End Developer with over 4 years of
              experience
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              tempore fugiat laudantium in, magni accusamus ipsa quisquam
              dolorem nesciunt repudiandae.
            </p>
            {/* status */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-10">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={4} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years Of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              className="flex gap-x-8 items-center"
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="" className="text-gradient">
                {" "}
                My Portfolio
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
