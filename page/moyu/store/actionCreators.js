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

export const getCharacterListAction = nameArray => async dispatch => {
    try {
        const characterList = {}
        for (let name of nameArray) {
            const res = await getCharacterDetail(name)
            const character = res.data.payload.character
            characterList[name] = character
        }
        dispatch({
            type: actionTypes.CHANGE_CHARACTER_LIST,
            characterList: characterList
        })
    } catch (err) {
        console.log(err)
    }
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
