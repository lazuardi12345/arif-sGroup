'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'MBG Program', href: '#mbg' },
    { label: 'Services', href: '#services' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Produk', href: '/produk' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="text-2xl font-bold text-primary">
            Arif's Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Konsultasi Sekarang
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-4">
              Konsultasi Sekarang
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}