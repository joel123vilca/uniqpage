import { SHOW_EVENTS } from '../actions'

const initialState = {
    events: []
}
export function showEvents(state = initialState, action) {
    switch (action.type) {
        case SHOW_EVENTS:
            return Object.assign({}, state, {events: action.payload})
        default:
          return state 
    }
}