import { ADD_TO_CART, UPDATE_CART, DELETE_FORM_CART } from '../actions/cart-actions'

const initialState = {
    cart:[
        {
            product:'bread 700g',
            quality:2,
            unitCost:90
        },
        {
            product:'milk 500ml',
            quality:2,
            unitCost:90
        }
    ]
}

const cartReducer = (state=initialState,action)=>{
    // return state
    switch(action.type){
        case ADD_TO_CART:{
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        }
        case UPDATE_CART:{
            return {
                ...state,
                cart:state.cart.map(item=>item.product === action.payload.product?action.payload:item)
            }
        }

        case DELETE_FORM_CART:{
            return {
                ...state,
                cart:state.cart.filter(item=>item.product!== action.payload.product)
            }
        }

        default:
            return state
    }
}

export default cartReducer