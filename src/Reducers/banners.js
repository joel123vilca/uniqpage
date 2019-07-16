import { SHOW_BANNERS } from '../actions'

const initialState = {
    list: []
}
export function showBanners(state = initialState, action) {
    switch (action.type) {
        case SHOW_BANNERS:
            return Object.assign({}, state, {list: action.payload})
        default:
          return state 
    }
}
