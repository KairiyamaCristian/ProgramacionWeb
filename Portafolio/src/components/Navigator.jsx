
import Dark from './darkmode'
import Perfil from './Perfil'
import Divisor from './Divisor'
import Skills from './Skills'
import Contact from './Contact'
import Cards from './Cards'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaHome, FaUser, FaSearch, FaEnvelopeOpenText} from 'react-icons/fa'
import { VStack,Box} from '@chakra-ui/react'


function Navigator() {
  return (
    <>
    <VStack  
    width={{ base: '100%', sm: '100%', md: '55%' }} 
    margin='auto'
    h='100vh'
    >
    <Tabs defaultIndex={3} h='100%'>
    <Box>
      <Dark/>
    <TabPanels >
        <TabPanel>
          <Cards/>
          <Cards/>
        </TabPanel>
        <TabPanel>
          <Skills/>
        </TabPanel>
        <TabPanel >
          <Contact/>
        </TabPanel>
        <TabPanel padding='0'>
          <Perfil/>
          <Divisor/>
        </TabPanel>
    </TabPanels>
    </Box>
    <Box>
    <TabList justifyContent='center' justifyItems='center'>
      <Flex flex='1' gap='8' justifyContent='space-evenly' position='fixed' bottom='0'>
        <Tab><Icon as={FaHome} /></Tab>
        <Tab><Icon as={FaSearch} /></Tab>
        <Tab><Icon as={FaEnvelopeOpenText} /></Tab>
        <Tab><Icon as={FaUser} /></Tab>
      </Flex>
    </TabList>
    </Box>
    </Tabs>
    </VStack>
    </>
  )
}

export default Navigator
