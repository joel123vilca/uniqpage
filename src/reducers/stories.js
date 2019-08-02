import { SHOW_STORIES, VIEW_STORIE } from '../actions'

const initialState = {
    lista: [],
    uno: {}
}
export function showStories(state = initialState, action) {
    switch (action.type) {
        case SHOW_STORIES:
            return Object.assign({}, state, {lista: action.payload})
        default:
          return state 
    }
}
export function viewStorie(state = initialState, action) {
    switch (action.type) {
        case VIEW_STORIE:
            return Object.assign({Id: action.payload.id}, state, {uno: action.payload})
        default:
          return state 
    }
}