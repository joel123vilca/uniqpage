import { SHOW_ALLIANCES } from '../actions'

const initialState = {
    alliances: []
}
export function showAlliances(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALLIANCES:
            return Object.assign({}, state, {alliances: action.payload})
        default:
          return state 
    }
}