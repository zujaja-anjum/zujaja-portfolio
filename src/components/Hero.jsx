import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/zujaja-anjum', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/zujaja-anjum-7b019925a/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:zujajaanjum42@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-secondary mb-4"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Zujaja Anjum
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-tertiary mb-8"
        >
          SEO Expert & Wordpress Developer 
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-tertiary max-w-2xl mx-auto mb-12"
        >
          Building SEO-optimized WordPress websites that drive traffic and deliver engaging digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex justify-center gap-6"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex justify-center gap-6 mt-12"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary hover:text-secondary transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              <link.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero