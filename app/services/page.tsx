"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Printer, Shield, Clock, Award, Eye, Layers, Paintbrush, Star } from "lucide-react"
import QuoteForm from "@/components/quote-compo" // ✅ Import the QuoteForm component

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("General Inquiry")

  const handleGetQuote = (serviceName: string) => {
    setSelectedService(serviceName)
    setIsQuoteModalOpen(true)
  }

  const services = [
    {
      id: 1,
      title: "Flex Banners",
      category: "outdoor",
      description: "High-quality vinyl banners perfect for outdoor advertising, events, and promotions",
      image: "/flex-board.jpg",
      features: [
        "Weather resistant materials",
        "Custom sizes up to 20ft wide",
        "Vibrant UV-resistant inks",
        "Reinforced edges with grommets",
        "Quick 24-48 hour turnaround",
      ],
      applications: ["Store fronts", "Events", "Trade shows", "Construction sites"],
      popular: true,
    },
    {
      id: 2,
      title: "Sunboards",
      category: "indoor",
      description: "Lightweight foam boards ideal for indoor displays, presentations, and temporary signage",
      image: "/sunboard-printing-signage.jpg",
      features: [
        "Lightweight and easy to handle",
        "Smooth surface for crisp printing",
        "Available in multiple thicknesses",
        "Easy to cut and mount",
        "Cost-effective solution",
      ],
      applications: ["Office displays", "Presentations", "Point of sale", "Indoor events"],
      popular: false,
    },
    {
      id: 3,
      title: "Digital Signages",
      category: "digital",
      description: "Modern digital printing solutions for all your signage needs with high-resolution output",
      image: "/digital-signage.jpg",
      features: [
        "High-resolution printing up to 1440 DPI",
        "Multiple material options",
        "Eco-friendly inks",
        "Precise color matching",
        "Professional finishing",
      ],
      applications: ["Retail signage", "Corporate branding", "Wayfinding", "Menu boards"],
      popular: true,
    },
    {
      id: 4,
      title: "Hoarding Printing",
      category: "outdoor",
      description: "Large format outdoor advertising solutions with weather-resistant materials",
      image: "/hoarding-printing-outdoor-advertising.jpg",
      features: [
        "Weather-resistant vinyl material",
        "UV-resistant inks for longevity",
        "Custom sizes up to 20x40 feet",
        "Professional installation service",
      ],
      applications: ["Outdoor Advertising", "Construction Sites", "Event Promotion", "Brand Visibility"],
      popular: true,
    },
    {
      id: 5,
      title: "Vinyl Printing",
      category: "specialty",
      description: "High-quality vinyl prints for indoor and outdoor applications",
      image: "/vinyl-printing-stickers-decals.jpg",
      features: [
        "Self-adhesive vinyl material",
        "Waterproof and fade-resistant",
        "Precision cutting available",
        "Multiple finish options",
      ],
      applications: ["Vehicle Wraps", "Wall Graphics", "Window Decals", "Floor Graphics"],
      popular: false,
    },
    {
      id: 6,
      title: "Glow Boards",
      category: "premium",
      description: "LED backlit signage for maximum visibility and impact",
      image: "/led-glow-board-signage-backlit.jpg",
      features: [
        "Energy-efficient LED backlighting",
        "Uniform light distribution",
        "Customizable brightness levels",
        "Long-lasting LED technology",
      ],
      applications: ["Shop Signage", "Restaurant Menus", "Corporate Branding", "Night Visibility"],
      popular: false,
    },
  ]

  const categories = [
    { id: "all", name: "All Services", icon: <Layers className="h-4 w-4" /> },
    { id: "outdoor", name: "Outdoor", icon: <Eye className="h-4 w-4" /> },
    { id: "indoor", name: "Indoor", icon: <Paintbrush className="h-4 w-4" /> },
    { id: "digital", name: "Digital", icon: <Printer className="h-4 w-4" /> },
    { id: "specialty", name: "Specialty", icon: <Star className="h-4 w-4" /> },
    { id: "premium", name: "Premium", icon: <Award className="h-4 w-4" /> },
  ]

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Printing Services</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Professional printing solutions for all your advertising and branding needs. Quality guaranteed, delivered on time.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
          onClick={() => handleGetQuote("General Inquiry")}
        >
          <Printer className="mr-2 h-5 w-5" /> Get Free Quote
        </Button>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-muted text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Popular</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => handleGetQuote(service.title)}>
                  Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Award className="h-12 w-12 text-primary" />, title: "Premium Quality", desc: "Only the finest materials and latest printing technology" },
            { icon: <Clock className="h-12 w-12 text-primary" />, title: "Fast Turnaround", desc: "Quick delivery without compromising on quality" },
            { icon: <Shield className="h-12 w-12 text-primary" />, title: "Quality Guarantee", desc: "100% satisfaction guarantee on all our services" },
          ].map((item, i) => (
            <Card key={i} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quote Form Modal */}
      <QuoteForm
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  )
}
