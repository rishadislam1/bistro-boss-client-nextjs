
import './globals.css'
import { StoreProvider } from '@/redux/store/storeProvider'
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'



export const metadata = {
  title: 'Bistro Boss',
  description: 'Best Food Restaurant',
}

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
    <html lang="en">
      <Header/>
      <body className={`max-w-screen-xl mx-auto`}>{children}</body>
      <footer><Footer/></footer>
    </html>
    </StoreProvider>
  )
}
