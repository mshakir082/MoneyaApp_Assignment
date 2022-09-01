import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {Products} from '../Pages/Products'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<Product/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes


// "json-server": "json-server --watch db.json -p 8080",