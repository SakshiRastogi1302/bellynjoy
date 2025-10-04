import { createSlice } from "@reduxjs/toolkit";

const foodItemsSlice = createSlice({
    name:'foodItems',
    initialState:{
        food_items:[]
    },
    reducers:{
        setFood:(state,action) => {
           state.food_items = action.payload;
        }
    }
})

export const {setFood} = foodItemsSlice.actions;
export default foodItemsSlice.reducer;