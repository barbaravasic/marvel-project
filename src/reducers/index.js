import {combineReducers} from 'redux';
import { searchCharactersReducer } from './searched-characters-reducer';
import { listViewReducer } from './list-view-reducer';
import { bookmarkCharacterReducer } from './bookmarked-character-reducer';
import { loadingReducer } from './loading-reducer';


const allReducers = combineReducers({
    searchedCharacters: searchCharactersReducer,
    listView:listViewReducer,
    bookmarkedCharacters:bookmarkCharacterReducer,
    loading:loadingReducer
})

export default allReducers;