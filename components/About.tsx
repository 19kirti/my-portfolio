"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="w-full h-[400px] relative">
            <Image
              src="/Profile.jpg" // Replace with your image path
              alt="Profile Image"
              fill
              className="rounded-3xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            Hi, I'm <span className="text-blue-500">Your Name</span>
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300">
            I'm a passionate developer with expertise in web development. With many years
            of experience, I specialize in creating responsive and user-friendly
            applications using modern technologies like React, Next.js, and TypeScript.
          </p>

          <div className="space-y-4">
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
