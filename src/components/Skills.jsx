import { motion } from 'framer-motion'

const skills = [
  {
    name: 'WordPress',
    logo: '/images/skills/wordpress.svg',
    description: 'Skilled in building dynamic, SEO-optimized websites using WordPress. Experienced in theme customization, plugin integration, and responsive design for high-performance, user-friendly sites..',
  },
  {
    name: 'Social Media Marketing',
    logo: '/images/skills/social-media.png',
    description: 'Expert in using social media to drive brand awareness, engage audiences, and optimize marketing strategies for better results.',
  },
  {
    name: 'Facebook, Google, and Meta ads expert ',
    logo: '/images/skills/digital-ads.png',
    description: 'Expert in creating and managing Facebook, Google, and Meta ad campaigns to drive targeted traffic, maximize ROI, and boost brand visibility.',
  },
  {
    name: 'Expert in SEO',
    logo: '/images/skills/seo.png',
    description: 'Expert in SEO, specializing in optimizing websites to improve search engine rankings, drive organic traffic, and enhance online visibility.',
  },
  {
    name: 'Solid Understanding of ArcGIS ',
    logo: '/images/skills/arcgis.png',
    description: 'Proficient in ArcGIS, with a solid understanding of spatial analysis, mapping, and data visualization to support geographic information system projects.',
  },
  {
    name: 'Effective communication skills  ',
    logo: '/images/skills/communication.png',
    description: 'Strong communicator, skilled in conveying ideas clearly and effectively in both written and verbal formats, fostering collaboration and understanding.',
  },
]

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-dark/50 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 mb-4">
        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
      <p className="text-tertiary text-sm">{skill.description}</p>
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills