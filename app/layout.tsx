import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import AdSenseScript from './components/AdSenseScript'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Brazilian Legal Partners | Premier Business Law Experts',
  description: 'Top-tier legal consultancy for international corporations expanding to Brazil. 15+ years expertise in corporate law and compliance.',
  keywords: 'Brazilian law, international business, corporate law, legal consultancy Brazil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">
        <AdSenseScript />
        {children}
        
        {/* WhatsApp Float */}
        <a 
          href="https://wa.me/5511999999999?text=Hello%20Brazilian%20Legal%20Partners" 
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp text-white text-2xl"></i>
        </a>
      </body>
    </html>
  )
}
