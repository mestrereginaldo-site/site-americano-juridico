import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brazilian <span className="text-yellow-400">Business Law</span> Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Legal Guidance for Foreign Investors and International Companies in Brazil
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">🏢</div>
              <h3 className="font-bold mb-2">Company Formation</h3>
              <p className="text-sm">Establish your business in Brazil with full legal compliance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">👥</div>
              <h3 className="font-bold mb-2">Labor Law Compliance</h3>
              <p className="text-sm">Navigate Brazilian employment regulations successfully</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">🔒</div>
              <h3 className="font-bold mb-2">LGPD Compliance</h3>
              <p className="text-sm">Brazil's data protection law requirements</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
            >
              Free Legal Consultation
            </a>
            <a 
              href="#services" 
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">International Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">Compliance Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">24/7</div>
              <div className="text-gray-600">Legal Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Legal Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal support for foreign businesses entering the Brazilian market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon="📊"
              title="Business Formation"
              description="Complete guidance on establishing your company in Brazil, including legal entity selection and registration process."
            />
            <ServiceCard 
              icon="⚖️"
              title="Labor Law Compliance"
              description="Ensure full compliance with Brazilian labor regulations, contracts, and employee rights."
            />
            <ServiceCard 
              icon="🔐"
              title="LGPD Data Protection"
              description="Adapt your business to Brazil's General Data Protection Law requirements."
            />
            <ServiceCard 
              icon="📝"
              title="Contract Law"
              description="Drafting and reviewing commercial contracts to protect your interests in Brazil."
            />
            <ServiceCard 
              icon="💼"
              title="Corporate Law"
              description="Ongoing corporate legal support for your business operations in Brazil."
            />
            <ServiceCard 
              icon="🌎"
              title="International Law"
              description="Cross-border legal matters and international business transactions."
            />
          </div>
        </div>
      </section>

      {/* Why Brazil Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Invest in Brazil?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Market Opportunities</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>8th largest economy in the world</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Population of 214+ million consumers</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Growing middle class with purchasing power</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Abundant natural resources and agricultural power</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Legal Framework</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Stable democratic system</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Well-established legal system</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Investment protection treaties</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Modern data protection laws (LGPD)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Legal Insights & Updates</h2>
            <p className="text-gray-600">Stay informed about Brazilian business law</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArticleCard 
              title="How to Open a Company in Brazil as a Foreigner - 2024 Guide"
              excerpt="Complete step-by-step guide to company formation in Brazil for foreign investors and entrepreneurs."
              readTime="8 min read"
            />
            <ArticleCard 
              title="Understanding Brazilian Labor Laws: Key Requirements for Employers"
              excerpt="Essential guide to hiring employees in Brazil and compliance with local labor regulations."
              readTime="6 min read"
            />
            <ArticleCard 
              title="LGPD Compliance: What International Companies Need to Know"
              excerpt="Brazil's data protection law requirements and how to ensure your business is compliant."
              readTime="7 min read"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get Legal Advice</h2>
            <p className="text-gray-600">Contact us for a free initial consultation about your business in Brazil</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">contact@brazilianbusinesslaw.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Phone/WhatsApp</div>
                      <div className="text-gray-600">+55 (11) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <i className="fas fa-clock text-blue-600"></i>
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="text-gray-600">Mon-Fri: 9AM-6PM BRT</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function ArticleCard({ title, excerpt, readTime }: { title: string; excerpt: string; readTime: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{readTime}</span>
          <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
            Read More →
          </button>
        </div>
      </div>
    </div>
  )
}
