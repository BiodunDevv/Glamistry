"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ProductCard } from "@/components/product-card"
import { ProductFilter } from "@/components/product-filter"
import { containerVariants, itemVariants } from "@/lib/motion-variants"

const products = [
  {
    id: 1,
    name: "Radiant Glow Foundation",
    price: 45,
    originalPrice: 55,
    image: "/luxury-foundation-bottle-with-golden-accents.jpg",
    category: "foundation",
    brand: "Bella Beauty",
    rating: 4.8,
    reviews: 124,
    description: "Full coverage foundation with a natural, radiant finish",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Velvet Matte Lipstick Set",
    price: 32,
    image: "/elegant-lipstick-collection-in-warm-tones.jpg",
    category: "lips",
    brand: "Rouge Studio",
    rating: 4.9,
    reviews: 89,
    description: "Long-lasting matte lipsticks in 6 stunning shades",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Professional Brush Set",
    price: 78,
    originalPrice: 95,
    image: "/professional-makeup-brushes-with-rose-gold.jpg",
    category: "tools",
    brand: "Pro Artist",
    rating: 4.7,
    reviews: 156,
    description: "Complete 12-piece professional makeup brush collection",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Luminous Highlighter Palette",
    price: 28,
    image: "/shimmering-highlighter-palette-with-mirror.jpg",
    category: "face",
    brand: "Glow Beauty",
    rating: 4.6,
    reviews: 73,
    description: "4-shade highlighter palette for the perfect glow",
    inStock: true,
    featured: false,
  },
  {
    id: 5,
    name: "Smoky Eye Shadow Palette",
    price: 42,
    image: "/elegant-eyeshadow-palette-with-neutral-tones.jpg",
    category: "eyes",
    brand: "Shadow Co",
    rating: 4.8,
    reviews: 201,
    description: "18 highly pigmented shades for dramatic eye looks",
    inStock: false,
    featured: true,
  },
  {
    id: 6,
    name: "Precision Eyeliner Duo",
    price: 24,
    image: "/sleek-eyeliner-pens-black-and-brown.jpg",
    category: "eyes",
    brand: "Line Perfect",
    rating: 4.5,
    reviews: 67,
    description: "Waterproof liquid eyeliner in black and brown",
    inStock: true,
    featured: false,
  },
]

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortBy, setSortBy] = useState("featured")

  const handleFilterChange = (filters: any) => {
    let filtered = products

    // Filter by category
    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange
      filtered = filtered.filter((product) => product.price >= min && product.price <= max)
    }

    // Filter by availability
    if (filters.inStock) {
      filtered = filtered.filter((product) => product.inStock)
    }

    // Filter by brand
    if (filters.brands && filters.brands.length > 0) {
      filtered = filtered.filter((product) => filters.brands.includes(product.brand))
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    }

    setFilteredProducts(filtered)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="page-heading text-foreground">Beauty Shop</h1>
            <p className="body-text text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium makeup products, carefully selected for their quality and
              performance.
            </p>
          </motion.div>

          {/* Filter and Sort */}
          <motion.div variants={itemVariants}>
            <ProductFilter
              onFilterChange={handleFilterChange}
              sortBy={sortBy}
              onSortChange={setSortBy}
              totalProducts={filteredProducts.length}
            />
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
