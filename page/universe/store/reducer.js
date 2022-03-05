import { Map } from 'immutable'
import * as actionTypes from './constants'

const initialState = Map({
    nasaAPI: {}
})

const uniReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_NASAAPI:
            return state.set('nasaAPI', action.nasa)
        default:
            return state
    }
}
export default uniReducer
