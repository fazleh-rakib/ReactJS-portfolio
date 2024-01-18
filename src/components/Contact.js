import React from "react";
//motion
import { motion } from "framer-motion";
//varient
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className=" py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div 
           variants={fadeIn("up", 0.3)}
           initial="hidden"
           whileInView={"show"}
          className="flex-1 flex items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 traking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
           variants={fadeIn("down", 0.3)}
           initial="hidden"
           whileInView={"show"}
          className="flex-1 border rounded-2xl p-8 flex flex-col gap-y-6 items-start">
            <motion.input
             variants={fadeIn("right", 0.5)}
             initial="hidden"
             whileInView={"show"}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
             <motion.input
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />
            <motion.textarea
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your massaage"
            ></motion.textarea>
            <motion.button
             
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
            className="btn btn-sm">Send massage</motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
