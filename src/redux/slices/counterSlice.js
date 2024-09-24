import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
     name : "counter",
     initialState : {value : 0},
     reducers: {
         increaseCount : (state , action) => {
             state.value += action.payload
         },
         decreaseCount : (state , action) => {
            state.value -= action.payload
         },
         resetCount: (state , action) => {
            state.value = 0
         }
     }
})

export const {increaseCount ,decreaseCount, resetCount} = counterSlice.actions;

export default counterSlice.reducer;