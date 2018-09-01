import { changeViewMode } from "../shared/constants-action-names";

export const changeViewAction = (currentView) => {
    return {
        type: changeViewMode,
        payload: currentView
    }
}