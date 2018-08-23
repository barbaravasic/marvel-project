import { searchCharacters } from "../shared/constants-action-names";

export const searchCharactersReducer = (state = null, action) => {
    switch (action.type) {
        case searchCharacters:
            state = action.payload;
            break;
        default:
            state = null;
    }
    return state;
}