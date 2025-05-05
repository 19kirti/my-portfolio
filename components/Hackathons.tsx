"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Hackathon {
  name: string;
  description: string;
}

const hackathonData: Hackathon[] = [
  {
    name: "Smart India Hackathon 2024 Finalist",
    description: "Built an AI-powered solution - PowerShakti, for electricity demand projection for the Delhi Power System."
  },
  {
    name: "Myntra HackerRamp WeForShe 2024 Runner up",
    description: "Designed fashion challenges, quizzes, polls, leaderboards and gamification techniques, to increase user-engagement on Myntra platform."
  },
  {
    name: "GDG Study Jam 2023 and 2024 Finalist",
    description: "Completed various cloud learning series, including Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud."
  },
  {
    name: "Smart India Hackathon 2023 Runner up",
    description: "Built BharataRanch, a cutting-edge platform connecting farmers and buyers for bulk transactions with minimal margins."
  },
  // Add more hackathons as needed
];

const Hackathons = () => {
  return (
    <section id="hackathons" className="relative w-full py-6 sm:py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Hackathons & Contests</h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Hackathons List */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {hackathonData.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#020202] rounded-lg shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all"
            >
              <motion.h3 
                className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400 mb-2 md:mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {hackathon.name}
              </motion.h3>
              <motion.p 
                className="text-sm sm:text-base text-gray-200"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.25 }}
              >
              {hackathon.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hackathons;