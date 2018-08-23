import { getSearchedCharacters } from "../services/characters-services";
import {searchCharacters} from "../shared/constants-action-names"

export const searchCharactersAction = (inputValue) => {
    return {
        type: searchCharacters,
        payload: getSearchedCharacters(inputValue)
    }
}