// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { ShoppingCartProvider } from '../lib/ShoppingCartContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ShoppingCartProvider>
      <Component {...pageProps} />
      </ShoppingCartProvider>
    </ChakraProvider>
  )
}

export default MyApp