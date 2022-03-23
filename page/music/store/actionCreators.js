import * as actionTypes from './constants'
import { getSearchResult, getTopList } from '../../../service/music'
export const getSearchResultAction = query => async dispatch => {
    try {
        if (query) {
            const res = await getSearchResult(query)
            dispatch({
                type: actionTypes.CHANGE_SEARCH_RESULT,
                searchResult: res.data.result.songs
            })
        }
    } catch (err) {
        console.log(err)
    }
}
export const getTopListAction = () => async dispatch => {
    try {
        const res = await getTopList()
        dispatch({
            type: actionTypes.CHANGE_TOPLIST,
            topList: res.data.playlist.tracks.slice(0, 25)
        })
    } catch (err) {
        console.log(err)
    }
}

export const changeCurrentSongIdx = id => dispatch =>
    dispatch({
        type: actionTypes.CHANGE_CURRENT_SONG_ID,
        songId: id
    })
