"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experienceData = [
    {
      role: "Software Development Engineer",
      company: "Company Name",
      duration: "June 2023 - Present",
      location: "City, Country",
      description: [
        "Developed and maintained full-stack web applications using React, Next.js, and Node.js",
        "Implemented responsive designs and improved website performance by 40%",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Led a team of 3 developers for a major feature implementation"
      ]
    },
    {
      role: "Software Development Intern",
      company: "Company Name",
      duration: "Jan 2023 - May 2023",
      location: "City, Country",
      description: [
        "Built and deployed RESTful APIs using Node.js and Express",
        "Worked on front-end development using React and TypeScript",
        "Participated in code reviews and implemented feedback",
        "Reduced application load time by 30% through optimization"
      ]
    }
  ];

  return (
    <section id="workexperience" className="relative rounded-4xl mt-5 w-full min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
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
                    {exp.duration}
                  </div>
                  <div className="text-gray-600">
                    {exp.location}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <div className="text-blue-500 font-medium">
                    {exp.company}
                  </div>
                  <ul className="text-gray-600 text-sm space-y-2">
                    {exp.description.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-500 mr-2">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "React.js", "Next.js", "TypeScript", "Node.js",
              "MongoDB", "AWS", "Git", "REST APIs"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md text-center"
              >
                <span className="text-blue-500 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
