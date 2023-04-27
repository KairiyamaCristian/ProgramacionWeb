import { FaTwitter, FaInstagram, FaFacebook, FaAdjust, FaGithub} from 'react-icons/fa'
import { Icon, Heading, Flex, Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

function Header(){

    return(
        <>
        <Flex justifyContent='space-around' >
        <Heading >Kairi.dev</Heading>
            <Flex gap='4'>  
            <Link href='https://chakra-ui.com' isExternal>
            <Icon as={FaTwitter} boxSize='8'/>
            </Link>
            <Link href='https://chakra-ui.com' isExternal>
            <Icon as={FaInstagram} boxSize='8'/>
            </Link>
            <Link href='https://chakra-ui.com' isExternal>
            <Icon as={FaGithub} boxSize='8'/>
            </Link>


            <Link href='https://chakra-ui.com' isExternal>
            <Icon as={FaAdjust} boxSize='8'/>
            
            </Link>
            </Flex>
        </Flex>
        </>

    )    
}



export default Header