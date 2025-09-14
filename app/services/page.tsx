"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"
import { FilterBar } from "@/components/filter-bar"
import { BookingCTA } from "@/components/booking-cta"
import { motionVariants } from "@/lib/motion-variants"
import { useState } from "react"

const services = [
  {
    id: 1,
    title: "Bridal Makeup",
    duration: "3-4 hours",
    price: 350,
    category: "bridal",
    occasion: "wedding",
    description:
      "Complete bridal makeup experience including trial session, wedding day application, and touch-up kit.",
    features: [
      "Complimentary trial session",
      "Long-lasting formula",
      "Touch-up kit included",
      "Hair styling available",
    ],
    image: "/beautiful-bridal-makeup-elegant-bride.jpg",
  },
  {
    id: 2,
    title: "Bridal Trial",
    duration: "2 hours",
    price: 150,
    category: "bridal",
    occasion: "wedding",
    description: "Perfect your wedding day look with a detailed trial session 4-6 weeks before your big day.",
    features: ["Detailed consultation", "Multiple look options", "Photo documentation", "Product recommendations"],
    image: "/bridal-makeup-trial-consultation-elegant.jpg",
  },
  {
    id: 3,
    title: "Photoshoot Glam",
    duration: "2-3 hours",
    price: 200,
    category: "photoshoot",
    occasion: "professional",
    description: "Professional makeup designed specifically for photography and modeling shoots.",
    features: ["Camera-ready finish", "Multiple looks available", "Touch-ups during shoot", "Professional products"],
    image: "/glamorous-photoshoot-makeup-dramatic-lighting.jpg",
  },
  {
    id: 4,
    title: "Special Event Makeup",
    duration: "1.5-2 hours",
    price: 150,
    category: "events",
    occasion: "special",
    description: "Elegant makeup for galas, parties, proms, and other special occasions.",
    features: ["Custom color palette", "Long-wearing formula", "Complimentary consultation", "Touch-up tips"],
    image: "/elegant-evening-makeup-special-event.jpg",
  },
  {
    id: 5,
    title: "Prom Makeup",
    duration: "1.5 hours",
    price: 120,
    category: "events",
    occasion: "prom",
    description: "Age-appropriate glamorous makeup perfect for prom night and formal events.",
    features: ["Youthful enhancement", "Photo-ready finish", "Complimentary lip touch-up", "Parent consultation"],
    image: "/prom-makeup-young-elegant-formal.jpg",
  },
  {
    id: 6,
    title: "Makeup Lessons",
    duration: "2 hours",
    price: 120,
    category: "lessons",
    occasion: "learning",
    description: "Learn professional makeup techniques in personalized one-on-one sessions.",
    features: ["Personalized instruction", "Product recommendations", "Take-home guide", "Follow-up support"],
    image: "/makeup-lesson-tutorial-professional-artist-teachin.jpg",
  },
  {
    id: 7,
    title: "Group Makeup Lessons",
    duration: "3 hours",
    price: 200,
    category: "lessons",
    occasion: "group",
    description: "Fun group sessions perfect for bridal parties, birthdays, or girls' nights.",
    features: ["Up to 4 people", "Interactive learning", "Group discounts", "Refreshments included"],
    image: "/group-makeup-lesson-friends-learning.jpg",
  },
  {
    id: 8,
    title: "Mature Beauty Makeup",
    duration: "2 hours",
    price: 160,
    category: "mature",
    occasion: "special",
    description: "Specialized makeup techniques designed to enhance mature skin with elegance.",
    features: ["Age-appropriate techniques", "Skin-enhancing products", "Gentle application", "Confidence building"],
    image: "/mature-beauty-makeup-elegant-sophisticated.jpg",
  },
]

export default function ServicesPage() {
  const [filteredServices, setFilteredServices] = useState(services)

  return (
    <div className="min-h-screen">
      <main>
        <motion.div initial="hidden" animate="visible" variants={motionVariants.staggerContainer}>
          {/* Hero Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <motion.div variants={motionVariants.fadeInUp}>
                <h1 className="display-heading text-foreground mb-6">Professional Services</h1>
                <p className="body-large text-muted-foreground max-w-3xl mx-auto">
                  From intimate bridal sessions to glamorous photoshoots, discover the perfect makeup service for your
                  special occasion. Each service is tailored to enhance your natural beauty and boost your confidence.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Filter and Services */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <FilterBar services={services} onFilter={setFilteredServices} />

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
                variants={motionVariants.staggerContainer}
              >
                {filteredServices.map((service) => (
                  <motion.div key={service.id} variants={motionVariants.fadeInUp}>
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </motion.div>
      </main>
      <BookingCTA />
    </div>
  )
}
