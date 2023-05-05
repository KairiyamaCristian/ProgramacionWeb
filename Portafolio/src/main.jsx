import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import Navigator from './components/Navigator'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navigator/>
    </ChakraProvider>
  </React.StrictMode>,
)
