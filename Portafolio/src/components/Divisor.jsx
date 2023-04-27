

import React from 'react'
import { useDisclosure} from '@chakra-ui/react'
import { Grid, GridItem, Image ,Flex} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import { Icon, Button, Input} from '@chakra-ui/react'
import { FaTh, FaAddressCard} from 'react-icons/fa'
import  Cards  from './Cards.jsx';


//imagenes
import django from '../assets/Django.png'
import backend from '../assets/Backend.png'
import frontend from '../assets/Front.png'
import css from '../assets/Css.png'
import javascript from '../assets/Javascript.png'
import javascriptp from '../assets/Practico-javascript.png'
import react from '../assets/React.png'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

function Divisor() {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  

  
  return (
    <>
      <Tabs>
      
        <TabList >
          <Flex flex='1' gap='8' justifyContent='space-evenly'>
          <Tab><Icon as={FaTh} /></Tab>
          <Tab><Icon as={FaAddressCard} /></Tab>
          </Flex>
        </TabList>
 
        <TabPanels>
          <TabPanel>
            <Grid templateColumns='repeat(3, 1fr)' gap={1}>
              <GridItem w='100%' h='100' bg='blue.500' />
              <GridItem w='100%' h='100' bg='blue.500' />
              <GridItem w='100%' h='100' bg='blue.500' />
              <GridItem w='100%' h='100' bg='blue.500' />
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns='repeat(3, 1fr)' gap={1}>
              <Image src={django} alt='django'ref={btnRef} onClick={onOpen}/>
              <Image src={backend} alt='backend'ref={btnRef} onClick={onOpen}/>
              <Image src={frontend} alt='frontend'ref={btnRef} onClick={onOpen}/>
              <Image src={css} alt='css'ref={btnRef} onClick={onOpen}/>
              <Image src={javascript} alt='javascript'ref={btnRef} onClick={onOpen}/>
              <Image src={javascriptp} alt='javascript'ref={btnRef} onClick={onOpen}/>
              <Image src={react} alt='react'ref={btnRef} onClick={onOpen}/>

            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          
          <DrawerBody>
            <Cards/>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Divisor
