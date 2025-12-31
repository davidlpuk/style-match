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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  )
}
