
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar} from '@chakra-ui/react'
import { Box,Heading,IconButton, Image, Button } from "@chakra-ui/react";
import { FaHome} from 'react-icons/fa'
import { Text } from '@chakra-ui/react'
import  Foto  from '../assets/Perfil.jpeg'


function Cards() {

    return(
    <Card maxW='md'>
    <CardHeader>
        <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
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
    <CardBody>
        <Text>
        Este Proyecto es un clon de instagram realizado con React y 
        librerias como chacra ui para ser utilizado como proyecto web 
        para ser utilizado como portafolio donde muestre mis proyectos...
        </Text>
    </CardBody>
    <Image
        objectFit='cover'
        src={Foto}
        alt='Foto de perfil'
    />

    <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
        '& > button': {
            minW: '136px',
        },
        }}
    >
        <Button flex='1' variant='ghost'>
        Like
        </Button>
        <Button flex='1' variant='ghost'>
        Comment
        </Button>
        <Button flex='1' variant='ghost'>
        Share
        </Button>
    </CardFooter>
    </Card>
    )

    
}



export default Cards;