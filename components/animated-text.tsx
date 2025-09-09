"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  type?: "fadeUp" | "typewriter" | "wave" | "glow" | "split"
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  type = "fadeUp",
}: AnimatedTextProps) {
  const text = typeof children === "string" ? children : ""

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  }

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: duration * 1.5, delay, ease: "easeInOut" },
    },
  }

  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
        repeatDelay: 2,
      },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, textShadow: "0 0 0px rgba(234, 88, 12, 0)" },
    visible: {
      opacity: 1,
      textShadow: [
        "0 0 5px rgba(234, 88, 12, 0.5)",
        "0 0 10px rgba(234, 88, 12, 0.8)",
        "0 0 15px rgba(234, 88, 12, 0.5)",
      ],
      transition: {
        duration,
        delay,
        textShadow: {
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse" as const,
          duration: 2,
        },
      },
    },
  }

  const splitVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  if (type === "typewriter") {
    return (
      <div className={`overflow-hidden ${className}`}>
        <motion.div
          variants={typewriterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-r-2 border-primary"
        >
          {children}
        </motion.div>
      </div>
    )
  }

  if (type === "split" && text) {
    return (
      <motion.div
        variants={splitVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={className}
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letterVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  const variants =
    {
      fadeUp: fadeUpVariants,
      wave: waveVariants,
      glow: glowVariants,
    }[type] || fadeUpVariants

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
