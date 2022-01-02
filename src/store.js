import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import getTextReducer from './redux/reducers'

const middleware = [thunk]

const persistedState = localStorage.getItem('text')
    ? JSON.parse(localStorage.getItem('text'))
    : {}

const store = createStore(getTextReducer, persistedState, composeWithDevTools(applyMiddleware(...middleware)))


store.subscribe(() => {
    localStorage.setItem('text', JSON.stringify(store.getState()))
})

export default store;