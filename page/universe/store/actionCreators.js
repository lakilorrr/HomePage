import { getAPODUrl } from '../../../service/apod'
import * as actionTypes from './constants'

export const getImgAction = () => async dispatch => {
    try {
        const res = await getAPODUrl()
        dispatch({
            type: actionTypes.CHANGE_NASAAPI,
            nasa: res
        })
    } catch (err) {
        console.log(err)
    }
}
