import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Outdoor Structures - Q1 FY26 Campaign Strategy',
  description: 'Brand campaign strategy for high-end sheds, garages, barns, storage, carports and patios in Australia',
  keywords: 'outdoor structures, premium sheds, garages, barns, Australia, campaign strategy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/CocogooseProNarrow.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-cocogoose antialiased">
        {children}
      </body>
    </html>
  )
}