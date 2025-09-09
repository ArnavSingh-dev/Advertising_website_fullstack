"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const isScrolled = scrollY > 50
  const isHomePage = pathname === "/"

  const getNavbarClasses = () => {
    if (isScrolled) {
      return "navbar-glass shadow-lg"
    } else if (isHomePage) {
      return "navbar-transparent"
    } else {
      return "bg-background/95 backdrop-blur-sm shadow-sm"
    }
  }

  const getTextColors = () => {
    if (isScrolled || !isHomePage) {
      return {
        textColor: "text-foreground",
        mutedTextColor: "text-muted-foreground",
        hoverTextColor: "hover:text-primary",
      }
    } else {
      return {
        textColor: "text-white",
        mutedTextColor: "text-white/80",
        hoverTextColor: "hover:text-orange-200",
      }
    }
  }

  const { textColor, mutedTextColor, hoverTextColor } = getTextColors()

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${getNavbarClasses()} animate-slide-down`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* ✅ Custom Logo with Outdoor Advertising below */}
          <Link href="/" className="flex flex-col items-center hover-scale group">
            <Image
              src="/logo.png" // place your logo inside /public/logo.png
              alt="Ranjeet Outdoor Logo"
              width={120}
              height={80}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span
              className={`text-sm ${mutedTextColor} mt-1 transition-colors duration-300`}
            >
              Outdoor Advertising
            </span>
          </Link>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/testimonials", label: "Testimonials" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${textColor} ${hoverTextColor} transition-all duration-300 font-medium relative group ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/919419149537?text=Hello%20Ranjeet%20Outdoor%20Advertising,%20I%20would%20like%20to%20inquire%20about%20your%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className={`${mutedTextColor} hover:text-primary transition-all duration-300 hover-scale`}
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@ranjeetoutdoor.com"
                className={`${mutedTextColor} hover:text-primary transition-all duration-300 hover-scale`}
              >
                <Mail className="h-4 w-4" />
              </a>
              <Link href="/services">
                <Button className="bg-primary hover:bg-primary/90 hover-lift transition-all duration-300">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* ✅ Mobile Menu Toggle */}
          <button
            className={`md:hidden ${textColor} transition-all duration-300 hover-scale`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-5">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-sm border-t mobile-menu-enter">
          <div className="px-4 py-4 space-y-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Us" },
              { href: "/testimonials", label: "Testimonials" },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-foreground hover:text-primary font-medium transition-all duration-300 hover:translate-x-2 ${
                  pathname === item.href ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4 pt-2 animate-fade-in-up animate-delay-400">
              <a
                href="https://wa.me/919419149537?text=Hello%20Ranjeet%20Outdoor%20Advertising,%20I%20would%20like%20to%20inquire%20about%20your%20printing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover-scale"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@ranjeetoutdoor.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover-scale"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90 hover-lift transition-all duration-300 animate-fade-in-up animate-delay-600">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
