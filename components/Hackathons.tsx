"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HackathonsAndContests = () => {
  const achievementsData = [
    {
      title: "Hackathon Name 1",
      position: "1st Place",
      date: "October 2023",
      organizer: "Organization Name",
      image: "/hackathon1.jpg", // Add your hackathon image
      description: "Built an AI-powered solution for sustainable energy management",
      technologies: ["Python", "TensorFlow", "React", "AWS"],
      achievements: [
        "Won first place among 200+ participants",
        "Developed innovative solution in 36 hours",
        "Received $5000 in prizes and AWS credits",
        "Featured in tech blog publications"
      ],
      projectLink: "https://devpost.com/project1"
    },
    {
      title: "Coding Contest Name",
      position: "Top 5",
      date: "August 2023",
      organizer: "Contest Platform",
      image: "/contest1.jpg", // Add your contest image
      description: "Competitive programming contest focused on algorithms and data structures",
      technologies: ["C++", "Data Structures", "Algorithms"],
      achievements: [
        "Ranked in top 5 among 1000+ participants",
        "Solved 8/10 problems in 3 hours",
        "Achieved optimal time complexity for all solutions",
        "Improved rating to Expert level"
      ],
      projectLink: "https://contest-platform.com/results"
    }
  ];

  return (
    <section id="hackathons" className="relative rounded-4xl mt-5 w-full min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hackathons & Contests</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Achievements Grid */}
        <div className="space-y-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="grid md:grid-cols-[1fr,2fr] gap-6">
                {/* Left Column - Image and Basic Info */}
                <div className="relative">
                  <div className="relative h-48 w-full">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-gradient-to-t from-blue-500 to-blue-400 text-white">
                    <div className="text-xl font-bold mb-2">{achievement.position}</div>
                    <div className="text-sm opacity-90">{achievement.date}</div>
                    <div className="text-sm opacity-90">{achievement.organizer}</div>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {achievement.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Achievements List */}
                  <ul className="text-gray-600 text-sm space-y-2">
                    {achievement.achievements.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-blue-500 mr-2">🏆</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Project Link */}
                  <div className="pt-4">
                    <a
                      href={achievement.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Project
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Hackathons", value: "5+" },
            { label: "Contests", value: "15+" },
            { label: "Awards", value: "8" },
            { label: "Total Prize Money", value: "$10K+" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="text-2xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HackathonsAndContests;
