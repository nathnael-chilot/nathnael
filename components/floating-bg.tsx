"use client"

import { motion } from "framer-motion"

export function FloatingBackground() {
  const bubbles = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    duration: Math.random() * 8 + 10,
    delay: Math.random() * 2,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-primary/5 blur-3xl"
          style={{
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, bubble.x, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          initial={{
            y: Math.random() * 100,
            x: Math.random() * 100,
          }}
        />
      ))}
    </div>
  )
}
