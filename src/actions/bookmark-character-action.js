import { bookmarkCharacter } from "../shared/constants-action-names";
import { getFromStorage, saveToStorage } from "../services/storage-services";

export const bookmarkCharacterAction = (character) => {
    return {
        type: bookmarkCharacter,
        payload: character
    }
}