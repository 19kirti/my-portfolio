"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projectsData = [
    {
      title: "Project Name 1",
      description: "A full-stack web application built with Next.js and Node.js",
      image: "/project1.jpg", // Add your project image path
      technologies: ["React", "Next.js", "Node.js", "MongoDB"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/username/project1",
      highlights: [
        "Implemented responsive design with Tailwind CSS",
        "Integrated REST APIs and MongoDB database",
        "Achieved 95+ Performance score on Lighthouse",
        "Implemented user authentication and authorization"
      ]
    },
    {
      title: "Project Name 2",
      description: "An e-commerce platform with real-time updates",
      image: "/project2.jpg", // Add your project image path
      technologies: ["TypeScript", "React", "Firebase", "Tailwind"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/username/project2",
      highlights: [
        "Built real-time cart updates using Firebase",
        "Implemented secure payment processing",
        "Created responsive admin dashboard",
        "Optimized images and assets for faster loading"
      ]
    },

    {
        title: "Project Name 1",
        description: "A full-stack web application built with Next.js and Node.js",
        image: "/project1.jpg", // Add your project image path
        technologies: ["React", "Next.js", "Node.js", "MongoDB"],
        liveLink: "https://project1.com",
        githubLink: "https://github.com/username/project1",
        highlights: [
          "Implemented responsive design with Tailwind CSS",
          "Integrated REST APIs and MongoDB database",
          "Achieved 95+ Performance score on Lighthouse",
          "Implemented user authentication and authorization"
        ]
      },

      {
        title: "Project Name 1",
        description: "A full-stack web application built with Next.js and Node.js",
        image: "/project1.jpg", // Add your project image path
        technologies: ["React", "Next.js", "Node.js", "MongoDB"],
        liveLink: "https://project1.com",
        githubLink: "https://github.com/username/project1",
        highlights: [
          "Implemented responsive design with Tailwind CSS",
          "Integrated REST APIs and MongoDB database",
          "Achieved 95+ Performance score on Lighthouse",
          "Implemented user authentication and authorization"
        ]
      },
  ];

  return (
    <section id="projects" className="relative rounded-4xl mt-5 w-full min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                
                <p className="text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Highlights */}
                <ul className="text-gray-600 text-sm space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
