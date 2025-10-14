import {configureStore} from '@reduxjs/toolkit'
import foodItemsSlice from './foodItemsSlice'
import foodTagsSlice from './foodTagsSlice'

const appStore = configureStore({
    reducer:{
        foodItems:foodItemsSlice,
        foodTags:foodTagsSlice
    }
})

export default appStore;