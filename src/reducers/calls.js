import { SHOW_CALLS} from '../actions'

const initialState = {
    calls: []
}
export function showCalls(state = initialState, action) {
    switch (action.type) {
        case SHOW_CALLS:
            return Object.assign({}, state, {calls: action.payload})
        default:
          return state 
    }
}