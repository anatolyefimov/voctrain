import { FETCH_USER_DATA } from 'redux/actions'


export default function rootReducer(state, action) {
    switch(action.type) {
        case FETCH_USER_DATA:
            return Object.assign({}, state, {
                isLoaded: true,
                user: action.data
            })
        default:
            return state
    }
}