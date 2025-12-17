"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "VIGOR HMS Platform",
    description:
      "Full-stack hms solution with channel management, property management,room and dormitary management and real-time analytics dashboard.",
    image: "/Screenshot from 2025-11-19 15-16-27.png",
    tags: ["Nest.js", "Next.js", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    links: {
      demo: "https://hms.automataintelligence.ai/",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Mental Bank App",
    description:
      "Personalized cognitive ledger with secure thought storage, self-monitoring capabilities, and emotional indexing.",
    image: "/Screenshot from 2025-11-19 15-03-45.png",
    tags: ["Nestjs", "Firebase", "PostgreSQL", "Prisma"],
    links: {
      demo: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Nu Cafe and Restaurant",
    description:
      "Real-time analytics dashboard with interactive charts, custom reports, orders, delivery, management and data visualization powered by modern libraries.",
    image: "/nu.png",
    tags: ["Nextjs", "Recharts", "Socket.io", "Nodejs"],
    links: {
      demo: "https://www.nu-restaurant.com/",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Mentorship Platform",
    description:
      "Professional development system with expert matching algorithms, structured guidance paths, and continuous progress tracking.",
    image: "/Screenshot from 2025-11-19 15-47-55.png",
    tags: ["Next.js", "Redux", "MongoDB", "Express", "Node.js"],
    links: {
      demo: "https://mentorship-sooty.vercel.app/",
      github: "https://github.com/Chachu21/mentorship",
    },
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all shadow-md hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.links.github}
                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
