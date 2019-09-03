import { SHOW_TEACHERS} from '../actions'

const initialState = {
    teachers: []
}
export function showTeachers(state = initialState, action) {
    switch (action.type) {
        case SHOW_TEACHERS:
            return Object.assign({}, state, {teachers: action.payload})
        default:
          return state 
    }
}