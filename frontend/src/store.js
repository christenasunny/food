import {combineReducers} from 'redux'

import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer.js'

const finalReducer = combineReducers({
    cartReducer : cartReducer
})

// to store cart items in localstorage so that it wont disappear when refreshed
const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {

    cartReducer: {
        cartItems:cartItems
     }
}

////////

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store