import {FETCH_DATA_SUCCESS,FETCH_DATA_REQUEST,FETCH_DATA_FAILURE} from "./actionType"
import {SINGLE_PRODUCT_REQUEST,SINGLE_PRODUCT_SUCCESS,SINGLE_PRODUCT_FAILURE} from "./actionType"
import {ADD_PRODUCT_CART_REQUEST,ADD_PRODUCT_CART_SUCCESS,ADD_PRODUCT_CART_FAILURE} from "./actionType"
import {FETCH_CART_REQUEST,FETCH_CART_SUCCESS,FETCH_CART_FAILURE} from "./actionType"
import {REMOVE_PRODUCT_CART_REQUEST,REMOVE_PRODUCT_CART_SUCCESS,REMOVE_PRODUCT_CART_FAILURE} from "./actionType"

import axios from "axios"

const fetchDataRequest =() =>{
    return{
        type: FETCH_DATA_REQUEST,
       }
}

const fetchDataSuccess =(payload) =>{
    return{
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure =(payload) =>{
    return{
        type: FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData=(payload) =>{

    return (dispatch) =>{
        dispatch(fetchDataRequest())
        axios.get("https://moneyapp-backend-shakir.herokuapp.com/api/products",
       {
        params:{
            ...payload
        }
       }
    )
    .then((r)=>dispatch(fetchDataSuccess(r.data)))
    .catch((e)=>dispatch(fetchDataFailure(e.data)))
};
}


const getSingleProductRequest =() =>{
    return{
        type: SINGLE_PRODUCT_REQUEST,
       }
}

const getSingleProductSuccess =(payload) =>{
    return{
        type: SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const getSingleProductFailure =(payload) =>{
    return{
        type: SINGLE_PRODUCT_FAILURE,
        payload
    }
}

export const getSingleProduct=(id) =>(dispatch) =>{

    dispatch(getSingleProductRequest())
    axios.get(`https://moneyapp-backend-shakir.herokuapp.com/api/products/${id}`)
    .then((r)=>dispatch(getSingleProductSuccess(r.data)))
    .catch((e)=>dispatch(getSingleProductFailure(e.data)))
}


const addProductCartRequest =() =>{
    return{
        type: ADD_PRODUCT_CART_REQUEST,
       }
}

const addProdutCartSuccess =(payload) =>{
    return{
        type:  ADD_PRODUCT_CART_SUCCESS,
        payload
    }
}

const addProductCartFailure =(payload) =>{
    return{
        type:  ADD_PRODUCT_CART_FAILURE,
        payload
    }
}

export const addProductCart=(product)=>dispatch=>{
    
    dispatch(addProductCartRequest())
    axios.post("https://moneyapp-backend-shakir.herokuapp.com/api/cart",product)
    .then(r=>dispatch(addProdutCartSuccess(r.data)))
    .then(e=>dispatch(addProductCartFailure(e.data)))
}

const fetchCartRequest =() =>{
    return{
        type: FETCH_CART_REQUEST,
       }
}

const fetchCartSuccess =(payload) =>{
    return{
        type:  FETCH_CART_SUCCESS,
        payload
    }
}

const fetchCartFailure =(payload) =>{
    return{
        type:  FETCH_CART_FAILURE,
        payload
    }
}

export const fetchCart=(payload)=>dispatch=>{

    dispatch(fetchCartRequest());
    axios.get("https://moneyapp-backend-shakir.herokuapp.com/api/cart")
    .then(r=>dispatch(fetchCartSuccess(r.data)))
    .then(e=>dispatch(fetchCartFailure(e.data)))
}

const deleteProductCartRequest =() =>{
    return{
        type: REMOVE_PRODUCT_CART_REQUEST,
       }
}

const deleteProductCartSuccess =(payload) =>{
    return{
        type:  REMOVE_PRODUCT_CART_SUCCESS,
        payload
    }
}

const deleteProductCartFailure =(payload) =>{
    return{
        type:  REMOVE_PRODUCT_CART_FAILURE,
        payload
    }
}

export const deleteProductCart=(id)=>dispatch=>{

    dispatch(deleteProductCartRequest());

    axios.delete(`https://moneyapp-backend-shakir.herokuapp.com/api/cart/${id}`)
    .then(r=>{
        dispatch(deleteProductCartSuccess(r.data))})
    .then(()=>dispatch(fetchCart()))
    .then(e=>dispatch(deleteProductCartFailure(e)))
}