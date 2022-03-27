import { Map } from "immutable"
import * as actionTypes from './constants'
import { getSessionStorage } from '../../../util/helpers'

const initialState = Map({
    searchResult: [],
    topList: getSessionStorage('topList'),
    songId: 0
})

const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_RESULT:
            return state.set('searchResult', action.searchResult)
        case actionTypes.CHANGE_TOPLIST:
            return state.set('topList', action.topList)
        case actionTypes.CHANGE_CURRENT_SONG_ID:
            return state.set('songId', action.songId)
        default:
            return state
    }
}
export default musicReducer
