import { FETCH_USER_DATA, UPDATE_WORD_LISTS } from 'redux/actions'


export default function rootReducer(state, action) {
    switch(action.type) {
        case FETCH_USER_DATA:
            return Object.assign({}, state, {
                isLoaded: true,
                user: action.data
            })
        case UPDATE_WORD_LISTS:
            return Object.assign({}, state, {
                user: {...state.user, wordLists: action.wordLists}
            })
        default:
            return state
    }
}