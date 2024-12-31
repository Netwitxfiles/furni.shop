'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronUp, ChevronDown } from 'lucide-react'

const images = [
  '/images/hero-01.jpg',
  '/images/hero-02.jpg',
  '/images/hero-03.jpg',
  '/images/hero-04.jpg',
  '/images/hero-05.jpg',
  '/images/hero-06.jpg',
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 relative">
        {/* Text Content with transparent box */}
        <div className="w-full md:w-5/12 relative z-20">
          {/* Dot pattern */}
          <div className="grid grid-cols-5 gap-2 w-32 mb-8 mx-auto md:mx-0">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
            ))}
          </div>
          
          {/* Hero text */}
          <div className="space-y-6 mb-8 md:mb-0 text-center md:text-left relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 leading-tight">
              We Help You Make Modern Interior
            </h1>
            <p className="text-gray-600 text-lg">
              We will help you to make an elegant and luxurious interior designed by professional interior designer.
            </p>
          </div>

          {/* Transparent box that overlaps the image */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-lg -z-10 
                          md:w-[calc(100%+100px)] md:left-0 md:right-auto
                          lg:w-[calc(100%+200px)]" />
        </div>
        
        {/* Image Section */}
        <div className="w-full md:w-7/12 relative">
          {/* Navigation arrows in top right */}
          <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
            <button
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
              aria-label="Next slide"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
          
          {/* Slide numbers */}
          <div className="absolute right-16 top-4 text-sm font-medium text-gray-500 z-20">
            {String(currentSlide + 1).padStart(2, '0')}
          </div>
          <div className="absolute right-16 top-16 text-sm font-medium text-gray-500 z-20">
            {String(images.length).padStart(2, '0')}
          </div>
          
          {/* Main image */}
          <div className="relative">
            <Image
              src={images[currentSlide]}
              alt={`Modern interior design ${currentSlide + 1}`}
              width={800}
              height={600}
              className="rounded-lg w-full"
              priority
            />
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

