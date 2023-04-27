import React from 'react'
import Navigator from './components/Navigator'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navigator/>
    </ChakraProvider>
  </React.StrictMode>,
)
