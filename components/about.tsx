"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer with 2+ years of experience building web applications that solve
              real-world problems. My journey in tech started with a curiosity about how things work, which evolved into
              a career dedicated to crafting elegant solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building scalable applications using React, Next.js, TypeScript, and modern backend
              technologies like Node.js, NestJS, Express, and PostgreSQL. I'm committed to writing clean, maintainable code and creating exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              animate={{ float: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 overflow-hidden"
            >
              <Image
                src="/about.JPG"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
