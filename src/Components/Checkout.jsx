import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    useColorModeValue,
    useDisclosure,
    Flex,
    Image,
    Text
  } from '@chakra-ui/react'



export default function Checkout({cart}) {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
      <>
      <Box>
              <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={onOpen}
            >
            Checkout
          </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Purchase</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {cart.map(el=>{
                return(
                  <Box key={el.id} mb={'1rem'}>
                      <Flex>
                        <Box>
                          <Image src={el.image} objectFit={'contain'} alt="Product Imgae" boxSize={'100px'} border="1px solid black" rounded={'lg'} />
                        </Box>
                        <Box maxW={"250px"} ml="1rem">
                            <Text fontSize="lg">{el.title}</Text>
                        </Box>
                      </Flex>
                  </Box>
                )
              })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        </Box>
      </>
    )
  }