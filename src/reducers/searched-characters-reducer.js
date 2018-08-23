import { searchCharactersFulfilled } from "../shared/constants-action-names";

export const searchCharactersReducer = (state = null, action) => {
    switch (action.type) {
        case searchCharactersFulfilled:
            state = action.payload;
            break;
        default:
            state = null;
    }
    return state;
}