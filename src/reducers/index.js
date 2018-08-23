import {combineReducers} from 'redux';
import { searchCharactersReducer } from './searched-characters-reducer';
import { listViewReducer } from './list-view-reducer';
import { bookmarkCharacterReducer } from './bookmarked-character-reducer';


const allReducers = combineReducers({
    searchedCharacters: searchCharactersReducer,
    listView:listViewReducer,
    bookmarkedCharacters:bookmarkCharacterReducer
})

export default allReducers;