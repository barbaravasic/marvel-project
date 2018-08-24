import { bookmarkCharacter, searchCharactersFulfilled, removeFromBookmark } from '../shared/constants-action-names';
import { getFromStorage } from '../services/storage-services';

const bookmarkedCharacters = getFromStorage("bookmarkedCharacters");

export const bookmarkCharacterReducer = (state = bookmarkedCharacters, action) => {
    switch (action.type) {
        case bookmarkCharacter:
            if (state.find(character => character.id === action.payload.id) === undefined) {
                state = [...state, action.payload];
            }
            break;
        case searchCharactersFulfilled:
            if (bookmarkedCharacters) {
                state = bookmarkedCharacters
            } else {
                state = [];
            }
            break;
        case removeFromBookmark:
            state = state.filter(character => character.id !== action.payload.id);
            break;
    }

    return state;
}