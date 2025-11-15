'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-xl shadow-lg">
              <i className="fas fa-scale-balanced text-xl"></i>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gray-900">BrazilLaw</div>
              <div className="text-xs text-gray-500 font-semibold">INTERNATIONAL PARTNERS</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              Get Consultation
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden flex flex-col space-y-1.5 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-blue-600 font-semibold text-lg">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 text-lg">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 text-lg">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 text-lg">Contact</a>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-center transition-all duration-300 mt-4"
              >
                Get Consultation
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
