import { changeViewMode } from "../shared/constants-action-names";

export const gridViewReducer = (state = true, action) => {
    switch (action.type) {
        case changeViewMode:
            state = action.payload;
            break;
        default:
            state = true;
    }
    return state;
}