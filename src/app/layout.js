import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'bitvevo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, isDarkMode }) {
  return (
    <html lang="en" className="bg-[#f4f1f6]">
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}