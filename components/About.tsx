"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-8 md:py-12 px-4 sm:px-8 md:px-16 lg:px-40 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mx-auto relative">
            <Image
              src="/avatar.jpg" // Replace with your image path
              alt="Profile Image"
              fill
              className="rounded-2xl object-cover shadow-lg"
              sizes="(max-width: 768px) 250px, 300px"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4 md:space-y-6 text-center md:text-left"
        >
          <h3 className="text-2xl md:text-3xl text-blue-200 font-semibold">
            Hi, I&apos;m <span className="text-blue-200">Kirti Aggarwal</span>
          </h3>
          
          <p className="text-gray-300 text-lg md:text-2xl dark:text-gray-300">
            Data and Product Analyst with a proven ability to leverage data-driven insights and generative AI to perform product strategy and optimize business outcomes. 
            Keen interest in development and likes building practical, end-to-end solutions.
          </p>

          {/* <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <span className="text-blue-500">🎓</span>
              <span>Education: Your Degree</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <span className="text-blue-500">💼</span>
              <span>Experience: X Years</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <span className="text-blue-500">🌍</span>
              <span>Location: Your Location</span>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg
                     hover:bg-blue-600 transition-colors"
          >
            Download CV
          </motion.button> */}
        </motion.div> 
      </div> 
    </section>
  );
};

export default About;