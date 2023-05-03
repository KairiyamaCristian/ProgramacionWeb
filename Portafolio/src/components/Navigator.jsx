
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

{/* <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px' bg='yellow.200'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink.100'>
    3
  </Box>
</VStack> */}

function Navigator() {
  return (
    <>
    <VStack  
    divider={<StackDivider borderColor='gray.200' />}
    align='stretch'
    margin='0'>
    <Box h='5vh'>
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
    <Box h='5vh'>
    <TabList>
      <Flex flex='1' gap='8' justifyContent='space-evenly' botton='0'>
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
