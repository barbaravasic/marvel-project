import { bookmarkCharacter } from "../shared/constants-action-names";

export const bookmarkCharacterAction = (character) => {
    character.bookmarked = true;
    return {
        type: bookmarkCharacter,
        payload: character
    }
}