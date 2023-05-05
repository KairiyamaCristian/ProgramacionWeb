
import Dark from './darkmode'
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
    margin='0'
    h='100vh'
    >
    <Tabs defaultIndex={3} h='100%' >
    <Box>
    <TabPanels >
        <TabPanel>
          <Dark />
          <Cards/>
          <Cards/>
        </TabPanel>
        <TabPanel>
          <Dark/>
          <Skills/>
        </TabPanel>
        <TabPanel>
          <Dark/>
          <Contact/>
        </TabPanel>
        
        <TabPanel>
          <Dark/>
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
