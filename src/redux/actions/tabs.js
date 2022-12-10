import { SET_ACTIVE_TAB } from "../constants"

export const setActiveTab = (activeTab) => {
    return {
        type:SET_ACTIVE_TAB,
        activeTab
    }
}