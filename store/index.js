import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './reducer'
export const store = createStore(combineReducers, compose(applyMiddleware(thunk)))
