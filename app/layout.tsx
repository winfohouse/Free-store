import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ProgressBar from '@/components/ui/ProgressBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MarketWorld | Every Markets',
  description: 'Your one-stop marketplace for all your shopping needs. Find products from around the world.',
  icons: {
    icon: '/favicon.png', // SVG favicon
    // Optionally add more:
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <ProgressBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
