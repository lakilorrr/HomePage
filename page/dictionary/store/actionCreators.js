import { getVol } from '../../../service/dic'
import * as actionTypes from './constants'

export const getVolAction =
    (category = 'All', word) =>
    async dispatch => {
        try {
            const res = await getVol(category, word)
            dispatch({
                type: actionTypes.CHANGE_VOL,
                vol: res.data.result.sentences
            })
        } catch (err) {
            console.log(err)
        }
    }
