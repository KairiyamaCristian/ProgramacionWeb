import { Box, Image, Text, Flex, Heading } from '@chakra-ui/react'
import foto from '../assets/Perfil.jpeg'


function Perfil() {
  return (
    <>
      <Flex flex='1' gap='4' alignItems='center' >
        <Image
            borderRadius='full'
            boxSize='2rem'
            src={foto}
            alt='Dan Abramov'
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
      <Text padding='4'>
        <Heading size='md'>Full Stack Developer</Heading>
        <Text>Front: React in process...</Text>
        <Text>Back: IA and Data Science in Process...</Text>
      
      </Text>
    </>
  )
}

export default Perfil;
