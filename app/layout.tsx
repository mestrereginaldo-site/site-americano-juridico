import './globals.css'
import { Inter } from 'next/font/google'
import AdSenseScript from './components/AdSenseScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brazilian Business Law Guide - Legal Expertise for Foreign Investors',
  description: 'Expert legal guidance on Brazilian labor law, contracts, LGPD compliance, and business formation for foreign entrepreneurs and international companies.',
  keywords: 'Brazilian law, business Brazil, foreign investment, LGPD, labor law Brazil, company formation Brazil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <AdSenseScript />
        {children}
      </body>
    </html>
  )
}
