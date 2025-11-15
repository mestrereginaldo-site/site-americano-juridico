'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      {/* Hero Section com Design Premium */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 font-semibold text-sm tracking-wider">
                PREMIER LEGAL CONSULTANTS SINCE 2008
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              <span className="block">Brazilian</span>
              <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                Legal Excellence
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
              Strategic legal counsel for international corporations expanding to Brazil. 
              <span className="block">Expertise in corporate law, compliance, and cross-border transactions.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="#contact" 
                className="group bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-5 px-10 rounded-2xl text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-4"
              >
                <span>Schedule Strategic Consultation</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a 
                href="#services" 
                className="group border-2 border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-bold py-5 px-10 rounded-2xl text-lg backdrop-blur-sm transition-all duration-500 flex items-center gap-4"
              >
                <span>Explore Our Services</span>
                <i className="fas fa-gem group-hover:rotate-180 transition-transform duration-500"></i>
              </a>
            </div>

            {/* Stats em Destaque */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatCard number="200+" label="Global Clients" delay="100" />
              <StatCard number="15+" label="Years Excellence" delay="200" />
              <StatCard number="99.8%" label="Success Rate" delay="300" />
              <StatCard number="24/7" label="Legal Support" delay="400" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section Premium */}
      <ServicesSection />
      
      {/* CTA Section */}
      <CTASection />
      
      <Footer />
    </div>
  )
}

// Componente StatCard Premium
function StatCard({ number, label, delay }: { number: string; label: string; delay: string }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseInt(delay))
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="text-center group">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 group-hover:scale-105">
          <div className="text-4xl lg:text-5xl font-serif font-bold text-white mb-2">{number}</div>
          <div className="text-white/70 font-semibold text-sm tracking-wider">{label}</div>
        </div>
      </div>
    </div>
  )
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      icon: '🏢',
      title: 'Corporate Formation',
      description: 'End-to-end company establishment in Brazil with optimal legal structure and tax planning.',
      features: ['Legal Entity Selection', 'Tax Optimization', 'Registration Process']
    },
    {
      icon: '⚖️',
      title: 'Regulatory Compliance',
      description: 'Complete adherence to Brazilian labor, corporate, and industry-specific regulations.',
      features: ['Labor Law Compliance', 'Industry Regulations', 'Ongoing Monitoring']
    },
    {
      icon: '🔐',
      title: 'Data Protection (LGPD)',
      description: 'Full compliance with Brazils General Data Protection Law requirements and implementation.',
      features: ['LGPD Compliance', 'Data Security', 'Risk Assessment']
    },
    {
      icon: '📝',
      title: 'Contract Law',
      description: 'Drafting and negotiation of commercial contracts protecting your business interests.',
      features: ['Contract Drafting', 'Legal Review', 'Negotiation Support']
    },
    {
      icon: '💼',
      title: 'Corporate Governance',
      description: 'Strategic legal framework for corporate operations and governance standards.',
      features: ['Governance Framework', 'Legal Structure', 'Compliance Programs']
    },
    {
      icon: '🌐',
      title: 'International Law',
      description: 'Cross-border legal strategy and international business transaction support.',
      features: ['Cross-border Issues', 'International Treaties', 'Global Strategy']
    }
  ]

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-6 py-3 mb-6">
            <i className="fas fa-star"></i>
            <span className="font-semibold tracking-wide">LEGAL SERVICES</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6">
            Comprehensive Legal
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strategic legal counsel tailored for international corporations entering 
            the Brazilian market with complex regulatory requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-200 relative overflow-hidden"
            >
              {/* Background Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <i className="fas fa-check-circle text-blue-500 mr-3"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <button className="w-full bg-slate-100 hover:bg-blue-500 hover:text-white text-slate-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300 group-hover:translate-y-1 flex items-center justify-center gap-3">
                Learn More
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section Component
function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold mb-6">
          Ready to Expand to
          <span className="block bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">Brazil?</span>
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Schedule a strategic consultation with our senior legal partners and 
          ensure your market entry is built on solid legal foundations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="mailto:contact@brazilianlegalpartners.com" 
            className="group bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-5 px-12 rounded-2xl text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center gap-4"
          >
            <i className="fas fa-envelope"></i>
            Contact Senior Partners
          </a>
          <a 
            href="tel:+5511999999999" 
            className="group border-2 border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-bold py-5 px-12 rounded-2xl text-lg backdrop-blur-sm transition-all duration-500 flex items-center gap-4"
          >
            <i className="fas fa-phone"></i>
            +55 (11) 99999-9999
          </a>
        </div>
        
        <div className="mt-12 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <i className="fas fa-clock text-amber-400 text-2xl mb-4"></i>
              <div className="font-semibold">24/7 Emergency Support</div>
            </div>
            <div>
              <i className="fas fa-shield-alt text-amber-400 text-2xl mb-4"></i>
              <div className="font-semibold">Confidential Consultation</div>
            </div>
            <div>
              <i className="fas fa-globe text-amber-400 text-2xl mb-4"></i>
              <div className="font-semibold">Multilingual Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
