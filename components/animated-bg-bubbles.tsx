"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Bubble {
  id: number
  size: number
  duration: number
  delay: number
  startX: number
  startY: number
  color: string
  endX: number
  endY: number
  animateX: number
}

interface Shape {
  id: number
  width: number
  height: number
  left: number
  top: number
  color: string
  animateY: number
  animateX: number
  duration: number
  delay: number
}

export function AnimatedBGBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    // Generate bubbles only on client side to avoid hydration mismatch
    const generatedBubbles: Bubble[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 120 + 40,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 5,
      startX: Math.random() * 100,
      startY: Math.random() * 150 + 80,
      endX: Math.random() * 100,
      endY: Math.random() * -150 - 150,
      color: ["primary", "accent", "primary/60", "accent/50"][Math.floor(Math.random() * 4)],
      animateX: (Math.random() - 0.5) * 150,
    }))

    const generatedShapes: Shape[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      width: Math.random() * 60 + 40,
      height: Math.random() * 60 + 40,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: ["primary", "accent"][i % 2],
      animateY: -300 - Math.random() * 300,
      animateX: (Math.random() - 0.5) * 200,
      duration: Math.random() * 25 + 30,
      delay: Math.random() * 5,
    }))

    setBubbles(generatedBubbles)
    setShapes(generatedShapes)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.startX}%`,
            top: `${bubble.startY}%`,
            backgroundColor: `var(--${bubble.color === "primary" ? "color-primary" : "color-accent"})`,
            opacity: bubble.color.includes("/") ? 0.25 : 0.3,
          }}
          animate={{
            y: [0, bubble.endY],
            x: [0, bubble.animateX],
            opacity: bubble.color.includes("/") ? [0.25, 0.05] : [0.3, 0.08],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {shapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute rounded-full"
          style={{
            width: shape.width,
            height: shape.height,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            backgroundColor: `var(--${shape.color})`,
            opacity: 0.12,
          }}
          animate={{
            y: [0, shape.animateY],
            x: [0, shape.animateX],
            scale: [1, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
