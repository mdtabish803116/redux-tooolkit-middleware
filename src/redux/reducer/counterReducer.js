import { DECREMENT } from "../actions/decreament"
import { INCREMENT } from "../actions/increament"


const initialState = {
    count : 0,
}

// {count }

export const counterReducer = (state = initialState , action) => {

    switch(action.type){
        case INCREMENT:
          return {...state , count : state.count + 1} 
        //   {count : 1}
        case DECREMENT:
           return {...state , count : state.count - 1}
        default :
          return state
    }
}

// action - 1. Type , 2. payload