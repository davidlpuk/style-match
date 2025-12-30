import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Style Match - Fashion Coordination for Couples',
  description: 'A fashion coordination app for style-conscious couples to match their outfits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
