import {configureStore} from '@reduxjs/toolkit'
import foodItemsSlice from './foodItemsSlice'

const appStore = configureStore({
    reducer:{
        foodItems:foodItemsSlice
    }
})

export default appStore;