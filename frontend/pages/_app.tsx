import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito_Sans, Hind_Madurai  } from 'next/font/google'
import { useState, createContext } from 'react'


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

// Define a type for the data you'll be passing through the context
type directionToMove = 'left' | 'right' | 'up' | 'down' | null;

// Create a context with the specified type
export const directionToMoveContext = createContext<directionToMove | null>(null);


export default function App({ Component, pageProps }: AppProps) {
  const [directionToMove, setDirectionToMove] = useState<directionToMove>('right');
  
  const router = useRouter()
  const pageKey = router.asPath

  return (
    <directionToMoveContext.Provider value={{ directionToMove, setDirectionToMove }}>
      <main className={ `${hind.variable} ${nunito.variable} font-one site-container w-[100vw] overflow-hidden relative bg-dark`}>
        <AnimatePresence initial={false} mode="popLayout">
          <Component pageKey={pageKey} key={pageKey} {...pageProps} />
        </AnimatePresence>
      </main>
    </directionToMoveContext.Provider>
  )
}
