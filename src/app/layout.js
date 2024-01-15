
import Providers from '@/lib/Providers'
import './globals.css'
import { getServerSession } from 'next-auth'
import  SessionProvider  from '@/Components/SessionProvider/SessionProvider'



export const metadata = {
  title: 'Bistro Boss',
  description: 'Best Food Restaurant',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (

    <Providers><html lang="en" data-it-installed = "true">
      
    <body >
    <SessionProvider session={session}>
      {children}
      </SessionProvider>
      </body>

  </html></Providers>

  )
}
