'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <i className="fas fa-scale-balanced"></i>
            </div>
            <div>
              <div className="font-bold text-xl text-blue-900">Brazilian Business Law</div>
              <div className="text-xs text-gray-500">Legal Expertise for International Companies</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-900 font-semibold hover:text-blue-700">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-700">Services</a>
            <a href="#articles" className="text-gray-600 hover:text-blue-700">Insights</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-700">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-blue-900 font-semibold">Home</a>
              <a href="#services" className="text-gray-600">Services</a>
              <a href="#articles" className="text-gray-600">Insights</a>
              <a href="#contact" className="text-gray-600">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
