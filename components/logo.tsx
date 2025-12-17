"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

export function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="p-1.5 rounded-lg bg-gradient-to-br from-primary to-accent"
      >
        <Code2 size={20} className="text-white" />
      </motion.div>
      <div>
        <div className="text-lg font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Nathnael
        </div>
        <div className="text-xs text-muted-foreground font-semibold leading-none">Developer</div>
      </div>
    </motion.div>
  )
}
