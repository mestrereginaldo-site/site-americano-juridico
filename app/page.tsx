import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section with Modern Design */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm">Expert Legal Guidance Since 2010</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6">
                Expand Your Business to 
                <span className="text-yellow-400 block">Brazil</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                Premier legal consultancy for international companies. 
                <span className="block">Navigate Brazilian regulations with confidence.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="group bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                >
                  <span className="flex items-center justify-center gap-3">
                    Get Free Consultation
                    <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </a>
                <a 
                  href="#services" 
                  className="group border-2 border-white/80 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl text-lg backdrop-blur-sm transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    Our Services
                    <i className="fas fa-gem group-hover:rotate-180 transition-transform"></i>
                  </span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <i className="fas fa-shield-check text-green-400"></i>
                  <span className="text-sm">100% Compliance Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-clock text-yellow-400"></i>
                  <span className="text-sm">24/7 Legal Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-globe text-blue-400"></i>
                  <span className="text-sm">50+ Countries Served</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <i className="fas fa-building text-3xl mb-2 text-yellow-400"></i>
                    <div className="font-bold text-lg">Company Formation</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <i className="fas fa-balance-scale text-3xl mb-2 text-green-400"></i>
                    <div className="font-bold text-lg">Legal Compliance</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <i className="fas fa-file-contract text-3xl mb-2 text-blue-400"></i>
                    <div className="font-bold text-lg">Contract Law</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                    <i className="fas fa-database text-3xl mb-2 text-purple-400"></i>
                    <div className="font-bold text-lg">LGPD Compliance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <i className="fas fa-chevron-down text-white/60 text-xl"></i>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="200+"
              label="International Clients"
              icon="🌎"
            />
            <StatCard 
              number="15+"
              label="Years Experience"
              icon="⭐"
            />
            <StatCard 
              number="100%"
              label="Success Rate"
              icon="🏆"
            />
            <StatCard 
              number="24/7"
              label="Legal Support"
              icon="🛡️"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-4">
              <i className="fas fa-gem"></i>
              <span className="font-semibold">Our Legal Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
              Comprehensive Legal Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end legal support for your business expansion to Brazil. 
              From initial setup to ongoing compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="🏢"
              title="Business Formation"
              description="Complete company setup in Brazil, including legal entity selection, registration, and tax optimization."
              features={['Company Registration', 'Tax Planning', 'Legal Entity Setup']}
            />
            <ServiceCard 
              icon="⚖️"
              title="Labor Law Compliance"
              description="Full compliance with Brazilian labor regulations, employment contracts, and worker rights."
              features={['Employment Contracts', 'Labor Compliance', 'Worker Rights']}
            />
            <ServiceCard 
              icon="🔐"
              title="LGPD Data Protection"
              description="Brazil's GDPR equivalent compliance. Protect your business from hefty fines and legal issues."
              features={['Data Protection', 'Compliance Audit', 'Risk Assessment']}
            />
            <ServiceCard 
              icon="📝"
              title="Contract Law"
              description="Drafting and reviewing commercial contracts to safeguard your interests in Brazilian market."
              features={['Contract Drafting', 'Legal Review', 'Negotiation Support']}
            />
            <ServiceCard 
              icon="💼"
              title="Corporate Law"
              description="Ongoing corporate legal support, governance, and business operation compliance."
              features={['Corporate Governance', 'Legal Support', 'Compliance Monitoring']}
            />
            <ServiceCard 
              icon="🌐"
              title="International Law"
              description="Cross-border legal matters, international treaties, and global business transactions."
              features={['Cross-border Issues', 'International Treaties', 'Global Transactions']}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ready to Expand to Brazil?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert legal guidance and ensure your business complies with all Brazilian regulations from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </a>
            <a 
              href="tel:+5511999999999" 
              className="border-2 border-white/80 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Componente StatCard atualizado
function StatCard({ number, label, icon }: { number: string; label: string; icon: string }) {
  return (
    <div className="text-center group">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border border-gray-100">
        <div className="text-3xl mb-4">{icon}</div>
        <div className="text-4xl lg:text-5xl font-serif font-bold text-blue-900 mb-2">{number}</div>
        <div className="text-gray-600 font-semibold">{label}</div>
      </div>
    </div>
  )
}

// Componente ServiceCard atualizado
function ServiceCard({ icon, title, description, features }: { 
  icon: string; 
  title: string; 
  description: string;
  features: string[];
}) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <i className="fas fa-check text-green-500 mr-3"></i>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
          Learn More
          <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </button>
      </div>
    </div>
  )
}
