import { Box, Image, Text, Flex, Heading } from '@chakra-ui/react'
import foto from '../assets/Perfil.jpeg'


function Perfil() {
  return (
    <>
      <Flex flex='1' gap='8' alignItems='center' justifyContent='center' >
        <Image
            borderRadius='full'
            boxSize='5rem'
            src={foto}
            alt='Kairiyama Cristian'
        />
            <Box> 
            <Heading size='md'>Proyectos</Heading>
            <Text >+3</Text>
            </Box>
            <Box> 
            <Heading size='md'>Certificados</Heading>
            <Text>14</Text>
            </Box>
      </Flex>
      <Flex flex='2' alignItems='center' justifyContent='center'>

      <Text padding='4'>
        <Heading size='md'>Full Stack Developer</Heading>
        <Text>Front: Html, css and Javascript, react in process...</Text>
        <Text>Back: IA and Data Science with python in Process...</Text>
      
      </Text>
      </Flex>
    </>
  )
}

export default Perfil;
