
import Header from './Header'
import Perfil from './Perfil'
import Divisor from './Divisor'
import Skills from './Skills'
import Contact from './Contact'
import Cards from './Cards'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaHome, FaUser, FaSearch, FaEnvelopeOpenText} from 'react-icons/fa'


function Navigator() {
  return (
    <>
    <Header/>
    <Tabs defaultIndex={3}>
    <TabPanels>
        <TabPanel>
          <Cards/>
        </TabPanel>
        <TabPanel>
          <Skills/>
        </TabPanel>
        <TabPanel>
          <Contact/>
        </TabPanel>
        
        <TabPanel>
          <Perfil/>
          <Divisor/>
        </TabPanel>
    </TabPanels>
        
    <TabList>
      <Flex flex='1' gap='8' justifyContent='space-evenly'>
        <Tab><Icon as={FaHome} /></Tab>
        <Tab><Icon as={FaSearch} /></Tab>
        <Tab><Icon as={FaEnvelopeOpenText} /></Tab>
        <Tab><Icon as={FaUser} /></Tab>
      </Flex>
    </TabList>
    </Tabs>
    </>
  )
}

export default Navigator
