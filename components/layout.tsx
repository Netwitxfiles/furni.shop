'use client'

import Link from "next/link"
import { useState } from "react"
import { Search, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact' },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-semibold text-gray-800">
              furni.shop
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </Button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 top-full mt-2 w-screen max-w-sm">
                    <div className="relative bg-white rounded-lg shadow-lg p-4 border">
                      <input
                        type="search"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                        autoFocus
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-6 top-6"
                        onClick={() => setIsSearchOpen(false)}
                        aria-label="Close search"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>furni.shop</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col space-y-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay for search */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsSearchOpen(false)}
          aria-hidden="true"
        />
      )}

      <main>{children}</main>
    </div>
  )
}

