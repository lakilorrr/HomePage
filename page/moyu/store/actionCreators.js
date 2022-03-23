import * as actionTypes from './constants'
import { getTodayMaterial, getCharacterDetail } from '../../../service/genshin'

export const getTodayMaterialAction = () => async dispatch => {
    try {
        const res = await getTodayMaterial()
        dispatch({
            type: actionTypes.CHANGE_TALENT_BOOK,
            todayMaterial: res.data.payload.talentBooks
        })
    } catch (err) {
        console.log(err)
    }
}

export const getBookIdx = bookIdx => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_TALENT_BOOK_IDX,
        bookIdx: bookIdx
    })

export const getCharacterBarAction =
    (bookIdx = 0) =>
    (dispatch, getState) => {
        const talentBooks = getState().getIn(['moyu', 'talentBooks'])
        const rawList = getState().getIn(['moyu', 'characterList'])
        const characterList = {}
        talentBooks[bookIdx] &&
            talentBooks[bookIdx].characters.map(async (item, idx) => {
                const res = await getCharacterDetail(item.name)
                const character = res.data.payload.character
                characterList[item.name] = character
                if (!rawList[item.name]) {
                    dispatch({
                        type: actionTypes.CHANGE_CHARACTER_LIST,
                        characterList: { ...characterList }
                    })
                }
            })
    }

export const getSplashName = name => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_SPLASH_NAME,
        splashName: name
    })
export const getShow = isShow => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_SHOW,
        isShow: isShow
    })
export const getSplash = isSplash => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_SPLASH,
        isSplash: isSplash
    })
export const getSplashExit = isExit => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_SPLASH_EXIT,
        splashExit: isExit
    })
export const getBurst = isBurst => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_BURST,
        isBurst: isBurst
    })
