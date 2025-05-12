import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'

function Experience() {
  const experienceData = [
    {
      company: 'VIRTUALREP',
      role: 'SEO Executive',
      duration: 'July 2024 - February 2025',
      description: 'As an SEO Executive at VIRTUALREP from July 2024 to February 2025, I was responsible for identifying and analyzing high-impact keywords, optimizing website structures, meta tags, headings, and URLs to enhance search engine visibility. I collaborated closely with content teams to ensure SEO-friendly content and conducted regular audits to improve performance. Additionally, I developed backlink strategies, securing high-quality links to boost website authority. My role required innovative problem-solving, effective communication, and the ability to deliver results under pressure, contributing significantly to the success of key projects.',
      letterPath: '/experience-letter.pdf' 
    }
  ]

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-primary/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-secondary/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-secondary">{exp.company}</h3>
                  <p className="text-xl text-tertiary">{exp.role}</p>
                  <p className="text-tertiary/80">{exp.duration}</p>
                </div>
                
                <motion.a
                  href={exp.letterPath}
                  download
                  className="btn-primary inline-flex items-center gap-1 text-xs sm:text-sm w-full sm:w-auto justify-center mt-4 sm:mt-0 px-3 py-1.5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="w-5 h-5" />
                  Experience Letter
                </motion.a>
              </div>
              
              <p className="text-tertiary">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience