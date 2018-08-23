import { changeViewMode } from "../shared/constants-action-names";

export const listViewReducer = (state = false, action) => {
    switch (action.type) {
        case changeViewMode:
            state = action.payload;
            break;
    }
    return state;
}