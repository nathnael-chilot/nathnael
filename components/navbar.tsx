"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { Logo } from "./logo"

interface NavbarProps {
  isDark: boolean
  toggleDarkMode: () => void
}

export default function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <motion.button
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-foreground py-2 px-1 relative group transition-colors hover:text-primary"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full shadow-lg shadow-primary/50"
                    initial={{ width: 0, x: "-50%", opacity: 0 }}
                    whileHover={{ width: "100%", opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      mass: 0.8,
                    }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 20 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-muted hover:bg-secondary transition-colors"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
