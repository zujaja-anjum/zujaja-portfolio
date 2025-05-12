import { motion } from 'framer-motion'
import {
  FiCode,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiTool,
  FiZap
} from 'react-icons/fi'

const skills = [
  {
    category: 'Frontend Development',
    icon: FiLayers,
    items: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    category: 'Backend Development',
    icon: FiDatabase,
    items: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'RESTful APIs', level: 80 },
    ],
  },
]

function SkillCategory({ category, icon: Icon, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="skill-item"
    >
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Icon className="w-6 h-6 text-secondary" />
          <h3 className="text-xl font-semibold">{category}</h3>
        </div>

        <div className="space-y-4">
          {items.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-tertiary">{skill.name}</span>
                <span className="text-secondary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-dark rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-secondary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {skills.map((category, index) => (
          <SkillCategory
            key={category.category}
            {...category}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills