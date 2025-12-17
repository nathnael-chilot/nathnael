"use client"

import { motion } from "framer-motion"
import { ArrowDown, Code } from "lucide-react"
import { AnimatedBGBubbles } from "./animated-bg-bubbles"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
    hover: { scale: 1.05 },
  }

  const buttonVariants = {
    initial: { scale: 0.95, opacity: 0.8 },
    hover: {
      scale: 1.08,
      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.92 },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />

      <AnimatedBGBubbles />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          variants={badgeVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Code size={16} className="text-primary" />
          <span className="text-sm font-semibold text-primary">Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Nathnael
          </span>
          <br />
          <span className="text-3xl sm:text-4xl lg:text-5xl font-normal text-muted-foreground">
            Full-Stack Developer
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Crafting elegant, performant web solutions with modern technologies. Specializing in React, Next.js, and
          building scalable applications that make an impact.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors shadow-lg"
          >
            View Projects
          </motion.button>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-primary" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
