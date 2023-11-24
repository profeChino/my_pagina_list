import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'
import NavigationBar from '@/components/NavigationBar'

const cairo = Cairo({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Game List',
  description: 'A small page to see your favorite games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cairo.className}>
        <NavigationBar/>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
