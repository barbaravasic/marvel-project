import { changeViewMode } from "../shared/constants-action-names";

export const changeViewAction = (currentView) => {
    const newView = !currentView;
    
    return {
        type: changeViewMode,
        payload: newView
    }
}