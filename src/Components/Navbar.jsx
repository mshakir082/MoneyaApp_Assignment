import React from 'react'
import {Box,Flex,Text,IconButton,Button,Stack,Icon,Link,Collapse,useDisclosure,useColorModeValue,useBreakpointValue, Heading,} from '@chakra-ui/react';
  import {HamburgerIcon,CloseIcon, } from '@chakra-ui/icons';
  import Profile from './Profile';
  import {BsCart3} from 'react-icons/bs';
  import CartCounter from './CartCounter'
  import {Link as RouterLink} from 'react-router-dom'
const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <Box>
          <Flex
            bg={useColorModeValue('white', 'gray.200')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.500', 'gray.900')}
            align={'center'}
            mb={'15px'}
            >
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'right' }}>
             <RouterLink to={'/products'}> <Heading
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontSize={'25px'}
                color={useColorModeValue('black.100', 'white')}>
                Products
              </Heading>
              </RouterLink>
              <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                {/* <DesktopNav /> */}
              </Flex>
            </Flex>
    
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}
              >
                <Link as={RouterLink} to="/cart">
                <Box p="0 0.5rem 0 0" position='relative'>

                  <Box >
                  <CartCounter/>
                  </Box>
               
                  <Icon as={BsCart3} boxSize="2rem" mt="7px"/>
                  </Box>
                  </Link>
              <Box p={2}>
              <Profile/>
              </Box>
                  
            </Stack>
          </Flex>
    
          <Collapse in={isOpen} animateOpacity>
            {/* <MobileNav /> */}
          </Collapse>
        </Box>
      );
}

export default Navbar