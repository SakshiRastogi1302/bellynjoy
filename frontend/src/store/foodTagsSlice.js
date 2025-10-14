import { createSlice } from "@reduxjs/toolkit";

const foodTagsSlice = createSlice({
    name:'foodTags',
    initialState:{
        food_tags:[]
    },
    reducers:{
        setTags:(state,action) => {
            state.food_tags = action.payload;
        }
    }
})

export const {setTags} = foodTagsSlice.actions;
export default foodTagsSlice.reducer;