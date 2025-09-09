"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  Award,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Calendar,
  Phone,
  Printer,
  Eye,
  Lightbulb,
  Shield,
  Clock,
} from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2000",
      title: "Company Founded",
      description: "Started with a vision to provide quality printing solutions to local businesses",
    },
    {
      year: "2006",
      title: "First Major Contract",
      description: "Secured our first large-scale project with a leading retail chain",
    },
    {
      year: "2010",
      title: "Technology Upgrade",
      description: "Invested in state-of-the-art digital printing equipment",
    },
    {
      year: "2016",
      title: "1000+ Clients",
      description: "Reached the milestone of serving over 1000 satisfied customers",
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Expanded operations with a larger facility and more services",
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Recognized as one of the best printing companies in the region",
    },
  ]

  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Excellence",
      description:
        "We never compromise on quality. Every project receives our full attention to detail and craftsmanship.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Delivery",
      description: "We understand deadlines matter. Our efficient processes ensure on-time delivery every time.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. Their success is our success.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We continuously invest in new technologies and techniques to stay ahead of the curve.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description: "Consistent quality and service you can depend on, project after project.",
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Transparency",
      description: "Clear communication, honest pricing, and no hidden surprises in our business dealings.",
    },
  ]


  const stats = [
    { number: "1000+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "24+", label: "Years Experience", icon: <Calendar className="h-6 w-6" /> },
    { number: "5000+", label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "20+", label: "Team Members", icon: <Award className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About Ranjeet Outdoor Advertising</h1>
              <p className="text-xl mb-8 text-pretty leading-relaxed">
                Since 2000, we've been transforming businesses through high-quality printing solutions. Our passion for
                excellence and commitment to customer satisfaction has made us a trusted partner for over 1000
                businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919419149537?text=Hello%20Ranjeet%20Outdoor%20Advertising,%20I%20would%20like%20to%20know%20more%20about%20your%20company%20and%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
            <div className="animate-scale-in animate-delay-300">
              <img
                src="/hero-vinyl-cutting-workshop.jpg"
                alt="Ranjeet Outdoor Advertising Team"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img src="/digital-printing.jpg" alt="Our Story" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                What started as a small printing shop in 2000 has grown into one of the region's most trusted outdoor
                advertising companies. Our founder, had a simple vision: to help businesses communicate
                their message effectively through high-quality printing solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Over the years, we've invested in cutting-edge technology, expanded our team of skilled professionals,
                and built lasting relationships with our clients. Today, we're proud to serve businesses of all sizes,
                from local startups to large corporations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction continues to drive us forward as we
                help businesses make their mark in the world.
              </p>
              <Link href="/testimonials">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Listen from our customers 
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Mission & Vision</h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up animate-delay-200">
              Guiding principles that drive our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 animate-slide-in-left">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To provide exceptional printing and outdoor advertising solutions that help businesses communicate
                  effectively, build their brand presence, and achieve their marketing goals through quality,
                  innovation, and outstanding customer service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 animate-slide-in-right">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  To be the leading outdoor advertising and printing company in the region, recognized for our
                  innovation, quality, and commitment to helping businesses succeed through powerful visual
                  communication solutions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Our Values</h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up animate-delay-200">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Our Journey</h2>
            <p className="text-xl text-muted-foreground animate-fade-in-up animate-delay-200">
              Key milestones in our growth story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <Badge className="w-fit bg-primary text-primary-foreground mb-2">{milestone.year}</Badge>
                  <CardTitle className="text-lg">{milestone.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{milestone.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 animate-fade-in-up animate-delay-200 text-pretty">
            Join over 1000 satisfied customers who trust us with their printing and advertising needs. Let's bring your
            vision to life together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
            <Link href="/services">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                <Printer className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </Link>
            <a
              href="https://wa.me/919419149537?text=Hello%20Ranjeet%20Outdoor%20Advertising,%20I%20would%20like%20to%20discuss%20my%20printing%20requirements."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 94191 49537
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
