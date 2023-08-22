import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans, Hind_Madurai  } from 'next/font/google'
import { useState, createContext } from 'react'
import Script from 'next/script'

// Setting up fonts for tailwind
const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','700', '800','900']
})

const hind = Hind_Madurai({
  subsets: ['latin'],
  variable: '--font-hind',
  weight: ['300','400','500','600','700']
})

type directionToMoveType = {
  directionToMove: 'left' | 'right' | 'top' | 'bottom'
  setDirectionToMove: React.Dispatch<React.SetStateAction<'left' | 'right' | 'top' | 'bottom'>>
}

export const directionToMoveContext = createContext<directionToMoveType>({
  directionToMove: 'right', // default direction
  setDirectionToMove: () => {} // initial function to avoid null issues
});


export default function App({ Component, pageProps }: AppProps) {
  const [directionToMove, setDirectionToMove] = useState<directionToMoveType['directionToMove']>('right');
  
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <directionToMoveContext.Provider value={{directionToMove, setDirectionToMove}}>
      <main className={ `${hind.variable} ${nunito.variable} font-one site-container w-[100vw] overflow-hidden relative bg-dark`}>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-W9LT34TQSN"/>
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W9LT34TQSN');
          `}
      </Script>
        <AnimatePresence initial={false} mode="popLayout">
          <Component pageKey={pageKey} key={pageKey} {...pageProps} />
        </AnimatePresence>
      </main>
    </directionToMoveContext.Provider>
  )
}
