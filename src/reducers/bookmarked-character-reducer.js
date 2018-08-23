import { bookmarkCharacter } from '../shared/constants-action-names';
import { saveToStorage } from '../services/storage-services';

export const bookmarkCharacterReducer = (state = [], action) => {
    switch (action.type) {
        case bookmarkCharacter:
            state = [...state, action.payload];
            saveToStorage("bookmarkedCharacters", state)
            break;
    }

    return state;
}