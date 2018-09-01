import { bookmarkCharacter } from "../shared/constants-action-names";

export const bookmarkCharacterAction = (character) => {
    return {
        type: bookmarkCharacter,
        payload: character
    }
}