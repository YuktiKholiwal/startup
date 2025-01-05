import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Love.AI - Keeping Relationships Strong with AI',
  description: 'AI-powered relationship assistant helping couples stay connected through thoughtful reminders and insights.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

