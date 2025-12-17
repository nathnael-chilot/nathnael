"use client"

import { motion } from "framer-motion"
import { MessageCircle, Sparkles } from "lucide-react"
import { AnimatedBGBubbles } from "./animated-bg-bubbles"

export default function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      },
    }),
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const buttonVariants = {
    initial: { scale: 0.95 },
    hover: {
      scale: 1.08,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.92 },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl p-12 sm:p-16 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl" />

          <AnimatedBGBubbles />

          {/* Semi-transparent background overlay */}
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm rounded-3xl" />

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              custom={0}
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center mb-4"
            >
              <Sparkles className="text-primary" size={32} />
            </motion.div>

            <motion.h2
              custom={1}
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
            >
              Ready to Build Something Amazing?
            </motion.h2>

            <motion.p
              custom={2}
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
            >
              I'm always open to discussing new projects and creative ideas. Let's collaborate and create something
              incredible together.
            </motion.p>

            <motion.div
              custom={3}
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle size={20} />
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
