"use client";
import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experienceData = [
    {
      role: "IBM Data Analytics Training Program",
      company: "IBM SkillsBuild",
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
      duration: "March 2025 - April 2025",
      location: "India",
      description: [
        "Developed strong foundational knowledge in HTML, CSS, JavaScript, and responsive web design.",
        "Built multiple interactive web projects following modern development standards.",
        "Earned a top 10% score among all participants in the final Web Development Capstone project."
      ]
    },

    // {
    //   role: "Software Development Intern",
    //   company: "Company Name",
    //   duration: "Jan 2023 - May 2023",
    //   location: "City, Country",
    //   description: [
    //     "Built and deployed RESTful APIs using Node.js and Express",
    //     "Worked on front-end development using React and TypeScript",
    //     "Participated in code reviews and implemented feedback",
    //     "Reduced application load time by 30% through optimization"
    //   ]
    // }
  ];

  return (
    <section id="workexperience" className="relative w-full py-8 px-40">
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
              className="bg-[#020202] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                {/* Left Column - Timeline */}
                <div className="space-y-2">
                  <div className="text-blue-400 text-2xl font-semibold">
                    {exp.role}
                  </div>
                  <div className="text-gray-400 text-xl">
                    {exp.duration}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="space-y-3">
                  {/* <h3 className="text-2xl font-semibold text-gray-200">
                    {exp.location}
                  </h3>
                  <div className="text-blue-300 font-medium">
                    {exp.company}
                  </div> */}
                  <ul className="text-gray-200 text-sm space-y-2">
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
        {/* <motion.div
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
                className="bg-blue-100 p-4 rounded-lg shadow-md text-center"
              >
                <span className="text-blue-500 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </motion.div> 
    </section>
  );
};

export default WorkExperience;
