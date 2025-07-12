"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experienceData = [
    
    {
      role: "IBM Data Analytics Training Program",
      company: "IBM SkillsBuild",
      certificateLink: "https://drive.google.com/file/d/1864Cn2N3mhohdCWvZtrg_qZpfSbhcngZ/view?usp=drive_link",
      duration: "December 2024 - January 2025",
      location: "India",
      description: [
        "Increased proficiency by about 20%, in data analysis, SQL, and Python for handling large datasets.",
        "Learned data visualization techniques using Matplotlib and Seaborn.",
        "Built ML models for multiple diseases prediction and heart failure prediction systems, enhancing the predictive accuracy to about 80%."
      ]
    },

    {
      role: "Infosys Web Development Certification",
      company: "Infosys",
      certificateLink: "https://drive.google.com/file/d/1-Qm8YXke-RuXBk-bjD3bJ8cqMEgHWUe0/view?usp=drive_link",
      duration: "March 2025 - April 2025",
      location: "India",
      description: [
        "Developed strong foundational knowledge in HTML, CSS, JavaScript, and responsive web design.",
        "Built multiple interactive web projects following modern development standards.",
        "Earned a top 10% score among all participants in the final Web Development Capstone project."
      ]
    },

  ];

  return (
    <section id="workexperience" className="relative w-full py-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Work Experience</h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 md:space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#020202] rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 md:gap-6">
                {/* Left Column - Timeline */}
                <div className="space-y-2 mb-4 md:mb-0">
                  <div className="text-blue-400 text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </div>
                  <div className="text-gray-400 text-lg md:text-xl">
                    {exp.duration}
                  </div>
                  {/* Certificate Button */}
                  {exp.certificateLink && (
                    <motion.a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#121111] text-blue-200 border border-[#63b3ed] rounded-md hover:bg-[#63b3ed] hover:text-[#1f1f1f] transition-all duration-300 text-xs sm:text-sm mt-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Certificate
                    </motion.a>
                  )}
                </div>

                {/* Right Column - Details */}
                <div className="space-y-2 md:space-y-3">
                  <ul className="text-gray-200 text-xs sm:text-sm space-y-1.5 sm:space-y-2">
                    {exp.description.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Skills</h2>
            <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              "React.js", "Next.js", "TypeScript", "Node.js",
              "MongoDB", "AWS", "Git", "REST APIs"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-blue-100 p-3 md:p-4 rounded-lg shadow-md text-center"
              >
                <span className="text-blue-500 font-medium text-sm md:text-base">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </motion.div> 
    </section>
  );
};

export default WorkExperience;
