"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Your University Name",
      year: "2020 - 2024",
      grade: "8.5 CGPA",
      description: "Core subjects: Data Structures & Algorithms, Operating Systems, Database Management Systems, Computer Networks"
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Your School Name",
      year: "2018 - 2020",
      grade: "90%",
      description: "Major subjects: Physics, Chemistry, Mathematics, Computer Science"
    },
    {
      degree: "Secondary School (X)",
      institution: "Your School Name",
      year: "2018",
      grade: "92%",
      description: "Achieved school rank 1 in Mathematics and Science"
    }
  ];

  return (
    <section id="education" className="relative rounded-4xl mt-5 w-full min-h-screen py-16 px-4">
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
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                {/* Left Column - Timeline */}
                <div className="space-y-2">
                  <div className="text-blue-500 font-semibold">
                    {edu.year}
                  </div>
                  <div className="text-gray-600">
                    {edu.grade}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {edu.degree}
                  </h3>
                  <div className="text-blue-500 font-medium">
                    {edu.institution}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Certification Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-blue-500 text-lg font-semibold mb-2">
                Web Development Certification
              </div>
              <div className="text-gray-600 text-sm mb-2">
                Issuing Organization
              </div>
              <div className="text-gray-500 text-xs">
                Issued: 2023
              </div>
            </motion.div>
            {/* Add more certification cards as needed */}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
