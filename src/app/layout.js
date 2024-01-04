import { Inter } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/redux/store/storeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bistro Boss',
  description: 'Best Food Restaurant',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </StoreProvider>
  )
}
