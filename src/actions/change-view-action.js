import { changeViewMode } from "../shared/constants-action-names";
import { saveToStorage } from "../services/storage-services";

export const changeViewAction = (currentView) => {
    const newView = !currentView;
    saveToStorage("listView", newView);
    
    return {
        type: changeViewMode,
        payload: newView
    }
}