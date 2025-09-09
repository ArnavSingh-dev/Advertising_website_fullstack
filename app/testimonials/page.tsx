'use client'
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import AnimatedText from "@/components/animated-text"
import { Printer, Palette, Zap, ArrowRight, Truck, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"


  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Kumar Electronics",
      service: "Flex Banners",
      rating: 5,
      text: "Ranjeet Outdoor Advertising delivered exceptional quality flex banners for our store opening. The colors were vibrant, the material was durable, and the installation was perfect. Highly recommended!",
      image: "/indian-businessman.png",
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Sharma Textiles",
      service: "Sunboards",
      rating: 5,
      text: "We needed sunboards for our textile showroom and Ranjeet team exceeded our expectations. Professional service, timely delivery, and excellent quality. Our sales increased by 30% after the new signage!",
      image: "/indian-businesswoman.png",
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Patel Motors",
      service: "Hoarding Printing",
      rating: 5,
      text: "The hoarding printing for our delivery trucks business looks amazing! The design team understood our brand perfectly and the installation was flawless. Great value for money.",
      image: "/indian-business-owner.png",
    },
    {
      id: 4,
      name: "Sunita Gupta",
      company: "Gupta Sweets",
      service: "LED Signage",
      rating: 5,
      text: "Our new LED signage has transformed our sweet shop's visibility. The bright, clear display attracts customers even from a distance. Excellent work by the Ranjeet team!",
      image: "/indian-woman-shop-owner.jpg",
    },
    {
      id: 5,
      name: "Vikram Singh",
      company: "Singh Construction",
      service: "Safety Signage",
      rating: 5,
      text: "For our construction sites, we needed durable safety signage. Ranjeet provided weather-resistant signs that have lasted over 2 years. Professional service and competitive pricing.",
      image: "/indian-construction-manager.jpg",
    },
    {
      id: 6,
      name: "Meera Joshi",
      company: "Joshi Fashion Hub",
      service: "Digital Printing",
      rating: 5,
      text: "The digital prints for our fashion store's interior decoration are stunning. The quality is exceptional and the colors are exactly as we wanted. Will definitely work with them again!",
      image: "/indian-fashion-store-owner.jpg",
    },
  ]

  const stats = [
    { label: "Happy Customers", value: "500+", icon: Users },
    { label: "Projects Completed", value: "1000+", icon: CheckCircle },
    { label: "Years of Experience", value: "24+", icon: Award },
    { label: "Customer Satisfaction", value: "97%", icon: TrendingUp },
  ]

export default function TestimonialsPage() {
  const [scrollY, setScrollY] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const router = useRouter()
  const handleGetQuote = () => {
    // Example: navigate to the contact/quote page
    router.push("/services"); // make sure you have `const router = useRouter();`
  };
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Quote className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">What Our Customers Say</h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-8 text-pretty">
                Don't just take our word for it. Here's what our satisfied customers have to say about our printing
                services.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-orange-200 mt-1">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-orange-200 mt-1">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-orange-100 to-emerald-100 p-6 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-orange-600 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-balance">
                Customer Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
                From small businesses to large enterprises, see how our printing solutions have helped businesses grow and
                succeed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                        <p className="text-slate-600">{testimonial.company}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="bg-gradient-to-r from-orange-100 to-emerald-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.service}
                      </span>
                    </div>

                    <Quote className="h-8 w-8 text-orange-200 mb-4" />
                    <p className="text-slate-700 leading-relaxed text-pretty">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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

