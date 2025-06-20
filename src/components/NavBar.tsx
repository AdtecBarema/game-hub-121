import React from 'react'

import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} alt="Logo" boxSize="60px" />
        <Text>Nav Bar</Text>
    </HStack>
  )
}

export default NavBar