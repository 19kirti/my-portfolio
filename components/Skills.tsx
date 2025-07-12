"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = {
    "Programming Languages": [
      "Java", "Python"
    ],
    "Data Science":[
       "Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Preprocessing", "Feature Engineering", "Model Evaluation", "EDA"
    ],
    "Databases":[
        "MySQL", "MongoDB"
    ],
    "Machine Learning":[
      "Scikit-Learn", "Supervised/Unsupervised Learning", "Prompt Engineering" 
    ],
    "Web-Technologies": [
     "HTML5", "JavaScript", "Typescript", "React.js", "Next.js",
      "Tailwind CSS", "Bootstrap", "Node.js", "Express.js", "EJS",
      "RESTful APIs"
    ],
    "Tools & Tech": [
      "VS Code", "IntelliJ Idea", "Jupyter Notebook", "Microsoft Excel", "Power BI", "Tableau", "Git", "GitHub"
    ],
    "Graphic Designing":[
     "Figma", "Canva" , "Adobe Photoshop"
    ],
    "Other": [
    "Problem Solving", "Analytical Thinking", "Teamwork & Collaboration", "Public Speaking", "People Management", "Agile", "Scrum"
    ],
  };

  return (
    <section id="skills" className="relative rounded-4xl mt-5 w-full min-h-screen py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Skills</h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-3 md:space-y-4 mb-6 md:mb-8"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="group relative"
                  >
                    <div className="px-2 py-1 sm:px-3 md:px-4 md:py-2 bg-gradient-to-r from-blue-500/10 to-blue-500/5 
                                  rounded-lg border border-blue-500/20 hover:border-blue-500/40 
                                  transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-gray-300 dark:text-gray-300 text-xs sm:text-sm">
                        {skill}
                      </span>
                      <div className="absolute -bottom-1 left-0 w-full h-[2px] 
                                    bg-gradient-to-r from-blue-500 to-purple-500 
                                    transform scale-x-0 group-hover:scale-x-100 
                                    transition-transform duration-300"
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bars */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 md:mt-16 space-y-4 md:space-y-6"
        >
          {[
            { skill: "Frontend Development", level: 90 },
            { skill: "Backend Development", level: 85 },
            { skill: "Problem Solving", level: 88 }
          ].map((item, index) => (
            <div key={index} className="space-y-1 md:space-y-2">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-gray-700 dark:text-gray-300">{item.skill}</span>
                <span className="text-blue-500">{item.level}%</span>
              </div>
              <div className="h-1.5 sm:h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div> */}

        {/* Bottom Text */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8 md:mt-12 text-gray-500 dark:text-gray-400 text-xs sm:text-sm"
        >
          <p>Always exploring new technologies and keeping up with industry trends</p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Skills;
