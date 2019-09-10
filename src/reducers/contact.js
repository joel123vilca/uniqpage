import { ADD_POST } from '../actions'

export function postReducer(state = [], action) {
    switch (action.type) {
        case ADD_POST:
         return [...state, action.payload];
        default:
          return state;
    }
}
