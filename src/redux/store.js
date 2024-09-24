import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/counterSlice";

 const customLoggerMiddleware = (state) => (next) => (action) => {
    console.log("Dispatching action -" , action);
    console.log("prev State " , state.getState());
    action = {...action , payload: action.payload = 4}
    const res = next(action);
    console.log("Next State " , state.getState());
    return res
}

const store = configureStore({
    reducer: {
        counter : counterReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(customLoggerMiddleware)
})

// store.subscribe(() => {
//         console.log('subscribed for counter actions', store.getState());
// });

export default store

