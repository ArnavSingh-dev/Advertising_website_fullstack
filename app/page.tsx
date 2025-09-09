"use client"

import Link from "next/link";
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Printer, Palette, Zap, Star, ArrowRight, Award, CheckCircle, Truck, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedText from "@/components/animated-text"
import {
  FuturisticCard,
  FloatingElement,
  PulsingGlow,
  StaggerContainer,
  StaggerItem,
} from "@/components/futuristic-elements"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()

  const heroSlides = [
    {
      image: "/modern-digital-signage-printing-with-high-resoluti.jpg",
      title: "Quality Printing",
      subtitle: "Solutions",
      description:
        "From flex banners to signages, we bring your vision to life with professional printing services since 2000",
    },
    {
      image: "/modern-digital-printing-machine-producing-vibrant-.jpg",
      title: "Premium Flex",
      subtitle: "Banners",
      description: "Weather-resistant vinyl banners perfect for outdoor advertising with vibrant, long-lasting colors",
    },
    {
      image: "/outdoor-advertising-display-with-professional-sunb.jpg",
      title: "Professional",
      subtitle: "Sunboards",
      description: "Lightweight foam boards ideal for indoor displays, presentations, and retail environments",
    },
    {
      image: "/high-resolution-digital-signage-printing-process-w.jpg",
      title: "Digital",
      subtitle: "Signages",
      description: "Modern high-resolution printing solutions for all your indoor and outdoor signage requirements",
    },
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const handleGetQuote = () => {
    router.push("/services")
  }

  const services = [
    {
      title: "Flex Banners",
      description: "High-quality vinyl banners perfect for outdoor advertising and events",
      image: "/flex-board.jpg",
      features: ["Weather Resistant", "Custom Sizes", "Vibrant Colors"],
    },
    {
      title: "Sunboards",
      description: "Durable foam boards ideal for indoor displays and presentations",
      image: "/sunboard-printing-signage.jpg",
      features: ["Lightweight", "Easy to Mount", "Professional Finish"],
    },
    {
      title: "Digital Signages",
      description: "Modern digital printing solutions for all your signage needs",
      image: "/digital-signage.jpg",
      features: ["High Resolution", "Quick Turnaround", "Multiple Materials"],
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      content:
        "Outstanding quality flex banners for our restaurant opening. The colors were vibrant and the material was durable.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "Event Manager",
      content:
        "Quick delivery and excellent print quality. Ranjeet Outdoor Advertising is our go-to for all signage needs.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Retail Store Owner",
      content: "Professional service and competitive pricing. The sunboards looked exactly as we envisioned.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden hero-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${heroSlides[currentSlide].image}')`,
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentSlide}-content`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 text-balance"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-6 text-orange-400 block"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl mb-8 text-pretty"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <PulsingGlow>
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4"
                  onClick={handleGetQuote}
                >
                  <Printer className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </PulsingGlow>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center mt-8 space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText type="fadeUp" className="text-4xl font-bold text-foreground mb-4">
              Why Choose Ranjeet Outdoor Advertising?
            </AnimatedText>
            <AnimatedText type="fadeUp" className="text-xl text-muted-foreground" delay={0.2}>
              Your trusted partner for all printing and advertising needs
            </AnimatedText>
          </div>

          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-orange-600" />,
                title: "Quality Materials",
                description: "Premium quality materials ensuring durability and vibrant colors",
              },
              {
                icon: <Zap className="h-12 w-12 text-orange-600" />,
                title: "Quick Turnaround",
                description: "Fast delivery without compromising on quality standards",
              },
              {
                icon: <Palette className="h-12 w-12 text-orange-600" />,
                title: "Custom Designs",
                description: "Personalized designs tailored to your brand requirements",
              },
              {
                icon: <Shield className="h-12 w-12 text-orange-600" />,
                title: "Guaranteed Quality",
                description: "100% satisfaction guarantee on all our printing services",
              },
            ].map((feature, index) => (
              <StaggerItem key={index}>
                <FuturisticCard className="text-center h-full">
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <FloatingElement className="flex justify-center mb-4">{feature.icon}</FloatingElement>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </FuturisticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText type="fadeUp" className="text-4xl font-bold text-foreground mb-4">
              Our Printing Services
            </AnimatedText>
            <AnimatedText type="fadeUp" className="text-xl text-muted-foreground" delay={0.2}>
              Professional printing solutions for all your advertising needs
            </AnimatedText>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <FuturisticCard delay={index * 0.2}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <motion.div
                      className="relative h-48 overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-orange-600 text-white">Popular</Badge>
                    </motion.div>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="h-4 w-4 text-orange-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                  </Card>
                </FuturisticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedText type="fadeUp" className="text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </AnimatedText>
            <AnimatedText type="fadeUp" className="text-xl text-muted-foreground" delay={0.2}>
              Real feedback from satisfied customers
            </AnimatedText>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <FuturisticCard delay={index * 0.2}>
                  <Card className="hover:shadow-lg transition-all duration-300 h-full">
                    <CardHeader>
                      <motion.div
                        className="flex items-center mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Star className="h-5 w-5 fill-orange-600 text-orange-600" />
                          </motion.div>
                        ))}
                      </motion.div>
                      <CardDescription className="text-base italic">"{testimonial.content}"</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </FuturisticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>


      {/* VIDEO CTA SECTION WITH 3 VIDEOS */}
      <section className="relative py-20 overflow-hidden">
        {/* Background videos in a 3-column grid */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video1.mp4" type="video/mp4" />
          </video>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video3.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Darker gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedText type="glow" className="text-4xl font-bold mb-6 text-gray-100">
            Ready to Print Your Success?
          </AnimatedText>
          <AnimatedText type="fadeUp" className="text-xl mb-8 text-gray-200" delay={0.3}>
            Get professional printing solutions that make your brand stand out. Contact us today for a free quote!
          </AnimatedText>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
                onClick={handleGetQuote}
              >
                <Printer className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                onClick={() => router.push("/services")}
              >
                <Truck className="mr-2 h-5 w-5" />
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
