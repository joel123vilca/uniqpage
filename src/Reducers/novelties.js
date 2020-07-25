import { SHOW_NOVELTIES } from '../actions'

const initialState = {
    novelties: []
}
export function showNovelties(state = initialState, action) {
    switch (action.type) {
        case SHOW_NOVELTIES:
            return Object.assign({}, state, {novelties: action.payload})
        default:
          return state 
    }
}