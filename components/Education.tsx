"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology & Engineering",
      institution: "Maharaja Agrasen Institute of Technology",
      year: "2022 - 2026",
      grade: "9.15 CGPA  (Dapartment Rank II)",
      description: "Core subjects: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks."
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "DAV Pushpanjali Enclave, Pushpanjali Enclave",
      year: "2021 - 2022",
      grade: "88.8%",
      description: "Major subjects: Physics, Chemistry, Mathematics"
    },
    {
      degree: "Secondary School (X)",
      institution: "DAV Pushpanjali Enclave, Pushpanjali Enclave",
      year: "2019 - 2020",
      grade: "97.8%",
      description: "Achieved school rank 1 in Mathematics and Science"
    }
  ];

  return (
    <section id="education" className="relative rounded-4xl mt-5 w-full min-h-screen py-2 px-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#020202] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                {/* Left Column - Timeline */}
                <div className="text-2xl space-y-2">
                  <div className="text-blue-400 font-semibold">
                    {edu.degree}
                  </div>
                  <div className="text-gray-400">
                    {edu.year}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-gray-300">
                    {edu.institution}
                  </h3>
                  <div className="text-blue-500 text-2xl font-medium">
                    {edu.grade}
                  </div>
                  <p className="text-gray-500 text-1xl">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
