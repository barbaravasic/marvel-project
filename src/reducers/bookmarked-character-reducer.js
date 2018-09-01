import { bookmarkCharacter, searchCharactersFulfilled, removeFromBookmark, searchCharacters } from '../shared/constants-action-names';
import { getFromStorage, saveToStorage } from '../services/storage-services';


export const bookmarkCharacterReducer = (state, action) => {
    const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");
    state = bookmarkedCharacters || [];
    switch (action.type) {
        case bookmarkCharacter:
            if (state.find(character => character.id === action.payload.id) === undefined) {
                action.payload.bookmarked = true;
                state = [...state, action.payload];
            }
            break;
        case searchCharactersFulfilled:
            if (bookmarkedCharacters && bookmarkedCharacters.length !== 0) {
                state = bookmarkedCharacters
            } else {
                state = [];
            }
            break;
        case removeFromBookmark:
            state = state.filter(character => {
                action.payload.bookmarked = false
               return character.id !== action.payload.id
            });
            break;
    }

    return state;
}