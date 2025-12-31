import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: 'Style Match - The Ultimate Fashion Coordination App for Couples',
  description:
    'Coordinate your outfits effortlessly with Style Match, the premier app for style-conscious couples. Find your perfect match, get inspired, and dress better, together.',
  keywords: [
    'fashion',
    'style',
    'couples',
    'outfits',
    'matching',
    'coordination',
    'app',
    'style-conscious',
  ],
  openGraph: {
    title: 'Style Match - Fashion Coordination for Couples',
    description: 'Coordinate your outfits effortlessly with your partner',
    url: 'https://style-match.vercel.app',
    siteName: 'Style Match',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Style Match - Fashion Coordination for Couples',
    description: 'Coordinate your outfits effortlessly with your partner',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}