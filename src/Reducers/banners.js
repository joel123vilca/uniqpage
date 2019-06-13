import { SHOW_BANNERS } from '../actions'

const initialState = {
    list: []
}

export function showBanners(state = [], action) {
    switch (action.type) {
        case SHOW_BANNERS:
            return Object.assign({}, state, {banners: action.payload})
        default:
            return state 
    }
    
}
