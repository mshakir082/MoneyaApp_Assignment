import React,{useState,useEffect}from 'react'
import {Box,Text,CheckboxGroup,VStack,Checkbox,Menu,MenuButton,MenuList,MenuOptionGroup,MenuItemOption,MenuDivider,Button} from '@chakra-ui/react'
import {useSearchParams} from 'react-router-dom'
import {fetchData} from '../Redux/Products/action'
import { useDispatch } from 'react-redux'

const FilterComponent = () => {

  const [searchParms,setSearchParams] = useSearchParams()
  const[categoryValue,setCategoryValue]=useState(searchParms.getAll('category') || [])

    const dispatch=useDispatch()
    
  const categoryHandler=(value)=>{
    console.log(value)
    setCategoryValue(value)
  }
  useEffect(()=>{

    if(categoryValue){
      setSearchParams({category:categoryValue},{replace: true})

      let params = {
        category: searchParms.getAll('category'),
      }
      dispatch(fetchData(params))
    }
  },[categoryValue,setSearchParams,dispatch])
  return (
    <Box>
      <Box display={{base:"none",md:"block"}} p="1rem 2rem">
        <Text fontSize="2xl" mb='10px'>Filters</Text>
        <Text mb='10px'>Category</Text>
        <CheckboxGroup 
        colorScheme='green' 
        defaultValue={categoryValue} 
        onChange={categoryHandler}
        >
        <VStack  alignItems={"baseline"}>
          <Checkbox value='electronics'>Electronics</Checkbox>
          <Checkbox value='book'>Books</Checkbox>
          <Checkbox value="men's clothing">Men's clothing</Checkbox>
          <Checkbox value="women's clothing">Women's clothing</Checkbox>
          <Checkbox value='jewelery'>Jewelery</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      
      <Box display={{base:"block",md:"none"}} p="0rem 2rem">
      <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme='blue'>
        MenuItem
      </MenuButton>
      <MenuList minWidth='240px'>
        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
          <MenuItemOption value='asc'>Ascending</MenuItemOption>
          <MenuItemOption value='desc'>Descending</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title='Country' type='checkbox'>
          <MenuItemOption value='email'>Email</MenuItemOption>
          <MenuItemOption value='phone'>Phone</MenuItemOption>
          <MenuItemOption value='country'>Country</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
      </Box>
    </Box>
  )
}

export default FilterComponent