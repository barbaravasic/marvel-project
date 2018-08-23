import { changeViewMode } from "../shared/constants-action-names";
import {saveToStorage} from '../services/storage-services'

export const listViewReducer = (state = false, action) => {
    switch (action.type) {
        case changeViewMode:
        state = action.payload;
        saveToStorage("listView", state);
            break;
    }
    return state;
}