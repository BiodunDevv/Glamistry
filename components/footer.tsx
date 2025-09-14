import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Bella Rose</h3>
            <p className="body-text text-secondary-foreground/80">
              Professional makeup artist specializing in bridal, special events, and beauty transformations.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/shop" className="hover:text-primary transition-colors">
                Shop
              </Link>
              <Link href="/booking" className="hover:text-primary transition-colors">
                Book Now
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/services#bridal" className="hover:text-primary transition-colors">
                Bridal Makeup
              </Link>
              <Link href="/services#special-events" className="hover:text-primary transition-colors">
                Special Events
              </Link>
              <Link href="/services#photoshoot" className="hover:text-primary transition-colors">
                Photoshoot
              </Link>
              <Link href="/services#lessons" className="hover:text-primary transition-colors">
                Makeup Lessons
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@bellarose.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">© 2024 Bella Rose Makeup Artist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
