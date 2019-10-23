import { SHOW_RESPONSIBILITIES } from '../actions'

const initialState = {
    responsibilities: []
}
export function showResponsibilities(state = initialState, action) {
    switch (action.type) {
        case SHOW_RESPONSIBILITIES:
            return Object.assign({}, state, {responsibilities: action.payload})
        default:
          return state 
    }
}