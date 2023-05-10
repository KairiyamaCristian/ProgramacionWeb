
import { Card, CardHeader, CardBody, CardFooter, Flex} from '@chakra-ui/react'
import { Box,Heading,IconButton, Image } from "@chakra-ui/react";
import { FaHome} from 'react-icons/fa'
import { Text } from '@chakra-ui/react'
import { Avatar, AvatarGroup } from '@chakra-ui/react'


function Cards(props) {

    return(
    <Card maxW='lg'>
    <CardHeader>
        <Flex spacing='2'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        {props.children}
            <Avatar name='Kairi' />

            <Box>
            <Heading size='sm'>Kairiyama, Cristian Nahuel</Heading>
            <Text>Programador Web</Text>
            </Box>
        </Flex>
        <IconButton
            variant='ghost'
            colorScheme='gray'
            aria-label='Se tag <text> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
            ee menu'
            icon={FaHome}
        />
        </Flex>
    </CardHeader>
    <CardBody >

    <Image
        objectFit='cover'
        src={props.foto}
        alt='Foto de perfil'
        borderRadius='16'
    />
    </CardBody>
    <CardFooter>
    <Text>
        Este Proyecto es un clon de instagram realizado con React y 
        librerias como chacra ui para ser utilizado como proyecto web 
        para ser utilizado como portafolio donde muestre mis proyectos...
    </Text>
    <AvatarGroup size='md' max={2} padding='1'>
        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
    </AvatarGroup>
    </CardFooter>
    </Card>
    )

    
}



export default Cards;