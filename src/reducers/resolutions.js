import { SHOW_RESOLUTIONS} from '../actions'

const initialState = {
    resolutions: []
}
export function showResolutions(state = initialState, action) {
    switch (action.type) {
        case SHOW_RESOLUTIONS:
            return Object.assign({}, state, {resolutions: action.payload})
        default:
          return state 
    }
}