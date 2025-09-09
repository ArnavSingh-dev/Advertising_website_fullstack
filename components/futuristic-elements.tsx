"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FuturisticCardProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function FuturisticCard({ children, className = "", delay = 0 }: FuturisticCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        boxShadow: "0 20px 40px rgba(234, 88, 12, 0.3)",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  )
}

export function FloatingElement({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PulsingGlow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 20px rgba(234, 88, 12, 0.3)",
          "0 0 40px rgba(234, 88, 12, 0.6)",
          "0 0 20px rgba(234, 88, 12, 0.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
