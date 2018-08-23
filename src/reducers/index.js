import {combineReducers} from 'redux';
import { searchCharactersReducer } from './searched-characters-reducer';
import { gridViewReducer } from './grid-view-reducer';


const allReducers = combineReducers({
    searchedCharacters: searchCharactersReducer,
    gridView:gridViewReducer
})

export default allReducers;