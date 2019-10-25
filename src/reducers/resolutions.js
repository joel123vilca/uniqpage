import { SHOW_RESOLUTIONS, SEARCH_RESOLUTIONS} from '../actions'

const initialState = {
    resolutions: [],
    resultResolutions:[]
}
export function showResolutions(state = initialState, action) {
    switch (action.type) {
        case SHOW_RESOLUTIONS:
            return Object.assign({}, state, {resolutions: action.payload})
        default:
          return state 
    }
}
export function searchResolutions(state = initialState, action) {
    switch (action.type) {
        case SEARCH_RESOLUTIONS:
            return Object.assign({}, state, {resultResolutions: action.payload})
        default:
          return state 
    }
}