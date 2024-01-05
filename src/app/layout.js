
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
    <html lang="en" data-it-installed = "true">
      
      <body className={`lg:max-w-screen-xl lg:mx-auto`}>
        <Header/>
        {children}
          <Footer/>
        </body>
  
    </html>
    </StoreProvider>
  )
}
