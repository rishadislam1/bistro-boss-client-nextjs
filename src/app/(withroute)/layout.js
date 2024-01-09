
import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'


export default function UserLayout({ children }) {
  return (
    
   
      
      <>
        <Header/>
        {children}
          <Footer/>
        </>
  
  )
}
