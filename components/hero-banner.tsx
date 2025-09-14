"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { motionVariants } from "@/lib/motion-variants"
import Link from "next/link"

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/elegant-makeup-artist-studio-with-soft-lighting-an.jpg" alt="Bella Rose Makeup Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div variants={motionVariants.slideInLeft} className="max-w-4xl mx-auto">
          <motion.h1 className="display-heading text-white mb-6" variants={motionVariants.fadeInUp}>
            Transform Your Beauty
          </motion.h1>
          <motion.p className="body-large text-white/90 mb-8 max-w-2xl mx-auto" variants={motionVariants.fadeInUp}>
            Professional makeup artistry for your most important moments. From bridal elegance to special events, let me
            help you look and feel absolutely radiant.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={motionVariants.fadeInUp}>
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4"
            >
              <Link href="/booking">Book Your Session</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-4 bg-transparent"
            >
              <Link href="/shop">Shop Products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
