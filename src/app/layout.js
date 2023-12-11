import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Nunito } from 'next/font/google'
import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'


const nunito = Nunito ({ 
  subsets: ['latin'],
  weight: [ '200' , '300','400','500','600','700','800','900'],
  variable: '--font-nunito',
})

export const metadata = {
  title: 'Dashboard',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"  dir="ltr">
      <body className={`${nunito.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}>
        <Toaster toastOptions={{ style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          } }} 
        />
        {children}
      </body>
    </html>
  )
}
