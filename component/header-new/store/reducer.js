import { Map } from "immutable";
import * as actionTypes from './constants';

const initialState = Map({
  musicSearch: '',
  dicQuery: 'fun',
  suggestion:''
});

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_MUSIC_SEARCH:
      return state.set('musicSearch', action.musicSearch);
    case actionTypes.CHANGE_DIC_QUERY:
      return state.set('dicQuery', action.dicQuery);
    case actionTypes.CHANGE_WEATHER_SUGGESTION:
      return state.set('suggestion', action.suggestion);
    default:
      return state;
  }
};
export default headerReducer
