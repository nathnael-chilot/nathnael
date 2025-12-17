"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { Logo } from "./logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/nathnael-chilot", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nathnael-chilot-5b0791250", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/c_nathnael?t=F3_kDH9ipUMl4UTG8fqC3w&s=09", label: "X" },
    { icon: Mail, href: "mailto:chilotnathnael@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Logo />
            <p className="text-muted-foreground text-sm mt-2">
              Full-stack developer crafting beautiful and performant web applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <div className="space-y-3">
              <motion.a
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Download size={16} />
                Download CV
              </motion.a>
              <div className="flex gap-3 mt-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <motion.a
                      key={link.label}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} Nathnael. All rights reserved.</p>
          <p className="text-xs mt-4 sm:mt-0">Built with Next.js, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
