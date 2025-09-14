"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingSteps } from "@/components/booking-steps"
import { motionVariants } from "@/lib/motion-variants"

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <main>
        <motion.div initial="hidden" animate="visible" variants={motionVariants.staggerContainer}>
          {/* Hero Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4 text-center">
              <motion.div variants={motionVariants.fadeInUp}>
                <h1 className="section-heading text-foreground mb-4">Book Your Session</h1>
                <p className="body-large text-muted-foreground max-w-2xl mx-auto">
                  Ready to transform your look? Follow these simple steps to book your personalized makeup session.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Booking Flow */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4">
              <BookingSteps />
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  )
}
