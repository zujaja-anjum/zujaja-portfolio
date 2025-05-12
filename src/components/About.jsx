import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

function About() {
  const technologies = [
    'JavaScript (ES6+)',
    'React.js',
    'PHP',
    'Tailwind CSS',
    'Node.js',
    'Git',
  ]

  return (
    <section id="about" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <div className="prose prose-invert max-w-none">
          <p className="text-tertiary mb-4">
          Hi, I'm Zujaja Anjum, a dedicated SEO executive and WordPress web developer currently pursuing a Bachelor's degree in Geographic Information Systems (GIS) at Punjab University College of Information Technology. I have a strong foundation in search engine optimization, digital marketing, and WordPress site development, with hands-on experience in backlink creation, content optimization, and site authority growth.
          </p>
          <p className="text-tertiary mb-8">
          I excel at blending technical SEO strategies with creative digital solutions, helping businesses improve their online visibility and reach. Beyond my technical skills, I pride myself on effective communication, attention to detail, and a deep commitment to continuous learning and growth in the digital space.
          </p>
        </div>

        <motion.a
          href="/Resume.pdf"
          download
          className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiDownload className="w-5 h-5" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  )
}

export default About