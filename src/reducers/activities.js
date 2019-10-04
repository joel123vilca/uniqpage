import { SHOW_ACTIVITIES } from '../actions'

const initialState = {
    activities: []
}
export function showActivities(state = initialState, action) {
    switch (action.type) {
        case SHOW_ACTIVITIES:
            return Object.assign({}, state, {activities: action.payload})
        default:
          return state 
    }
}