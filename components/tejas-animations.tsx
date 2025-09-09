"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface TejasAnimationsProps {
  children: React.ReactNode
  className?: string
  animationType?: "stagger" | "cascade" | "reveal" | "flip"
  delay?: number
}

export function TejasAnimations({
  children,
  className = "",
  animationType = "stagger",
  delay = 0,
}: TejasAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement

            // Add animation class based on type
            setTimeout(() => {
              switch (animationType) {
                case "stagger":
                  element.classList.add("animate-stagger-fade")
                  break
                case "cascade":
                  element.classList.add("animate-cascade-slide")
                  break
                case "reveal":
                  element.classList.add("animate-image-reveal")
                  break
                case "flip":
                  element.classList.add("animate-card-flip")
                  break
              }
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [animationType, delay])

  return (
    <div ref={elementRef} className={`opacity-0 ${className}`}>
      {children}
    </div>
  )
}

// Gallery component with Tejas-inspired animations
export function AnimatedGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <TejasAnimations
          key={index}
          animationType="reveal"
          delay={index * 100}
          className="gallery-item rounded-lg overflow-hidden"
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Gallery item ${index + 1}`}
            className="w-full h-48 object-cover"
          />
        </TejasAnimations>
      ))}
    </div>
  )
}
