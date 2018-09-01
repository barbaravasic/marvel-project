import { removeFromBookmark } from "../shared/constants-action-names";

export const removeFromBookmarkAction = (character) => {
    return {
        type: removeFromBookmark,
        payload: character
    }
}