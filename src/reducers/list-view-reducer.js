import { changeViewMode } from "../shared/constants-action-names";

export const listViewReducer = (state = true, action) => {
    switch (action.type) {
        case changeViewMode:
        state = !action.payload;
            break;
    }
    return state;
}