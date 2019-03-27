import store from './store'
import {addToCart,updateCart,deleteFormCart } from './actions/cart-actions'

// const reducer = (state=[],action) =>{
//     return state
// }


console.log('initial',store.getState())


let unsubscrible = store.subscribe(()=>{
    console.log('dispatch',store.getState())
})


store.dispatch(addToCart('coffee 500ml',1,2))
store.dispatch(addToCart('flower 1',1,2))
store.dispatch(addToCart('juice',1,2))

store.dispatch(updateCart('flower 1',10,10))

store.dispatch(deleteFormCart('coffee 500ml'))


unsubscrible()




function About() {
    return <div>about</div>
}

export default About