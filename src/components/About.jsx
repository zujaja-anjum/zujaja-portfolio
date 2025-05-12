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
          Hi, I'm Taha Iqbal, a passionate and detail-oriented software developer currently pursuing a Bachelor's degree in Geographic Information Systems (GIS) at Punjab University College of Information Technology. With a strong foundation in programming and problem-solving, I specialize in full-stack web development and have hands-on experience with Python, JavaScript, C/C++, and Java.
          </p>
          <p className="text-tertiary mb-8">
          Beyond the code, I pride myself on being a collaborative team player with excellent communication skills. I'm always eager to learn, grow, and contribute to meaningful tech solutions that make a difference.
          </p>
        </div>

        <motion.a
          href="/Resume.pdf"
          download
          className="btn-primary inline-flex items-center gap-2"
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