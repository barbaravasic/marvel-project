import { searchCharactersPending, searchCharactersFulfilled } from "../shared/constants-action-names";

export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case searchCharactersPending:
            state = true;
            break;
        case searchCharactersFulfilled:
            state = false;
            break;
    }
    return state;
}

