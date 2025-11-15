export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Brazilian Business Law</h3>
            <p className="text-gray-300 mb-4">
              Providing expert legal guidance for foreign investors and international companies 
              entering the Brazilian market. Specialized in business formation, compliance, 
              and ongoing legal support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white">Services</a></li>
              <li><a href="#articles" className="text-gray-300 hover:text-white">Legal Insights</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@brazilianbusinesslaw.com</li>
              <li>Phone: +55 (11) 99999-9999</li>
              <li>WhatsApp: +55 (11) 99999-9999</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Brazilian Business Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
