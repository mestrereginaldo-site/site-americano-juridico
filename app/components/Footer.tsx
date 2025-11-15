export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-3 rounded-2xl shadow-lg">
                <i className="fas fa-scale-balanced text-xl"></i>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold">BrazilLaw Partners</div>
                <div className="text-slate-400 text-sm font-semibold tracking-wider">INTERNATIONAL LEGAL CONSULTANTS</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Premier legal consultancy specializing in Brazilian corporate law for 
              international corporations. Strategic counsel for complex cross-border 
              transactions and regulatory compliance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Legal Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Corporate Formation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Regulatory Compliance</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Data Protection (LGPD)</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Contract Law</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-blue-400"></i>
                contact@brazilianlegal.com
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-blue-400"></i>
                +55 (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <i className="fab fa-whatsapp text-green-400"></i>
                +55 (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-clock text-amber-400"></i>
                24/7 Emergency Support
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-500 text-sm">
              © 2024 Brazilian Legal Partners. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
