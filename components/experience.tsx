"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    period: "2025(MAY) - Present",
    position: "Full-Stack Developer",
    company: "Bekur Technologies PLC",
    description:
      "Pericipate in development of AI-based solutions, management solutions, and architected scalable microservices.",
    technologies: ["Next.js", "Nest.js", "AWS", "Docker"],
  },
  {
    period: "2024(AUG) - 2025(APR)",
    position: "Full-Stack Developer",
    company: "Abol Technologies PLC",
    description:
      "Developed and maintained multiple React applications, improved performance by 40%, and implemented CI/CD pipelines.",
    technologies: ["Next.js", "Express", "PostgreSQL", "DevOps"],
  },
  {
    period: "2023(MAR) - 2023(SEP)",
    position: "Frontend Developer",
    company: "STC Bahirdar",
    description:
      "Built responsive web interfaces, collaborated with designers, and optimized UI performance for better UX.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Figma"],
  },
]

export default function Experience() {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 pb-8">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-8 h-full w-1 bg-gradient-to-b from-primary to-accent/30" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg" />

              {/* Content */}
              <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
