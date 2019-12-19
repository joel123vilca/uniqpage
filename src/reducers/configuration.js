import { CONFIGURATION } from '../actions'

const initialState = {
    configuration: {}
}
export function configuration(state = initialState, action) {
    switch (action.type) {
        case CONFIGURATION:
            return Object.assign({}, state, {configuration: action.payload})
        default:
          return state 
    }
}
