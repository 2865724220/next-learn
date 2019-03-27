
const ADD_TO_CART = 'ADD_TO_CART'

const UPDATE_CART = 'UPDATE_CART'

const DELETE_FORM_CART = 'DELETE_FORM_CART'



function addToCart(product,quality,unitCost){
    return {
        type:ADD_TO_CART,
        payload:{product,quality,unitCost}
    }
}

function updateCart(product,quality,unitCost){
    return{
        type: UPDATE_CART,
        payload: {
            product,
            quality,
            unitCost
        }
    }
}

function deleteFormCart(product,quality,unitCost) {
    return{
        type:DELETE_FORM_CART,
        payload:{
            product
        }
    }

}

export {
    ADD_TO_CART,
    UPDATE_CART,
    DELETE_FORM_CART,
    addToCart,
    updateCart,
    deleteFormCart
}