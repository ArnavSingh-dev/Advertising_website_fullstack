import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info with Custom Logo */}
          <div>
            <Link href="/" className="flex flex-col items-center mb-4 hover-scale group">
              <Image
                src="/logo.png" // place your logo inside /public/logo.png
                alt="Ranjeet Outdoor Logo"
                width={120}
                height={80}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-sm text-background/80 mt-1 transition-colors duration-300">
                Outdoor Advertising
              </span>
            </Link>
            <p className="text-background/80 leading-relaxed mb-4 text-center">
              Your trusted partner for high-quality printing solutions. From flex banners to signages, we bring your
              vision to life.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Flex Banners
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Sunboards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Signages
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Digital Printing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Hoarding Printing
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Contact Info</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  1-A Ext. Shivani Market
                  <br />
                  Gandhi Nagar
                  <br />
                  Jammu, 180004
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+91 9419149537" className="text-sm hover:text-primary transition-colors">
                  +91 94191 49537
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:ranjeetoutdoor088@gmail.com" className="text-sm hover:text-primary transition-colors">
                  ranjeetoutdoor088@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2025 Ranjeet Outdoor Advertising. All rights reserved. Quality printing solutions since 2000.</p>
        </div>
      </div>
    </footer>
  )
}
