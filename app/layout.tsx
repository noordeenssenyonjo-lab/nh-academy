import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomNav from '../components/BottomNav'

export const metadata = {
  title: 'N & H Arabic & Islamic Academy',
  description: 'Learn Arabic. Learn the Qur\'an. Grow in Knowledge.'
}

export default function RootLayout({ children }: { children: ReactNode }){
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800 pb-20">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
