import React from 'react'
import {Box,Heading,Stack,Image,Text,useColorModeValue,Button} from'@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useSelector, useDispatch} from 'react-redux';
import { deleteProductCart } from '../Redux/Products/action';
import Checkout from '../Components/Checkout'
const Cart = () => {
  const cart=useSelector(state=>state.ecommerceData.cart)
  const dispatch=useDispatch();
  const removeProduct=(id)=>{
    dispatch(deleteProductCart(id))
  }
  
  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">Cart</Heading>
      {cart.length && cart.map((el)=>{
       return <CartItem key={el.id} id={el.id} image={el.image} title={el.title} price={el.price} description={el.description}
       removeProduct={removeProduct}
       />

      })}
      
    <Checkout cart={cart} />
    </Box>
  )
}

function CartItem({id,image,title,price,description,removeProduct}){

  return(
    <Box border={"1px solid red"} rounded="lg" width={"fit-content"} margin="auto" marginBottom="2rem">
      <Stack direction={{base:"column",md:"row"}}
      justifyContent="center" alignItems="center"
      >
        <Box height={"300px"} width="300px"  position="relative" padding="0 1rem"

         _after={{
          transition: 'all .3s ease',
          content: '""',
          w: '80%',
          h: '80%',
          pos: 'absolute',
          top: "50%",
          left: "50%",
          transform:`translate(-50%, -50%)`,
         backgroundImage: `url(${image})`,
          filter: 'blur(15px)',
          zIndex: -1,
        }}
        
        >
        <Image
            rounded={'lg'}
            height={300}
            width={300}
            objectFit={'contain'}
            src={image}
          />
        </Box>
        <Box height={"300px"} width="300px">
          <Stack p={4}>
            <Heading as="h3" size="lg" >{title}</Heading>
            <Box overflow={"hidden"} whiteSpace="nowrap" textOverflow={"ellipsis"}>
            <Text >  {description}</Text>
            </Box>
            
                <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
            {price}
            </Text>
            <Button variant={"solid"} leftIcon={<DeleteIcon/>} onClick={()=>removeProduct(id)}>Remove</Button>
          </Stack>

        </Box>
      </Stack>
    </Box>
  )
}
export default Cart