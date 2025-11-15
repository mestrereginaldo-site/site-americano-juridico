'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-slate-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-2xl transition-all duration-500 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg' 
                : 'bg-white/10 backdrop-blur-md border border-white/20'
            }`}>
              <i className={`fas fa-scale-balanced text-xl ${
                isScrolled ? 'text-white' : 'text-white'
              }`}></i>
            </div>
            <div>
              <div className={`font-serif text-2xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}>
                BrazilLaw
              </div>
              <div className={`text-xs font-semibold tracking-wider transition-colors duration-500 ${
                isScrolled ? 'text-slate-500' : 'text-white/70'
              }`}>
                INTERNATIONAL PARTNERS
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#services" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Services
            </a>
            <a 
              href="#about" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </a>
            <a 
              href="#contact" 
              className={`font-semibold transition-all duration-300 hover:scale-105 ${
                isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className={`font-bold py-3 px-8 rounded-xl transition-all duration-500 hover:shadow-2xl ${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20'
              }`}
            >
              Get Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden flex flex-col space-y-1.5 p-3 rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-slate-100 hover:bg-slate-200' 
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-md'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`w-6 h-0.5 rounded-full transition-all ${
              isScrolled ? 'bg-slate-700' : 'bg-white'
            } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all ${
              isScrolled ? 'bg-slate-700' : 'bg-white'
            } ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all ${
              isScrolled ? 'bg-slate-700' : 'bg-white'
            } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200/20 bg-white/95 backdrop-blur-lg rounded-3xl mt-2 shadow-2xl">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-slate-900 font-semibold text-lg py-3 px-6 hover:bg-slate-100 rounded-xl transition-all">Home</a>
              <a href="#services" className="text-slate-700 font-semibold text-lg py-3 px-6 hover:bg-slate-100 rounded-xl transition-all">Services</a>
              <a href="#about" className="text-slate-700 font-semibold text-lg py-3 px-6 hover:bg-slate-100 rounded-xl transition-all">About</a>
              <a href="#contact" className="text-slate-700 font-semibold text-lg py-3 px-6 hover:bg-slate-100 rounded-xl transition-all">Contact</a>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all duration-300 mt-4 shadow-lg"
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
