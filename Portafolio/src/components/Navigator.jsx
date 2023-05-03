
import Header from './Header'
import Perfil from './Perfil'
import Divisor from './Divisor'
import Skills from './Skills'
import Contact from './Contact'
import Cards from './Cards'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { FaHome, FaUser, FaSearch, FaEnvelopeOpenText} from 'react-icons/fa'
import { VStack, StackDivider,Box} from '@chakra-ui/react'

function Navigator() {
  return (
    <>
    <VStack  
    divider={<StackDivider borderColor='gray.200' />}
    align='stretch'
    margin='0'>
    <Box h='100%' >
    <Header/>
    </Box>
    <Tabs defaultIndex={3}>
    <Box h='90vh'>
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
    </Box>
    <Box h='-webkit-fill-available'>
    <TabList >
      <Flex flex='1' gap='8' justifyContent='space-evenly' position='sticky' bottom='0'>
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
