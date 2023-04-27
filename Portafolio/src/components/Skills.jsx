import {Heading} from '@chakra-ui/react'
import { Avatar, AvatarGroup, Flex} from '@chakra-ui/react'

import logohtml from "../assets/logos/html-5.png";
import logogithub from "../assets/logos/github.png";
import logocss from "../assets/logos/css-3.png";
import logojs from "../assets/logos/js.png";
import logoreact from "../assets/logos/react.png";
import logodjango from "../assets/logos/django.png";
import logomysql from "../assets/logos/mysql.png";
import logopython from "../assets/logos/piton.png";
import logolinux from "../assets/logos/linux.png";
//representacion de base de datos
// const Frontend=[
//     {logo=''},
//     {}
// ]



function Skills() {
    return(
        <>
        <Flex flexDirection='column' alignItems='center' gap='4'>

        <Heading size='xl'>Skills</Heading>
        <Heading size='md'>Frontend</Heading>
        <AvatarGroup size='xl' max={3}>
        <Avatar name='Ryan Florence' src={logohtml} bg='white' borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logocss} bg='white' borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logojs} bg='white' borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logoreact} bg='white'borderColor='black'borderWidth='medium'/>
        </AvatarGroup>

        <Heading size='md'>Backend</Heading>
        <AvatarGroup size='xl' max={3}>
        <Avatar name='Ryan Florence' src={logopython} bg='white'borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logodjango} bg='white'borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logomysql} bg='white'borderColor='black'borderWidth='medium'/>
        </AvatarGroup>

        <Heading size='md'>Other technologies</Heading>
        <AvatarGroup size='xl' max={2}>
        <Avatar name='Ryan Florence' src={logogithub} bg='white'borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logolinux} bg='white'borderColor='black'borderWidth='medium'/>
        </AvatarGroup>

        <Heading size='md'>In progress</Heading>
        <AvatarGroup size='xl' max={2}>
        <Avatar name='Ryan Florence' src={logoreact} bg='white'borderColor='black'borderWidth='medium'/>
        <Avatar name='Ryan Florence' src={logolinux} bg='white'borderColor='black'borderWidth='medium'/>
        </AvatarGroup>
        </Flex>

        </>
    )
    
}






export default Skills;

