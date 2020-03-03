import { createStore } from 'redux'
import initialState from 'redux/state'

import rootReducer from 'redux/reducers'

const store = createStore(rootReducer, initialState,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

