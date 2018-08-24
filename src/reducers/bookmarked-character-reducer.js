import { bookmarkCharacter } from '../shared/constants-action-names';

export const bookmarkCharacterReducer = (state = [], action) => {
    switch (action.type) {
        case bookmarkCharacter:
        if(state.find(character => character.id === action.payload.id)=== undefined) {
            state = [...state, action.payload];
            break;
        }
    }

    return state;
}