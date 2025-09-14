"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroBanner } from "@/components/hero-banner"
import { ServicesPreview } from "@/components/services-preview"
import { FeaturedProducts } from "@/components/featured-products"
import { Testimonials } from "@/components/testimonials"
import { motionVariants } from "@/lib/motion-variants"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <motion.div initial="hidden" animate="visible" variants={motionVariants.staggerContainer}>
          <HeroBanner />
          <ServicesPreview />
          <FeaturedProducts />
          <Testimonials />
        </motion.div>
      </main>
    </div>
  )
}
