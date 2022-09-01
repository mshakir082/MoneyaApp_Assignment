import * as types from './actionType'


const initialState ={
    products: [],
    loading: false,
    error: false,
    currentProduct:{},
    cart:[]
}

export const productReducer = (state = initialState,action)=>{

    const{type,payload} = action

    switch(type){

        case types.FETCH_DATA_REQUEST:
            return {
                ...state,
                loading:true,
                error:false
            }
        case types.FETCH_DATA_SUCCESS:
        return {
            ...state,
            products:payload,
            loading:false,
            error:false
        } 
        case types.FETCH_DATA_FAILURE:
            return{
                ...state,
                error:true,
                loading:false
            }  
            case types.SINGLE_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true,
                error:false
            }
        case types.SINGLE_PRODUCT_SUCCESS:
        return {
            ...state,
            currentProduct:payload,
            loading:false,
            error:false
        } 
        case types.SINGLE_PRODUCT_FAILURE:
            return{
                ...state,
                error:true,
                loading:false
            } 

       
            case types.ADD_PRODUCT_CART_REQUEST:
            return {
                ...state,
                loading:true,
                error:false
            }
        case types.ADD_PRODUCT_CART_SUCCESS:
        return {
            ...state,
            cart:[...state.cart,payload],
            loading:false,
            error:false
        } 
        case types.ADD_PRODUCT_CART_FAILURE:
            return{
                ...state,
                error:true,
                loading:false
            } 

            case types.FETCH_CART_REQUEST:
                return {
                    ...state,
                    loading:true,
                    error:false
                }
            case types.FETCH_CART_SUCCESS:
            return {
                ...state,
                cart:[...payload],
                loading:false,
                error:false
            } 
            case types.FETCH_CART_FAILURE:
                return{
                    ...state,
                    error:true,
                    loading:false
                }

                case types.REMOVE_PRODUCT_CART_REQUEST:
                    return {
                        ...state,
                        loading:true,
                        error:false
                    }

                    case types.REMOVE_PRODUCT_CART_FAILURE:
                return{
                    ...state,
                    error:true,
                    loading:false
                }
            default:
                return state
        }
        
    }
