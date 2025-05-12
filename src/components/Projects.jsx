import { useState } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'NavU',
    description: 'A Python-based navigation tool that uses Dijkstra’s algorithm for room-to-room pathfinding, visualized with Matplotlib and powered by NetworkX and NumPy.',
    image: '/project_1.png',
    technologies: ['Python', 'Networkx', 'Numpy', 'Matplotlib'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.example.com',
  },
  {
    title: 'Forkast',
    description: 'A responsive web app built with vanilla JavaScript and the Spoonacular API, enabling users to browse recipes and create custom weekly meal plans stored locally.',
    image: '/project_2.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Spoonacular API'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.example.com',
  },
  {
    title: 'Flashify',
    description: 'A full-stack flashcard application developed with React, Node.js, and MongoDB, featuring secure user authentication via JWT and a clean RESTful API structure.',
    image: '/project_3.jpg',
    technologies: ['React', 'Node.js', 'JWT', 'MongoDB'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.example.com',
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-dark/50 backdrop-blur-sm rounded-lg overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/50 hover:bg-transparent transition-colors duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-tertiary mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-secondary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-secondary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiExternalLink className="w-6 h-6" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects