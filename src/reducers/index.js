import {combineReducers} from 'redux';
import { searchCharactersReducer } from './searched-characters-reducer';
import { listViewReducer } from './grid-view-reducer';


const allReducers = combineReducers({
    searchedCharacters: searchCharactersReducer,
    listView:listViewReducer
})

export default allReducers;