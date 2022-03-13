import { Map } from 'immutable'
import * as actionTypes from './constants'

const initialState = Map({
    talentBooks: [],
    bookIdx: 0,
    characterList: {},
    splashName: '',
    isShow: false,
    isSplash: null,
    splashExit: null,
    isBurst: null
})
const moyuReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TALENT_BOOK:
            return state.set('talentBooks', action.todayMaterial)
        case actionTypes.CHANGE_TALENT_BOOK_IDX:
            return state.set('bookIdx', action.bookIdx)
        case actionTypes.CHANGE_CHARACTER_LIST:
            return state.set('characterList', action.characterList)
        case actionTypes.CHANGE_SPLASH_NAME:
            return state.set('splashName', action.splashName)
        case actionTypes.CHANGE_SPLASH:
            return state.set('isSplash', action.isSplash)
        case actionTypes.CHANGE_SPLASH_EXIT:
            return state.set('splashExit', action.splashExit)
        case actionTypes.CHANGE_BURST:
            return state.set('isBurst', action.isBurst)
        case actionTypes.CHANGE_SHOW:
            return state.set('isShow', action.isShow)
        default:
            return state
    }
}
export default moyuReducer
