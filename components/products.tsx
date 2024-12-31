'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = ['All', 'Bed', 'Sofa', 'Chair', 'Light']

const products = [
  {
    id: 1,
    name: 'Hand Base Lamp',
    price: 35.00,
    originalPrice: 55.00,
    image: '/images/product-01.webp',
    category: 'Light',
    badge: 'New'
  },
  {
    id: 2,
    name: 'Vintage Chair',
    price: 65.00,
    originalPrice: 95.00,
    image: '/images/product-02.webp',
    category: 'Chair',
    badge: 'Sale'
  },
  {
    id: 3,
    name: 'Lamp Tool',
    price: 35.00,
    originalPrice: 45.00,
    image: '/images/product-03.webp',
    category: 'Light',
    badge: 'New'
  },
  {
    id: 4,
    name: 'Stylish Chair',
    price: 45.00,
    originalPrice: 55.00,
    image: '/images/product-04.webp',
    category: 'Chair',
    badge: 'Sale'
  },
  {
    id: 5,
    name: 'Vintage Chair',
    price: 65.00,
    originalPrice: 95.00,
    image: '/images/product-05.webp',
    category: 'Chair',
    badge: 'New'
  },
  {
    id: 6,
    name: 'Stackable Chair',
    price: 87.00,
    originalPrice: 97.00,
    image: '/images/product-06.webp',
    category: 'Chair',
    badge: 'Sale'
  },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory)

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-emerald-800">Products</h2>
          <Button variant="ghost" className="text-emerald-800 font-medium">
            See All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Categories */}
        <div className="flex gap-8 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-lg whitespace-nowrap ${
                activeCategory === category
                  ? 'text-emerald-800 font-semibold'
                  : 'text-gray-500 hover:text-emerald-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-gray-50 p-6 rounded-lg">
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm">
                  {product.badge}
                </Badge>
              </div>
              
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-emerald-800">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

