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
  title: 'Brazilian Business Law Partners | Legal Experts for Foreign Investors',
  description: 'Premier legal consultancy for international companies expanding to Brazil. Specialized in corporate law, compliance, and business formation.',
  keywords: 'Brazilian law, foreign investment, corporate law, business Brazil, legal consultancy',
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
      <body className="font-sans">
        <AdSenseScript />
        {children}
      </body>
    </html>
  )
}
