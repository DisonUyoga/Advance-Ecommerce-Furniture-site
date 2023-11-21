import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import productSlice from './slices/product'
import loginSlice from './slices/loginSlice'

const store = configureStore({
    reducer:{
        cart: cartSlice,
        products:productSlice,
        login:loginSlice,
    }
})

export default store;