import { Map } from 'immutable'
import * as actionTypes from './constants'

const initialState = Map({
    vol: []
})

const dicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_VOL:
            return state.set('vol', action.vol)
        default:
            return state
    }
}
export default dicReducer
