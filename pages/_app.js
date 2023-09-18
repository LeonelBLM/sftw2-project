//si algo no funciona volver al minuto 14:15 y copiar el _app.js
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootswatch/dist/lux/bootstrap.css'
import '@/styles/hero.css'
import {SessionProvider} from 'next-auth/react'
export default function MyApp({ Component, pageProps }) {
    //return <Component {...pageProps} />
    return <SessionProvider>
  
    <Component {...pageProps} />
    </SessionProvider>
  }

  
