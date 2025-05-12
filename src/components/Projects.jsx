import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'The Joint Chiropractic — Backlink creation ',
    description: 'Developed high-authority profiles, conducted keyword research for organic ranking, and created strategic backlinks to improve domain authority and search visibility.',
    image: '/project_1.jpg',
    technologies: ['google search consol' , 'Ahrefs', 'Moz link explorer'],
    live: 'https://project1.example.com'
  },
  {
    title: 'Oudguru — E-commerce Website',
    description: 'Built a WordPress-based e-commerce platform with integrated SEO, optimized for search visibility and user engagement',
    image: '/project_2.png',
    technologies: ['Wordpress', 'WooCommerce', 'AIOSEO'],
    live: 'https://oudguru.com/'
  },
  {
    title: 'Microsoft/Amazon Exam Dumps',
    description: 'Created comprehensive, up-to-date exam dumps for popular certifications like Microsoft Dynamics 365, covering real-world scenarios and practice questions for effective exam preparation.',
    image: '/project_3.png',
    technologies: ['Microsoft Word', 'pdf reader', 'websites and forums'],
    live: 'https://project3.example.com'
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

        {index === 1 && (
          <div className="flex gap-4">
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
        )}
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