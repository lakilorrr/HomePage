import { combineReducers } from 'redux-immutable'
import headerReducer from '../component/header-new/store/reducer'
import musicReducer from '../page/music/store/reducer'
import uniReducer from '../page/universe/store/reducer'
import moyuReducer from '../page/moyu/store/reducer'
import dicReducer from '../page/dictionary/store/reducer'

export default combineReducers({
    header: headerReducer,
    universe: uniReducer,
    music: musicReducer,
    moyu: moyuReducer,
    dic: dicReducer
})
