import { SHOW_NEWS } from '../actions'

const initialState = {
    news: []
}
export function showNews(state = initialState, action) {
    switch (action.type) {
        case SHOW_NEWS:
            return Object.assign({}, state, {news: action.payload})
        default:
          return state 
    }
}