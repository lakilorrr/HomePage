import * as actionTypes from './constants';
import getWeather from '../../../service/weather'
export const changeMusicSearch = (musicInput) => 
    dispatch => dispatch({
        type: actionTypes.CHANGE_MUSIC_SEARCH,
        musicSearch: musicInput
    })
export const changeDicQuery = (dicInput) => 
    dispatch => dispatch({
        type: actionTypes.CHANGE_DIC_QUERY,
        dicQuery: dicInput
    })

export const getWeatherSuggestion = () => 
    dispatch => {
        getWeather().then(res => {
            dispatch({
                type: actionTypes.CHANGE_WEATHER_SUGGESTION,
                suggestion: res.data.result.forecast_keypoint
            })
        })
    }