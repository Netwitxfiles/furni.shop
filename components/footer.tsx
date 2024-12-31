import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">furni.shop</h3>
            <p className="mb-4">Making your space beautiful, one room at a time.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-white"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-white"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-white"><Linkedin size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Our Team</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white">Interior Design</Link></li>
              <li><Link href="#" className="hover:text-white">Furniture Selection</Link></li>
              <li><Link href="#" className="hover:text-white">Space Planning</Link></li>
              <li><Link href="#" className="hover:text-white">Color Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>123 Design Street</li>
              <li>Beautiful City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@furni.shop</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2023 furni.shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

