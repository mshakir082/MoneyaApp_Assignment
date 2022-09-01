import React,{useEffect} from 'react'
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button
} from '@chakra-ui/react';
import FilterComponent from '../Components/FilterComponent'
import {useSelector,useDispatch} from 'react-redux'
import {fetchData} from '../Redux/Products/action'
import {useSearchParams} from 'react-router-dom'
import { StarIcon } from '@chakra-ui/icons'
import {addProductCart} from '../Redux/Products/action'
import {Link} from 'react-router-dom'
export const Products = () => {

  const products=useSelector(state=>state.ecommerceData.products);
  const dispatch=useDispatch();
  const [searchParams]=useSearchParams();
  
  useEffect(()=>{
     
     let params={
        category:searchParams.getAll("category"),
      }
      dispatch(fetchData(params))
   

  },[dispatch,products?.length,searchParams]);

 
  return (
    <Box>
      <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minW={'15rem'}>
            <FilterComponent />
        </Box>
        <Box>
          <Heading as='h3'>Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {
              products.map((el)=>{
                   return <ProductSimple  key={el.id} image={el.image} title={el.title} price={el.price} discription={el.discription} rating={el.rating.rate} id={el.id} el={el} />
              })
            }
          </Flex>
            
        </Box>
        </Stack>
    </Box>
  )
}

// const IMAGE =
//   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

 function ProductSimple({image,title,price,rating,id,el}) {
  let dispatch=useDispatch();
 
  const handelClick=(el)=>{
     dispatch(addProductCart(el))
    }

  return (
    <Center py={12}>
      <Box role={'group'} p={6} maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
        _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={210}
            width={252}
            objectFit={'contain'}
            src={image}
            m='auto'
            mt='25px'
           />
        </Box>
        <Stack pt={5} align={'center'}>
         <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
           {title}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            ₹{price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text>
            </Stack>
            <Flex direction={'row'} mb='15px'>
              <Box color="#D3A82D"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></Box>
              <Text>{` (${rating}) `}</Text>
                </Flex>

                <Flex justifyContent="space-between" mt="15px" width="100%">
                 <Box>
                 <Button
                    loadingText="Submitting"
                    size="md"
                    color="black" borderRadius="22px"
                    backgroundColor="white" border="1px solid"
                   _hover={{
                     bg: '#414467',color: 'white'
                   }}>
                   <Link to={`/products/${id}`}>See Details</Link>
                   </Button>
              </Box>
              <Box>
              <Button
                   color="white" borderRadius="22px"
                   backgroundColor="#414467" border="1px solid"
                  _hover={{
                    bg: '#242830',color: 'white'
                  }}
                  onClick={()=>handelClick(el)}
                  >
                    Add to Cart
                </Button>
              </Box>
              </Flex>
        </Stack>
      </Box>
    </Center>
  );
}
 
