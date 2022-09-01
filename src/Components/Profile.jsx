import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Avatar
  } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <Flex>
    <Menu>
    <MenuButton as={Button} rounded="full" variant="pointer" minW={0} >
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </MenuButton>
    <MenuList>
    <Link to={'/cart'}><MenuItem>Cart</MenuItem></Link>
    <Link to={'/products'}> <MenuItem>Products</MenuItem></Link>
      <MenuItem>Logout</MenuItem>
    </MenuList>
  </Menu>
  </Flex>
  )
}

export default Profile