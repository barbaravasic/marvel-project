import {combineReducers} from 'redux';
import { searchCharactersReducer } from './searched-characters-reducer';


const allReducers = combineReducers({
    searchedCharacters: searchCharactersReducer
})

export default allReducers;