import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ThreeBackground from './components/ThreeBackground'

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <ThreeBackground />
      <Navbar />
      <main className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App