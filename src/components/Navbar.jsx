import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

function Navbar({ darkMode, setDarkMode }) {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold text-secondary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Portfolio
        </motion.a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-secondary/10 transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <FiSun className="w-6 h-6 text-secondary" />
            ) : (
              <FiMoon className="w-6 h-6 text-secondary" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar