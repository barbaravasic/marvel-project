import { removeFromBookmark } from "../shared/constants-action-names";

export const removeFromBookmarkAction = (character) => {
    character.bookmarked = false;
    return {
        type: removeFromBookmark,
        payload: character
    }
}