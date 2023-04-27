import { Box, Image, Text, Flex, Heading } from '@chakra-ui/react'
import foto from '../assets/Perfil.jpeg'


function Perfil() {
  return (
    <>
      <Flex flex='1' gap='4' alignItems='center'>
        <Image
            borderRadius='full'
            boxSize='100px'
            src={foto}
            alt='Dan Abramov'
        />
            <Box> 
            <Heading size='lg'>Proyectos</Heading>
            <Text >+3</Text>
            </Box>
            <Box> 
            <Heading size='lg'>Certificados</Heading>
            <Text>14</Text>
            </Box>
      </Flex>
      <Text>
        Programador del roque gonzalez
      </Text>
    </>
  )
}

export default Perfil;
