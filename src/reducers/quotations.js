import { SHOW_QUOTATIONS} from '../actions'

const initialState = {
    quotations: []
}
export function showQuotations(state = initialState, action) {
    switch (action.type) {
        case SHOW_QUOTATIONS:
            return Object.assign({}, state, {quotations: action.payload})
        default:
          return state 
    }
}