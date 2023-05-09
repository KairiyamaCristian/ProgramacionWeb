import {Heading, Flex} from '@chakra-ui/react'
import { Text, Image} from '@chakra-ui/react'


//representacion de base de datos
import logohtml from "../assets/logos/html-5.png";
import logogithub from "../assets/logos/github.png";
import logocss from "../assets/logos/css-3.png";
import logojs from "../assets/logos/js.png";
import logoreact from "../assets/logos/react.png";
import logodjango from "../assets/logos/django.png";
import logomysql from "../assets/logos/mysql.png";
import logopython from "../assets/logos/piton.png";
import logolinux from "../assets/logos/linux.png";



function Skills() {
    return(
        <>
        <Heading>Skills</Heading>
        <Flex flexWrap='wrap' justifyContent='center '>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logohtml}
                alt='Dan Abramov'/>
                <Text >Html</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logocss}
                alt='Dan Abramov'/>
                <Text >Css</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logojs}
                alt='Dan Abramov'/>
                <Text >Javascript</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logoreact}
                alt='Dan Abramov'/>
                <Text >React</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logodjango}
                alt='Dan Abramov'/>
                <Text >Django</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logopython}
                alt='Dan Abramov'/>
                <Text >Python</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logomysql}
                alt='Dan Abramov'/>
                <Text >Mysql</Text>
            </Flex>
            <Flex flexDirection='column' alignItems='center'>
                <Image
                borderRadius='full'
                boxSize='4rem'
                src={logogithub}
                alt='Dan Abramov'/>
                <Text >Github</Text>
            </Flex>
        </Flex>

        </>
    )
    
}






export default Skills;

